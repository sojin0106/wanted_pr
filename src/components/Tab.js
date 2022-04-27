import React from 'react';
import styled from "styled-components";
import { useState } from 'react';




const Tab = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const content = [
        {
            tab: "감자"
        },
        {
            tab: "고구마"
        },
        {
            tab: "카레"
        }
    ]

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };

    return (
        <Wrap>
            <h1>Tap</h1>
            <TabMenu>
                {content.map((section, index) => {
                    return (
                        <li
                            key={index}
                            className={currentTab === index ? "submenu" : ""}
                            onClick={() => selectMenuHandler(index)}
                        >
                            {section.tab}
                        </li>
                    )
                })}
            </TabMenu>
        </Wrap>
    );
};


const Wrap = styled.div`
    width: 100%;
    margin: auto;
`


const TabMenu = styled.ul`
  display: flex;
  border: none;
  cursor: pointer;
  list-style: none;
  
  li {
      width: 50px;
      margin-right: 20px;
      padding: 10px;
      font-size: 15px;
      
}
  .submenu {
    border-bottom: 2px solid rgb(55 59 59);
  }
  
`



export default Tab;