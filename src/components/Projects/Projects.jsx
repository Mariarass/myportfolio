import React, {useCallback, useState} from 'react';
import s from './Projects.module.css'

import {MCardProject} from "../CardProject/CardProject";
import {cardAnimation} from "../Skills/Skills";
import {motion} from 'framer-motion';


const ListCardProject = [
    {
        header: 'Travelanywhere', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'todolist', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'social', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'calendar', img: '', linkDemo: '', linkGit: '', stack: ''
    },
]
const Projects = () => {

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
            className={s.container}
            id='projects'>


            <div className={s.projectContainer}>
                <div className={s.headerContainer}>
                    <motion.h3
                        custom={1} variants={cardAnimation}
                        className={s.header}>
                        MY<br/>PROJECTS
                    </motion.h3>
                </div>



                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.2, once: true}}
                    className={s.skills}>


                    {ListCardProject.map((el, index) => <MCardProject

                        key={index}
                        card={el}
                        custom={index + 2} variants={cardAnimation}/>)}


                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;