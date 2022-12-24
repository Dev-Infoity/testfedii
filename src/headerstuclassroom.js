import logo from './feediilogo.png';
import './Content/Content/login.css';
import './App.css';
import './Content/Content/headerdashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Headerstuclssrm = () => {

    var username = sessionStorage.getItem("usernamesession");
    

    return <div>

                <div className="content-header custom-blue box-shadow-4 cstm-hdrrr" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "1px 60px 0", paddingBottom: "0" }}>
                    <div className="navbar-text nav-title" id="pageTitle">
                            <Link to="/stu/class">
                                <img src={logo} alt="Logo" style={{ width: "85px" }} />
                            </Link>
                        </div>
                        
                        <div className="row nvhdrhde mbvw-dspn" style={{width: "100%", textAlign: "center", justifyContent: "center"}}>
                            <div>
                                <NavLink to="/stu/class" className={({ isActive }) => (isActive ? 'nvhdr active' : 'inactive')}>
                                    <button className="dshbdhdrbtn" id="staff">
                                        My Teacher
                                    </button>
                                </NavLink>
                                <NavLink to="/stu/survey" className={({ isActive }) => (isActive ? 'nvhdr active' : 'inactive')}>
                                    <button className="dshbdhdrbtn" id="srvy">
                                        Survey
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                        

                        <ul className="nav flex-row order-lg-2 mt--7px">
                            <li className="dropdown d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center drpbtnndw">
                                        <div className="avatar">
                                            <div className="text-truncate csk-pfrl-nm" title={username}>{username}</div>
                                        </div>
                                        <i className="fa fa-caret-down hdr-fa-icon Aezakmi8"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="drpdwnmnu">
                                        <Link to="/u/profile3" className="dropdown-item btnclclclk">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1655208369/Dashboard/profile_icon.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Profile</div>
                                        </Link>
                                        <Link to="/stu/class" className="dropdown-item btnclclclk dspdsktp-n">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1645182960/Dashboard/dashboard_asd2cv.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>My Teacher</div>
                                        </Link>
                                        <Link to="/stu/survey" className="dropdown-item btnclclclk dspdsktp-n">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1655115253/Dashboard/certificatee_ly9o3w.svg" width="22" height="20" alt="Profile Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Survey</div>
                                        </Link>
                                        <Link to="/" className="dropdown-item btnclclclk drpdwnlastitm">
                                            <div style={{minWidth: '32px'}}><img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1638941210/Header%20Logo/logoutstf607712_mgmuyg.svg" width="22" height="20" alt="Logout Icon" style={{display: 'block', maxWidth: '100%'}} /></div>
                                            <div style={{paddingLeft: '6px'}}>Log out of Feedii</div>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     
}