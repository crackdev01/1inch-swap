import { useState } from 'react';

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const show = () => {
    setIsShowing(true);
  };

  const close = () => {
    setIsShowing(false);
  };

  return {
    isShowing,
    show,
    close,
  };
};
