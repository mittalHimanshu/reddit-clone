import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsername, getPosts } from '../actions/postAction'

class Form extends Component{

    handleSubmit = e => {
        e.preventDefault()
        this.props.getPosts(this.props.details['username'])
    }

    handleInput = e => {
        this.props.getUsername(e.target.value)
    }

    render(){
        return(
            <form className="form-signin">
                <h1 className="h3 mb-3 text-primary font-weight-bold" style={{textTransform: 'uppercase'}}>Enter Username</h1>
                <input type="text" onChange={this.handleInput} className="form-control" placeholder="Reddit Username" required autoFocus />
                <div className="checkbox mb-3" />
                <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    details: state.details.details
})

export default connect(mapStateToProps, { getUsername, getPosts }) (Form)