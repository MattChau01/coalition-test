import React, { useState } from 'react';

import imgOne from '../../server/public/assets/mount-one.png';
import imgTwo from '../../server/public/assets/mount-two.png';

const images = [
  { id: 0, img: imgOne },
  { id: 1, img: imgTwo }
];

export default function Climb(props) {

  const [view, setView] = useState(0);

  function setZero() {
    setView(0);
  }

  function setOne() {
    setView(1);
  }

  return (
    <>
      <div id='v2' style={{
        backgroundColor: '#fff'
      }} className='of' ref={props.ref2}>
        <div className='num-container'>
          <div className="of">
            <div className="row">
              <div className="col-5">
                <div className="text-center mt-3">
                  <div>
                    <span className="num">
                      02.
                    </span>
                    <span className="label">
                      Climb
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-5 mt-5 mr-2 text-center'>
                <div className=''>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mount-tab-bg row of'>
        <div className='col-4 ml-3'>
          <a className='m1'
          style={view === 0 ? { backgroundColor: '#D0D1D9' } : { backgroundColor: '#3e4d6acc', color: '#D0D1D9' }} onClick={setZero}>
            Mountain 1
          </a>
        </div>
        <div className='col'>
          <a className='m2'
          style={view === 1 ? { backgroundColor: '#D0D1D9' } : { backgroundColor: '#3e4d6acc', color: '#D0D1D9' }} onClick={setOne}>
            Mountain 2
          </a>
        </div>
      </div>
      <div className='pt-5 v2 of' style={view === 0 ? { backgroundImage: `url(${images[0].img})` } : { backgroundImage: `url(${images[1].img})` } }>
        <div className='pt-5 pl-2'>
          <div className='pt-5 pl-2'>
            <div className='schedule px-3'>
              <div className='row pl-3'>
                <p className='schedule-header'>
                  SCHEDULE
                </p>
              </div>
              <div>
                {(view === 0)

                  ? <>
                    <div className='row'>
                      <div className='col'>
                        <p>
                          25 Nov 2016
                          <br />
                          25 Nov 2016
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                          Vestibulum viverra
                          <br />
                          Vestibulum viverra
                        </p>
                      </div>
                    </div>
                      &nbsp;
                    <div className='row'>
                      <div className='col'>
                        <p>
                          18 Dec 2016
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                          Vestibulum viverra
                        </p>
                      </div>
                    </div>
                      &nbsp;
                    <div className='row'>
                      <div className='col'>
                        <p>
                          7 Jan 2017
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                          Vestibulum viverra
                        </p>
                      </div>
                    </div>
                  </>

                  : <>
                    <div className='row'>
                      <div className='col'>
                        <p>
                          17 Nov 2016
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                          Vestibulum viverra
                        </p>
                      </div>
                    </div>
                      &nbsp;
                    <div className='row'>
                      <div className='col'>
                        <p>
                          13 Dec 2016
                          <br />
                          28 Dec 2016
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                          Vestibulum viverra
                          <br />
                          Vestibulum viverra
                        </p>
                      </div>
                    </div>
                      &nbsp;
                    <div className='row'>
                      <div className='col'>
                        <p>
                          9 Feb 2017
                        </p>
                      </div>
                      <div className='col'>
                        <p>
                          Vestibulum viverra
                        </p>
                      </div>
                    </div>

                  </>
                }
              </div>

            </div>
          </div>
        </div>
      </div>
      <div id="ft2" className="of">
        <div className="row end-footer">
          <div className="col">
            <div className="row justify-content-center align-items-center" onClick={props.topOfPage}>
              <div className="text-center">
                <img style={{ cursor: 'pointer' }} src="./assets/logo.png" />
              </div>
              <div className="footer-logo-name pt-3 pl-1" style={{ cursor: 'pointer' }}>
                <p>
                  <span >LOSANGELES</span>
                  <br />
                  <span >MOUNTAINS</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <div className="row mt-3 pt-2">
              <div className="col justify-content-center">
                <p className='footer-two'>
                  COPYRIGHT 2016. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
