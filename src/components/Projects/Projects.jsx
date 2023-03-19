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
import insta from '../../assets/insta.png'
import pokemon from '../../assets/pokemon.png'

import {animation} from "../../utils/animation/animation";


export const Projects = () => {
    return (
        <div className={s.container}>


            <div className={s.projectContainer}>
                <div className={s.headerContainer}>
                    <motion.h3
                        initial='hidden'
                        whileInView='visible'
                        viewport={{amount: 0.4, once: true}}
                        custom={1} variants={animation}
                        id='projects'
                        className={s.header}>
                        MY<br/>PROJECTS

                    </motion.h3>
                </div>

                <div className={s.skills}>

                    {ListCardProject.map((el, index) => <MCardProject
                        initial='hidden'
                        whileInView='visible'
                        viewport={{amount: 0.3, once: true}}
                        key={index}
                        card={el}
                        variants={animation}/>)}

                </div>
            </div>
        </div>
    );
};


const ListCardProject = [
    {
        header: 'card training',
        img: cards,
        linkDemo: 'https://chub7.github.io/friday-project/',
        linkGit: 'https://github.com/chub7/friday-project',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Axios', 'Formik', 'Material UI',],
        description: 'You can create your own learning cards in the app and share them with other students.' +
            ' The project also implements registration, ' +
            'login, password recovery, card filtering, card search',
        account: ['accounttest@gmail.com', 'accounttest']
    },
    {
        header: 'website for tour',
        img: travel,
        linkDemo: 'https://www.travelanywherekey.com/about',
        linkGit: 'https://github.com/Mariarass/travelanywherekeyweb',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Axios', 'Formik', 'Material UI',],
        description: 'Commercial project for viewing and ordering tours and tickets in the UAE.'
    },
    {
        header: 'todolist',
        img: todo,
        linkDemo: 'https://mariarass.github.io/todolist/',
        linkGit: 'https://github.com/Mariarass/todolist',
        stack: ['React', 'TypeScript', 'Redux Toolkit', 'Axios', 'Material UI',],
        description: 'Educational project. The project implements deleting, adding, editing, filtering todo list.'
    },
    {
        header: 'social network',
        img: social,
        linkDemo: 'https://mariarass.github.io/socialnetwork/#/profile',
        linkGit: 'https://github.com/Mariarass/socialnetwork',
        stack: ['React', 'TypeScript', 'Redux', 'Axios', 'Formik', 'Material UI',],
        description: 'Educational project.' +
            ' The social network has the ability to add other members as friends, update the avatar, ' +
            'add posts, view the profile of other members, communicate in a general chat.'
    },
    {
        header: 'instagram',
        img: insta,
        linkDemo: 'https://mariarass.github.io/insta/',
        linkGit: 'https://github.com/Mariarass/insta',
        stack: ['Vue', , 'Pinia', 'AntDesign',],
        description: 'The project mini instagram implemented registration and login. ' +
            'It is also possible to search, subscribe to other members and view their profile,' +
            ' add posts to the profile and view the friends feed.'
    },
    {
        header: 'pokemon card',
        img: pokemon,
        linkDemo: 'https://mariarass.github.io/pokemon/',
        linkGit: 'https://github.com/Mariarass/pokemon',
        stack: ['Vue', 'Vuex', 'AntDesign'],
        description: '\n' +
            'The Pokémon Project allows you to search and view information about Pokémon,' +
            ' sort Pokémon by type, and add them to your Pokédox'
    },

    {
        header: 'calendar',
        img: calendar,
        linkDemo: 'https://mariarass.github.io/calendar/',
        linkGit: 'https://github.com/Mariarass/calendar',
        stack: ['React'],
        description: 'Project calendar allows you to plan things for a specific date.'
    },
    {
        header: 'edit button',
        img: button,
        linkDemo: 'https://mariarass.github.io/button/',
        linkGit: 'https://github.com/Mariarass/button',
        stack: ['Java script'],
        description: 'Project to quickly edit button styles and copy those styles'
    },
    {
        header: 'planer',
        img: planer,
        linkDemo: 'https://mariarass.github.io/planner/',
        linkGit: 'https://github.com/Mariarass/planner',
        stack: ['React',],
        description: 'Project for planning feed. It allows you to add photos, move, delete'
    },
]