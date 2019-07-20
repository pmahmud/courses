import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <div>
            <h1>Hello world!</h1>
            <ul>
                <li><Link className={headerStyles.link} to="/">home</Link></li>
                <li><Link className={headerStyles.link} to="/blog">blog</Link></li>
                <li><Link className={headerStyles.link} to="/about">about</Link></li>
                <li><Link className={headerStyles.link} to="/contact">contact</Link></li>
            </ul>
            <hr />
        </div>
    );
}

export default Header;