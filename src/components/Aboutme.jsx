import React from 'react';
import { Link  } from 'react-scroll';

function Aboutme() {
    return (
        <div className='aboutme'id='aboutme'>
            <div className="card">
              <div className="card-header">
                About me
              </div>
              <div className="card-body">
                <p className="card-text">I have finished my study " Arabic language and its literuature" in my country.<br/>
                  I have been living in Netherlands for 6 years. Recently I moved to Rotterdam .<br/>
                  When I came to here, I have started to search about somethings new to learn.<br/>
                  I tried diferent things and as latest I have followed web development course.<br/>
                  I found it very intresting and decided to continue further in this field.<br/>
                  Personly, I am a happy person and I like to meet new people.<br/>
                  I would always like to learn new things to develop myself.</p>
                  <br/><br/><br/>
                  
                <Link className='btn btn-primary' style={{color:'blue'}} to = 'header' smooth={true} duration={1000} >Go back </Link>
              </div>
            </div> 
        </div>
    )
}

export default Aboutme
