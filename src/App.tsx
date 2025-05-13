import "./global.css"
import { Button } from "./components/button"
import style from "./App.module.css"

import { useMessage } from "./hooks/useMessage"


export  function App(){
    const {show} = useMessage({name: "Tiago", age: 20})
    return (
        // No caso de repetição de componentes, podemos usar o React.Fragment	ou uma div
        <div className={style.container}>
            <Button name= "Adicionar" onClick={()=> show("Mensagem do meu hooks")} />
                <span>0</span>
            <Button name= "Remover"  onClick={()=> alert("Removido!")} />
           
        </div>
    )
}

