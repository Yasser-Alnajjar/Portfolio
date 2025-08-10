export const useLoader = () => {
  const showLoader = () => {
    if (typeof window !== 'undefined') {
      const loaders = document.getElementsByClassName('loader');
      if (loaders.length > 0) {
        const loader = loaders[0] as HTMLElement;
        loader.classList.remove('hide-loader');
        loader.classList.add('show-loader');
      }
    }
  };

  const hideLoader = () => {
    if (typeof window !== 'undefined') {
      const loaders = document.getElementsByClassName('loader');
      if (loaders.length > 0) {
        const loader = loaders[0] as HTMLElement;
        loader.classList.add('hide-loader');
        loader.classList.remove('show-loader');
      }
    }
  };

  return { showLoader, hideLoader };
};
