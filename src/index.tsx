import React,  {FunctionComponent, useState} from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ReactLibComponent: FunctionComponent<Props> = (props:Props) => {

  const [isPressed, setIsPressed] = useState<boolean>(false);
  console.log("state: ",isPressed)
  
  return (
    <div className={styles.test}>ReactLib Component: {props.text}
      
      <br/>  
      <button onClick={()=>setIsPressed(!isPressed)}>
        {isPressed ? "true" : "false"}
      </button>
  
  </div>
  )

}
