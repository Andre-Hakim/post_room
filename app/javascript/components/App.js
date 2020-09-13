import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Post from './Posts/Posts'


const App = () => {
    return (
        <Route exact path="/" component={Post}/>
    );
}

export default App