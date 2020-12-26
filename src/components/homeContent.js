import React from 'react'
import '../scss/homeContent.scss'
import checkLogo from '../images/checked-white.svg'
import emailIcon from '../images/message.svg'
import pwIcon from '../images/lock.svg'
import gmIcon from '../images/google.svg'
import memIcon from '../images/mem.png'
import upIcon from '../images/iconfinder_arrow-circle-up_1608521.png'
<link href='https://css.gg/arrow-up-o.css' rel='stylesheet'></link>

class homeContent extends React.Component(){
    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {}
        }
     }
     function formForgotPW() {
        alert("Forgot password pressed!");
    }
    
     formSigninGmail() {
        alert("Page will redirect to Google login form.");
    }

     formSigninMEM() {
        alert("Page will redirect to MEM login form.");
    }

     formBack() {
        alert("Back text pressed!");
    }

     componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className='homeContent'>
                <img src={upIcon}className='arrow' alt="LMC Logo" onClick={componentDidMount}></img>
                <div className='leftContent'>
                    Learning Experience. Simplified.
                    <ul>
                        <li><img src={checkLogo} alt='Check Logo'></img>Easily access stored data.</li>
                        <li><img src={checkLogo} alt='Check Logo'></img>Customize your learning path.</li>
                        <li><img src={checkLogo} alt='Check Logo'></img>Manage your courses for users and teams.</li>
                    </ul>
                </div>
                <div className='rightContent'>
                    <div className='homeForm'>
                        <div className='formHeader'>
                        <p>Sign in to your <strong>MedSpecialized</strong><br></br>Learning Management Center</p>
                        </div>
                        <div className='formBody'>
                            <form id='form1'>
                                <div className='inputContainer'>
                                    <img src={emailIcon} alt='Email Icon'></img>
                                    <input type="text" placeholder="E-mail Address" name="uname" require='true'></input>
                                </div>
                                <div className='inputContainer'>
                                    <img src={pwIcon} alt='Pword Icon'></img>
                                    <input type="password" placeholder="Password" name="pword" require='true'></input>
                                </div>
                                <div className='inputContainer'>
                                    <button type='submit' form='form1' value='Submit'>Sign In</button>
                                </div>
                            </form>
                            <div className='centerText'>
                                <p className='formText' onClick={formForgotPW}>Forgot your password?</p>
                            </div>
                            <div className='separator'>
                                <span className="separator1">or</span>
                            </div>
                            <div className='logInWith' >
                                <img className='img' src={gmIcon} alt='Gmail Icon' onClick={formSigninGmail}></img>
                                <button className='signInWith' type='submit' onClick={formSigninGmail} value='Submit'>Sign in with Gmail</button>
                            </div>
                            <div className='logInWith' >  
                                <img className='img' src={memIcon} alt='MEM Icon' onClick={formSigninMEM}></img>
                                <button className='signInWith' type='submit' onClick={formSigninMEM} value='Submit'>Sign in with MEM</button> 
                            </div>
                            <div className='centerText'>
                                <p className='formText'onClick={formBack}>Back</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default homeContent;