import React from 'react'
import '../scss/homeContent.scss'
import checkLogo from '../images/checked-white.svg'
import emailIcon from '../images/message.svg'
import pwIcon from '../images/lock.svg'
import gmIcon from '../images/google.svg'
import memIcon from '../images/mem.png'
import upIcon from '../images/iconfinder_arrow-circle-up_1608521.png'
<link href='https://css.gg/arrow-up-o.css' rel='stylesheet'></link>

class homeContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
    }

    handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["email"] = "";
            input["password"] = "";
            this.setState({input:input});
      
            alert('Login Submit.');
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
     
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "*Please enter your email Address.";
        }
    
        if (typeof input["email"] != "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "*Please enter valid email address.";
          }
        }
    
        if (!input["password"]) {
          isValid = false;
          errors["password"] = "*Please enter your password.";
        }
    
        if (typeof input["password"] != "undefined") {
          if(input["password"].length < 6 || input["password"].length < 0 ){
              isValid = false;
              errors["password"] = "*Please add at least 6 charachter.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    formForgotPW(e){
        alert("Forgot password pressed!");
    }
    
    formSigninGmail(e){
        alert("Page will redirect to Google login form.");
    }

    formSigninMEM(e){
        alert("Page will redirect to MEM login form.");
    }

    formBack(e){
        alert("Back text pressed!");
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div className='homeContent'>
                <img src={upIcon}className='arrow' alt="LMC Logo" onClick={this.componentDidMount}></img>
                <div className='leftContent'>
                    Learning Experience. Simplified.
                    <ul>
                        <li><img src={checkLogo} alt='Check Logo'></img><span>Easily access stored data.</span></li>
                        <li><img src={checkLogo} alt='Check Logo'></img><span>Customize your learning path.</span></li>
                        <li><img src={checkLogo} alt='Check Logo'></img><span>Manage your courses for users and teams.</span></li>
                    </ul>
                </div>
                <div className='rightContent'>
                    <div className='homeForm'>
                        <div className='formHeader'>
                        <p>Sign in to your <strong>MedSpecialized</strong><br></br>Learning Management Center</p>
                        </div>
                        <div className='formBody'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='inputContainer'>
                                    <img src={emailIcon} alt='Email Icon'></img>
                                    <input 
                                        type="text" 
                                        name="email"
                                        value={this.state.input.email}
                                        onChange={this.handleChange}
                                        placeholder="E-mail Address"
                                        id="email"  
                                        >
                                    </input>
                                    <div className="text-danger">{this.state.errors.email}</div>
                                </div>
                                <div className='inputContainer'>
                                    <img src={pwIcon} alt='Pword Icon'></img>
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.input.password}
                                        onChange={this.handleChange}
                                        placeholder="Password"
                                        id="password"
                                        >
                                    </input>
                                        <div className="text-danger">{this.state.errors.password}</div>
                                </div>
                                <div className='inputContainer'>
                                    <button type='submit' value='Submit'>Sign In</button>
                                </div>
                            </form>
                            <div className='centerText'>
                                <p className='formText' onClick={this.formForgotPW.bind(this)}>Forgot your password?</p>
                            </div>
                            <div className='separator'>
                                <span className="separator1">or</span>
                            </div>
                            <div className='logInWith' >
                                <img className='img' src={gmIcon} alt='Gmail Icon' onClick={this.formSigninGmail.bind(this)}></img>
                                <button className='signInWith' type='submit' onClick={this.formSigninGmail.bind(this)} value='Submit'>Sign in with Gmail</button>
                            </div>
                            <div className='logInWith' >  
                                <img className='img' src={memIcon} alt='MEM Icon' onClick={this.formSigninMEM.bind(this)}></img>
                                <button className='signInWith' type='submit' onClick={this.formSigninMEM.bind(this)} value='Submit'>Sign in with MEM</button> 
                            </div>
                            <div className='centerText'>
                                <p className='formText'onClick={this.formBack.bind(this)}>Back</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default homeContent;