# Universal Colorscheme

Apply your custom terminal colorscheme to websites. Perfect for users who want their browser to match their terminal aesthetic.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- 🎨 **Customizable Color Palette** - Set background, text, link, and accent colors
- 🖥️ **Terminal-Inspired** - Designed for users who live in the terminal
- 🚫 **Per-Site Blocking** - Easily exclude sites that don't render well
- 💾 **Persistent Settings** - Your colors sync across Firefox instances
- 🌙 **Works Best with Dark Reader** - Pairs perfectly with Dark Reader for complete dark mode

## Examples

<table>
  <tr>
    <td><img width="460" height="260" src="https://github.com/user-attachments/assets/ab2d257b-fa7f-4d1f-b9c1-7dfe4a0f0c00" alt="image1" /></td>
    <td><img width="460" height="260" src="https://github.com/user-attachments/assets/431b4017-542a-4924-94a1-5c35ad0fae45" alt="image2" /></td>
  </tr>
  <tr>
    <td><img width="460" height="260" src="https://github.com/user-attachments/assets/69e47498-bd4b-48c0-a2c0-775bab7d9329" alt="image3" /></td>
    <td><img width="460" height="260" src="https://github.com/user-attachments/assets/ed287d26-c531-4a05-ad50-ad1e7a5cbaf2" alt="image4" /></td>
  </tr>
</table>

## Installation

### From Mozilla Add-ons (Recommended)

https://addons.mozilla.org/en-CA/firefox/addon/dc-universal-colorscheme/

### Manual Installation

1. Download the latest release from [Releases](../../releases)
2. Open Firefox and go to `about:addons`
3. Click the gear icon → "Install Add-on From File"
4. Select the downloaded `.xpi` file

Note that this release is my own private version for now

### Development Installation

1. Clone this repository
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" → "Load Temporary Add-on"
4. Select the `manifest.json` file from the cloned directory

## Usage

### Basic Setup

1. Click the extension icon in your toolbar
2. Customize your colors using the color pickers or hex inputs
3. Click "Save & Apply"
4. All pages will reload with your colorscheme

### Recommended Setup (Best Results)

Dark Reader is optional, but the current code for the add-on  may cause issues with light themed websites. It is recommended that you install and use Dark Reader for best results for the current time.

1. Install [Dark Reader](https://addons.mozilla.org/firefox/addon/darkreader/)
2. Enable Dark Reader to force dark mode on all sites
3. Use Universal Colorscheme to apply your custom terminal colors

This combination gives you:

- Dark Reader handles the dark mode conversion
- Universal Colorscheme applies your personalized color palette

### Blocking Sites

Some sites may not render correctly with custom colors:

1. Navigate to the problematic site
2. Click the extension icon
3. Click "Block/Unblock This Site"
4. The page will reload with original styling

## Default Color Scheme

The extension comes with a terminal-inspired color scheme:

```
Background:      #141414
Foreground:      #feffd3
Link:            #afb979
Visited Link:    #b4be7b
Accent 1:        #c06c43
Accent 2:        #c2a86c
Accent 3:        #778284
Accent 4:        #444649
```

## How It Works

Universal Colorscheme applies CSS overrides to websites to match your chosen color palette. It targets:

- Page backgrounds and text
- Links (normal, visited, hover states)
- Form inputs
- Code blocks
- Tables and blockquotes
- Scrollbars and text selection

The extension is designed to be **non-invasive** - it avoids styling:

- Buttons and UI widgets
- Video players and media
- Icons and logos
- Elements with inline styles (to preserve site functionality)

## Limitations

- **Works best on text-heavy sites** (blogs, documentation, articles)
- **Some complex web apps** may not render perfectly (use the block feature)
- **Light-themed sites** may require Dark Reader for full dark mode
- **Inline styles** are preserved to avoid breaking functionality

## Development

### Project Structure

```
universal-colorscheme/
├── manifest.json       # Extension manifest
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic and settings
├── content.js         # Content script for CSS injection
├── icon.png           # Extension icon
└── README.md          # This file
```

### Building

No build process required! This is vanilla JavaScript.

To package for distribution:

```bash
zip -r universal-colorscheme.zip manifest.json popup.html popup.js content.js icon.png
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Privacy

This extension:

- ✅ **Does NOT collect any personal data**
- ✅ **Does NOT track your browsing**
- ✅ **Does NOT send data to external servers**
- ✅ **Only stores your color preferences locally**

All data stays on your device and is synced through Firefox Sync if enabled.

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

- Inspired by terminal color schemes and Dark Reader
- Built for the terminal enthusiast community
- Thanks to all contributors and users

## Support

- 🐛 **Found a bug?** [Open an issue](../../issues)
- 💡 **Have a suggestion?** [Open an issue](../../issues)
- ⭐ **Like this extension?** Star this repo!

## Roadmap

- [ ] Import/export color schemes
- [ ] Preset terminal themes (Gruvbox, Nord, Dracula, etc.)
- [ ] Per-site custom colors
- [ ] Advanced CSS customization options
- [ ] Integration with system theme

---

Made with ❤️ for terminal lovers everywhere
