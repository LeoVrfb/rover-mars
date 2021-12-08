import React, { useState, useEffect, useRef } from "react";
import "./RoverProject.css";
import useLocalStorage from "./useLocalStorage";

export default function RoverProject() {
  const [taille, settaille] = useLocalStorage('rover', 0);
  const [direction, setdirection] = useState("N");
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  function useKey(key, cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });

    useEffect(() => {
      function handle(e) {
        if (e.code === key) {
          callbackRef.current(e);
        }
      }
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  }

  const handleR = () => {
    if (direction === "N") {
      setdirection("E");
    } else if (direction === "W") {
      setdirection("N");
    } else if (direction === "S") {
      setdirection("W");
    } else if (direction === "E") {
      setdirection("S");
    }
  };

  const handleL = () => {
    if (direction === "N") {
      setdirection("W");
    } else if (direction === "W") {
      setdirection("S");
    } else if (direction === "S") {
      setdirection("E");
    } else if (direction === "E") {
      setdirection("N");
    }
  };

  const handleF = () => {
    if (
      direction === "N" &&
      taille !== 0 &&
      taille !== 1 &&
      taille !== 2 &&
      taille !== 3 &&
      taille !== 4 &&
      taille !== 5 &&
      taille !== 6 &&
      taille !== 7 &&
      taille !== 8 &&
      taille !== 9
    ) {
      settaille((taille) => taille - 10);
      setX(taille % 10);
      setY(parseInt(taille / 10 - 1));
    } else if (
      direction === "W" &&
      taille !== 0 &&
      taille !== 10 &&
      taille !== 20 &&
      taille !== 30 &&
      taille !== 40 &&
      taille !== 50 &&
      taille !== 60 &&
      taille !== 70 &&
      taille !== 80 &&
      taille !== 90
    ) {
      settaille((taille) => taille - 1);
      setX((taille % 10) - 1);
      setY(parseInt(taille / 10));

    } else if (
      direction === "S" &&
      taille !== 90 &&
      taille !== 91 &&
      taille !== 92 &&
      taille !== 93 &&
      taille !== 94 &&
      taille !== 95 &&
      taille !== 96 &&
      taille !== 97 &&
      taille !== 98 &&
      taille !== 99
    ) {
      settaille((taille) => taille + 10);
      setX(taille % 10);
      setY(parseInt(taille / 10 + 1));

    } else if (
      direction === "E" &&
      taille !== 9 &&
      taille !== 19 &&
      taille !== 29 &&
      taille !== 39 &&
      taille !== 49 &&
      taille !== 59 &&
      taille !== 69 &&
      taille !== 79 &&
      taille !== 89 &&
      taille !== 99
    ) {
      settaille((taille) => taille + 1);
      setX((taille % 10) + 1);
      setY(parseInt(taille / 10));
    }
  };

  useKey("KeyR", handleR);
  useKey("KeyL", handleL);
  useKey("KeyF", handleF);

  const handleChange = (e) => {
    setdirection(e.target.value);
  };
  const handleChoose = (e) => {
    settaille(parseInt(e.target.value));
  };

  const tryconvert = (taille) => {
    const value = parseInt(taille);
    if (Number.isNaN(value)) {
      return "";
    }
  };
 

  return (
    <main role="main">
      <div className="jumbotron container-fluid">
        <div className="container text-center">
          <h1 className="display-4 p-3 border-bottom bg-secondary text-white">
            Projet Rover martien
          </h1>
          <form className="form-inline justify-content-center plus">
            <div className="form-group text-center">
              <label htmlFor="direction">
                Définissez une direction au rover
              </label>
              <select
                id="direction"
                className="form-control"
                value={direction}
                onChange={handleChange}
              >
                <option value="N">North</option>
                <option value="S">South</option>
                <option value="W">West</option>
                <option value="E">East</option>
              </select>
            </div>

            <div className="form-group text-center">
              <label htmlFor="position">
                Sélectionner une case pour placer le rover (de 0 à 99)
              </label>
              <input
                type="text"
                name="position"
                id="position"
                className="form-control"
                value={taille ? taille : tryconvert(taille)}
                onChange={handleChoose}
              />
            </div>
          </form>

          <h4>Voici la liste des commandes pour pouvoir déplacer le rover</h4>
          <ul className="list-group">
            <p className="list-group-item ">
              <strong>pour avancer tout droit : 'f'</strong>
            </p>
            <p className="list-group-item">
              <strong> Tourner le rover à droite : 'r'</strong>
            </p>
            <p className="list-group-item ">
              <strong>Tourner le rover à gauche : 'l'</strong>
            </p>
          </ul>

          <form className="form-inline justify-content-center plus">
            <div className="form-group text-center">
              <label htmlFor="coordonnéesx">
                Coordonnnées de X (horizontales)
              </label>
              <input
                type="text"
                id="coordonnéesx"
                className="form-control"
                value={X}
              />
            </div>
            <div className="form-group text-center">
              <label htmlFor="coordonnéesy">
                Coordonnnées de Y (verticales)
              </label>
              <input
                type="text"
                id="coordonnéesy"
                className="form-control"
                value={Y}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="bg-grille">
        <div className="grille">
          {Array.from({ length: 100 }).map((item, index) => {
            return (
              <div
                key={index}
                className={taille === index ? "gridou" : "grid-item"}
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
