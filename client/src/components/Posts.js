import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
    render(){
        return(
          <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
              <a className="navbar-brand mr-auto mr-lg-0" href='/'>Subreddit</a>
              <button type="button" className="btn bg-dark btn-dark " style={{ position: 'absolute', right: 0, marginRight: '35px' }}>
                {this.props.details['username']}
              </button>
            </nav>
            <main role="main" className="container">
              <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Posts</h6>
                {this.props.details['posts'].map(post =>
                  <div key={post.data.id} className="media text-muted pt-3">
                    {post.data.thumbnail !== "" && post.data.thumbnail !== "self" ?
                      <img src={post.data.thumbnail} alt={post.data.author} className="mr-2 rounded" width={32} height={32} />
                    : null}
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"> <strong className="d-block text-gray-dark">{post.data.author}</strong> {post.data.title} </p>
                  </div>
                )}
              </div>
            </main>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.details.details
})

export default connect(mapStateToProps)(Posts)