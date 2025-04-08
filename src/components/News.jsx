import React, { Component } from 'react'
import News_item from './News_item'
import Button from './Button'

const apiKey = import.meta.env.VITE_API_KEY;
export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`; // Replace with your API
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let parsedData = await response.json();
            // console.log("Fetched Data:", parsedData);
            this.setState({ articles: parsedData.articles });
            } 
        catch (error) {
            console.error("Error fetching news:", error);
        }
    }

    render() {
        return (
            <div className="container my-3 mt-2">
                <h4>Top Headlines</h4>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-lg-3 col-md-4" key={element.url}>
                            <News_item
                                imgurl={element.urlToImage}
                                title={element.title}
                                desc={element.description}
                                url={element.url}/>
                        </div>
                    })}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-start">
                            <Button title="Previous" />
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <Button title="Next" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
