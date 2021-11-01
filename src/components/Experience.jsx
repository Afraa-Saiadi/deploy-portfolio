import React from 'react';
import { Link  } from 'react-scroll';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Experience() {
    return (
        <div className='experience'>
            <Card className="card">
              <div className="card-header">
                Experience
              </div>
              <ul class="list-group list-group-flush">
                  <li className="list-group-item">
                      <h3>Interpreter at VluchtelingenWerk van het noorden in Groningen 2019</h3>
                  </li>
                  <li className="list-group-item">
                    <h3>Vrijwillegerswerk at peuterspeelzaal in Annen Drenthe 2017</h3>
                  </li>
                  <li className="list-group-item">
                  <h3> Freelance Docent Arabisch 2014-now</h3>
                  </li>
                  <li className="list-group-item">
                  <h3>Docent Arabisch at Ibrahim AL-Sawaf school in Syrie 2014-2015</h3>
                  </li>
                  
                  
              </ul>
                <Link className='btn btn-primary' style={{color:'blue'}} to = 'header' smooth={true} duration={1000} >Go back </Link>
              </Card>
            </div> 
        
    )
}

export default Experience
