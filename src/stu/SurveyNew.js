import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerstuclssrm } from '../headerstuclassroom';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyNewStudentPage = () => {
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
    var studentid = 1;


    React.useEffect(
        ()=> {      

           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Admin/getSession/' + 3, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsession.current) return;
            dataFetchedRefsession.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
           
            setsurveysession(data)
            hideLoader();
            $('#login').show();
            schoolcurrentid=data[0].schoolsessionId
            //setsessionval(data[0].schoolsessionId)




fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetailUpcomming/' + studentid + '-' + schoolcurrentid, {
    method: 'GET'
  }) .then((response) => response.json())
  .then((data) => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    
    var objj = JSON.stringify(data);
    var parse = JSON.parse(objj);
   
    setsurveyupcoming(data)

  })
  .catch(error =>{
      console.log(error);
  });



  fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetail/' + studentid + '-' + schoolcurrentid, {
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

   

    const slctoptndta = (sessionId) => {
        var opnvl = $('#selectsesssionn').val();
        alert(opnvl);

        

            fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetailUpcomming/' + studentid + '-' + opnvl, {
                method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
               
                
                var objj = JSON.stringify(data);
                var parse = JSON.parse(objj);
            
                setsurveyupcoming(data)

            })
            .catch(error =>{
                console.log(error);
            });



            fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getStudentSurveydetail/' + studentid + '-' +  opnvl, {
                method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
                
                
                var objj = JSON.stringify(data);
                var parse = JSON.parse(objj);
            
                setsurveycurrent(data)

            })
            .catch(error =>{
                console.log(error);
            });

    }

      const slctyearoptions = [
        { value: 'Current Session : Apr 2022 - Mar 2023', label: 'Current Session : Apr 2022 - Mar 2023' },
        { value: 'Previous Session : Apr 2021 - Mar 2022', label: 'Previous Session : Apr 2021 - Mar 2022' },
        { value: 'Previous Session : Apr 2020 - Mar 2021', label: 'Previous Session : Apr 2020 - Mar 2021' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);



    return <div>
        <Headerstuclssrm />
        {loader}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
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
                                            <a id="pndingsuvry" className="dshbrd-dvv1-ul-li-a dshbrd-dvv1-ul-li-a-mbvw mbvw-mr0" onClick={pndngsrvyy}>Finished ({surveyupcoming.length})</a>
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
                                            <div className="table-responsive">
                                                <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                    <tr><th>Title</th>
                                                        <th>Period</th>
                                                        <th>Response Progress</th>
                                                        <th />
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse 2">Student School Relationship - Pulse 2 </div>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">Nov 20, 2022 - Dec 20, 2022</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-left" style={{position: 'relative'}}>0%</span>
                                                                <div className="progress prgrs-wd-cstm my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline'}}>
                                                                    <div className="progress-bar primary" style={{width: `0%`}} />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <Link to="">
                                                                    <button class="modalRedBtn wd-74px">Start</button>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Dropdown className="item-action dropdown">
                                                                    <Dropdown.Toggle className="drpdwnbtn pr-0 pl-0">
                                                                        <i className="fa fa-fw fa-ellipsis-v" />
                                                                    </Dropdown.Toggle >
                                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                        <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="ahover text-truncate wd-235px" title="Social & Emotional Learning - Pulse 2">Social & Emotional Learning - Pulse 2 </div>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">Nov 20, 2022 - Dec 20, 2022</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-left" style={{position: 'relative'}}>20%</span>
                                                                <div className="progress prgrs-wd-cstm my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline'}}>
                                                                    <div className="progress-bar primary" style={{width: `20%`}} />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <Link to="">
                                                                    <button class="modalRedBtn wd-74px">Continue</button>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Dropdown className="item-action dropdown">
                                                                    <Dropdown.Toggle className="drpdwnbtn pr-0 pl-0">
                                                                        <i className="fa fa-fw fa-ellipsis-v" />
                                                                    </Dropdown.Toggle >
                                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                        <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>
                                                                <div className="ahover text-truncate wd-235px" title="Social & Emotional Learning - Pulse 3">Social & Emotional Learning - Pulse 3 </div>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">Nov 20, 2022 - Dec 20, 2022</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-left" style={{position: 'relative'}}>0%</span>
                                                                <div className="progress prgrs-wd-cstm my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline'}}>
                                                                    <div className="progress-bar primary" style={{width: `0%`}} />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <button class="modalGrayBtn wd-74px" disabled="disabled">Upcoming</button>
                                                            </td>
                                                            <td>
                                                                <Dropdown className="item-action dropdown">
                                                                    <Dropdown.Toggle className="drpdwnbtn pr-0 pl-0">
                                                                        <i className="fa fa-fw fa-ellipsis-v" />
                                                                    </Dropdown.Toggle >
                                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                        <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
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
                                            <div className="table-responsive">
                                            <table id="nwsrvytbblll" className="table cstmtable2 v-middle p-0 m-0 box">
                                                    <thead>
                                                    <tr><th>Title</th>
                                                        <th>Period</th>
                                                        <th>Response Progress</th>
                                                        <th />
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="ahover text-truncate wd-235px" title="Student School Relationship - Pulse 1">Student School Relationship - Pulse 1 </div>
                                                            </td>
                                                            <td>
                                                                <span className="text-muted">Nov 20, 2022 - Dec 20, 2022</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-left" style={{position: 'relative'}}>100%</span>
                                                                <div className="progress prgrs-wd-cstm my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline'}}>
                                                                    <div className="progress-bar primary" style={{width: `100%`}} />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <Link to="">
                                                                    <button class="modalGrayBtn wd-74px">View</button>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <Dropdown className="item-action dropdown">
                                                                    <Dropdown.Toggle className="drpdwnbtn pr-0 pl-0">
                                                                        <i className="fa fa-fw fa-ellipsis-v" />
                                                                    </Dropdown.Toggle >
                                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                        <Dropdown.Item className="dropdown-item crsr-dsble"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
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

                    </div>
                    <br />
                    </div>
                </div>
            </div>

        </div>
    </div>
}

// export default Details;