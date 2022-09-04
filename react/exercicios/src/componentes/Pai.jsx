import React from "react";
import { ChildWithProps } from "../utils/utils";
// import Filho from "./Filho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
      {/* {props.children} */}
      {ChildWithProps(props)}
      {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
      <Filho {...props} /> 
      <Filho {...props} nome="Carla"/> */}
    </ul>
  </div>