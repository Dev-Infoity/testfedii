import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { HeaderTchrrrdashboardSrvy } from '../headertchrdashboardsrvy';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link, json } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const SurveyRunTeacherPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => {
        setShowModal2(true);
    }

    const [showModal3, setShowModal3] = useState(false);
    const handleCloseModal3 = () => setShowModal3(false);
    const handleShowModal3 = () => {
        //alert(JSON.stringify(allvaluesdatalist));
        setlistfinaltosave(allvaluesdatalist)
        setShowModal3(true);
        
    }

    const [showModal4, setShowModal4] = useState(false);
    const handleCloseModal4 = () => setShowModal4(false);
    const handleShowModal4 = () => {
        setShowModal4(true);
        
    }

    const dataFetchedRefsurvey = useRef(false);
    const dataFetchedRefsurveyquestion = useRef(false);
    const [surveyquestionlist, setsurveyquestionlist] = useState([]);
    const [surveyquestiontopiclist, setsurveyquestiontopiclist] = useState([]);
    const [teachername, setteachername] = useState("");
    const [subjectname, setsubjectname] = useState("");
    const [surveyname, setsurveyname] = useState("");
    const [participantName, setParticipantName] = useState("");
    const [targetName, setTargetName] = useState("");
    const [schoolMasterid, setschoolmasterid] = useState("");
    const [teachermasterid, setteachermasterid] = useState("");
    const [pulseid, setPulseid] = useState("");
    const [schoolCode, setSchoolCode] = useState("");
   
   const [listfinaltosave,setlistfinaltosave] = useState([]);
   const [updatedlisttosave,setupdatedlisttosave] = useState([]);
    
   const sessionpulseid = sessionStorage.getItem('pulseidsession');
   const sessionstudentid = sessionStorage.getItem('studentidsession');
   const ifteacherorschoolsession = sessionStorage.getItem('ifteacherorschool');
   const sessiontargetteacherid = sessionStorage.getItem('sessiontargetteacherid');

   var staffidsession = sessionStorage.getItem("staffidsession");
   const [showDiv, setShowDiv] = useState(false);
   //const tagnameList = [];
   const [showSubmit, setShowSubmit] = useState(false);
   const [tagnameList, setTagnameList] = useState([]);
   const [allvaluesdatalist, setallvaluesdatalist] = useState([]);
   //const allvaluesdatalist = [];

    if(staffidsession == null) {
        window.location.href="/";
    }
    else {}

    React.useEffect(
        ()=> {
            //alert(sessionpulseid + "-" + staffidsession);
            fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getSurveyTopicandQuestiondetail/' + sessionpulseid , {         //pulseid
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsurveyquestion.current) return;
            dataFetchedRefsurveyquestion.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setsurveyquestiontopiclist(data);

            setTimeout(function () {
                hideLoader();
                $('#login').show();
            }, 1000);
          })
           
          
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getSchoolStaffSurveyquestion/' +  staffidsession + "-" + sessionpulseid ,  {        //studentid-staffid-pulseid
            method: 'GET'
            }) .then((response) => response.json())
          .then((data) => {
            if (dataFetchedRefsurvey.current) return;
            dataFetchedRefsurvey.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setteachername(data[0].Schoolname);
            setsubjectname(data[0].subjectname);
            setsurveyname(data[0].pulsename);
            setschoolmasterid(data[0].SchoolmasterId);
            setteachermasterid(data[0].Staffmasterid);
            setParticipantName(data[0].participant);
            setTargetName(data[0].target);
            setPulseid(data[0].pulseId);
            setsurveyquestionlist(data);
            setSchoolCode(data[0].schoolCode);

            setTimeout(function () {
                hideLoader();
                $('#login').show();
            }, 1000);
          
            
          })


        const uniquequestions = [];
        surveyquestionlist.map(clist => {
            if (uniquequestions.indexOf(clist.question) === -1) {
                uniquequestions.push(clist.question);
            }
        });

         //alert("tagname - " + tagnameList.length);
         //alert("uniquename - " + uniquequestions.length);
          if (tagnameList.length === uniquequestions.length) {
            setShowSubmit(true);
        } else {
            setShowSubmit(false);
        }
                 
        })

        const uniqueTags = [];
        surveyquestionlist.map(clist => {
            if (uniqueTags.indexOf(clist.topic) === -1) {
                uniqueTags.push(clist.topic);
            }
        });

        
        const allvaluescommentdatalist = [];
        const savedataoptions = [];
        

        const srvyoptnvl = (queidd, optnval) => {
                      //alert(queidd+ "----" + optnval); 
            const found = allvaluesdatalist.findIndex(element => element.questionid == queidd);
            if(found == -1)
            {      
               
                setallvaluesdatalist([...allvaluesdatalist,({ questionid: queidd, optionid: optnval})])
            }
            else{
                
                allvaluesdatalist.splice(found, 1);          
                setallvaluesdatalist([...allvaluesdatalist,({ questionid: queidd, optionid: optnval})])
            }

            
            const found3=tagnameList.findIndex(element => element == queidd);
            if(found3 == -1)
            {                           
                setTagnameList([...tagnameList, queidd])
            }
          
        }

       

        const saveapi = () => {

            $('#mdlbtnlodr3').removeClass('hide');
            $('#mdlbtntxt3').addClass('hide');
            $('#mdlbtnn3n').addClass('mdldsblbtnnoacnn');
      
       
            listfinaltosave.forEach(function (arrayItem) {
                var x = arrayItem.optionid ;
                
                savedataoptions.push({ pulseId : pulseid, participantId : teachermasterid,targetId:schoolMasterid,surveyOptionId :arrayItem.optionid,surveyquestionId :arrayItem.questionid,comment :""})
            
            });
        
        
            const ele = document.getElementsByTagName('textarea');
            for (var i = 0; i <= ele.length - 1; i++) {
            if (ele[i].value != '')
                {
                    allvaluescommentdatalist.push({ questionid: ele[i].id, comment: ele[i].value})
                }
            else {
                allvaluescommentdatalist.push({ questionid: ele[i].id, comment: ele[i].value})
                
            }
            }
        
            
            allvaluescommentdatalist.forEach(function (item) {
                var y=item.questionid;

                for (var i in savedataoptions) {
                    if (savedataoptions[i].surveyquestionId == item.questionid) {
                        savedataoptions[i].comment = item.comment;
                    //Stop this loop, we found it!
                    }
                }
                
            })
        
        
            fetch('https://entity-feediiapi.azurewebsites.net/api/student/saveallsurveyResponse', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',  
                        'Content-Type': 'application/json',  
                        'Access-Control-Allow-Origin': '*',  
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',  
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    body: JSON.stringify(savedataoptions)
                    }).then((data) => {
                      
                        window.location.href = "/tch/surveybyme";
                        //console.log("test data - " + JSON.stringify(data));
                       
                    })
                    .catch(error =>{
                        console.log(error);
                        $('#mdlbtnlodr3').addClass('hide');
                        $('#mdlbtntxt3').removeClass('hide');
                        $('#mdlbtnn3n').removeClass('mdldsblbtnnoacnn');
                    });  

      
        }

    const gobck = () => {
        window.history.go(-1); 
        return false;
    }

    const shwloader = () => {
        $('#mdlbtnlodr2').removeClass('hide');
        $('#mdlbtntxt2').addClass('hide');
    }

    // const svfrmbtn = () => {

    //     const uniqueTags = [];
    //     var allfieldsave = false;
    //     tagnameList.map(clist => {
           
    //             if (uniqueTags.indexOf(clist) === -1) {
    //                 uniqueTags.push(clist)
    //             }
            
    //     });

    //     console.log(uniqueTags);
        
    //     uniqueTags.forEach(element => {

    //        // var errdv = document.getElementsByName(element);
    //        console.log("show div " + showDiv);
    //         var radios = document.getElementsByName(element);
    //         var formValid = false;

    //         var i = 0;

    //         while (!formValid && i < radios.length) {
    //             if (radios[i].checked) formValid = true;
    //             i++;        
    //         }

            
    //         if (!formValid) {
    //             //alert("Must check some option!");
    //             //document.getElementsByClassName(element).show();
    //            // errdv.show();
    //            setShowDiv(!showDiv)
               
    //         }
    //         else {
                
    //            // setShowDiv(false)
    //             ///handleCloseModal3();
    //         }

            
    //     });
        
    // }

    if(uniqueTags.length == 0) {
        $('#errdv1').show();
        $('.tbldtaa1').hide();
        $('.tbldv11').hide();
    }
    else {
        $('.tbldtaa1').show();
        $('#errdv1').hide();
        $('.tbldv11').show();
    }
        
    return <div>
        <HeaderTchrrrdashboardSrvy />
        {loader}
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding mbvwpd">
                <div className="row tab-content mb-3 mt-4">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active cstmsrvytmppdd" id="tab1">
                        <div className="col-sm-12 col-md-12" id="survytbl">
                            <div>
                                <div className="col-sm-12">
                                    <div className="col-sm-12 mb-4">
                                        <div onClick={() => { handleShowModal2();}} className="srvylnkbtnnn">
                                            <i className="fa fa-chevron-left mr-2"></i>
                                            <span>All Surveys</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 row m-0">
                                    <div className="col-sm-2">
                                        {(() => {
                                            if(targetName === "School") {
                                                return(
                                                    <div>
                                                        <img src="../Images/school-img1.svg" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                                    </div>
                                                );
                                            }
                                            else {
                                            return(
                                                <div>
                                                    <img src="../Images/usergreen.png" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                                </div>
                                            );    
                                            }
                                        })()}
                                    </div>
                                    <div className="col-sm-7 pl-0">
                                        <div className="mt-15px">
                                            <div className="usrnmsrvypgdnw">{teachername}</div>
                                           
                                            {(() => {
                                                if(targetName === "School") {
                                                    return(
                                                        <div className="usrgrdsrvypgdnw">School Code - {schoolCode}</div>
                                                    );
                                                }
                                                else {
                                                return(
                                                    <div className="usrgrdsrvypgdnw">{subjectname}</div>
                                                );    
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-3 text-right">
                                        <div className="mt-15">
                                            <Link to="">
                                                <button className="modalGrayBtn btn1srvynwpgdsgn cstmmbtnn" onClick={() => { handleShowModal2();}}>Finish Later</button>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div id="errdv1" className="mt-5 col-sm-12">
                                <div className="col-sm-12">
                                    <div className="nodtadv1">
                                        <div>
                                            <img className="nodtadv1img" src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" width="150" alt="Error Image" />
                                            <div className="nodtadv1txt">No Data Found</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tbldtaa1">
                                <div className="col-sm-12">
                                    <div className="mt-5">
                                        <div>
                                            <div className="col-sm-12 bgclrblu">
                                                <div className="dshbrd-dvv1 pl-0 pr-0">
                                                    <div className="col-sm-12">
                                                        <h4 className="text-truncate srvynwdvh4 mb-0 mt-0">{surveyname}</h4>
                                                        <div className="tbltddv col-sm-12 pl-10px">
                                                            <div className="tbltddv2 cstmwdtbldv mb-2 mt--5px">{participantName} <img src="/Images/left-long-arrow.svg" width="20" alt="Arrow Image" className="srvytblrytarwimg" /> {targetName} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                {uniqueTags.map((topics)=>(
                             
                                                    <div>
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 hdngbgcstm pt-2 pb-2">
                                                            <div className="col-sm-12">
                                                                <h4 className="text-truncate ssrvydvhdng2 srvynwdvh4">{topics}</h4>
                                                            </div>
                                                        </div>
                                                        {surveyquestiontopiclist.map((questionans)=>{
                                                        
                                                            if(topics == questionans.Topic) {
                                                                
                                                             return(  <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12">

                                                                
                                                                <div className="col-sm-12 mt-3 pl-4" id="nwfrmdv11">
                                                                    <h5 className="srvynwdvh5">{questionans.sno}. {questionans.question} </h5>
                                                                    
                                                                    <div>
                                                                        <div>
                                                                            <div className="srvyndv1">
                                                                               
                                                                            {surveyquestionlist.map((que)=>{
                                                        
                                                                             if(questionans.question == que.question) {
                                                                              
                                                                             return( 
                                                                                <div className="srvyndv2">
                                                                                    <div className="srvyndv3">
                                                                                        <div className="srvyndv4">
                                                                                            <label className="srvyndv5">
                                                                                                <input className="srvyndv6" type="radio" value={que.surveyoptionId} id={que.surveyquestionId} height="100%" name={que.surveyquestionId} onClick={() => { srvyoptnvl(que.surveyquestionId, que.surveyoptionId);}} />
                                                                                                <div className="srvyndv7">
                                                                                                    <div>
                                                                                                        <div className="srvyndv8">{que.weightage}</div>
                                                                                                        <div className="srvyndv9">{que.options}</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )}})}                                                                                               
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="srvyndv10 mt-4">
                                                                            <div className="srvyndv11">
                                                                                <textarea className="srvyndv12 srvycmnttxt" rows="4" id={questionans.commentId} maxLength="200" placeholder="Add Comment" ></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="mt-2 mb-3">
                                                                        <div className={questionans.surveyquestionId} name={questionans.surveyquestionId} style={{display: 'none'}}>
                                                                            <p style={{color: 'red'}}> Please select option from every question! </p>
                                                                        </div>
                                                                    </div> */}
                                                                    {/* {showDiv && <div>This is my div</div>} */}
                                                                    {/* { showDiv ? <div>This is my div</div> : null } */}

                                                                </div>
                                                                   
                                                            </div>
                                                            
                                                           
                                                        </div>)
                                                            }
                                                            
                                                            })}
                                                    </div>
                                                    ))}
                                                    <div className="dshbrd-dvv1 pl-0 pr-0 pt-4 pb-4">
                                                        <div className="text-right">
                                                            <div>
                                                                {/* <button className="modalGrayBtn mnwd-13p mr-3 cstmmbtnn" onClick={() => { handleShowModal2();}}>Finish Later</button> */}
                                                                { showSubmit ? <button className="modalRedBtn mnwd-13p mr-4 cstmmbtnn" onClick={() => { handleShowModal3();}}>Submit Survey</button> : <button className="modalGrayBtn mnwd-13p mr-4 cstmmbtnn" onClick={() => { handleShowModal4();}}>Submit Survey</button> }
                                                            </div>
                                                        </div>
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


        <Modal show={showModal2} onHide={handleCloseModal2} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to leave this page? Any changes you have made will not be saved.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal2}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" onClick={() => {gobck(); shwloader();}} style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr2" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt2">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showModal3} onHide={handleCloseModal3} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to submit?</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal3}>
                Cancel
            </Button>
            <Button variant="secondary modalRedBtn" id="mdlbtnn3n" onClick={() => { saveapi();}} style={{minWidth: '90px'}}>
                <span id="mdlbtnlodr3" className="hide">
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '12px'}}></i>
                </span>
                <span id="mdlbtntxt3">Confirm</span>
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showModal4} onHide={handleCloseModal4} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>To ensure that our survey results are as useful and informative as possible, we request that you answer all of the questions. Your participation is greatly appreciated.</p>
            </Modal.Body>
            <Modal.Footer className="brdr-tp">
            <Button variant="primary modalGrayBtn" onClick={handleCloseModal4}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        
    </div>
}

// export default Details;