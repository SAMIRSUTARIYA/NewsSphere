import React, { Component } from 'react'
import News_item from './News_item'

export default class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <div className='row'>
                    <div className="col-md-3">
                        <News_item/>
                    </div>
                    <div className="col-md-3">
                        <News_item/>
                    </div>
                    <div className="col-md-3">
                        <News_item/>
                    </div>
                </div>
            </div>
        )
    }
}
