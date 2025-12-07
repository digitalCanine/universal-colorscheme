// Sync color picker with hex input
function setupColorSync(colorId, hexId) {
  const colorInput = document.getElementById(colorId);
  const hexInput = document.getElementById(hexId);

  colorInput.addEventListener('input', (e) => {
    hexInput.value = e.target.value;
  });

  hexInput.addEventListener('input', (e) => {
    const hex = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      colorInput.value = hex;
    }
  });
}

// Setup all color syncs
setupColorSync('bgColor', 'bgColorHex');
setupColorSync('textColor', 'textColorHex');
setupColorSync('linkColor', 'linkColorHex');
setupColorSync('visitedColor', 'visitedColorHex');
setupColorSync('accent1', 'accent1Hex');
setupColorSync('accent2', 'accent2Hex');
setupColorSync('accent3', 'accent3Hex');
setupColorSync('accent4', 'accent4Hex');

// Load saved settings
browser.storage.sync.get(['colorscheme', 'blockedSites']).then((data) => {
  if (data.colorscheme) {
    document.getElementById('bgColor').value = data.colorscheme.bg;
    document.getElementById('bgColorHex').value = data.colorscheme.bg;
    document.getElementById('textColor').value = data.colorscheme.text;
    document.getElementById('textColorHex').value = data.colorscheme.text;
    document.getElementById('linkColor').value = data.colorscheme.link;
    document.getElementById('linkColorHex').value = data.colorscheme.link;
    document.getElementById('visitedColor').value = data.colorscheme.visited;
    document.getElementById('visitedColorHex').value = data.colorscheme.visited;
    document.getElementById('accent1').value = data.colorscheme.accent1;
    document.getElementById('accent1Hex').value = data.colorscheme.accent1;
    document.getElementById('accent2').value = data.colorscheme.accent2;
    document.getElementById('accent2Hex').value = data.colorscheme.accent2;
    document.getElementById('accent3').value = data.colorscheme.accent3;
    document.getElementById('accent3Hex').value = data.colorscheme.accent3;
    document.getElementById('accent4').value = data.colorscheme.accent4;
    document.getElementById('accent4Hex').value = data.colorscheme.accent4;
  }

  // Check if current site is blocked
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const url = new URL(tabs[0].url);
    const domain = url.hostname;
    const blockedSites = data.blockedSites || [];

    if (blockedSites.includes(domain)) {
      document.getElementById('blockedIndicator').style.display = 'block';
      document.getElementById('blockBtn').textContent = 'Unblock This Site';
    }
  });
});

// Save settings
document.getElementById('saveBtn').addEventListener('click', () => {
  const colorscheme = {
    bg: document.getElementById('bgColor').value,
    text: document.getElementById('textColor').value,
    link: document.getElementById('linkColor').value,
    visited: document.getElementById('visitedColor').value,
    accent1: document.getElementById('accent1').value,
    accent2: document.getElementById('accent2').value,
    accent3: document.getElementById('accent3').value,
    accent4: document.getElementById('accent4').value
  };

  browser.storage.sync.set({ colorscheme }).then(() => {
    // Reload all tabs to apply changes
    browser.tabs.query({}).then((tabs) => {
      tabs.forEach((tab) => {
        if (tab.url.startsWith('http')) {
          browser.tabs.reload(tab.id);
        }
      });
    });

    const status = document.getElementById('status');
    status.textContent = 'Saved! Reloading pages...';
    status.style.display = 'block';
    setTimeout(() => {
      status.style.display = 'none';
    }, 2000);
  });
});

// Block/unblock site
document.getElementById('blockBtn').addEventListener('click', () => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const url = new URL(tabs[0].url);
    const domain = url.hostname;

    browser.storage.sync.get(['blockedSites']).then((data) => {
      let blockedSites = data.blockedSites || [];

      if (blockedSites.includes(domain)) {
        // Unblock
        blockedSites = blockedSites.filter(d => d !== domain);
        document.getElementById('blockedIndicator').style.display = 'none';
        document.getElementById('blockBtn').textContent = 'Block This Site';
      } else {
        // Block
        blockedSites.push(domain);
        document.getElementById('blockedIndicator').style.display = 'block';
        document.getElementById('blockBtn').textContent = 'Unblock This Site';
      }

      browser.storage.sync.set({ blockedSites }).then(() => {
        browser.tabs.reload(tabs[0].id);

        const status = document.getElementById('status');
        status.textContent = 'Updated! Reloading page...';
        status.style.display = 'block';
        setTimeout(() => {
          status.style.display = 'none';
        }, 2000);
      });
    });
  });
});
