import React, { Component } from 'react'
import News_item from './News_item'
import Button from './Button'

export default class News extends Component {
    render() {
        return (
            <div className="container my-3 mt-2">
                <h4>Top Headlines</h4>
                <div className='row'>
                    <div className="col-lg-3 col-md-4">
                        <News_item
                            imgurl=""
                            title="Three ways the Spring Statement could affect you and your money"
                            desc="While the Spring Statement focusses on the wider UK economy, it could have implications for your money." />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <News_item
                            imgurl=""
                            title="Three ways the Spring Statement could affect you and your money"
                            desc="While the Spring Statement focusses on the wider UK economy, it could have implications for your money." />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <News_item
                            imgurl=""
                            title="Three ways the Spring Statement could affect you and your money"
                            desc="While the Spring Statement focusses on the wider UK economy, it could have implications for your money." />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <News_item
                            imgurl=""
                            title="Three ways the Spring Statement could affect you and your money"
                            desc="While the Spring Statement focusses on the wider UK economy, it could have implications for your money." />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Button title="Previous" />
                        </div>
                        <div className="col-md-6 text-end">
                            <Button title="Next" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
