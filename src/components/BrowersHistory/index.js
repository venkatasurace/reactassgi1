import {Component} from 'react'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialHistory} = this.props
    const searchResults = initialHistory.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="History-nav-bar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-img"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-img"
              alt="search"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
            />
          </div>
          {/* <ul className="suggestions-list">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul> */}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
