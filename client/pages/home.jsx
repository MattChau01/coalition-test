import React, { useRef } from 'react';
import MainPage from '../components/main-page';
import History from '../components/history';
import Climb from '../components/climb';

import imgOne from '../../server/public/assets/carousel-one.png';
import imgTwo from '../../server/public/assets/carousel-two.png';
import imgThree from '../../server/public/assets/carousel-three.png';
import imgFour from '../../server/public/assets/carousel-four.png';

const images = [
  { id: 0, img: imgOne },
  { id: 1, img: imgTwo },
  { id: 2, img: imgThree },
  { id: 3, img: imgFour }
];

export default function Home(props) {
  const top = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  function topOfPage() {
    top.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function direct1() {
    ref1.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function direct2() {
    ref2.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <MainPage direct1={direct1} direct2={direct2} topOfPage={topOfPage} top={top} />
      <History images={images} ref1={ref1} />
      <Climb ref2={ref2} topOfPage={topOfPage} />
    </div>
  );
}
