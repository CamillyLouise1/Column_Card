import ContainerCard from "../ContainerCard/ContainerCard";
import iconeSedan from "../../../column-card/images/icon-sedans.svg"
import iconeSuvs from "../../../column-card/images/icon-suvs.svg"
import iconeLuxury from "../../../column-card/images/icon-luxury.svg"
import "./App.css"

const App = () => {
    return(
     <section>
     <ContainerCard
      imagem={iconeSedan}
      titulo="SEDANS"
      texto="Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Assumenda beatae molestias corporis inventore eos aliquid, rem, minus porro, 
      aspernatur nulla optio architecto veritatis! Atque porro provident ratione facere quo placeat!"
      classe="sedan"
     />
     

     <ContainerCard
     imagem={iconeSuvs}
     titulo="SUVS"
     texto="Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Assumenda beatae molestias corporis inventore eos aliquid, rem, minus porro, 
     aspernatur nulla optio architecto veritatis! Atque porro provident ratione facere quo placeat!"
     classe="suv"
     />
     <ContainerCard
     imagem={iconeLuxury}
     titulo="LUXURY"
     texto="Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Assumenda beatae molestias corporis inventore eos aliquid, rem, minus porro, 
     aspernatur nulla optio architecto veritatis! Atque porro provident ratione facere quo placeat!"
     classe="luxury"
     />
    </section>
     
    )
}

export default App;