//import "./styles.css";
import styles from "./Card.module.sass";

const Card = () => {
    return (
        <section className={styles.card}>
            <h1>Kratos</h1>
            <img src="https://i.etsystatic.com/12907296/r/il/14966e/1014239768/il_fullxfull.1014239768_5511.jpg" alt="card" />
            <p>Kratos es un personaje de la serie de videojuegos God of War. Es un guerrero espartano que busca venganza contra los dioses griegos por el asesinato de su familia.</p>
        </section>
    )
}

export default Card;