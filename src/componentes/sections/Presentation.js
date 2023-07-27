import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';

function Presentation (){
    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem vindo ao meu portfólio</strong></h4>
            <h1>Olá, eu sou o Guilherme Schumann</h1>
            <p>
                Sou apaixonado por design e tecnologia, por isso escolhi me aprofundar em desenvolvimento front-end.<br/>
                Atualmente trabalho como UX/UI Designer, e estou estudando para me tornar um desenvolvedor front-end.<br/>
                Gosto de trazer soluções não apenas funcionais, mas que gerem impacto através de um visual chamativo e elegante,<br/>
                acredito que o design é fundamental para atrair clientes para os produtos ou serviços que a sua empresa oferece.
            </p>
            <ButtonA link='https://github.com/guilherme-schumann' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation