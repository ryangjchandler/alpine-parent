(() => {
  // src/index.js
  function src_default(Alpine) {
    Alpine.magic("parent", (el, {Alpine: Alpine2}) => {
      return Alpine2.mergeProxies(Alpine2.closestDataStack(el).slice(1));
    });
  }

  // builds/cdn.js
  document.addEventListener("alpine:initializing", () => {
    src_default(window.Alpine);
  });
})();
