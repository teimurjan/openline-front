import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({className, children, activeIndex}) => (
  <div className={className}>
    {React.Children.map(children, child => React.cloneElement(child, {
      activeIndex: activeIndex,
    }))}
  </div>
);
Tabs.propTypes = {
  activeIndex: PropTypes.number.isRequired,
};

const TabTitles = ({children, activeIndex, className, onChange, activeClassName}) => (
  <ul className={className}>
    {React.Children.map(children, (child, index) => {
      let isActive = index === activeIndex;
      return React.cloneElement(child, {
        isActive,
        activeClassName,
        onClick: onChange ?
          () => onChange(index) :
          () => false
      })
    })}
  </ul>
);
TabTitles.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  activeClassName: PropTypes.string,
};

TabTitles.defaultProps = {
  className: '',
  activeClassName: '',
};

const TabTitle = ({isActive, className, onClick, children, activeClassName}) => {
  return (
    <span onClick={onClick} className={`${className}${isActive ? activeClassName : ''}`}>
      {children}
    </span>);
};
TabTitle.propTypes = {
  className: PropTypes.string,
};

TabTitle.defaultProps = {
  className: '',
};

const TabContents = ({activeIndex, children, className}) => {
  const childrenArr = React.Children.toArray(children);
  let content = childrenArr.length > activeIndex ? childrenArr[activeIndex] : false;
  return (
    <div className={className}>
      {content}
    </div>
  );
};
TabContents.propTypes = {
  className: PropTypes.string
};
TabTitle.defaultProps = {
  className: ''
};

export {Tabs, TabTitle, TabTitles, TabContents};
