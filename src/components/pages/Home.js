import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
  return(
     <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Seu Orçamento</span></h1>
      <p>Controle, planeje e gerencie seu orçamento!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  )
}

export default Home