import React, {useCallback, useState} from 'react';
import s from './Projects.module.css'

import {MCardProject} from "../CardProject/CardProject";
import {cardAnimation} from "../Skills/Skills";
import {motion} from 'framer-motion';
import cards from '../../assets/friday.png'
import social from '../../assets/social.png'
import todo from '../../assets/todo.png'
import calendar from '../../assets/calendar.png'

const ListCardProject = [
    {
        header: 'cards', img: cards, linkDemo: 'https://chub7.github.io/friday-project/', linkGit: 'https://github.com/chub7/friday-project', stack: ''
    },
    {
        header: 'Travelanywhere', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'todolist', img:todo, linkDemo: 'https://mariarass.github.io/todolist/', linkGit: 'https://github.com/Mariarass/todolist', stack: ''
    },
    {
        header: 'socialnetwork', img: social, linkDemo: 'https://mariarass.github.io/socialnetwork/#/profile', linkGit: 'https://github.com/Mariarass/socialnetwork', stack: ''
    },
    {
        header: 'calendar', img:calendar, linkDemo: 'https://mariarass.github.io/calendar/', linkGit: 'https://github.com/Mariarass/calendar', stack: ''
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