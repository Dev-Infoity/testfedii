import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/dashboard.css';
import '../Content/Content/tblcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';
import Dropdown from 'react-bootstrap/Dropdown';


export const Staffpage = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

      const data01 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
          
            <div className="cs-pdng">

                <div className="wdth-ipdwvw-cs">
                    <h1 className="kmcs_h1">Explore New &amp; Trending Design Jobs</h1>
                    <p className="kmcs_p">
                        Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.
                    </p>
                </div>


                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        {/* <div className="box mt-10px">
                            <div className="box-body">
                                <form className="">
                                    <div className="form-group">
                                            <div className="bg-csmm">
                                                <div className="mb-15px">
                                                    <div className="col-sm-12 cstsbx1">
                                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Overall Engagement Score</h1>
                                                    </div>
                                                </div>
                                                <div className="row m-0 csdv1">
                                                    <div className="col-sm-4">
                                                        <div className="block clearfix">
                                                            <div className="">
                                                                {/* <div className="easypiechart" dataPlugin="easyPieChart" dataPercent="40" data-size="150" dataScaleLength="2" dataLineWidth="12">
                                                                    <div>
                                                                        <h4 className="text-3x text-blucs _400">40</h4>
                                                                    </div>
                                                                </div> */}
                                                                {/* <PieChart width={250} height={250}>
                                                                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="orange" label />
                                                                </PieChart>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 col-sm-offset-8 mt-5">
                                                        <h6 style={{color: "#333e63", fontSize: "18px"}}>How are we doing? Fair!</h6>
                                                        <p style={{fontSize: "14px"}}>Your students are happy and motivated some of the time. Use the analyze tools to see what's working for you and what can be improved.</p>
                                                        <small className="text-sm mb-1 _500" style={{color: "#333e63"}}> Total Responses: 250 </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div> */}

                        <div className="mt-10px">
                            <div className="mb-15px">
                                <div className="col-sm-12 cstsbx1">
                                    <div className="dshbrd-dvv1 row ml-0 mr-0 ">
                                        <div className="col-sm-10 pl-0">
                                            <ul className="dshbrd-dvv1-ul">
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a className="dshbrd-dvv1-ul-li-a active">All Staff</a>
                                                </li>
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a className="dshbrd-dvv1-ul-li-a">Pending Approval</a>
                                                </li>
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a className="dshbrd-dvv1-ul-li-a">Invited</a>
                                                </li>
                                                <li className="dshbrd-dvv1-ul-li">
                                                    <a className="dshbrd-dvv1-ul-li-a">Rejected</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-2 text-right pr-0">
                                            <Dropdown>
                                                <Dropdown.Toggle className="adtchrbtn">
                                                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path></svg>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item crsr-dis">Add teacher</div>
                                                    <div className="tbl-dropdown-item dropdown-item crsr-dis">Bulk Import</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12" id="stftabl">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="brdr-n wd-15px">
                                            <div>
                                                <input type="checkbox" id="tblcstslctallstff" title="Select all" />
                                            </div>
                                        </th>
                                        <th className="brdr-n">                                            
                                            <div>
                                            <Dropdown>
                                                <Dropdown.Toggle className="tblcstslctbtn">
                                                    <span>Action</span>
                                                    <i className="fa fa-chevron-down ml-4 tblcstslctbtn-i"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            </div>
                                        </th>
                                        <th className="brdr-n"></th>
                                        <th className="brdr-n"></th>
                                        <th className="brdr-n"></th>
                                        <th className="brdr-n text-right pr-4">
                                            <Dropdown>
                                                <Dropdown.Toggle className="tblcstslctbtnsrtng">
                                                    AZ <i className="fa fa-sort"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item">Sorting A-Z</div>
                                                    <div className="tbl-dropdown-item dropdown-item">Sorting Z-A</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <input type="checkbox" id="tblcstslctstff1" title="Select" />
                                            </div>
                                        </td>
                                        <td><div title="Joe">Joe</div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right pr-4">
                                            <Dropdown>
                                                <Dropdown.Toggle className="tbl-drpbtnndw">
                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <input type="checkbox" id="tblcstslctstff2" title="Select" />
                                            </div>
                                        </td>
                                        <td><div title="Joe">Joe</div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right pr-4">
                                            <Dropdown>
                                                <Dropdown.Toggle className="tbl-drpbtnndw">
                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <input type="checkbox" id="tblcstslctstff3" title="Select" />
                                            </div>
                                        </td>
                                        <td><div title="Joe">Joe</div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-right pr-4">
                                            <Dropdown>
                                                <Dropdown.Toggle className="tbl-drpbtnndw">
                                                    <i className="fa fa-ellipsis-v" title="More options"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="tbl-drpdwnmnu">
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow}>Remove</div>
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={() => window.location = 'mailto:yourmail@domain.com'}>Email</div>
                                                    <div className="tbl-dropdown-item dropdown-item" onClick={handleShow2}>Info</div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <input type="checkbox" id="tblcstslctstff4" title="Select" />
                                            </div>
                                        </td>
                                        <td><div className="distddv" title="test@test.com">test@test.com (<span style={{fontStyle: 'italic'}}>invited</span>)</div></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>

                        {/* <div className="box">
                            <div className="box-body">
                                <form>
                                    <div className="form-group">
                                        <div className="bg-csmm">
                                            <div className="mb-15px">
                                                <div className="col-sm-12 cstsbx1">
                                                    <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Core Factors of Engagement</h1>
                                                </div>
                                            </div>
                                            <div className="row m-0 csdv1">
                                                <div className="col-md-12">
                                                    <p style={{marginBottom: "20px"}}>Your core factors of engagement is a reflection of your most recent six surveys. It's a stable moving average of engagement data at your school.</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="csdvscs">
                                                        <div className="p-1 row cstdvcsc">
                                                                    <div className="col-sm-4"><a className="ahover btnclclclk" href="">  1 </a></div>
                                                                    <div className="col-sm-7">
                                                                        <div className="progress my-1">
                                                                            <div className="progress-bar" id="scorecolor"></div>
                                                                            <span id="new" style={{display: "none"}}>1</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-1"><span className="_600 text-blucs">1%</span></div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <form>
                                    <div className="form-group">
                                        <div className="bg-csmm">
                                            <div className="mb-15px">
                                                <div className="col-sm-12 cstsbx1">
                                                    <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Current Survey Cycle: At a Glance</h1>
                                                </div>
                                            </div>
                                            <div className="row m-0 csdv1">
                                                <div className="col-md-12">
                                                    <p style={{marginBottom: "20px"}}>Your current survey cycle is a reflection of your most recent six surveys. It's a stable moving average of engagement data at your school.</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th>Measure</th>
                                                                <th className="text-center">Starting Score</th>
                                                                <th className="text-center">Current Score</th>
                                                                <th className="text-center">Change over Cycle</th>
                                                            </tr>

                                                            <tr>
                                                                    <td className="text-muted">Engagement Score</td>
                                                                    <td className="text-center" id="startingscore"><span className="text badge _400" style={{backgroundColor: "#f2f2f2", color: "white"}}>-</span></td>
                                                                    <td className="text-center" id="currentscore"><span className="text badge _400" style={{backgroundColor: "#f2f2f2", color: "white"}}>-</span></td>
                                                                    <td className="change text-center">
                                                                        <span className="h6"></span> <span className=""> - </span>
                                                                    </td>
                                                                </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <form>
                                    <div className="form-group">
                                        <div className="bg-csmm">
                                            <div className="mb-15px">
                                                <div className="col-sm-12 cstsbx1">
                                                    <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Suggestion</h1>
                                                </div>
                                            </div>
                                            <div className="row m-0 csdv1">
                                                <div className="col-sm-12  animate fadeIn text-muted" id="tab3">
                                                    <div className="row tab-content">

                                                        <div className="row m-0 col-sm-12 tab-pane animate fadeIn text-muted  active show" id="tab_action" style={{padding: ".5rem 1rem 0rem 1rem"}}>
                                                            <div className="col-sm-12 col-md-12 p-0">

                                                                <ul className="list-group box mb-0">
                                                                                <li className="list-group-item pl-0 pr-0">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-10">
                                                                                            <a className="float-left w-40"><img alt="." src="../Images/userblue.png" className="w-100 brdrcsimg circle crsr-auto" /></a>
                                                                                            <div className="clear px-3">
                                                                                                <a className="_500 d-block cstmdvdvd crsr-auto">User</a>
                                                                                            </div>
                                                                                            <div className="clear mt-2 mb-3 ml-58px"><span className="fs-14px">text</span></div>
                                                                                        </div>
                                                                                        <div className="col-sm-2">
                                                                                            <div className="csvwlalbtn">
                                                                                                <a href="/Feedback/suggestion" className="csvwlalbtnaa">View All <i className="fa fa-chevron-right"></i></a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>            
        </div>

        <Modal show={show} onHide={handleClose} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to remove?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary modalRedBtn" onClick={handleClose}>
                Confirm
            </Button>
            <Button variant="primary modalGrayBtn" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header closeButton>
            <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center infomdvmdl1">
                    <img src="../Images/user_green.png" className="infomdvmdl1-img" alt="User Profile" />
                    <p className="infomdvmdl2">XYZ</p>
                    <div className="infomdvmdl3">Teacher</div>
                </div>
                <div className="infomdvmdl4 text-center">
                    <p>Subject - Hindi, English</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary modalGrayBtn" onClick={handleClose2}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>



    </div>
}

// export default Details;