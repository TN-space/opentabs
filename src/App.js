import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Header from './components/Header/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Search from './components/pages/Search'
import SearchData from './components/SearchData'

export const SearchContext = React.createContext()

function App() {

  const [searchInput, setSearchInput] = useState('')
  const [redirect, setRedirect] = useState(null)

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const getSearchResult = (event) => {
    event.preventDefault();

    let isSpaces = searchInput.split('').every((char) => char === ' ');
    // If user hasn't typed anything, don't let them hit enter and go to empty search result page
    if (searchInput === '') {
      setRedirect(null);
    } else if (isSpaces) {
      setRedirect(null);
    } else {
      setRedirect(`/search/${searchInput}`);
      event.target.reset()
    }
  }

  return (
    <Fragment>
      <SearchContext.Provider value={searchInput}>
        <Header />
        <Form onSubmit={getSearchResult}>
          <input type="text" onChange={handleChange} placeholder="search for breweries..."></input>
          <button type="submit">search</button>
        </Form>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search/:result" render={(props) => <SearchData {...props} />} />

          </Switch>
          {redirect ? <Redirect to={redirect} /> : null}
        </Router>

      </SearchContext.Provider>
    </Fragment>

  );
}

export default App;
