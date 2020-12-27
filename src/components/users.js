import React from 'react'
import '../scss/Users.scss'
import hamIcon from '../images/ham.png'
import arrowIcon from '../images/twoarrow.png'
import exitIcon from '../images/exit.png'
import bellIcon from '../images/bell.png'
import defaultUser from '../images/user-default.svg'
import dashIcon from '../images/dashb.png'
import careerIcon from '../images/careerIcon.png'
import courseIcon from '../images/course.png'
import assetIcon from '../images/asset.png'
import moduleIcon from '../images/library.png'
import teamIcon from '../images/team.png'
import userIcon from '../images/user.png'
import reportIcon from '../images/report.png'
import profileIcon from '../images/profile.png'
import feedbackIcon from '../images/feedback.png'

class Users extends React.Component{

    constructor(props){
        super(props)
        this.state = { show:true};

        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }

    render(){
        return(
            <div className='bodyUser'>
                {this.state.show && <Box/>}
                <div className='headerPos'>
                    <div className='leftHeader'>
                        <img src={hamIcon} onClick={this.toggleDiv} alt='Icon'></img>                 
                    </div>
                    <div className='rightHeader'>
                        <img src={exitIcon} alt='Exit Icon'></img>
                        <img src={bellIcon} alt='Bell Icon'></img>
                        <img src={arrowIcon} alt='Arrow Icon'></img>
                    </div>
                </div>
            </div>
        )
    }
}

class Box extends React.Component{
    render(){
        return(
            <div className='sideBar'>
                <div className='sideHeader'>Intelligent Medical Software</div>
                <div className='sideAccountInfo'>
                    <img src={defaultUser} alt='User Icon'></img>
                    <div className='accountContainer'>
                    <label className='accountName'>Admin Fullname</label>
                    <br></br>
                    <label className='accountRole'>Admin Role</label>
                    </div>
                </div>
                <div className='sideButtons'>
                <ul>
                    <li><img src={dashIcon}></img><span>Dashboard</span></li>
                    <li><img src={careerIcon}></img><span>Career Path</span></li>
                    <li><img src={courseIcon}></img><span>Learning Course</span></li>
                    <li><img src={assetIcon}></img><span>Assessments</span></li>
                    <li><img src={moduleIcon}></img><span>Module Library</span></li>
                    <li><img src={teamIcon}></img><span>Teams</span></li>
                    <li class="active"><img src={userIcon}></img><span>Users</span></li>
                    <li><img src={reportIcon}></img><span>Reports</span></li>
                    <li><img src={profileIcon}></img><span>Profile</span></li>
                    <li><img src={feedbackIcon}></img><span>Help and Feedback</span></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Users;