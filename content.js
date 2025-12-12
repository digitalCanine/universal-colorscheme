// Check if current site is blocked
const currentDomain = window.location.hostname;

// Wait for storage to be available
function initColorscheme() {
  browser.storage.sync.get(['colorscheme', 'blockedSites']).then((data) => {
    const blockedSites = data.blockedSites || [];

    // Don't apply if site is blocked
    if (blockedSites.includes(currentDomain)) {
      return;
    }

    const colorscheme = data.colorscheme || {
      bg: '#141414',
      text: '#feffd3',
      link: '#afb979',
      visited: '#b4be7b',
      accent1: '#c06c43',
      accent2: '#c2a86c',
      accent3: '#778284',
      accent4: '#444649'
    };

    applyColorscheme(colorscheme);
  }).catch((err) => {
    console.log('Using default colorscheme');
    const colorscheme = {
      bg: '#141414',
      text: '#feffd3',
      link: '#afb979',
      visited: '#b4be7b',
      accent1: '#c06c43',
      accent2: '#c2a86c',
      accent3: '#778284',
      accent4: '#444649'
    };
    applyColorscheme(colorscheme);
  });
}

function applyColorscheme(colors) {
  const style = document.createElement('style');
  style.id = 'universal-colorscheme-override';

  const bgLight = lightenColor(colors.bg, 8);
  const bgLighter = lightenColor(colors.bg, 15);

  style.textContent = `
    /* Base page colors */
    html {
      background-color: ${colors.bg} !important;
    }
    
    body {
      background-color: ${colors.bg} !important;
      color: ${colors.text} !important;
    }
    
    /* Google Search specific - exact class names from the HTML */
    .RNNXgb,
    .RNNXgb:hover,
    .sbfc .RNNXgb,
    .sbfc .RNNXgb:hover,
    .emcav .RNNXgb,
    .BgPPrc .RNNXgb,
    .emcav .RNNXgb:hover,
    .sbfc.emcav .RNNXgb,
    .BgPPrc .RNNXgb:hover {
      background: ${bgLight} !important;
      background-color: ${bgLight} !important;
      border-color: ${colors.accent4} !important;
    }
    
    .a4bIc,
    .gLFyf,
    textarea.gLFyf,
    .YacQv,
    .SDkEP {
      background-color: ${bgLight} !important;
    }
    
    .gLFyf,
    textarea.gLFyf {
      color: ${colors.text} !important;
    }
    
    .M8H8pb {
      background-color: ${bgLight} !important;
    }
    
    /* Search suggestions and dropdown */
    .aajZCb,
    .UUbT9,
    .erkvQe,
    .sbsb_a,
    .sbsb_c {
      background: ${bgLighter} !important;
      background-color: ${bgLighter} !important;
    }
    
    .wM6W7d,
    .ClJ9Yb {
      color: ${colors.text} !important;
    }
    
    /* Text elements - only if they don't have inline styles */
    p:not([style*="color"]), 
    h1:not([style*="color"]), 
    h2:not([style*="color"]), 
    h3:not([style*="color"]), 
    h4:not([style*="color"]), 
    h5:not([style*="color"]), 
    h6:not([style*="color"]),
    span:not([style*="color"]):not([class*="icon"]):not([class*="Icon"]):not([role="img"]),
    li:not([style*="color"]), 
    dt:not([style*="color"]), 
    dd:not([style*="color"]), 
    label:not([style*="color"]), 
    legend:not([style*="color"]),
    blockquote:not([style*="color"]), 
    cite:not([style*="color"]), 
    q:not([style*="color"]) {
      color: ${colors.text} !important;
    }
    
    /* Links */
    a:not([class*="button"]):not([class*="btn"]):not([role="button"]):not([style*="color"]) {
      color: ${colors.link} !important;
    }
    
    a:visited:not([class*="button"]):not([class*="btn"]):not([style*="color"]) {
      color: ${colors.visited} !important;
    }
    
    a:hover:not([class*="button"]):not([class*="btn"]) {
      color: ${colors.accent1} !important;
    }
    
    /* Form inputs - basic ones only */
    input[type="text"]:not([style]):not([class*="search"]):not([id*="search"]),
    input[type="email"]:not([style]),
    input[type="password"]:not([style]),
    input[type="url"]:not([style]),
    input[type="tel"]:not([style]),
    input[type="number"]:not([style]),
    textarea:not([style]):not([class*="comment"]):not([id*="comment"]),
    select:not([style]) {
      background-color: ${bgLight} !important;
      color: ${colors.text} !important;
      border-color: ${colors.accent4} !important;
    }
    
    input:focus, textarea:focus, select:focus {
      border-color: ${colors.accent2} !important;
      outline-color: ${colors.accent2} !important;
    }
    
    input::placeholder, textarea::placeholder {
      color: ${colors.accent3} !important;
      opacity: 0.7 !important;
    }
    
    /* Checkboxes and radios */
    input[type="checkbox"], input[type="radio"] {
      accent-color: ${colors.accent1} !important;
    }
    
    /* Code blocks */
    pre:not([style*="background"]), 
    code:not([style*="background"]), 
    kbd:not([style*="background"]) {
      background-color: ${bgLighter} !important;
      color: ${colors.accent1} !important;
      border-color: ${colors.accent4} !important;
    }
    
    /* Tables - only unstyled ones */
    table:not([style*="background"]) {
      border-color: ${colors.accent4} !important;
    }
    
    thead:not([style*="background"]), 
    th:not([style*="background"]) {
      background-color: ${bgLight} !important;
      color: ${colors.text} !important;
      border-color: ${colors.accent4} !important;
    }
    
    tbody tr:nth-child(even):not([style*="background"]) {
      background-color: ${bgLight} !important;
    }
    
    td:not([style*="color"]), 
    th:not([style*="color"]) {
      color: ${colors.text} !important;
    }
    
    /* Blockquotes */
    blockquote:not([style*="background"]) {
      background-color: ${bgLight} !important;
      border-left-color: ${colors.accent2} !important;
    }
    
    /* Horizontal rules */
    hr {
      border-color: ${colors.accent4} !important;
    }
    
    /* Selection */
    ::selection {
      background-color: ${colors.accent2} !important;
      color: ${colors.bg} !important;
    }
    
    ::-moz-selection {
      background-color: ${colors.accent2} !important;
      color: ${colors.bg} !important;
    }
    
    /* Scrollbars */
    ::-webkit-scrollbar {
      background-color: ${colors.bg} !important;
    }
    
    ::-webkit-scrollbar-track {
      background-color: ${bgLight} !important;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.accent4} !important;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${colors.accent3} !important;
    }
  `;

  const oldStyle = document.getElementById('universal-colorscheme-override');
  if (oldStyle) {
    oldStyle.remove();
  }

  const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
  if (head) {
    head.appendChild(style);
  }
}

function lightenColor(hex, percent) {
  const rgb = hexToRgb(hex);
  const adjust = (val) => {
    const adjusted = Math.round(val + (percent / 100 * 255));
    return Math.max(0, Math.min(255, adjusted));
  };

  const r = adjust(rgb.r);
  const g = adjust(rgb.g);
  const b = adjust(rgb.b);

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 20, g: 20, b: 20 };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initColorscheme);
} else {
  initColorscheme();
}

browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && (changes.colorscheme || changes.blockedSites)) {
    initColorscheme();
  }
});
