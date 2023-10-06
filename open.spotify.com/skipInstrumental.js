document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver((mutationsList) => {
      for(let mutation of mutationsList) {
          if(mutation.type === 'childList') {
              checkAndSkip();
              break;
          }
      }
  });

  function checkAndSkip() {
      const titleElement = document.querySelector('a[data-testid="context-item-link"]');
      if (titleElement && titleElement.textContent.match(/instrumental/i)) {
          const skipButton = document.querySelector('button[data-testid="control-button-skip-forward"]');
          if (skipButton)  {
              skipButton.click();
          }
      }
  }

  const targetNode = document.querySelector('body');
  if (targetNode) {
      const config = { childList: true, subtree: true };
      observer.observe(targetNode, config);
  }

  checkAndSkip();
});