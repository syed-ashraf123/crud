import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards({ name, age, city, country }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{ float: "left" }}>
      <div>
        {" "}
        <h1>
          Name : <input value={name} />
        </h1>
        <h1>
          Age : <input value={age} />
        </h1>
        <h1>
          {" "}
          City : <input value={city} />{" "}
        </h1>
        <h1>
          Country : <input value={country} />
        </h1>
      </div>
      <button>Submit</button>
    </Card>
  );
}
