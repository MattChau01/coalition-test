import React, { useState } from 'react';

export default function History(props) {

  const [count, setCount] = useState(0);

  function setZero() {
    setCount(0);
  }

  function setOne() {
    setCount(1);
  }

  function setTwo() {
    setCount(2);
  }

  function setThree() {
    setCount(3);
  }

  return (

    <div id="v1" className="v1" ref={props.ref1}>

      <div className="of">
        <div className="row">
          <div className="col-5">
            <div className="text-center mt-3">
              <div>
                <span className="num">
                  01.
                </span>
                <span className="label">
                  HISTORY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="text-center px-5 ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, magna ridiculus himenaeos potenti aptent hac nam,
            sapien erat posuere inceptos lacus praesent donec.
          </p>
        </div>
      </div>

      <div className='carousel-bg'>
        <div className='text-center wht-txt carousel-content'>
          <div className='mt-3'>
            <div className='pt-5'>
              <img src={props.images[count].img} className='carousel-img' />
            </div>
            <div style={{
              fontSize: '0.8rem',
              margin: '10px'
            }}>
              <i id='0' className={count === 0 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={setZero} />
              <i id='1' className={count === 1 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={setOne}/>
              <i id='2' className={count === 2 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={setTwo} />
              <i id='3' className={count === 3 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={setThree} />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
