import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/"> Главная страница </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about"> О нас </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/contact"> Контакты </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/testing"> Тестовая страница </Link>
          </li>
        </ul>
      </nav>
    )
};

export default Navbar;



// error:
//const Navbar = () => {
//  return (
//        <nav>
//            <ul>
//                <li>
//                    <Link to="/"> Главная страница </Link>
//                </li>
//                </li>
//                <li>
//                    <Link to="/about"> О нас </Link>
//                </li>
//            </ul> 
//        </nav>;
//    )
//};


