import React from 'react'
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

interface ProjectsProps{
    title: string;
    description: string;
}

export const Project = ({title, description}: ProjectsProps) => {
    const classes = useStyles();
    return (
        <div className={classes.project} >
            <h2 className={classes.title} >{title} </h2>
            <p className={classes.description} >
                {description}
            </p>

            <a href="www.google.com"  >
            <img />

            </a>

        </div>
    )
}
