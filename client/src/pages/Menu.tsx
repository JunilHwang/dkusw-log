import React, { Component } from 'react';
import { FaListUl, FaSchool, FaFlag, FaTags } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import { IMenuStore } from 'store/MenuStore';

type Props = {
  menuStore?: IMenuStore
}
@inject('menuStore')
@observer
export default class Menu extends Component<Props> {
  render() {
    const { category, selected} = this.props.menuStore!
    const isSelect = (sel: string) => selected === sel ? 'active' : ''
    return (
      <aside className="site-aside">
        <h3 className="site-logo"><Link to="/">DKU.SW.LOG</Link></h3>
        <nav className="site-navigation">
          <ul className="site-navigation__menu">
            <li>
              <NavLink to="/posts/all" activeClassName="active">
                <FaListUl /> ALL
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="active">
                <FaSchool /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts/notice" activeClassName="active">
                <FaFlag /> Notice
              </NavLink>
            </li>
            <li>
              <NavLink to="/tag" activeClassName="active">
                <FaTags /> Tag
              </NavLink>
            </li>
          </ul>
          <ul className="site-navigation__category">
            {
              category.map((v, k) =>  (
                <li key={k}>
                  <NavLink to={v.url} className={isSelect(v.title)}>{v.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
      </aside>
    );
  }
}