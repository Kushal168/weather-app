import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import sun from "./icons/absolute/crescent-moon.png";

export default function DayCard(props) {
    let iconurl = "//cdn.weatherapi.com/weather/64x64/night/";
    let icon = (props.icon).substring((props.icon).length - 7);
    iconurl += icon;
    return (
        <div className="icard">
            <div>
                {/* TEMP DIV */}
                <div className="d-flex" style={{ position: "relative", top: "-50px", marginLeft: "10px" }}>
                    <div>
                        <img src={iconurl} alt="sun" height="60px" width="60px" />
                        <div style={{ marginTop: "10px", fontSize: "50px" }}>{props.ctemp}°</div>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <div style={{ position: "relative", top: "-10px" }}><span style={{ fontSize: "30px", fontWeight: "500" }}>Night</span><br /><span style={{ fontSize: "25px", lineHeight: "15px" }}>{props.weather}</span></div>
                        <div style={{ position: "relative", top: "17px", fontWeight: "400", fontSize: "18px" }}><span>{props.weather}. Low {props.mintemp}°C</span><br /><span>Wind {props.winddir} at {props.maxwind - 5} to {props.maxwind} kph</span></div>
                    </div>
                </div>

                {/* CIRCULAR RINGS DIV */}
                <div style={{ position: "relative", top: "55px" }}>
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
                            <div className="progresstext1 d-flex" style={{fontSize: "15px", fontWeight: "500", marginTop: "7px"}}>
                                <span className="n" style={{position: "relative", left: "63px"}}>N</span><span className="e" style={{position:"relative", top:"80px", left: "133px"}}>E</span><span className="w" style={{position:"relative", top:"80px", right: "40px"}}>W</span><span className="s" style={{position:"relative", top:"160px", left: "30px"}}>S</span>
                            </div>
                            <div className="progress" style={{ marginRight: "22px" }}>
                                <div className="compassO">
                                    <div className="compassI">
                                        <div className="compass compassP1">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
