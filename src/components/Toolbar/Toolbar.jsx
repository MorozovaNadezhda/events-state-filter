import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className='filters'>
      {filters &&
        filters.map((filter) => {
          const classname =
            filter === selected
              ? 'filters__btn filters__btn_active'
              : 'filters__btn';
          return (
            <button
              onClick={() => onSelectFilter(filter)}
              className={classname}
            >
              {filter}
            </button>
          );
        })}
    </div>
  );
};

export default Toolbar;
