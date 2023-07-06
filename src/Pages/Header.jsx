import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <Link to={'/Home'}>
          <li>Accueil</li>
        </Link>
        <Link to={'/Galery'}>
          <li>Galerie</li>
        </Link>
        <Link to={'/Contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
