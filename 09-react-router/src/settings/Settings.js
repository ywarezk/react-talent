import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import UserSettings from './UserSettings';
import DashboardSettings from './DashboardSettings';

export default function Settings(props) {
    const {match} = props;
    
    return (
        <div>
            <h1>This is shared in parent</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`${match.url}/user`}>User</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/dashboard`}>Dashboard</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route component={UserSettings} path={`${match.url}/user`} />
                <Route component={DashboardSettings} path={`${match.url}/dashboard`} />
                <Redirect to={`${match.url}/user`} />
            </Switch>

        </div>
    );
}