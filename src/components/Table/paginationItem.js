import React from 'react';

function PaginationItem({ children, onClick, className = '', ...rest }) {
  return (
    <a
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      href="/"
      className={`pagination-item${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export default PaginationItem;
