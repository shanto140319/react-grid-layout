import React from 'react'

const Search = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(searchValue)
  }
  return (
    <form style={{ display: 'flex', gap: 20 }} onSubmit={handleSubmit}>
      <div className='ui  icon input'>
        <i className='search icon'></i>
        <input
          type='text'
          placeholder='Search...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button className='ui button' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Search
