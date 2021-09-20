import React from 'react';
import { Link  } from 'react-scroll';


function Projects() {
    return (
        <div className='projects'>
                <div id='pro' className='pro' className="card" style={{width: '30%',display:'inline-block',}}>
                    <img src='com.jpg' className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">GitHub using React<br/>A webpage application that have a github user's information using react</p>
                    </div>
                </div>
                <div id='pro1' className="card" style={{width: '30%',display:'inline-block'}}>
                    <img src="she.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Open Weather Map API<br/>A web page that give us the weather state in any city in the world that we want</p>
                    </div>
                </div>
                <div id='pro2' className="card" style={{width: '30%',display:'inline-block'}}>
                    <img src="com.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Master Matrix web community<br/>Front and back-end project where the users kan login and sing up and ask questions and comment on questions </p>
                    </div>
                    <Link className='btn btn-primary' style={{color:'blue'}} to = 'header' smooth={true} duration={1000} >Go back </Link>
                </div>
        </div>
    )
}

export default Projects

