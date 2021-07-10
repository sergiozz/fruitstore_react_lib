import React,  {FunctionComponent, useState} from 'react'
import {Cuerpo, Titulo, Precio, Descripcion } from './styles.module'

interface Props {
  producto: string
  text: string
  precio: string
}

export const ReactLibComponent: FunctionComponent<Props> = (props:Props) => {
  const {precio, producto, text } = props;

  const [isPressed, setIsPressed] = useState<boolean>(false);
  
  return (
    <Cuerpo isPressed={isPressed} onClick={()=>setIsPressed(!isPressed)}>
      <Titulo> {producto} </Titulo>
      <Precio> ${precio} </Precio>     
      <br/> 
      <Descripcion> {text} </Descripcion>
  </Cuerpo>
  )

}
