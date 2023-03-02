import React from 'react';
import s from './Projects.module.css'
import {MCardProject} from "../CardProject/CardProject";
import {motion} from 'framer-motion';
import cards from '../../assets/friday.png'
import social from '../../assets/social.png'
import todo from '../../assets/todo.png'
import calendar from '../../assets/calendar.png'
import planer from '../../assets/planer.png'
import button from '../../assets/button.png'
import travel from '../../assets/travelany.png'
import {animation} from "../../utils/animation/animation";


export const Projects = () => {
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
                        custom={1} variants={animation}
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
                        custom={index + 2} variants={animation}/>)}

                </motion.div>
            </div>
        </motion.div>
    );
};


const ListCardProject = [
    {
        header: 'cards',
        img: cards,
        linkDemo: 'https://chub7.github.io/friday-project/',
        linkGit: 'https://github.com/chub7/friday-project',
        stack: ''
    },
    {
        header: 'Travelanywhere',
        img: travel,
        linkDemo: 'https://www.travelanywherekey.com/about',
        linkGit: 'https://github.com/Mariarass/travelanywherekeyweb',
        stack: ''
    },
    {
        header: 'todolist',
        img: todo,
        linkDemo: 'https://mariarass.github.io/todolist/',
        linkGit: 'https://github.com/Mariarass/todolist',
        stack: ''
    },
    {
        header: 'socialnetwork',
        img: social,
        linkDemo: 'https://mariarass.github.io/socialnetwork/#/profile',
        linkGit: 'https://github.com/Mariarass/socialnetwork',
        stack: ''
    },
    {
        header: 'calendar',
        img: calendar,
        linkDemo: 'https://mariarass.github.io/calendar/',
        linkGit: 'https://github.com/Mariarass/calendar',
        stack: ''
    },
    {
        header: 'button',
        img: button,
        linkDemo: 'https://mariarass.github.io/button/',
        linkGit: 'https://github.com/Mariarass/button',
        stack: ''
    },
    {
        header: 'planer',
        img: planer,
        linkDemo: 'https://mariarass.github.io/planner/',
        linkGit: 'https://github.com/Mariarass/planner',
        stack: ''
    },
]