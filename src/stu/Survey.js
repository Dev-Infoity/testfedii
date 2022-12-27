import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerstuclssrm } from '../headerstuclassroom';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyStudentPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);


    const [surveyupcoming, setsurveyupcoming] = useState([]);
    const [surveycurrent, setsurveycurrent] = useState([]);
    const [surveysession, setsurveysession] = useState([]);
    const [session, setsessionval] = useState(""); 

    const dataFetchedRef = useRef(false);
    const dataFetchedRefCurrent = useRef(false);
    const dataFetchedRefsession = useRef(false);
    const dataFetchedRefsessionfetch = useRef(false);
    var schoolcurrentid = 0;
   

    const sessionstudentid = sessionStorage.getItem('studentidsession');

    React.useEffect(
        ()=> {      

           
        //     fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getSession/' + 3, {
        //     method: 'GET'
        //   }) .then((response) => response.json())
        //   .then((data) => {
        //     if (dataFetchedRefsession.current) return;
        //     dataFetchedRefsession.current = true;
            
        //     var objj = JSON.stringify(data);
        //     var parse = JSON.parse(objj);
           
        //     setsurveysession(data)
        //     hideLoader();
        //     $('#login').show();
        //     schoolcurrentid=data[0].schoolsessionId
        //     //setsessionval(data[0].schoolsessionId)

        //             })
        //             .catch(error =>{
        //                 console.log(error);
        //             });




        fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetailFixed/' + 1 , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveyupcoming(data)
            hideLoader();
             $('#login').show();

        })
        .catch(error =>{
            console.log(error);
        });



        fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetail/' + 1 , {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            if (dataFetchedRefCurrent.current) return;
            dataFetchedRefCurrent.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
        
            setsurveycurrent(data)

        })
        .catch(error =>{
            console.log(error);
        });



                    })
                    
          



    const mysurvyy = (e) => {
        $('#mysrvy').addClass('active');
        $('#pndingsuvry').removeClass('active');
        $('#mmysrvv').show();
        $('#pnndnggsrvv').hide();
      }

      const pndngsrvyy = (e) => {
        $('#mysrvy').removeClass('active');
        $('#pndingsuvry').addClass('active');
        $('#mmysrvv').hide();
        $('#pnndnggsrvv').show();
      }

   

    // const slctoptndta = (sessionId) => {
    //     var opnvl = $('#selectsesssionn').val();
    //     alert(opnvl);

        

    //         fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetailUpcomming/' + sessionstudentid + '-' + opnvl, {
    //             method: 'GET'
    //         }) .then((response) => response.json())
    //         .then((data) => {
               
                
    //             var objj = JSON.stringify(data);
    //             var parse = JSON.parse(objj);
            
    //             setsurveyupcoming(data)

    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         });



    //         fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetail/' + studentid + '-' +  opnvl, {
    //             method: 'GET'
    //         }) .then((response) => response.json())
    //         .then((data) => {
                
                
    //             var objj = JSON.stringify(data);
    //             var parse = JSON.parse(objj);
            
    //             setsurveycurrent(data)

    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         });

    // }

      const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);


      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => {
          setShow(true);
      }

      const [show2, setShow2] = useState(false);
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => {
          setShow2(true);
      }

      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => {
          setShow3(true);
      }

    return <div>
        <Headerstuclssrm />
        {loader}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane cstmtab-pane animate fadeIn text-muted active" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                    <div>
                        <div className="col-sm-12">
                            <h1 className="kmcs_h1 bluclr">Overview</h1>
                            <p className="kmcs_p mt-5 bluclr mt-0 mb-5">Wherever you are in this world of work - no matter your doubts, hopes and dreams, there's a job for you here.</p>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 bgclrblu">
                            <div className="dshbrd-dvv1 row ml-0 mr-0 pb-0">
                                <div className="col-sm-8 pl-0">
                                    <ul className="dshbrd-dvv1-ul">
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="mysrvy" className="dshbrd-dvv1-ul-li-a active dshbrd-dvv1-ul-li-a-mbvw mbvw-ml0" onClick={mysurvyy}>Active ({surveycurrent.length})</a>
                                        </li>
                                        <li className="dshbrd-dvv1-ul-li">
                                            <a id="pndingsuvry" className="dshbrd-dvv1-ul-li-a dshbrd-dvv1-ul-li-a-mbvw mbvw-mr0" onClick={pndngsrvyy}>Aged ({surveyupcoming.length})</a>
                                        </li>
                                    </ul>
                                </div>
                                
                                    {/* <div className="col-sm-4 pr-0 pl-0 kckh48 kckhkcstm8 mb-0">
                                        <div className="custom-selectt custom-selecttsrvy">
                                        {/* <Select defaultValue={slctyearoptions[0]} onChange={setSelectedOption} options={slctyearoptions} theme={(theme) => ({...theme, colors: {...theme.colors,primary25: '#f5faff',primary50: '#f5faff',primary: '#54d4f2',}, })} /> */}
                                    
                                        {/*<select id="selectsesssionn" className="mbl-inp cs-slct-fld slct-cstm1 cstmsrvyslct-cstm1" onChange={(e) => slctoptndta(e)}>
                                            {surveysession.map((session) => (
                                                <option value={session.schoolsessionId}>{session.schoolsession}</option>
                                            ))}
                                        </select>
                                    </div> 
                                </div>*/}
                                   
                                    
                                
                                
                            </div>
                        </div>
                    </div>

                    <div id="mmysrvv">

                    <div className="cstm-mrgn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                        <tr>
                                                            <th>Surveys (1/20)</th>
                                                            <th>Period</th>
                                                            <th>Response Progress</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title="Social &amp; Emotional Learning  - Pulse 1">Social &amp; Emotional Learning  - Pulse 1 </div>
                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Jul 20 - Aug 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '0%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow2(); }} >
                                                                        <span className="tblsvprgstxt">Not Started</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to=''><button className="modalRedBtn cstmmbtnn">Start</button></Link>
                                                            </td>
                                                        </tr>

                                                    {surveycurrent.map((survey)=>{
                                                        if(survey.Status == "Start") {
                                                            
                                                        }
                                                        else 
                                                        {
                                                            return(
                                                                <tr>
                                                                    <td>
                                                                        <div className="tbltddv1 text-truncate cstmwdtbldv" title={survey.name}>{survey.name} </div>
                                                                        <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> Teacher</div>
                                                                    </td>
                                                                    <td>
                                                                        <span className="tbltddv3">Nov 20 - Dec 20</span>
                                                                    </td>
                                                                    <td>

                                                                        <div className="srvytblprgbrsvdv">
                                                                            <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                                <div className="progress-bar primary" style={{width: `${survey.CompletionPer}%`}} />
                                                                            </div>
                                                                            <div className="text-left tbltddv4" onClick={()=>{handleShow(); }} >
                                                                                <span className="tblsvprgstxt">Completed</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        {(function() {
                                                                            if (survey.Status == "Completed") {
                                                                                return <Link to=""><button className="modalGrayBtn cstmmbtnn">View</button></Link>;
                                                                            } else {
                                                                                return <Link to=""><button className="modalRedBtn cstmmbtnn">{survey.Status}</button></Link>;
                                                                            }
                                                                            })()
                                                                        }
                                                                        {/* <Link to="">
                                                                            <button className="modalRedBtn wd-74px">{survey.Status}</button>
                                                                        </Link> */}
                                                                    </td>
                                                                </tr>
                                                                 );
                                                        }
                                                        })}

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title="Social &amp; Emotional Learning  - Pulse 1">Social &amp; Emotional Learning  - Pulse 1 </div>
                                                                <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Jan 20 - Dec 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '0%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4" onClick={()=>{handleShow3(); }} >
                                                                        <span className="tblsvprgstxt">Upcoming</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <button className="modalGrayBtn cstmmbtnn pntr-none">Upcoming</button>
                                                            </td>
                                                        </tr>
                                                      
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div id="pnndnggsrvv" style={{display: 'none'}}>

                        <div className="cstm-mrgn" id="accordion">
                            
                            <div>
                                <div className="panel box no-border mb-0">
                                    <div id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive ht-auto">
                                            <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                        <tr>
                                                            <th>Surveys (15/20)</th>
                                                            <th>Period</th>
                                                            <th>Response Progress</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title="Social &amp; Emotional Learning  - Pulse 1">Social &amp; Emotional Learning  - Pulse 1 </div>
                                                                        <div className="tbltddv2 text-truncate cstmwdtbldv">Student <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> School</div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Mar 20 - Apr 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '0%'}}></div>
                                                                    </div>
                                                                    <div className="text-left tbltddv4">
                                                                        <span>Expired</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <button className="modalGrayBtn cstmmbtnn pntr-none">Expired</button>
                                                            </td>
                                                        </tr>
                                                    {surveyupcoming.map((survey) => (
                                                        <tr>
                                                            <td>
                                                                <div className="tbltddv1 text-truncate cstmwdtbldv" title={survey.name}>{survey.name} </div>
                                                                        <div className="tbltddv2 text-truncate cstmwdtbldv" title="Tarun Kuamr Yadav">Teacher - Tarun Kuamr Yadav</div>
                                                            </td>
                                                            <td>
                                                                <span className="tbltddv3">Nov 20 - Dec 20</span>
                                                            </td>
                                                            <td>
                                                                <div className="srvytblprgbrsvdv">
                                                                    <div className="progress prgrs-wd-cstm my-2 ml-2">
                                                                        <div className="progress-bar primary" style={{width: '100%'}} />
                                                                    </div>
                                                                    <div className="text-left tbltddv4">
                                                                        <span>Completed</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <Link to=''><button className="modalGrayBtn cstmmbtnn">View</button></Link>
                                                            </td>
                                                        </tr>
                                                        ))}
                                                    
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <br />
                    </div>
                </div>
            </div>

        </div>


        
        <Modal show={show} onHide={handleClose} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">Teachers</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">Teacher Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Not Started</span>
                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                    </div>
                </div>
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">Teacher Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Completed</span>
                        <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="22" alt="Image" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Modal show={show2} onHide={handleClose2} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">School</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">School Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Not Started</span>
                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                    </div>
                </div>
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">School Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Completed</span>
                        <img className="ml-4" src="../Images/checkbox-marked-circle.svg" width="22" alt="Image" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>

        <Modal show={show3} onHide={handleClose3} className="cstmmtmodal cstmlmodal2" >
            <Modal.Header className="cstmmdlinfodv cstmmdlldlhdr1" closeButton>
                <div className="cstmmdlldlhdr1dv1">School</div>
            </Modal.Header>
            <Modal.Body className="cstmmdlinfodv2 cstmmdlinfodv2cstmm">
                
                <div className="infomdvmdl1 col-sm-12 row m-0 mb-4">
                    <div className="col-sm-6 pl-0">
                        <div className="row m-0">
                            <img src="../Images/user_green.png" width="24" className="mr-3" alt="User Profile" />
                            <span className="text-truncate mdldvdv12d">School Name</span>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">
                        <span className="text-truncate mdldvdv12d">Upcoming</span>
                        <img className="ml-4" src="../Images/greycircle-4.png" width="22" alt="Image" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    </div>
}

// export default Details;