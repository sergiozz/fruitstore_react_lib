import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string,
  state: true
}

function handleClick(state :boolean) {
  console.log("se presiono el boton", state)
}

export const ReactLibComponent = ({ text, state }: Props) => {
  return <div className={styles.test}>ReactLib Component: {text}
      
      <br/>  
      <button onClick={() =>handleClick(state)}>
        {state ? 'ON' : 'OFF'}
      </button>
  
  </div>
}
