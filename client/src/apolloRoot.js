import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Nav from './components/navigation/nav'
import './styles/style.sass'
import Routes from './routes/routes'
import history from './history/history';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {
  BrowserRouter as Router,

} from "react-router-dom";


const client = new ApolloClient ({
  uri: 'http://localhost:5000/graphql',
})

function ApolloRoot () {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router history={history} >
          <Nav />
          <Routes />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default ApolloRoot;
