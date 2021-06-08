import React from "react";
import { useStyles } from "./styles";
import { Project } from "./Project";
import { data } from "./data";

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
