import React from 'react';
import { Link  } from 'react-scroll';

function Skills() {
    return (
        <div className='skills' id='skills'>
            <div className="card">
              <div className="card-header">
              Professional Skills
              </div>
              <div class="container">
                  <div class="row">
                    <div class="col">
                        
                    <h6>HTML/CSS</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>75%</div>
                    </div>
                    <h6>VANILLA JAVASCRIPT</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>70%</div>
                    </div>
                    <h6>SCRUM FRAMEWORK</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>75%</div>
                    </div>
                    <h6>REACTJS</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>70%</div>
                    </div>
                    <h6>NODEJS/EXPRESS</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>60%</div>
                    </div>
                    <h6>MONGODB</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>60%</div>
                    </div>
                    <h6>WORDPRESS</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>70%</div>
                    </div>
                    </div>
                    <div class="col">
                    <h6>BASIC PYTHON/DJANGO</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>20%</div>
                    </div>
                    <h6>BOOTSTRAP/MATERIALIZE</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>80%</div>
                    </div>
                    <h6>BASIC JAVASCRIPT ES5</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>60%</div>
                    </div>
                    <h6>JQUERY/AJAX</h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>60%</div>
                    </div>
                    </div>
                    
                    
                    </div>
                    <Link className='btn btn-primary' style={{color:'blue'}} to = 'header' smooth={true} duration={1000} >Go back </Link>
                  </div>
                  </div>
                  
                
              </div>
            
        
    )
}

export default Skills