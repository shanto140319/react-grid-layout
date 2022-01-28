import React, { useState } from 'react'
import Search from './components/Search'
import interceptor from './api/interceptor'
import ImageList from './components/ImageList'

function App() {
  const [images, setImages] = React.useState([])
  const [loading, setloading] = React.useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1000)
  const [search, setSearch] = useState('')

  //handling submit button
  const handleSubmit = async (value) => {
    setloading(true)
    setSearch(value)
    const res = await interceptor.get('/search/photos', {
      params: { query: value, page: 1 },
    })
    setImages(res.data.results)
    setTotalPage(res.data.total_pages)
    setloading(false)
  }

  const loadmore = React.useCallback(() => {
    if (!loading) {
      setloading(true)
      setPage((oldPage) => {
        return oldPage + 1
      })
      interceptor
        .get('/search/photos', {
          params: { query: search, page },
        })
        .then((res) => {
          setloading(false)
          setImages((oldImage) => {
            return [...oldImage, ...res.data.results]
          })
        })
        .catch((err) => {
          setloading(false)
          console.log(err)
        })
    }
  }, [page, loading])

  return (
    <div className='section app'>
      <Search onSubmit={handleSubmit} />
      <ImageList
        onLoadMore={loadmore}
        images={images}
        loading={loading}
        page={page}
        totalPage={totalPage}
      />
    </div>
  )
}

export default App
