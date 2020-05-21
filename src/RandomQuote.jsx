import React, { Component } from "react";
import axios from "axios";
import "./fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then(res => {
      var data = res.data.quotes;
      let quoteNumber = Math.floor(Math.random() * data.length);
      let randomQuote = data[quoteNumber];

      this.setState({
        quote: randomQuote.quote,
        author: randomQuote.author
      });
    });
  }

  getNewQuote = () => this.getQuote();

  render() {
    const { quote, author } = this.state;
    return (
      <div id="wrapper">
        <div id="quote-box">
          <h1 className="title">Quote Generator</h1>
          <div id="text">
            <p>
              <FontAwesomeIcon
                style={{ fontSize: 18 }}
                icon={["fas", "quote-left"]}
              />
              <span>&nbsp;</span>
              {quote}
            </p>
          </div>
          <div id="author">
            <h4>~{author}</h4>
          </div>
          <div id="buttons-div">
            <button id="tweet-btn" className="btn btn-outline-info">
              <a
                id="tweet-quote"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/intent/tweet"
              >
                <h5>
                  <span>&nbsp;</span>
                  <FontAwesomeIcon
                    style={{ fontSize: 27 }}
                    icon={["fab", "twitter"]}
                  />
                  Retweet
                </h5>
              </a>
            </button>
            <button
              className="btn btn-outline-primary"
              id="new-quote"
              onClick={this.getNewQuote}
            >
              <h5>New Quote</h5>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
