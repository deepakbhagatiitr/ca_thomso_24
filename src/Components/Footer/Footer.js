import React, { useState } from 'react'
import './footer.css'
import UpArrow from '../Footer/Footer Images/uparrow.svg';
import DownArrow from '../Footer/Footer Images/downarrow.svg'
import Logo from './Footer Images/Logo.svg'
import facebook from './Footer Images/facebook.svg'
import facebookLite from './Footer Images/facebookLite.svg'
import insta from './Footer Images/insta.svg'
import instaLite from './Footer Images/instaLite.svg'
import twitter from './Footer Images/twitter.svg'
import twitterLite from './Footer Images/twitterLite.svg'
import linkedin from './Footer Images/linkedin.svg'
import linkedinLite from './Footer Images/linkedinLite.svg'
import youtube from './Footer Images/youtube.svg'
import youtubeLite from './Footer Images/youtubeLite.svg'


const Footer = () => {

  const [clicked, setClicked] = useState(true);
  const [change1, setChange1] = useState(true);
  const [change2, setChange2] = useState(true);
  const [change3, setChange3] = useState(true);
  const [change4, setChange4] = useState(true);
  const [change5, setChange5] = useState(true);
  

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClick1 = () => {
    setChange1(!change1);
  };
  const handleClick12 = () => {
    setChange1(!change1);
  };
  const handleClick2 = () => {
    setChange2(!change2);
  };
  const handleClick22 = () => {
    setChange2(!change2);
  };
  const handleClick3 = () => {
    setChange3(!change3);
  };
  const handleClick32 = () => {
    setChange3(!change3);
  };
  const handleClick4 = () => {
    setChange4(!change4);
  };
  const handleClick42 = () => {
    setChange4(!change4);
  };
  const handleClick5 = () => {
    setChange5(!change5);
  };
  const handleClick52 = () => {
    setChange5(!change5);
  };

  return (
    <div>
      <div className='footerBox'>
        <div className='footerBoxA'>
          <div className='footerSub1'>
             <button onMouseEnter={handleClick1} onMouseLeave={handleClick12}>
              {
                change1 ?
                <img src={facebook} className='footerSub1img1' alt="facebook"/>
                :
                <img src={facebookLite} className='footerSub1img1' alt="facebook"/>

              }
              </button>
             <button onMouseEnter={handleClick2} onMouseLeave={handleClick22}>
             {
                change2 ?
                <img src={insta} className='footerSub1img2' alt="facebook"/>
                :
                <img src={instaLite} className='footerSub1img2' alt="facebook"/>

              }
              </button>
             <button onMouseEnter={handleClick3} onMouseLeave={handleClick32}>
             {
                change3 ?
                <img src={twitter} className='footerSub1img3' alt="facebook"/>
                :
                <img src={twitterLite} className='footerSub1img3' alt="facebook"/>

              }
              </button>
             <button onMouseEnter={handleClick4} onMouseLeave={handleClick42}>
             {
                change4 ?
                <img src={linkedin} className='footerSub1img4' alt="flinkedin"/>
                :
                <img src={linkedinLite} className='footerSub1img4' alt="flinkedin"/>

              }
              </button>
             <button onMouseEnter={handleClick5} onMouseLeave={handleClick52}>
             {
                change5 ?
                <img src={youtube} className='footerSub1img3' alt="fyoutube"/>
                :
                <img src={youtubeLite} className='footerSub1img3' alt="fyoutube"/>

              }
              </button>
          </div>
          <div className='footerSub2'>
            <button className='footerButton' onClick={handleClick}>
              {clicked ? <img src={UpArrow} alt="upArrow" /> : <img src={DownArrow} alt="DownArrow" />}
            </button>
          </div>
        </div>

        <div className={`footerBoxB ${!clicked ? 'open' : 'close'}`}>
          
          <div className='footerBoxBSub1'>
            <div>
            <img src={Logo} alt="Logo"/>
            </div>
            <div className='footerText1'>
            Get Direction
            </div>
            <div className='footerText2'>
            Thomso Office Multi Activity CentreIndian Institute of Technology,Roorkee 247667
            </div>
          </div>
          <div className='footerRight' style={{display:"flex",flexDirection:"column",gap:"30px"}}>

<div className='footerPara1'>

            <div className='footerContactUs'>
            Contact Us
            </div>
</div>
            <div className='footerPara2'>

          <div className='footerBoxBSub1'>
            <div className='footerText2'>
            tech@thomso.in
            </div>
            <div className='footerText2'>
            pramod.thomso@gmail.com
            </div>
          </div>

          <div className='footerBoxBSub1'>
           
            <div className='footerText2'>
            Pramod - 9694627622
            </div>
            <div className='footerText2'>
            Jolly - 7081537653
            </div>
          </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
