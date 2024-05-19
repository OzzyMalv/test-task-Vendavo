export const debounce = (func, wait = 500) => {
  let timeout;

  function debounced(...args) {
    const later = () => {
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  debounced.immediateCall = (...args) => {
    clearTimeout(timeout);
    func(...args);
  };

  return debounced;
};
