import React, { Fragment, useEffect, useState, useRef } from 'react';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';
import { pictures } from '../data/pictures';
const Galery = () => {
  const myRef = useRef(null);
  const mySecondRef = useRef(null);
  const location = useLocation();
  const [allPictures] = useState(pictures);
  const [showItems, setShowItems] = useState(4);

  useEffect(() => {
    window.scrollTo(0, mySecondRef.current.offsetHeight - 550);
    const headerScroll = document.querySelector('header');
    if (location.pathname === '/Galery') {
      headerScroll.classList.add('headerPink');
      headerScroll.classList.remove('header');
      headerScroll.classList.remove('headerScrolled');
    }
  });
  if (showItems > allPictures.length) {
    setShowItems(showItems - 2);
  }
  return (
    <Fragment>
      <section>
        <section className='galeryPart'>
          <h2>Notre galerie photo</h2>
          <aside ref={mySecondRef}>
            {allPictures.slice(0, showItems).map((picture, index) => (
              <img
                key={index}
                src={require('../assets/' + picture.src + '.jpg')}
                alt=''
              />
            ))}
          </aside>
          <button
            ref={myRef}
            id='galeryButton'
            className='galeryButton'
            onClick={() => {
              setShowItems(showItems + 4);
            }}>
            Voir plus
          </button>
        </section>
      </section>
      <Contact />
    </Fragment>
  );
};

export default Galery;
