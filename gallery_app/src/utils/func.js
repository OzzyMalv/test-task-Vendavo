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

export const saveRecentToLocalStorage = (albumId) => {
  const storedRecent = localStorage.getItem('recent');

  let recentSet;

  if (storedRecent) {
    recentSet = new Set(JSON.parse(storedRecent));
  } else {
    recentSet = new Set();
  }

  if (!recentSet.has(albumId)) {
    if (recentSet.size >= 20) {
      const recentArray = Array.from(recentSet);
      recentArray.shift();
      recentArray.push(albumId);
      recentSet = new Set(albumId);
    } else {
      recentSet.add(albumId);
    }
  }

  localStorage.setItem('recent', JSON.stringify(Array.from(recentSet)));
}
