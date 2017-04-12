import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Main from './components/Main';
import Video from './components/Video';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Main} />
        <Route path="/video" component={Video} />
        <Route path="*" component={Main} />
    </Route>
);
