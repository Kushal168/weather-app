import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DayCard(props) {
    let iconurl = "//cdn.weatherapi.com/weather/64x64/day/";
    let icon = (props.icon).substring((props.icon).length - 7);
    iconurl += icon;
    const compassDir = (dir) => {
        if(dir === "N"){
            return "1"
        }
        else if(dir === "E"){
            return "3"
        }
        else if(dir === "S"){
            return "5"
        }
        else if(dir === "W"){
            return "7"
        }
        else if(dir === "NNE" || dir === "ENE" || dir === "NE"){
            return "2"
        }
        else if(dir === "ESE" || dir === "SSE" || dir === "SE"){
            return "4"
        }
        else if(dir === "SSW" || dir === "WSW" || dir === "SW"){
            return "6"
        }
        else if(dir === "WNW" || dir === "NNW" || dir === "NW"){
            return "8"
        }
        else{
            return "0"
        }
    }
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
                        <div style={{ position: "relative", top: "-10px" }}><span style={{ fontSize: "30px", fontWeight: "500" }}>Day</span><br /><span style={{ fontSize: "25px", lineHeight: "15px" }}>{props.weather}</span></div>
                        <div style={{ position: "relative", top: "17px", fontWeight: "400", fontSize: "18px" }}><span>{props.weather}. High {props.maxtemp}°C</span><br /><span>Wind {props.winddir} at {props.maxwind - 5} to {props.maxwind} kph</span></div>
                    </div>
                </div>

                {/* CIRCULAR RINGS DIV */}
                {console.log(props.humidity)}
                <div style={{ position: "relative", top: "55px" }}>
                    <div className="d-flex" style={{ marginBottom: "22px" }}>
                        <div className="container">
                            <div className="progresstext">HUMIDITY</div>
                            <div className="progress" style={{ marginRight: "20px" }}>

                                <CircularProgressbar value={props.humidity} text={`${props.humidity}%`} />
                            </div>
                        </div>
                        <div>
                            <div className="progresstext">PRECIP</div>
                            <div className="progress" style={{ marginRight: "20px" }}>

                                <CircularProgressbar value={props.precip} text={`${props.precip}%`} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="container">
                            <div className="progresstext">UV INDEX</div>
                            <div className="progress" style={{ marginRight: "22px" }}>

                                <CircularProgressbar value={props.uv*10} text={`${props.uv}`} />
                            </div>
                        </div>
                        <div>
                            <div className="progresstext1 d-flex" style={{fontSize: "15px", fontWeight: "500", marginTop: "7px"}}>
                                <span className="n" style={{position: "relative", left: "18px"}}><span style={{fontSize: "15px"}}>(Wind)</span> N</span><span className="e" style={{position:"relative", top:"80px", left: "83px"}}>E</span><span className="w" style={{position:"relative", top:"80px", right: "90px"}}>W</span><span className="s" style={{position:"relative", top:"160px", left: "-20px"}}>S</span>
                            </div>
                            <div className="progress" style={{ marginRight: "22px" }}>
                                <div className="compassO">
                                    <div className="compassI">
                                        <div className={`compass compassP${compassDir(props.winddir)}`}>
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
