import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsername, getPosts } from '../actions/postAction'
import { withRouter } from 'react-router-dom'

class Form extends Component{

    handleSubmit = e => {
        e.preventDefault()
        this.props.getPosts(this.props.history, this.props.details['username'])
    }

    handleInput = e => {
        this.props.getUsername(e.target.value)
    }

    render(){
        return(
            <div className="container" style={{ maxWidth: '341px', marginTop: '150px' }}>
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">Enter Reddit Username</div>
                    <div className="card-body">
                        <form className="form-inline" style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <div className="form-group mx-sm-3">
                                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                <input type="text" onChange={this.handleInput} className="form-control" id="inputPassword2" placeholder="Username" required autoFocus />
                            </div>
                            <button type="submit" onClick={this.handleSubmit} className="btn btn-dark" style={{ marginTop: '23px' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.details.details
})

export default withRouter(connect(mapStateToProps, { getUsername, getPosts }) (Form))