import React from "react";

class ReadContent extends React.Component{
    render(){
      return(
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </article>
      )
    }
  }

  export default ReadContent;