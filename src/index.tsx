import React,  {FunctionComponent, useState} from 'react'
import styles from './styles.module.css'

interface Props {
  producto: string
  text: string
  precio: string
}

export const ReactLibComponent: FunctionComponent<Props> = (props:Props) => {

  const [isPressed, setIsPressed] = useState<boolean>(false);
  console.log("state: ",isPressed)
  
  return (
    <div className={styles.cuerpo}>
      <div className={styles.titulo}> {props.producto} </div>
      <div className={styles.precio}> ${props.precio} </div>
      <button onClick={()=>setIsPressed(!isPressed)}>
        {isPressed ? "Pedido ✔" : "Pedir un Kg"}
      </button>
      <br/> 
      <div className={styles.descripcion}> {props.text} </div>
  </div>
  )

}
