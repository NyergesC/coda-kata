import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/userstory1">User Story 1: Get Present</Link>
        </li>
        <li>
          <Link to="/userstory2">User Story 2: Santa Sleigh</Link>
        </li>
        <li>
          <Link to="/userstory3">User Story 3: Santa Sleigh</Link>
        </li>
        <li>
          <Link to="/userstory4">User Story 4: Santa Sleigh</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;