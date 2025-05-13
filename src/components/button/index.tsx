import style from "./style.module.css"
// Tipagem do componente
type Props = React.ComponentProps<"button"> & {
    name: string
    
}
// Criação do componente com propriedades e metodos
export function Button({name, ...rest}: Props){
    return (
        <button className={style.container} {...rest}>
            <span>
                {name}

            </span>
        </button>
    )
}