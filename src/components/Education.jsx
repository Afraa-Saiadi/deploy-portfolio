// import React from 'react'

// function Education() {
//     return (
//         <div className='education'>
//             Education
//         </div>
//     )
// }

// export default Education

import React from 'react';
import { Link  } from 'react-scroll';

function Education() {
    return (
        <div className='education' >
            
            <div className="card">
              <div className="card-header">
                Education
              </div>
              <ul class="list-group list-group-flush">
                  <li className="list-group-item">
                  <h3>Full stack MERN program at Code Matrix Zone/ Rotterdam
                                2021</h3>
                                <p>A program of 5 months where we learn the basic of the most important things in the web development world.</p>
                  </li>
                  <li className="list-group-item">
                    <h3>Voeding en Dietetiek at Hanzehoogeschool/ Groningen 2018</h3>
                    <p>A bachelor degree study that i started but didn't finish</p>
                  </li>
                  <li className="list-group-item">
                  <h3> Interpreter at Vluchtelingenwerk van het noorden/ Groningen
                                   2019</h3>
                                <p>A training to become a translator for groups people who are new in  the Netherlands. </p> 
                  </li>
                  <li className="list-group-item">
                  <h3> Arabic language and literature at Al-Baath University /Syria
                                September 2009- 2014</h3>
                                <p>Arabic Language and Literature (My degree is evaluated by IDW and it is equivalent to bachelor degree in Arabic language and culture in the Netherlands.</p>
                  </li>
                  
                  
              </ul>
              
                <Link className='btn btn-primary' style={{color:'blue'}} to = 'header' smooth={true} duration={1000} >Go back </Link>
              
            
            </div>

        </div>
    )
}

export default Education

