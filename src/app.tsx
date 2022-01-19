import { FC, useContext, useState } from 'react'

import 'bulma/css/bulma.css'
import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager,
} from '@giphy/react-components'

const Search: FC = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext)

  const handleOnGifClick = (e) => {
    console.log(e)
  }

  return (
    <div style={{ maxWidth: '864px', margin: '0 auto' }}>
      <div className="hero">
        <div className="hero-body" style={{ padding: '3rem 0' }}>
          <h1 className="title">Search</h1>
          <p className="subtitle">Find the best GIFs</p>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '2em' }}>
          <SearchBar className="input" />
        </div>
        {searchKey && (
          <Grid
            key={searchKey}
            columns={3}
            width={864}
            fetchGifs={fetchGifs}
            noLink={true}
            onGifClick={handleOnGifClick}
          />
        )}
      </div>
    </div>
  )
}

export const App: FC = () => (
  <SearchContextManager apiKey="XKXUGCTNoJahg8cabKgUyOxI5rxdqan5">
    {/* TODO: Move API key to .env */}
    <Search />
  </SearchContextManager>
)
