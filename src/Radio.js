import './Radio.css';
import React, { useEffect, useRef } from 'react';

function Radio({ label, focusable }) {
  const ref = useRef(null);

  useEffect(() => {
    if (focusable) {
      ref.current.focus();
    }
  }, [focusable]);

  return (
    <div
      className="Radio"
      role="radio"
      aria-checked={focusable}
      tabIndex={focusable ? 0 : -1}
      ref={ref}
    >
      {label}
    </div>
  );
}

export default Radio;
