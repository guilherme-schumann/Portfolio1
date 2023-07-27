import styles from './Skills.module.css';
import javascript from '../../image/skills/javascript.svg';
import html from '../../image/skills/html.svg';
import css from '../../image/skills/css.svg';
import react from '../../image/skills/react.svg';
import figma from '../../image/skills/figma.svg';

function Skills (){
    return(
        <div className={styles.skills} id='Skills'>
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>
            <div>
                <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'><img src={javascript}/></a>
                <a href='https://www.w3schools.com/html/'><img src={html}/></a>
                <a href='https://www.w3schools.com/css/'><img src={css}/></a>
                <a href='https://react.dev/'><img src={react}/></a>
                <a href='https://www.figma.com/'><img src={figma}/></a>
            </div>
        </div>
    )
}

export default Skills