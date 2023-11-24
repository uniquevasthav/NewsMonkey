import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {

    let {title,description,imgurl,newsUrl,author,date,source}= this.props;

    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
  </span>
          <img src={!imgurl?"https://images.barrons.com/im-822056/social":imgurl} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{title} </h5>
         <p className="card-text">{description}...</p>
         <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
       </div>
     </div>
      </div>
    )
  }
}
export default NewsItem;