import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
`;

const Option = styled.option`
  font-size: 1rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  //state
  const [state, actualizarState] = useState("");

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => actualizarState(e.target.value)}>
        <Option>-Seleccione-</Option>
        {/* {opciones.map((opcion) => (
          <Option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </Option>
        ))} */}
      </Select>
    </Fragment>
  );

  //Retornar state, interfaz y fn que modifica el state
  return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
