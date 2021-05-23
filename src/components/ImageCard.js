import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { span: 0 }
    this.imageRef = React.createRef()
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan)
  }

  setSpan = () => {
    let span = Math.ceil(this.imageRef.current.clientHeight / 10) + 1
    this.setState({ span })
  }

  render() {
    const { urls, description } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    )
  }
}

export default ImageCard
