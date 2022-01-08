import { useState } from 'react';

export default function useRovingTabIndex(initialIndex = 0) {
  const [tabIndex, setTabIndex] = useState(initialIndex);

  function clamp(index, children) {
    return Math.min(Math.max(index, 0), children.length - 1);
  }

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
        newActiveIndex++;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        newActiveIndex--;
        break;
      default:
        break;
    }

    setTabIndex(clamp(newActiveIndex, children));
  }

  function handleClick(e) {
    const target = e.target.closest('[tabindex]');
    if (!target) {
      return;
    }

    const children = getFocusableChildren(e.currentTarget);
    let newActiveIndex = children.findIndex((el) => el === target);
    setTabIndex(clamp(newActiveIndex, children));
  }

  return [tabIndex, handleKeyDown, handleClick];
}
