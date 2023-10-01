// All Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoader", () => {
  // We have some window and Node.js access here to do stuff on the initial load
});


// THIS is just to satify TypeScript error
export {}
