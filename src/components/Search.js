import React from 'react'

export default function Search(props) {
    const newloc = () => {
        let val = document.getElementById("search").innerHTML;
        props.changeLoc(val);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Weather</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                    <span className="d-flex">
                        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={newloc}>Search</button>
                    </span>
                </div>
            </nav>
            <div style={{height: "50px", backgroundColor: "red", display: "flex", alignItems:"center"}}><span className="mx-2">{props.loc}</span></div>
        </div>
    )
}
