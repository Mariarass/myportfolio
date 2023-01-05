import React, {useState} from 'react';
import s from './About.module.css'

import MatrixRain from "./MatrixRain/MatrixRain";
import me from '../../assets/photoofme.jpg'
import {motion} from 'framer-motion';
export const imgAnimation = {
    hidden: {

        opacity: 0,
        scale: 0.9

    },
    visible: (custom) => ({

        opacity: 1,
        transition: {delay: custom * 0.1},
        scale: 1

    })
}

export const textAnimation = {
    hidden: {
        y: 50,

        opacity: 0,

    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1},

    })
}

const About = () => {


    return (
        <div className={s.matrixContainer}>
            <MatrixRain/>
            <motion.div className={s.container} id='main' initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}>
                <motion.div className={s.imgContainer} custom={1} variants={imgAnimation}>
                    <div className={s.circle}>
                    </div>
                    <img src={me} className={s.img}/>

                </motion.div>

                <motion.div className={s.code}
                            variants={textAnimation} custom={2}>
                    <p><span className={s.pink}>{'<span>'}</span> Hi!<span
                        className={s.pink}>{'</span>'}</span></p>
                    <p><span className={s.pink}>{' <h3>'}</span>I`m Maria <span
                        className={s.pink}>{'</h3>'}</span></p>
                    <p className={s.type}><span className={s.pink}>{'<p>'}</span> Frontend
                        developer <span
                            className={s.pink}>{'</p>'}</span></p>
                </motion.div>
            </motion.div>

        </div>


    );
};

export default About;