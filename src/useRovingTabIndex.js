import { useState } from 'react';

export default function useRovingTabIndex(initialIndex = 0) {
  const [tabIndex, setTabIndex] = useState(initialIndex);

  function getFocusableChildren(target) {
    return Array.from(target.querySelectorAll('[tabindex]'));
  }

  function handleKeyDown(e) {
    const children = getFocusableChildren(e.currentTarget);
    const activeIndex = children.findIndex((el) => el.tabIndex === 0);
    let newActiveIndex = activeIndex;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        newActiveIndex = Math.min(activeIndex + 1, children.length - 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newActiveIndex = Math.max(activeIndex - 1, 0);
        break;
      default:
        break;
    }

    if (newActiveIndex !== activeIndex) {
      setTabIndex(newActiveIndex);
    }
  }

  return [tabIndex, handleKeyDown];
}
