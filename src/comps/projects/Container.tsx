import React from "react";
import { useStyles } from "./styles";
import { lorem } from "../../helpers/lorem";
import { Project } from "./Project";
import Tea from "../../assets/tea.jpg";

const data = [
  {
    title: "Lorem",
    description: lorem.generateSentences(4),
    source: Tea,
    link: "https://johnkavanagh.co.uk/projects/",
  },
  {
    title: "Lorem",
    description: lorem.generateSentences(4),
    source: Tea,
    link: "https://johnkavanagh.co.uk/projects/",
  },
];

export const Container = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Projects</h1>

      <div className={classes.projects}>
        {data.map(({ title, description, source, link }) => {
          return (
            <Project
              title={title}
              description={description}
              source={source}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};
