import React, {forwardRef, useState} from 'react';
import s from './CardProject.module.css'
import {motion} from "framer-motion";
import {ReactComponent as Git} from '../../assets/git.svg'
import {ReactComponent as Link} from '../../assets/link.svg'

export const CardProject = forwardRef(({card}, ref) => {


    return (
        <div ref={ref} className={s.cardContainer}>
            <div className={s.img_container}>
                <div className={s.circle_container}>
                    <div className={s.circle}></div>
                    <div className={s.circle}></div>
                    <div className={s.circle}></div>
                </div>
                <img src={card.img} className={s.img}/>
            </div>

            <div className={s.description}>
                <h3 className={s.header}>{card.header}</h3>
                <p>{card.description}</p>


                <div className={s.stack_container}>
                    {card.stack.map(el => <p >{el}</p>)}
                </div>

                <div className={s.linkContainer}>
                    <p className={s.link_text}>Code <a href={card.linkGit} target={'_blank'}><Git
                        className={s.svg}/></a></p>
                    <p className={s.link_text}>Live Demo <a href={card.linkDemo} target={'_blank'}><Link
                        className={s.svg}/></a>
                    </p>

                </div>

            </div>


        </div>
    );
})

export const MCardProject = motion(CardProject)

