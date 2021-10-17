import React from 'react';
import sundial from './icons/sundial.png';

export default function TodayCard(props) {
    return (
        <div>
            <div className="icard">
                <div>
                    <div className="ititle" style={{marginLeft: '10px'}}>Sun</div>
                    <div className="sundial" style={{marginTop: '70px', marginBottom: '50px'}}>
                        <div style={{ textAlign: "center" }}>
                            <img src={sundial} alt="Sundial" height="140px"/>
                            <br /><span className="progresstext">Sunrise<span style={{ visibility: "hidden" }}>.................................</span>Sunset</span>
                        </div>
                        <span style={{ fontSize: "23px", fontWeight: '450' , marginLeft: '15px'}}>{props.srise}<span style={{ visibility: "hidden" }}>...........................</span>{props.sset}</span>
                    </div>
                    <div className="ititle" style={{marginBottom: '40px', marginLeft: '10px'}}>
                        Moon
                    </div>
                    <div style={{ textAlign: "center", fontSize: "25px", fontWeight: "400" }}>
                        Moon Illumination
                        <p>{props.illu}%</p>
                    </div>
                    <div style={{marginTop: '40px'}}>
                        <span className="progresstext" style={{marginLeft: '15px'}}>MOON RISE <span style={{ visibility: "hidden" }}>...................</span> MOON SET</span>
                        <div>
                            <span style={{ fontSize: "23px", fontWeight: '450' , marginLeft: '10px'}}>{props.mrise}<span style={{ visibility: "hidden" }}>.......................</span> {props.mset}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
