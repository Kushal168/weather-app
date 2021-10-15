import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import sun from "./icons/absolute/sunny.png";

export default function DayCard(props) {
    return (
        <div className="icard">
            <div>
                {/* TEMP DIV */}
                <div className="d-flex" style={{ position: "relative", top: "-50px", marginLeft: "10px" }}>
                    <div>
                        <img src={props.icon} alt="sun" height="60px" width="60px" />
                        <div style={{ marginTop: "10px", fontSize: "50px" }}>92°</div>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <div style={{ position: "relative", top: "-10px" }}><span style={{ fontSize: "30px", fontWeight: "500" }}>Day</span><br /><span style={{ fontSize: "25px", lineHeight: "15px" }}>Mostly Sunny</span></div>
                        <div style={{ position: "relative", top: "17px", fontWeight: "400", fontSize: "18px" }}><span>{props.weather}. High {props.maxtemp}°C</span><br /><span>Wind {props.winddir} at {props.maxwind - 5} to {props.maxwind} kph</span></div>
                    </div>
                </div>

                {/* CIRCULAR RINGS DIV */}
                <div style={{ position: "relative", top: "60px" }}>
                    <div className="d-flex" style={{ marginBottom: "22px" }}>
                        <div className="container">
                            <div className="progresstext">HUMIDITY</div>
                            <div className="progress" style={{ marginRight: "20px" }}>

                                <CircularProgressbar value={66} text={`60%`} />
                            </div>
                        </div>
                        <div>
                            <div className="progresstext">PRECIP</div>
                            <div className="progress" style={{ marginRight: "20px" }}>

                                <CircularProgressbar value={66} text={`60%`} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="container">
                            <div className="progresstext">UV INDEX</div>
                            <div className="progress" style={{ marginRight: "22px" }}>

                                <CircularProgressbar value={66} text={`60%`} />
                            </div>
                        </div>
                        <div>
                            <div className="progresstext" style={{visibility: "hidden"}}>COMPASS</div>
                            <div className="progress" style={{ marginRight: "22px" }}>

                                <CircularProgressbar value={66} text={`60%`} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
