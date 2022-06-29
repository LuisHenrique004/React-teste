import { useState } from 'react';

function Home() {
    return(
        <div>
         <h3>Home</h3>
         <Contador/>
        </div>  
    )  
}

function Contador() {
    const [contador, setContador] = useState(1);

    function addContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick = {addContador}>adicionar</button>
        </div>
    )
}

export default Home