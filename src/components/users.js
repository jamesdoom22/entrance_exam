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
import addIcon from '../images/add.png'
import viewIcon from '../images/view.svg'
import updateIcon from '../images/update.svg'
import deleteIcon from '../images/delete.svg'
import doubleForwardIcon from '../images/doubleforward.png'
import forwardIcon from '../images/forward.png'
import doubleBackIcon from '../images/doubleback.png'
import backIcon from '../images/back.png'

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
                        <img src={arrowIcon} alt='Arrow Icon'></img><span>Switch to Trainee</span>
                        <img src={bellIcon} alt='Bell Icon'></img>
                        <img src={exitIcon} alt='Exit Icon'></img>    
                    </div>
                </div>
                <div className='userBody'>
                    <div className='bodyContainer'>
                        <div className='userHeader'>
                            <div className='userLeftHeader'>
                                Users
                            </div>
                            <div className='userRightHeader'>
                                <button><img src={addIcon} alt="Icon"></img><span>Invite User</span></button>
                            </div> 
                        </div>
                        <hr></hr>
                        <div>
                            <form className='searchInfo'>
                            <select name="info" id="info">
                                <option value="volvo">Name</option>
                                <option value="saab">Email</option>
                                <option value="mercedes">Status</option>
                                <option value="audi">Role</option>
                            </select>
                            <input placeholder='Search...'></input>
                            </form>    
                        </div>
                        <div className='listOfUsers'>
                            <div className='list'>
                                <table>
                                    <thead>
                                    <tr>
                                    <th className='alignLeft'>Email</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Role</th>
                                        <th>View</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className='alignLeft'><img src="data:,"></img>admin1@meditab.com</td>
                                        <td>Admin 1 Sample</td>
                                        <td>Active</td>
                                        <td>Admin</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src="data:,"></img>admin2@meditab.com</td>
                                        <td>Admin 2 Sample</td>
                                        <td>Active</td>
                                        <td>Admin</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>darylo@meditab.com</td>
                                        <td>Daryl Otsuka</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>faithd@meditab.com</td>
                                        <td>asdasd adasdasd</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>jayd@meditab.com</td>
                                        <td>Jay Dhanani</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>kenneths@meditab.com</td>
                                        <td>Kenneth James Simbulan</td>
                                        <td>Active</td>
                                        <td>Admin</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>manuelc@meditab.com</td>
                                        <td>Manuel Calbes</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>sample@meditab.com</td>
                                        <td>Sample Account</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>seant@meditab.com</td>
                                        <td>Sean Timm</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src="data:,"></img>trainee2@meditab.com</td>
                                        <td>Trainee 2 Sample</td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>user116@meditab.com</td>
                                        <td></td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>user1@meditab.com</td>
                                        <td></td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    <tr>
                                        <td className='alignLeft'><img src={defaultUser}></img>user2@meditab.com</td>
                                        <td></td>
                                        <td>Active</td>
                                        <td>Trainee</td>
                                        <td><img src={viewIcon}></img></td>
                                        <td><img src={updateIcon} className='smallIcon'></img></td>
                                        <td><img src={deleteIcon} className='smallIcon'></img></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className='arrowPage'>
                                <button><img src={doubleBackIcon} alt='Icon'></img></button>
                                <button><img src={backIcon} alt='Icon'></img></button>
                                <button><strong>1</strong></button>
                                <button><img src={forwardIcon} alt='Icon'></img></button>
                                <button><img src={doubleForwardIcon} alt='Icon'></img></button>
                                <br></br><label>Showing 13 out of 13</label>
                            </div>
                            </div>
                            <div>
                            
                        </div>
                        </div>
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
                    <li><img src={dashIcon} alt="Icon"></img><span>Dashboard</span></li>
                    <li><img src={careerIcon} alt="Icon"></img><span>Career Path</span></li>
                    <li><img src={courseIcon} alt="Icon"></img><span>Learning Course</span></li>
                    <li><img src={assetIcon} alt="Icon"></img><span>Assessments</span></li>
                    <li><img src={moduleIcon} alt="Icon"></img><span>Module Library</span></li>
                    <li><img src={teamIcon} alt="Icon"></img><span>Teams</span></li>
                    <li className="active"><img src={userIcon} alt="Icon"></img><span>Users</span></li>
                    <li><img src={reportIcon} alt="Icon"></img><span>Reports</span></li>
                    <li><img src={profileIcon} alt="Icon"></img><span>Profile</span></li>
                    <li><img src={feedbackIcon} alt="Icon"></img><span>Help and Feedback</span></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Users;