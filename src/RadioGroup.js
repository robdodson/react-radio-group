import React from 'react';
import useRovingTabIndex from './useRovingTabIndex';

function RadioGroup(props) {
  const [tabIndex, handleKeyDown] = useRovingTabIndex(0);

  const { children: childrenProp } = props;
  const children = React.Children.map(childrenProp, (child, i) => {
    return React.cloneElement(child, { focusable: tabIndex === i });
  });

  return (
    <div className="RadioGroup" role="radiogroup" onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
}

export default RadioGroup;
