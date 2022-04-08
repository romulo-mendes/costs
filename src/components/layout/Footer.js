import {FaFacebook, FaInstagram, FaLinkedin, FaDiscord} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
        <li><FaDiscord /></li>
      </ul>
      <p className={styles.copy_right}><span>Seu Orçamento</span> &copy; 2021</p>
    </footer>
  );
}

export default Footer;