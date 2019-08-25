import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <nav>
          <Link to={'/'}> Resume </Link>
          <Link to={'/about'}> About </Link>
        </nav>
    );
}