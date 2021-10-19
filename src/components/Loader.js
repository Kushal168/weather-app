import React from 'react';
import load from './icons/loading-waiting.gif'

export default function Loader() {
    return (
        <div className="loader" style={{position: 'absolute'}}>
            <img src={load} alt="Loader" height="100px" width="100px"/>
        </div>
    )
}
