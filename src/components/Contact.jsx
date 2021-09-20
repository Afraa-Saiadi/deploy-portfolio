import React from 'react';
import { Link  } from 'react-scroll';
import emailjs from 'emailjs-com';
import  {useState} from 'react';
import{ init } from 'emailjs-com';
init("user_4qjYRanrTtQF6runVuvqE");


function Contact() {
    const [message , setMessage]= useState(false)
    const handelSubmit=(e)=>{
        
        e.preventDefault()
        setMessage(true)
    }

        function sendEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_7wl09o5', 'template_4xn1h1r', e.target, 'user_4qjYRanrTtQF6runVuvqE')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
             e.target.reset()
            }
    return (
        <div className='contact'>
            
            <div className="card">
                <div className="card-header">
                   Contact
                </div>
                <div className="card-body"id='card-body'style={{display:'flex',justifyContent:'space-between'}}>
                    <div className="card-body-left"style={{ display:'inline-block', width:'45%',padding:'2%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                        <h5 className="card-title"style={{paddingBottom:'5%'}}>Email: emsham1@outlook.com</h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <h5 className="card-title"style={{paddingBottom:'5%'}}>Tel: +31 6 84394625</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                        <h5 className="card-title"style={{paddingBottom:'5%'}}>Address: The Netherlands, Rotterdam</h5>
                    </div>
                    <div className="card-body-right"style={{ display:'inline-block', width:'45%',padding:'2%'}}>
                        <form onSubmit={handelSubmit,sendEmail}>
                            <div className="mb-3">
                                <label  className="form-label">Subject</label>
                                <input type="text" className="form-control"  name='subject'/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" name='name'/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Message</label>
                                <textarea type="text" className="form-control" name='message'/>
                            </div>
                            <button type="submit" className="btn btn-success" style={{backgroundColor:'gray'}}>Send</button>
                            {message && message&&<b style={{color:'black',fontSize:'20px'}}>Thank you I will reply ASAP</b> }
                        </form>
        </div>
                <Link className='btn btn-primary' style={{color:'blue'}} to = 'header' smooth={true} duration={1000} >Go back </Link>
            </div>
            </div> 
            
        </div>
    )
}

export default Contact
