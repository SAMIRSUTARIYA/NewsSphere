import React, { Component } from 'react'

export default class News_item extends Component {
  render() {
    let {title, desc, imgurl, url} = this.props
    return (
      <div className="card mb-3">
        <img src={imgurl} className="card-img-top" alt="No-Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}
