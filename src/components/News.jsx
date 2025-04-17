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
            loading: false,
            page: 1,
            pageSize: 8
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${this.state.page}&pageSize=8`
        // Replace with your API
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let parsedData = await response.json();
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
        }
        catch (error) {
            console.error("Error fetching news:", error);
        }
    }
    HandlePrev = async () => {
        console.log("handle prev");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${this.state.page}&pageSize=8`
        let response = await fetch(url);
        let parsedData = await response.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    HandleNext = async () => {
        console.log("handle Next");
        if ( this.state.page + 1 > Math.ceil (this.state.totalResults/`${this.state.pageSize}`)) {
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${this.state.page}&pageSize=8` 
        let response = await fetch(url);
        let parsedData = await response.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
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
                                desc={element.description ? element.description.slice(0, 50) : "..."}
                                url={element.url} />
                        </div>
                    })}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-start">
                            <Button title="&larr; Previous" onClick={this.HandlePrev} disabled={this.state.page <= 1} />
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <Button title="Next &rarr;" onClick={this.HandleNext} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
