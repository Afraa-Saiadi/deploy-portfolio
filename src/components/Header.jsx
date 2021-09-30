import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link  } from 'react-scroll';
import  background from '../rotterdam.jpg';




export default function Header() {
   
    return (
        <div className='header'id='header' style={{  backgroundImage:`url(${background})`,backgroundSize:'100% 100%'}} >
            <div>
                
                <nav style={{display:'flex', justifyContent:'left'}}>
                    <div class="container-fluid">
                        <Link id='nav1' className='btn btn-primary1' style={{color:'white'}} to = 'aboutme' smooth={true} duration={1000} >About me </Link>
                        <Link id='nav2' className='btn btn-primary1' style={{color:'white'}} to = 'education' smooth={true} duration={1000} >Education </Link>
                        <Link id='nav2' className='btn btn-primary1' style={{color:'white'}} to = 'skills' smooth={true} duration={1000} >Skills </Link>
                        <Link id='nav3' className='btn btn-primary1' style={{color:'white'}} to = 'experience' smooth={true} duration={1000} >Experience</Link>
                        <Link id='nav4' className='btn btn-primary1' style={{color:'white'}} to = 'projects' smooth={true} duration={1000} >Projects </Link>
                        <Link id='nav5' className='btn btn-primary1' style={{color:'white'}} to = 'contact' smooth={true} duration={1000} >Contact </Link>
                    </div>
                </nav>
                    <div  style={{textAlign:'center' ,font:'50px Arial sans-serif', color:'white',marginTop:'200px' }}>
                      <h1>  Afraa Saiadi<br/><span>Web</span> <span className='slow'>Developer</span><br/></h1>
                        <a  target='_blank' href ='Afraa Saiadi CV NL 1.pdf' download>Download cv</a>
                    </div>
                    <div style={{marginTop:'30px' , textAlign:'center'}}>
                        <SocialIcon url="https://github.com/Afraa-Saiadi" />
                        <SocialIcon url='https://www.linkedin.com/feed/'/>
                    </div>


                </div>

            
        </div>
    )
}

