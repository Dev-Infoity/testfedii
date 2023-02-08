import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { HeaderTchrrrdashboardSrvy } from '../headertchrdashboardsrvy';
import '../AllJs/dashboard-staff.js';
import useLoader from "../useLoader";
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const SurveyViewTeacherPage = () => {
    const [loader, showLoader, hideLoader] = useLoader();

    useEffect(() => {
        showLoader();
        $('#login').hide();
      }, []);

    const dataFetchedRefsurvey = useRef(false);
    const dataFetchedRefsurveyquestion = useRef(false);
    const [surveyquestionlist, setsurveyquestionlist] = useState([]);
    const [surveyquestiontopiclist, setsurveyquestiontopiclist] = useState([]);
    const [teachername, setteachername] = useState("");
    const [subjectname, setsubjectname] = useState("");
    const [surveyname, setsurveyname] = useState("");
    const [participantName, setParticipantName] = useState("");
    const [targetName, setTargetName] = useState("");
    const [schoolmasterid, setSchoolMasterid] = useState("");
    const [teachermasterid, setteachermasterid] = useState("");
    const [pulseid, setPulseid] = useState("");

    const sessionpulseid = sessionStorage.getItem('pulseidsession');
    const sessionstudentid = sessionStorage.getItem('studentidsession');
    const ifteacherorschoolsession = sessionStorage.getItem('ifteacherorschool');
    const sessiontargetteacherid = sessionStorage.getItem('sessiontargetteacherid');
    var staffidsession = sessionStorage.getItem("staffidsession");

    if(staffidsession == null) {
        window.location.href="/";
    }
    else {}
    
    React.useEffect(
        ()=> {
       
            //staffid
            //alert(staffidsession + " " +sessionpulseid);

            fetch('https://entity-feediiapi.azurewebsites.net/api/Student/getSurveyTopicandQuestiondetailView/' + sessionpulseid + "-" + "Teacher" + "-" + "School" + "-" + staffidsession + "-" + 0 , {        //pulseid
            method: 'GET'
            }) .then((response) => response.json())
            .then((data) => {
            if (dataFetchedRefsurveyquestion.current) return;
            dataFetchedRefsurveyquestion.current = true;
            
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            setsurveyquestiontopiclist(data);

            hideLoader();
            $('#login').show();
          })

          
           
            fetch('https://entity-feediiapi.azurewebsites.net/api/Staff/getSchoolStaffSurveyquestion/' + staffidsession + "-" + sessionpulseid,  {        //studentid-staffid-pulseid
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
            setSchoolMasterid(data[0].SchoolmasterId);
            setteachermasterid(data[0].StaffmasterId);
            setParticipantName(data[0].participant);
            setTargetName(data[0].target);
            setPulseid(data[0].pulseId);
            setsurveyquestionlist(data);

            hideLoader();
            $('#login').show();
          
            
          })

        

        
        })

        const uniqueTags = [];
        surveyquestionlist.map(clist => {
            if (uniqueTags.indexOf(clist.topic) === -1) {
                uniqueTags.push(clist.topic);
            }
        });

        const uniquequestions = [];
        surveyquestionlist.map(clist => {
            if (uniquequestions.indexOf(clist.question) === -1) {
                uniquequestions.push(clist.question);
            }
        });

        const gobck = () => {
            window.history.go(-1); 
            return false;
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
                                        <div onClick={gobck} className="srvylnkbtnnn">
                                            <i className="fa fa-chevron-left mr-2"></i>
                                            <span>All Surveys</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 row m-0">
                                    <div className="col-sm-2">
                                        <div>
                                            <img src="../Images/usergreen.png" className="imgbrdrnwsrypg" width={100} alt="User Image" />
                                        </div>
                                    </div>
                                    <div className="col-sm-7 pl-0">
                                        <div className="mt-15px">
                                            <div className="usrnmsrvypgdnw">{teachername}</div>
                                            <div className="usrgrdsrvypgdnw">{subjectname}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        
                                    </div>
                                </div>
                            </div>

                            <div>
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
                                                                
                                                      return(  
                                                        <div className="dshbrd-dvv1 pl-0 pr-0 pt-0">
                                                            <div className="col-sm-12">
                                                            <div className="col-sm-12 mt-3 pl-4">
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
                                                                                                <div className= {`srvyndv7 ${ que.optionstatus }`}>
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
                                                                    {(function() {
                                                                        if(questionans.comment == "") {
                                                                            return(
                                                                                <div className="srvyndv10 mt-4">
                                                                                    <div className="srvyndv11">
                                                                                        <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" readOnly>No comment</textarea>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                        else {
                                                                            return (
                                                                                <div className="srvyndv10 mt-4">
                                                                                    <div className="srvyndv11">
                                                                                        <textarea className="srvyndv12" id="usrssrvycmnts" name="usrssrvycmnts" rows="4" readOnly>{questionans.comment}</textarea>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                        })()
                                                                    }
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            
                                                           
                                                        </div>
                                                      )
                                                    }
                                                            
                                                })}
                                                    </div>
                                                ))}
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