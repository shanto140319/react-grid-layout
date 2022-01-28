import React from 'react'
import { Waypoint } from 'react-waypoint'
import SingleImage from './SingleImage'

const ImageList = ({ images, loading, onLoadMore, totalPage, page }) => {
  const containerRef = React.createRef()
  const contents = images
    ? images.sort((a, b) => (a.position > b.position ? 1 : -1))
    : []

  return (
    <>
      <div className='images-container' ref={containerRef}>
        {contents?.map((img, i) => (
          <React.Fragment key={i}>
            <SingleImage regular={img} />
            {i === images?.length - 2 && totalPage > page && (
              <Waypoint onEnter={onLoadMore} />
            )}
          </React.Fragment>
        ))}
      </div>
      {loading && <div class='loader'></div>}
    </>
  )
}

export default ImageList
