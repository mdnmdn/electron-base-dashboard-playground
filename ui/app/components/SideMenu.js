import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const routes = [{
  icon: 'fa fa-home',
  label: 'home',
  path: '/',
  exact: true,
},{
  icon: 'fa fa-user',
  label: 'Test',
  path: '/test',  
}];

const SideMenu = ({ match }) => {  
  console.log(match);
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">
            MAIN NAVIGATION
          </li>
          {routes.map( (r, idx) => {
            const className = match.path === r.path ? 'active':'';

            return (<li key={idx} className={className}>
              <NavLink to={r.path}>
                <i className={r.icon} />
                <span>{r.label}</span>
              </NavLink>
            </li>);
          })}
        </ul>
      </section>
    </aside>
  );
};

export default withRouter(SideMenu);
