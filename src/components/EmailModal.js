import React from 'react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

function EmailModal(){
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [msgsender, setMsgSender] = useState("");

    (function() {
        emailjs.init("R_r3HaemR5SR6ubs-");
      })();

    const sendEmail = (e) => {
        e.preventDefault();

        if(subject.length != 0 && msgsender.length != 0 && msgsender.length != 0){
            if(msgsender.match( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

                var templateParams = {
                    from_email: msgsender.toString(),
                    message: message.toString(),
                    sender_subject: subject.toString()
                };

                emailjs.send('service_42nvh6f', 'template_ge49vui', templateParams)
                .then(function(response) {
                    setMessage("");
                    setMsgSender("");
                    setSubject("");
                    alert("Thank you for your email. I have received it and will get back to you shortly");
                    //console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    alert("Unable to send email at this time.");
                    //console.log('FAILED...', error);
                });
            }
            else{
                alert("U sure that's your correct email?");
                setMsgSender("");
            }
        }
        else{
            alert("Make sure to fill all inputs to send the email : )");
        }
    }

    return (
        <>
            <div className="modal fade" id="emailMeModal" tabIndex="-1" aria-labelledby="emailMeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="emailMeModalLabel">Email Me!!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={sendEmail}>
                            <div className="modal-body">
                                    <div className="mb-3">
                                    <i className="bi bi-envelope-fill greenColor wave h5"></i> <span className="ms-1 fw-bold">To:</span> adityakdpatel@gmail.com
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email-sender" className="col-form-label">Your Email Address:</label>
                                        <input type="text" className="form-control" value={msgsender} id="email-sender" onChange={(e) => { setMsgSender(e.target.value)}} autoComplete='off'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email-subject" className="col-form-label">Subject:</label>
                                        <input type="text" className="form-control" value={subject} id="email-subject" onChange={(e) => { setSubject(e.target.value)}} autoComplete='off'/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" value={message} id="message-text" onChange={(e) => { setMessage(e.target.value)}}></textarea>
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Send Email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailModal
