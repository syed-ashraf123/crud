import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Axios from "axios";
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

export default function Create() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [name1, setName] = useState(null);
  const [age1, setAge] = useState(null);
  const [city1, setCity] = useState(null);
  const [country1, setCountry] = useState(null);
  const creates = () => {
    Axios.post("http://localhost:5000/create", {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
    }).then((response) => {
      window.location.reload();
    });
  };
  return (
    <Card className={classes.root} style={{ float: "left" }}>
      <p>
        Name :
        <input value={name1} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        Age :
        <input value={age1} onChange={(e) => setAge(e.target.value)} />
      </p>
      <p>
        City :<input value={city1} onChange={(e) => setCity(e.target.value)} />
      </p>
      <p>
        Country :
        <input value={country1} onChange={(e) => setCountry(e.target.value)} />
      </p>

      <button
        onClick={() => {
          creates();
        }}
      >
        Create
      </button>
    </Card>
  );
}
