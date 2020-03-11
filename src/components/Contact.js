import React from 'react';
import {  faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'

class Contact extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
        
      }

      
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  

 render(){
    var styles = {
        backgroundColor: 'white',
}
var styless={
  
    center: {
        marginLeft: "50",
        marginRight: "50"
      }

}

    return (
        <div className="contact" style={styles}>
            <h1 align="center" style ={{marginTop : 50, marginBottom : 30}}>Let's Get In Touch!</h1>                  
            <div className="App " style={styless} >       
                <form id="contact-form form-inline" style={{width:"500px", align:"center" ,marginLeft:"30%"}} onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                     <label htmlFor="name">Name</label>
                        <input type="text" align="center" className="form-control" id="name" value={this.state.name} onChange={()=>this.onNameChange()} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" align="center" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={()=>this.onEmailChange()} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" align="center" value={this.state.message} onChange={()=>this.onMessageChange()} />
                    </div>
                    <button type="submit" style= {{marginLeft:"45%"}} className="btn btn-primary">Submit</button>
                </form>
  	        </div>
            <div className="row row-no-gutters">
            <div class="col-sm-6" align="center"><FontAwesomeIcon icon={faMailBulk} />
                : timeforhosting@gmail.com </div>
             <div class="col-sm-6" align="center
             " ><FontAwesomeIcon icon={faPhone} />
                : +91-8826264775</div>

            {/* <h4 className="col-sm-3" > <FontAwesomeIcon icon={faMailBulk} />
                : timeforhosting@gmail.com 
                
                <h4 className="col-sm-6" ><FontAwesomeIcon icon={faPhone} />
                : +91-8826264775
                </h4>
               
                </h4>  */}
            </div>
        </div>
       

    );
            }
}



export default Contact ;
