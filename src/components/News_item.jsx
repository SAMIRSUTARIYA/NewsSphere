import React, { Component } from 'react'

export default class News_item extends Component {
  render() {
    let { title, desc, imgurl, url } = this.props
    return (
      <div className="card mb-3">
        <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF_JvujHrMJmNAznyhlReM9gbm7SbFDgoKg&s":imgurl} className="card-img-top img-fluid w-100 h-100" style={{ minHeight:'150px' , maxHeight: '170px' }}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} target='_blank' className="btn btn-primary">Read-more</a>
        </div>
      </div>
    )
  }
}
