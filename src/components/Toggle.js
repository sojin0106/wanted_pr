import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Toggle = () => {
    const [toggle, setToggle] = useState(null);
    const [prevClick, setPrevClick] = useState(null);

    const clickedToggle = (e) => {
        setToggle(e.target.id)
    };

    React.useEffect(
        (e) => {
            if (toggle !== null) {
                let current = document.getElementById(toggle);
                current.style.color = "#000000";
                current.style.backgroundColor = "#ffffff";

            }
            if (prevClick !== null) {
                let prev = document.getElementById(prevClick);
                prev.style.color = "#ffffff";
                prev.style.backgroundColor = "rgb(178 178 178)";
            }
            setPrevClick(toggle);
        },
        [toggle]
    );

    return (
        <div>
            <h1>Toggle</h1>
            <Wrap>
                <ToggleBtn onClick={clickedToggle} toggle={toggle} id="basic">기본</ToggleBtn>
                <ToggleBtn onClick={clickedToggle} toggle={toggle} id="detail">상세</ToggleBtn>
            </Wrap>
        </div>
    );
}

const Wrap = styled.div`
    width:260px;
    height: 50px;
    background-color:rgb(178 178 178);
    padding: 3px;
    border-radius: 30px;
`

const ToggleBtn = styled.button`
  width: 49%;
  height: 100%;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  background-color: rgb(178 178 178);
  transition: all 0.5s ease-in-out;
`;

export default Toggle;