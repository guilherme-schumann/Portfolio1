import styles from './Projects.module.css';
import Card from '../elements/Card';
import ButtonB from '../elements/ButtonB';

function Projects(){
    return(
        <div className={styles.projects}id='Projects'>
            <h1>Projetos</h1>
            <Card/>
            <ButtonB text='Ver Repositório Completo'/>
        </div>
    )
}

export default Projects