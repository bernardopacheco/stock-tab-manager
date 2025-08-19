const openStockTabs = async () => {
  const ticker = document.getElementById("ticker").value.trim().toUpperCase();
  if (!ticker) return;

  const urls = [
    `https://www.morningstar.com/stocks/xnys/${ticker}/quote`,
    `https://bastter.com/mercado/reit/${ticker}`,
    `https://finviz.com/quote.ashx?t=${ticker}`,
    `https://finance.yahoo.com/quote/${ticker}`,
    `https://seekingalpha.com/symbol/${ticker}`,
    `https://www.marketwatch.com/investing/stock/${ticker}`,
    `https://www.google.com/finance/quote/${ticker}:NYSE`,
  ];

  const tabPromises = urls.map((url) =>
    chrome.tabs.create({ url, active: false })
  );
  const tabs = await Promise.all(tabPromises);
  const tabIds = tabs.map((tab) => tab.id);

  const groupId = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(groupId, {
    title: ticker,
    color: "blue",
  });

  chrome.tabs.update(tabIds[0], { active: true });
};

document.getElementById("openBtn").addEventListener("click", openStockTabs);
document.getElementById("ticker").addEventListener("keypress", (e) => {
  if (e.key === "Enter") openStockTabs();
});

// Auto-focus the input field when popup opens
document.getElementById("ticker").focus();
