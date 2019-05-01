import React, { Component } from 'react';
import { FaListUl, FaSchool, FaFlag, FaTags } from 'react-icons/fa';

export default class Menu extends Component {
  render() {
    return (
      <aside className="site-aside">
        <h3 className="site-logo"><a href="#">DKU.SW.LOG</a></h3>
        <nav className="site-navigation">
          <ul className="site-navigation__menu">
            <li><a href="#"><FaListUl /> ALL</a></li>
            <li><a href="#"><FaSchool /> About Us</a></li>
            <li><a href="#"><FaFlag /> Notice</a></li>
            <li><a href="#"><FaTags /> Tag</a></li>
          </ul>
          <ul className="site-navigation__category">
            <li><a href="#">Category1</a></li>
            <li><a href="#">Category2</a></li>
            <li><a href="#">Category3</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}