import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: "Matthew Sullivan",
      title: "Mitch Marsh’s rogue gesture stuns cricket",
      description: "That could have looked a whole lot worse.",
      url: "https://www.news.com.au/sport/cricket/mitch-marshs-rogue-gesture-in-cricket-world-cup-final-is-as-alpha-as-it-gets/news-story/79c39140b7b31eed8931f4becabea316",
      urlToImage:
        "https://content.api.news/v3/images/bin/1a80b27f58c34bbd71af89a4d7693744",
      publishedAt: "2023-11-20T02:24:00Z",
      content:
        "That could have looked a whole lot worse.\r\nMitch Marsh has shown just how relaxed the Aussies were during their thrilling six-wicket win over India in the Cricket World Cup final.\r\nMarsh made a run-a… [+2210 chars]",
    },
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: null,
      title: "‘Have dignity’: Act ends Cup with sour taste",
      description:
        "The Cricket World Cup has ended with a sour taste with a storm erupting around Australia’s celebrations.",
      url: "https://www.news.com.au/sport/cricket/show-dignity-crowd-act-ends-world-cup-with-sour-taste/news-story/5f93e1c0fe2273e9a05c2d009f748a32",
      urlToImage:
        "https://content.api.news/v3/images/bin/8e91a06b303b92c3cd0cd2463b64faa7",
      publishedAt: "2023-11-19T23:04:00Z",
      content:
        "The Cricket World Cup has ended with a sour taste with a storm erupting around Australia’s celebrations. \r\nCricket commentators have been left angry by the response from spectators inside the colossa… [+3292 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Australia beat India to win their sixth Cricket World Cup",
      description:
        "Watch highlights as Australia beat India by six-wickets in the Cricket World Cup final in Ahmedabad to claim their sixth World Cup title.",
      url: "http://www.bbc.co.uk/sport/av/cricket/67468936",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/9A84/production/_131765593_p0gtp0f9.jpg",
      publishedAt: "2023-11-19T19:37:16.7083813Z",
      content:
        "'Race away, but don't crash' - new Brawn F1 doc. Video, 00:02:05'Race away, but don't crash' - new Brawn F1 doc",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Jack Cunningham",
      title:
        "Travis Head stuns over 100,000 India cricket fans with excellent century as Australia close on World Cup...",
      description:
        "Travis Head stunned over 100,000 Indian cricket fans with an excellent century in the World Cup final. The Australian batter became just the third Aussie to score a 100 in a World Cup final as Aust…",
      url: "https://talksport.com/sport/1646913/travis-head-century-cricket-world-cup-final-india-australia/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2023/11/Travis-Head.jpg?strip=all&quality=100&w=1142&h=793&crop=1",
      publishedAt: "2023-11-19T15:37:14Z",
      content:
        "Travis Head stunned over 100,000 Indian cricket fans with an excellent century in the World Cup final.\r\nThe Australian batter became just the third Aussie to score a 100 in a World Cup final as Austr… [+823 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Head's unbeaten 50 puts Australia in strong position",
      description:
        "Watch the best shots from Travis Head's unbeaten 50 for Australia against India in the Cricket World Cup final in Ahmedabad.",
      url: "http://www.bbc.co.uk/sport/av/cricket/67467650",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/180FC/production/_131765589_p0gtnnpn.jpg",
      publishedAt: "2023-11-19T15:07:18.490014Z",
      content:
        "Watch the best shots from Travis Head's unbeaten 50 for Australia against India in the Cricket World Cup final in Ahmedabad. \r\nFOLLOW: India v Australia \r\nAvailable to UK users only.",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Kevin Hand, Hafsa Adil, Rohan Sharma",
      title:
        "India vs Australia: ICC Cricket World Cup 2023 final – as it happened",
      description:
        "All the updates as Australia upset hosts India by six wickets to win the Cricket World Cup in Ahmedabad.",
      url: "http://www.aljazeera.com/sports/liveblog/2023/11/19/live-india-vs-australia-icc-cricket-world-cup-2023-final",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-19T165916Z_681108936_UP1EJBJ1B6PVQ_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1700413267.jpg?resize=1920%2C1440",
      publishedAt: "2023-11-19T05:28:28Z",
      content:
        "All the updates as Australia upset hosts India by six wickets to win the Cricket World Cup in Ahmedabad.",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
 capitalizeFirstLetter=(string)=>{
   return string.charAt(0).toUpperCase() + string.slice(1);
 }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346e84e704eb4f72af0e793de3b1df9f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    {
      /* let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346e84e704eb4f72af0e793de3b1df9f&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading : true})
    let data = await fetch(url)
    let parsedData= await data.json()
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })*/
    }
    this.updateNews();
  }
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      {
        /*let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346e84e704eb4f72af0e793de3b1df9f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let data = await fetch(url)
    let parsedData= await data.json()
    this.setState({
      articles : parsedData.articles,
      page : this.state.page + 1,
      loading : false
    })*/
      }
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
    }
  };

  handlePrevClick = async () => {
    {
      /*let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346e84e704eb4f72af0e793de3b1df9f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading : true})
    let data = await fetch(url)
    let parsedData= await data.json()
    this.setState({
      articles : parsedData.articles,
      page : this.state.page - 1,
      loading : false
    })*/
    }
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  fetchMoreData=async()=>{
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=346e84e704eb4f72af0e793de3b1df9f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center">NewsMonkey - {this.capitalizeFirstLetter(this.props.category)} Top Headlines</h1>
       {/* {this.state.loading && <Spinner />}*/}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">

        
        <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.id}
                  />
                </div>
              );
            })}

          {/*
        <div className='col-md-4'>
        <NewsItem title="MYTITLE" description="mydesc"/>
        </div>

        <div className='col-md-4'>
        <NewsItem title="MYTITLE" description="mydesc"/>
        </div>
         */}
        </div>
        </div>
        </InfiniteScroll>
       {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>*/}
      </>
    );
  }
}
export default News;
