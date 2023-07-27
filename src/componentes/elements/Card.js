import ButtonB from './ButtonB';
import styles from './Card.module.css';

function Card(){
    return(
        <div className={styles.card}>
            <h2>Projeto XPTO</h2>
            <p>
                Tecnologias: HTML, CSS, JS
                Projeto Front-End para realizar
                pipipi e popo.
            </p>
            <ButtonB text='Acesse o repositório'></ButtonB>
        </div>
    )
}

export default Card