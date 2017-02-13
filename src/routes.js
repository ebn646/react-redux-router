import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PosteIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//App needs to render Greeting
//when we difine nested routes greeting is passed to App as a child
export default
(
  <Route path="/" component={App}>
    <IndexRoute component={PosteIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

//this.props.params.id
