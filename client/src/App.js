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
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import store from './store';

const client = new ApolloClient ({
  uri: 'http://localhost:5000/graphql',
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Provider store={store}>
            <Router history={history} >
              <Nav />
              <Routes />
            </Router>
        </Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
