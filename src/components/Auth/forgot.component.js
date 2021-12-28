// This component is for resetting a password
import React ,{Component} from 'react';
import axios from 'axios'

export  class Forgot extends Component {
    state = {}
    handleSubmit = e => {
        e.preventDefault()
    
    const data = {
        email:this.email
    };

    
    axios.post('auth/password/request',data).then (
        res =>{
            this.setState({
                message:res.data.message,
                cls : 'success'
            })
        }).catch(
            err => {
                this.setState({
                    message:err.response.data.errors,
                    cls : 'danger'
                })
            }
        )
    }
    render(){
    let message = ''
    if (this.state.message){
        const cls = 'alert alert-'+this.state.cls
       message = (
           <div className={cls} role='alert'>
               {this.state.message}
           </div>
       )
    }
        return(
            <form onSubmit={this.handleSubmit}>
            <h3>Forgot Password</h3>
                 {message}
            <div className='form-group' >
                <label>Email</label>
                <input type='email'  className='form-control' placeholder='email'
                onChange={e => this.email = e.target.value} />
            </div>
           
            
            <button className='btn btn-primary btn-block'>Submit</button>
      </form>
        )
    }
    
}
