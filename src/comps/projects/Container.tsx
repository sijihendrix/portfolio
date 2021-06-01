import React from "react";
import { useStyles } from "./styles";
import { lorem } from "../../helpers/lorem";
import { Project } from "./Project";
import Tea from "../../assets/tea.jpg";
import Ships from "../../assets/ships.jpg";
import Motorcycle from "../../assets/summersbloom.png";

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
    source: Ships,
    link: "https://johnkavanagh.co.uk/projects/",
  },
  {
    title: "SummersBloom",
    description: lorem.generateSentences(4),
    source: Motorcycle,
    link: "https://summersbloomlagos.netlify.app/",
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
        {data.map(({ title, description, source, link }, index) => {
          return (
            <Project
              title={title}
              description={description}
              source={source}
              link={link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
