/* add css module styles here (optional) */
import styled from "styled-components"


export const Cuerpo = styled.div` 
  margin: 1.5em;
  padding: 1em;
  border: 3px solid #000;
  text-align: center;
  color: ${({isPressed}:{isPressed: boolean}) => 
    isPressed ? 'green' : 'blue'
  };
  width: 75%;
`;

export const Titulo = styled.div`
  font-size: 1.3em;
`;

export const Precio = styled.div`
  font-size: 2em;
  color: red;
`;

export const Descripcion = styled.div`
  font-size: 0.8em;
  color: black;
`;

