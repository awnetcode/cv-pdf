import React from 'react';

import './styles/sidebarSection.css';

const SidebarSection = ({content}) => {
  return (
    <div className="sidebar-section">
      {content}
    </div>
  )
}

export default SidebarSection