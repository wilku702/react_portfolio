/**
 * View Transitions API utility functions
 * Provides smooth page transitions using the native browser API
 */

/**
 * Check if View Transitions API is supported
 */
export const supportsViewTransitions = () => {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
};

/**
 * Execute a view transition
 * @param {Function} updateCallback - Function to execute during transition
 * @param {string} direction - Direction of transition ('forward' or 'back')
 */
export const executeViewTransition = async (updateCallback, direction = 'forward') => {
  if (!supportsViewTransitions()) {
    await updateCallback();
    return;
  }

  // Add direction class for CSS transitions
  document.documentElement.classList.add(`transition-${direction}`);

  const transition = document.startViewTransition(async () => {
    await updateCallback();
  });

  try {
    await transition.finished;
  } finally {
    document.documentElement.classList.remove(`transition-${direction}`);
  }
};

/**
 * Navigate with view transition
 * @param {Function} navigate - React Router navigate function
 * @param {string} path - Path to navigate to
 * @param {string} direction - Direction of transition
 */
export const navigateWithTransition = (navigate, path, direction = 'forward') => {
  executeViewTransition(() => {
    navigate(path);
  }, direction);
};
