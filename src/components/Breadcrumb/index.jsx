import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Breadcrumbs({ crumbs }) {
  const lastCrumb = (index) => index === crumbs.length - 1;

  return (
    <ol className="flex px-8 py-4 mt-6 w-min rounded-lg shadow mx-auto">
      {crumbs.map((crumb, idx) => {
        const disabledCrumb = lastCrumb(idx);
        return (
          <li key={crumb.name} className="w-max">
            <Link to={crumb.path}>
              <button
                disabled={disabledCrumb}
                className={`w-max disabled:cursor-not-allowed ${
                  disabledCrumb ? 'text-gray-400' : 'text-blue'
                }`}
              >
                {crumb.name}
              </button>
            </Link>
            <span className="mx-4 text-18">{!disabledCrumb && '/'}</span>
          </li>
        );
      })}
    </ol>
  );
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.string.isRequired,
};

export default Breadcrumbs;
