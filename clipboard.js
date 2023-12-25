    // Initialize Clipboard.js
    var clipboard = new ClipboardJS('.copy-button');

    // Handle success event
    clipboard.on('success', function(e) {
        console.log('Copied to clipboard: ', e.text);
        e.clearSelection(); // Clear the text selection after copying
    });

    // Handle error event
    clipboard.on('error', function(e) {
        console.error('Error copying to clipboard: ', e.text);
    });