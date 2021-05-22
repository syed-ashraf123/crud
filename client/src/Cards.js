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

export default function Cards({ name, age, city, country, id }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [update, setUpdate] = useState(false);
  const [name1, setName] = useState(name);
  const [age1, setAge] = useState(age);
  const [city1, setCity] = useState(city);
  const [country1, setCountry] = useState(country);
  const updates = () => {
    Axios.post("http://localhost:5000/update", {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      _id: id,
    }).then((response) => {
      window.location.reload();
    });
  };

  const deletes = () => {
    Axios.post("http://localhost:5000/delete", {
      _id: id,
    }).then((response) => {
      window.location.reload();
    });
  };
  return (
    <Card className={classes.root} style={{ float: "left" }}>
      <h1>
        Name :{" "}
        {update ? (
          <input value={name1} onChange={(e) => setName(e.target.value)} />
        ) : (
          name1
        )}
      </h1>
      <h1>
        Age :{" "}
        {update ? (
          <input value={age1} onChange={(e) => setAge(e.target.value)} />
        ) : (
          age1
        )}
      </h1>
      <h1>
        {" "}
        City :{" "}
        {update ? (
          <input value={city1} onChange={(e) => setCity(e.target.value)} />
        ) : (
          city1
        )}{" "}
      </h1>
      <h1>
        Country :{" "}
        {update ? (
          <input
            value={country1}
            onChange={(e) => setCountry(e.target.value)}
          />
        ) : (
          country1
        )}
      </h1>
      <button onClick={() => setUpdate(true)}>Edit </button>
      {update ? (
        <button
          onClick={() => {
            updates();
          }}
        >
          Update
        </button>
      ) : null}
      <button
        onClick={() => {
          deletes();
        }}
      >
        Delete
      </button>
    </Card>
  );
}
