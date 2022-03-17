import React from 'react';
import * as Home from './Home';
import * as AboutMe from './AboutMe';
import * as ContactMe from './ContactMe';
import * as Blog from './Blog';

export default [
    { page: 'Home', import: Home, path: Home.path},
    { page: 'About Me', import: AboutMe, path: AboutMe.path},
    { page: 'Contact', import: ContactMe, path: ContactMe.path},
    { page: 'Blog', import: Blog, path: Blog.path}
]
