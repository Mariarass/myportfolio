import React, {forwardRef, useState} from 'react';
import s from './CardProject.module.css'
import styled from "styled-components";
import travel from '../../assets/travel.png'
import {motion} from "framer-motion";


export const CardProject = forwardRef(({card
                                       }, ref) => {

    const [linkMode, setLinkMode] = useState(false)

    return (
        <div ref={ref} className={s.cardContainer}>

            <img src={card.img != '' ? card.img : travel} className={linkMode ? s.img + ' ' + s.imgHover : s.img}
                 onMouseEnter={() => setLinkMode(true)}

            />
            {linkMode && <LinkContainer showed={linkMode}
                                        onMouseLeave={() => setLinkMode(false)}>
                <a href={card.linkDemo} className={s.link} target={"_blank"}>
                    Demo
                </a>
                <a href={card.linkGit} className={s.link} target={"_blank"}>
                    Code
                </a>

            </LinkContainer>}


        </div>
    );
})

export const MCardProject = motion(CardProject)

const LinkContainer = styled.div`
  display: ${props => (props.showed ? 'flex' : 'none')};;
  position: absolute;
  border-radius: 20px;
  justify-content: center;
  height: 200px;
  width: 300px;
  gap: 20px;
  background-color: rgba(23, 43, 87, 0.34);
  align-items: center;
  transition: 0.1s ease-in-out;
  animation: show 0.2s 1;

  @media (max-width: 400px) {
    width: 280px;
  }

  @keyframes show {
    0% {
      opacity: 0;

    }

    100% {
      opacity: 1;

    }
  }


`

