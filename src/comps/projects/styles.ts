import { createUseStyles } from "react-jss";
import { Theme } from "../../types";

export const useStyles = createUseStyles((theme: Theme) => ({
project:{
    display: "flex",
    flexDirection: "column",
    width: "40%",


}
,
title:{
    fontSize: "3rem"
},
description:{
    fontSize: "1.5rem"

},
container:{
    display: "flex",
    flexDirection: "column",
    maxWidth: "min(900px, calc(80% +100px))",
    color: theme.colors.primary,
    alignItems: "center",
    padding: "10% 0",
    margin: "0 auto",
    justifyContent: "space-between"

},
projects:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
}
}))