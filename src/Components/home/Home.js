import React, { useEffect, useState } from "react";
import "./style.css";
import Book from "../book/Book";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books/all")
      .then(function (response) {
        setData(response.data.notes);

        console.log(response.data.notes);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        {" "}
        <nav>
          <input
            type="checkbox"
            id="check"
          />
          <label className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">Books Store</label>
          <ul>
            <li>
              <a
                className="active"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to={`/login`}>
                <a href="#">Login</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
        >
          {data != [] &&
            data.map((ele, i) => {
              return (
                <Grid
                  item
                  xs={4}
                >
                  <Book
                    key={i}
                    ele={ele}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
}
