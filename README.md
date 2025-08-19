# Stock Tab Manager

A Chrome extension that instantly opens multiple stock research pages in organized tab groups, streamlining financial analysis and research workflows.

## Features

- **One-Click Stock Research**: Enter any stock ticker and instantly open popular financial websites
- **Organized Tab Groups**: All tabs are automatically grouped with the ticker symbol as the title
- **Keyboard Shortcut**: Quick access with `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac)
- **Auto-Focus Input**: Start typing immediately when the popup opens
- **Clean Interface**: Modern, professional design optimized for quick use

## Supported Financial Websites

The extension opens the following sites for comprehensive stock analysis:

- **Morningstar** - Detailed company analysis and ratings
- **Bastter** - Brazilian market analysis (REIT & Stock pages)
- **Finviz** - Visual stock screener and charts
- **Yahoo Finance** - Real-time quotes and news
- **Seeking Alpha** - Investment research and analysis
- **MarketWatch** - Market news and data
- **Google Finance** - Stock quotes and basic financials

## Installation

### From Source (Developer Mode)

1. Clone this repository:

   ```bash
   git clone https://github.com/bernardopacheco/stock-tab-manager.git
   cd stock-tab-manager
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in top-right corner)

4. Click "Load unpacked" and select the project directory

5. The extension will appear in your browser toolbar

### Setting up Keyboard Shortcut

The extension comes with a default keyboard shortcut (`Ctrl+Shift+S`), but you can customize it:

1. Go to `chrome://extensions/shortcuts`
2. Find "Stock Tab Manager"
3. Set your preferred shortcut combination

## Usage

### Basic Usage

1. Click the extension icon in your browser toolbar
2. Enter a stock ticker symbol (e.g., "AAPL", "TSLA", "GOOGL")
3. Press Enter or click "Open Pages"
4. All research pages will open in a new tab group

### Keyboard Shortcut

1. Press `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac) anywhere in Chrome
2. Enter the ticker symbol in the popup
3. Press Enter to open all research pages

## Development

### Project Structure

```
stock-tab-manager/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup interface
├── popup.js              # Popup logic and tab management
├── background.js         # Background service worker
├── icons/                # Extension icons (16px, 32px, 48px, 128px)
└── README.md            # This file
```

### Building

No build process required. The extension runs directly from source files.

### Testing

1. Load the extension in developer mode
2. Test the popup interface
3. Test the keyboard shortcut
4. Verify tab grouping functionality
5. Check that all financial websites load correctly

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more financial websites
- Implement custom website lists
- Add support for different markets (non-US stocks)
- Create options page for customization
- Add stock price display in popup
- Implement recently used tickers

## Permissions

The extension requires these Chrome permissions:

- `tabs`: To create and manage browser tabs
- `tabGroups`: To organize tabs into groups

## Privacy

This extension:

- ✅ Does not collect any personal data
- ✅ Does not track browsing history
- ✅ Does not send data to external servers
- ✅ Only accesses tab management APIs
- ✅ Works entirely offline (except for opening websites)

## Version History

### v1.1

- Added keyboard shortcut support
- Improved popup styling
- Added auto-focus to input field
- Enhanced user experience

### v1.0

- Initial release
- Basic stock tab opening functionality
- Tab grouping feature

## License

MIT License - see LICENSE.md file for details

## Support

If you encounter issues or have suggestions:

1. Check existing [GitHub Issues](https://github.com/bernardopacheco/stock-tab-manager/issues)
2. Create a new issue with detailed information
3. Include your Chrome version and operating system

---

**Disclaimer**: This extension is for informational purposes only and should not be considered as financial advice. Always conduct your own research before making investment decisions.
