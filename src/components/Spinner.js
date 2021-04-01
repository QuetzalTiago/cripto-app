import React from "react";
import "./Spinner.css";
import styled from "@emotion/styled";

const SpinnerContainer = styled.div`
  margin: 50px auto;
`;

const Spinner = () => {
  return (
    <SpinnerContainer className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </SpinnerContainer>
  );
};

export default Spinner;
