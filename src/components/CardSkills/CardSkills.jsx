import React, {forwardRef} from 'react';
import './CardSkills.scss'
import {motion} from "framer-motion";



export const CardSkills= forwardRef(({Component, name, shortName}, ref) => {

    return (

        <div ref={ref} className={'cardContainer'}>

            <div className={'icon'}>

                <svg width={'80px'}>

                    <linearGradient id="grad--linear-1">
                        <stop offset="0%" stop-color="rgb(151,120,209)"
                              className="stop-1"/>
                        <stop offset="50%" stop-color="rgb(254,248,76)"
                              className="stop-2"/>
                        <stop offset="100%" stop-color="rgb(151,120,209)"
                              className="stop-3"/>
                    </linearGradient>
                    <Component className={'svg'} width='80px' height='80px'/>
                </svg>

            </div>
            <h3 className={'header'}>
                {name}
            </h3>



        </div>
    );
})

export const MCardSkills = motion(CardSkills)