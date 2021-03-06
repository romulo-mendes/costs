
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import Container from './container/Container';
import logo from '../../img/costs_logo.png'

// import { Container } from './styles';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"><img src={logo} alt="Costs logo"/></Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">Home</Link></li>
          <li className={styles.item}><Link to="/Projects">Projetos</Link></li>
          <li className={styles.item}><Link to="/Company">Empresa</Link></li>
          <li className={styles.item}><Link to="/Contact">Contato</Link></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;