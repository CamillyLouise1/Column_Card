import Button from "../Button/Button";
import "./ContainerCard.css";

const ContainerCard = ({imagem, titulo, texto, classe}) => {
    return(
        <article className={classe}>
        <img src={imagem} alt=""/>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Button nomeBotao="Learn More"/>
        </article>
    )
}

export default ContainerCard;