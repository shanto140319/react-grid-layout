import React from 'react'

class SingleImage extends React.Component {
  constructor(props) {
    super(props)
    this.imgRef = React.createRef()
    this.state = {
      spans: 0,
    }
  }
  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpan)
  }
  setSpan = () => {
    const height = this.imgRef.current.clientHeight
    const spans = Math.ceil(height / 7) + 1

    this.setState({ spans })
  }
  render() {
    const { urls } = this.props.regular
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} src={urls.small} alt='' />
      </div>
    )
  }
}
export default SingleImage
