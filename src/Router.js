import React from 'react';
import { HashRouter as Router, Route, Switch, IndexRoute, Redirect } from 'react-router-dom';

import Common from '@/components/common'
import Evaluation from '@/components/evaluation'
import Protect from '@/components/protect'
import Skill from '@/components/skill'
import Index from '@/components/index'
import First from '@/components/first'
import Default from '@/components/default'

const BasicRoute = () => (
    <Router>
        <Redirect to={'/index'} />

        <Route path="/" component={Default} />

        <Route path="/first" component={First} />

        <Route path="/index" component={Index} />

        <Route path="/common" component={Common} />
        <Route path="/evaluation" component={Evaluation} />
        <Route path="/protect" component={Protect} />
        <Route path="/skill" component={Skill} />
    </Router>
);

export default BasicRoute;