import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Galery from '../Galery';
import Contact from '../Contact';
import { Fragment } from 'react/cjs/react.production.min';

function index() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Galery' element={<Galery />} />
        <Route path='/Contact' element={<Contact />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default index;
