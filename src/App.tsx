import "./global.css"
import { Button } from "./components/button"
import style from "./app.module.css"

import { useState, useEffect} from "react"

import { useMessage } from "./hooks/useMessage.ts"


export  function App(){
    // Uso prático do use state
    const [count, setCount] = useState(5)

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        if(count > 0){
            setCount(count - 1)

        }
    }

    const message = useMessage({name: "Tiago", age: 20})

    // Uso prático do useEffect
    // O useEffect pode seer usdao dentro de uma função, hook personalizado e dentro de um componente
    useEffect(()=>{
        console.log(`O valor do count é ${count}`)
        
    },[count])
    return (
        // No caso de repetição de componentes, podemos usar o React.Fragment	ou uma div
        <div className={style.container}>
            <Button name= "Adicionar" onClick={increment } />
                <span>{count}</span>
            <Button name= "Remover"  onClick={decrement} />
    
        </div>
    )
}

