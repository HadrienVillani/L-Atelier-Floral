import React, { useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import pictureOne from '../assets/roses.jpg';
import Carousel from './Carousel';
import Contact from './Contact';
import { Link, useLocation } from 'react-router-dom';

const Home = (props) => {
  const location = useLocation();
  window.scrollTo(0, 0);
  useEffect(() => {
    const scrolledElement = document.querySelectorAll('.scrolledElement');
    const headerScroll = document.querySelector('header');
    const carousel = document.querySelector('.carrouselContainer');

    const elementInView = (el, off) => {
      const element = el.getBoundingClientRect().top;
      return element <= window.innerHeight - off;
    };
    const handleScrollAnimation = () => {
      scrolledElement.forEach((e) => {
        if (elementInView(e, 350)) {
          e.classList.add('animation');
        }
      });
    };
    if (location.pathname === '/Home') {
      headerScroll.classList.add('header') ||
        headerScroll.classList.remove('headerPink');
    }
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
      headerScroll.classList.add('headerScrolled');
      headerScroll.classList.remove('header');
      if (carousel.getBoundingClientRect().top >= 0) {
        headerScroll.classList.add('header');
        headerScroll.classList.remove('headerScrolled');
      } else {
        headerScroll.classList.add('headerScrolled');
        headerScroll.classList.remove('header');
      }
    });
  });

  return (
    <Fragment>
      <Carousel />
      <section className='introduction scrolledElement'>
        <div>
          <h5>Artisan fleuriste</h5>
          <h1>L'Atelier Floral</h1>
          <p>
            Bienvenue sur le site de notre fleuriste. Nous sommes spécialisés
            dans la création de bouquets et d'arrangements floraux pour toutes
            les occasions. Que vous cherchiez à offrir des fleurs pour un
            anniversaire, un mariage, une fête des mères, ou simplement pour
            faire plaisir à quelqu'un, notre équipe de professionnels est là
            pour vous aider à choisir les fleurs parfaites pour chaque occasion.
          </p>
          <Link to={'/Galery'}>
            <button>Voir plus</button>
          </Link>
        </div>
      </section>
      <section className='firstPart scrolledElement'>
        <img src={pictureOne} alt='' />
        <div>
          <h2>Nos fleurs</h2>
          <p>
            Nous proposons une large sélection de fleurs fraîches, de plantes
            d'intérieur et d'extérieur, ainsi que des accessoires pour la maison
            et le jardin. Nous sommes fiers de travailler avec des fournisseurs
            locaux pour obtenir les fleurs les plus fraîches et les plus belles
            de la région.
          </p>
        </div>
      </section>
      <section className='secondPart scrolledElement'>
        <div>
          <h2>La livraison</h2>
          <p>
            Nous proposons également des services de livraison de fleurs pour
            ceux qui souhaitent envoyer des fleurs à un être cher ou à un ami.
            Nous livrons dans la région et nous sommes heureux de travailler
            avec vous pour créer un arrangement floral personnalisé qui convient
            à vos besoins et à votre budget.
          </p>
          <p>
            Nous sommes impatients de vous accueillir dans notre boutique de
            fleurs et de vous aider à trouver les fleurs parfaites pour toutes
            les occasions. Merci de nous faire confiance pour vos besoins en
            fleurs.
          </p>
        </div>
      </section>
      <section className='thirdPart scrolledElement'>
        <h2>Etapes de livraisons</h2>
        <aside>
          <div>
            <h3>Passer la commande</h3>
            <p>
              Le client passe une commande pour la livraison de fleurs en
              choisissant le bouquet ou l'arrangement floral souhaité, ainsi que
              la date et l'adresse de livraison.
            </p>
          </div>
          <div>
            <h3>Préparation de la commande</h3>
            <p>
              Le fleuriste commence à préparer la commande en sélectionnant les
              fleurs et les accessoires nécessaires, puis en créant le bouquet
              ou l'arrangement floral.
            </p>
          </div>
          <div>
            <h3>Emballage</h3>
            <p>
              Le bouquet est soigneusement emballé pour éviter les dommages
              pendant le transport.
            </p>
          </div>
          <div>
            <h3>Livraison</h3>
            <p>
              Le fleuriste organise la livraison en s'assurant que le bouquet
              est bien protégé pendant le transport et en respectant les
              instructions de livraison du client. Le livreur peut appeler le
              destinataire pour confirmer l'adresse et s'assurer que quelqu'un
              sera présent pour recevoir le bouquet.
            </p>
          </div>
          <div>
            <h3>Confirmation de la livraison</h3>
            <p>
              Une fois la livraison effectuée, le livreur peut envoyer une
              confirmation au fleuriste, qui à son tour peut informer le client
              que la livraison a été effectuée.
            </p>
          </div>
          <div>
            <h3>Suivi client</h3>
            <p>
              Le fleuriste peut ensuite contacter le client pour s'assurer que
              la livraison a été reçue en bon état et répondre à toute question
              ou préoccupation éventuelle.
            </p>
          </div>
        </aside>
      </section>
      <Contact />
    </Fragment>
  );
};

export default Home;
