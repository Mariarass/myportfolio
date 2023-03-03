import React from 'react';
import s from './About.module.css'
import MatrixRain from "./MatrixRain/MatrixRain";
import me from '../../assets/photoofme.jpg'
import {motion} from 'framer-motion';
import {imgAnimation, animation} from "../../utils/animation/animation";

export const About = () => {

    return (
        <div className={s.matrixContainer}>
            <MatrixRain/>
            <motion.div className={s.container} id='main' initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}>

                <motion.div className={s.imgContainer} custom={1} variants={imgAnimation}>
                    <div className={s.circle}>
                    </div>
                    <img src={me} className={s.img} alt='my photo'/>
                </motion.div>

                <motion.div className={s.code} variants={animation} custom={2}>
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
