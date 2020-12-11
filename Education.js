import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Software Engineering" where="Virtual University" from="November 2020" to="Present"/>
            <Widecard title="SSC | HSC" where="Govt Degree Girls College" from="2018" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    