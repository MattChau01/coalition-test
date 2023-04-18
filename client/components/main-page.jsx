import React from 'react';

export default function MainPage(props) {
  return (
    <>
      <div id="main" className="main of" ref={props.top} >
        <div className="row">
          <div className="col">
            <div className="text-center mt-2" onClick={props.topOfPage}>
              <img style={{ cursor: 'pointer' }} src="./assets/logo.png" />
            </div>
          </div>
          <div className="col text-center">
            <div className="row header wht-txt mt-2">
              <div className="col">
                <a onClick={props.direct1}>01. HISTORY</a>
              </div>
              <div className="col">
                <a onClick={props.direct2}>02. TEAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ft1" className="footer of">
        <div className="row">
          <div className="col">

            <div className="row justify-content-center align-items-center" onClick={props.topOfPage}>
              <div className="text-center">
                <img style={{ cursor: 'pointer' }} src="./assets/logo.png" />
              </div>
              <div className="logo-name pt-3 pl-1" style={{ cursor: 'pointer' }}>
                <p>
                  <span style={{ color: '#4D4D4F' }}>LOSANGELES</span>
                  <br />
                  <span style={{ color: '#3E4D6A' }}>MOUNTAINS</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <div className="row header mt-3 pt-2">
              <div className="col">
                <a onClick={props.direct1}>01. HISTORY</a>
              </div>
              <div className="col">
                <a onClick={props.direct2}>02. TEAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
