import React, { useEffect, useState } from 'react';
import carouselFlowerOne from '../assets/fleurs1.jpg';
import carouselFlowerTwo from '../assets/fleurs2.jpg';
import carouselFlowerThree from '../assets/fleurs3.jpg';
import { Link } from 'react-router-dom';
function Carousel() {
  const [count, setCount] = useState(0);
  if (count > 2) {
    setCount(0);
  } else if (count < 0) {
    setCount(2);
  }
  console.log(count);
  useEffect(() => {
    const pictures = document.querySelectorAll('.containerCarouselPicture');
    pictures.forEach((e) => {
      e.classList.remove('activePicture');
      e.classList.add('not-active');
    });
    pictures[count].classList.add('activePicture');
    pictures[count].classList.remove('not-active');
    pictures[count].style.opacity = '100%';
  });

  return (
    <div className='carrouselContainer'>
      <div className='containerCarouselPicture not-active'>
        <img src={carouselFlowerOne} className='carouselPicture' alt='' />
        <div className='containerCarouselText'>
          <aside>
            <h2>Le bouquet "Printemps éternel"</h2>
            <p>
              Ce magnifique bouquet est composé de tulipes, de jonquilles, de
              narcisses et de freesias, dans des tons vibrants de jaune, rose et
              violet. Ces fleurs fraîches et parfumées apporteront une touche de
              printemps à votre intérieur, ou feront un cadeau parfait pour
              célébrer l'arrivée du printemps.
            </p>
            <Link to={'/Galery'}>
              <button className=''>Voir plus</button>
            </Link>
          </aside>
        </div>
      </div>
      <div className='containerCarouselPicture not-active'>
        <img src={carouselFlowerTwo} className='carouselPicture' alt='' />
        <div className='containerCarouselText'>
          <aside>
            <h2>Le bouquet "Passion" </h2>
            <p>
              Composé de roses rouges profondes et de fleurs exotiques dans des
              tons chauds d'orange et de rouge, ce bouquet évoque la passion et
              la romance. Les fleurs sont habilement arrangées pour créer un
              effet dramatique et luxuriant qui ne manquera pas d'impressionner
              votre bien-aimé(e).
            </p>
            <Link to={'/Galery'}>
              <button className=''>Voir plus</button>
            </Link>
          </aside>
        </div>
      </div>
      <div className='containerCarouselPicture not-active'>
        <img src={carouselFlowerThree} className='carouselPicture' alt='' />
        <div className='containerCarouselText'>
          <aside>
            <h2>Le bouquet "Tendresse" </h2>
            <p>
              Ce bouquet doux et délicat est composé de pivoines, de roses roses
              et de fleurs sauvages dans des tons pastel doux. Les fleurs sont
              arrangées de manière informelle pour créer un look naturel et
              romantique qui fera un cadeau parfait pour une personne chère ou
              pour apporter une touche de douceur à votre intérieur.
            </p>
            <Link to={'/Galery'}>
              <button className=''>Voir plus</button>
            </Link>
          </aside>
        </div>
      </div>
      <div className='containerButton'>
        <p className='carrouselButton' onClick={() => setCount(count + 1)}>
          Gauche
        </p>
        <p className='carrouselButton' onClick={() => setCount(count - 1)}>
          Droite
        </p>
      </div>
    </div>
  );
}

export default Carousel;
