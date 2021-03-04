import React from 'react'
import {Avatar} from '@material-ui/core';
import './SideAva.css'
function SideAva() {
    return (
        <div className="person__chat">
            <div className="p__c">
                <Avatar/>
            <div className="p__i">
            <h5>room name</h5>
            <p>this is last message</p>
            </div>
            </div>
        </div>
    )
}

export default SideAva
