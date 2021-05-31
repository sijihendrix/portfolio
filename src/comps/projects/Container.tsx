import React from 'react'
import { useStyles } from "./styles";
import { lorem } from "../../helpers/lorem";
import { Project } from './Project';

const data = [{
    title: "Lorem",
    description: lorem.generateSentences(4)
},
{
    title: "Lorem",
    description: lorem.generateSentences(4)
}

]

export const Container = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <h1 className={classes.title} >Projects</h1>

            <div className={classes.projects} >

            {data.map(({title, description})=>{
                return <Project title={title} description={description} />
            })}
            </div>

        </div>
    )
}
