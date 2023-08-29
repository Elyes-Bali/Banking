import { useDispatch, useSelector } from "react-redux";
import "./Signalitique.css";
import React, { useState } from "react";
import { editform } from "../../redux/FormSlice/formslice";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-customizable-progressbar";

function Signaletique() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    grille1: "",
    grille2: "",
    grille3: "",
    grille4: "",
    grille5: "",
    grille6: "",
    grille7: "",
    grille8: "",
    grille9: "",
    grille10: "",
    grille11: "",
    grille12: "",
    grille13: "",
  });
  console.log(formulaire2);
  const progress = 10;
  const barColor = "#003CFF";
  const strokeWidth = 20;
  const trailWidth = 5;

  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/regle");
  };
  const hundelUpdate1 =() => {
    navigate("/form2");
  // setPing(!ping);
};

  return (
    <>
      <div
        className="shadow p-3 mb-5 bg-body rounded  container"
        id="Signalitique"
      >
        <h1 className="text-center projs p-3 bg-primary text-white head">
          <b>Signaletique du Projet</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="progress-value">{progress}%</div>
        </div>
        <legend>
          <li className="projs"> Nom ou Raison Sociale du projet </li>
        </legend>

        <label className="input-text1"></label>

        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="30"
          required
          placeholder="taper le nom ou raison du projet"
          value={formulaire2?.grille1}
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille1: e.target.value })
          }
        />
        <br />
        <fieldset>
          <legend>
            <li className="projs"> Adresse </li>
          </legend>
          <label htmlFor="street" className="input-text projs">
            {" "}
            Rue :{" "}
          </label>
          <input
            className="input-holder form-control bordering"
            type="text"
            id="street"
            name="street"
            placeholder="taper le rue"
            value={formulaire2?.grille2}
            onChange={(e) =>
              setFormulaire({ ...formulaire2, grille2: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="city" className="input-text2 projs">
            {" "}
            Ville :{" "}
          </label>
          <input
            className="input-holder form-control bordering"
            type="text"
            id="city"
            name="city"
            placeholder="taper la ville"
            value={formulaire2?.grille3}
            onChange={(e) =>
              setFormulaire({ ...formulaire2, grille3: e.target.value })
            }
          />
          <br />
          <br />

          <label htmlFor="zip" className="input-text3 projs">
            Code postal :{" "}
          </label>
          <input
            className="input-holder form-control bordering"
            type="text"
            id="zip"
            name="zip"
            placeholder="taper le code postal"
            value={formulaire2?.grille4}
            onChange={(e) =>
              setFormulaire({ ...formulaire2, grille4: e.target.value })
            }
          />
        </fieldset>
        <br />
        <legend>
          <li className="projs">Description de la zone d'implantation du projet </li>
        </legend>
        <br />
        <select
          className="form-control zone"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille5: e.target.value })
          }
        >
          <option>--SELECTER ⬇️--</option>
          <option value="zone urbaine">zone urbaine</option>
          <option value="zone péri-urbaine">zone péri-urbaine</option>
          <option value="zone rurale">zone rurale</option>
        </select>
        <br />
        <br />
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li className="projs">
                    Est-ce que le projet est situé dans une zone industrielle ?
                  </li>
                </legend>
              </label>
              <br />
              <div className="option">
                <input
                  type="radio"
                  name="theme"
                  value="OUI"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, grille6: e.target.value })
                  }
                />{" "}
                OUI &nbsp;
                <input
                  type="radio"
                  name="theme"
                  value="NON"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, grille6: e.target.value })
                  }
                />{" "}
                NON
              </div>
              <br />
              <br />
              <legend>
                <li className="projs"> Nom et position du responsable/interlocuteur </li>
              </legend>
              <br />
              <br />
              <label htmlFor="name" className="np"></label>
              <input
                className="input-holder form-control bordering"
                type="text"
                id="name"
                name="name"
                minLength="4"
                maxLength="1000"
                size="50"
                required
                placeholder="taper le nom et postition"
                value={formulaire2?.grille7}
                onChange={(e) =>
                  setFormulaire({ ...formulaire2, grille7: e.target.value })
                }
              />
              <br />
            </td>
          </tr>
        </div>
        <br />
        <legend>
          {" "}
          <li className="projs"> Date de création </li>
        </legend>

        <label htmlFor="date" className="dat"></label>
        <input
          type="date"
          name="anniversaire"
          className="input-holder date form-control bordering"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille8: e.target.value })
          }
        />
        <br />
        <br />
        <legend>
          <li className="projs">Superficie </li>
        </legend>
        <br />
        <label className="sizee projs">Superficie totale :</label>
        <label htmlFor="name" className="s"></label>
        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="30"
          required
          placeholder="taper la superficie totale"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille9: e.target.value })
          }
        />
        <br />
        <br />
        <label className="sizee projs">Superficie couverte </label>
        <label htmlFor="name" className="sc"></label>
        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="30"
          required
          placeholder="taper la superficie couverte"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille10: e.target.value })
          }
        />
        <br />
        <br />
        <legend>
          <li className="projs">Type de projet </li>
        </legend>
        <div className="type">
          <input
            type="radio"
            name="theme"
            value="Modernisation/mise à niveau"
            onChange={(e) =>
              setFormulaire({ ...formulaire2, grille11: e.target.value })
            }
          />{" "}
          Modernisation/mise à niveau
          <br />
          <input
            type="radio"
            name="theme"
            value="Extension"
            onChange={(e) =>
              setFormulaire({ ...formulaire2, grille11: e.target.value })
            }
          />{" "}
          Extension
          <br />
          <input
            type="radio"
            name="theme"
            value="Nouveau projet"
            onChange={(e) =>
              setFormulaire({ ...formulaire2, grille11: e.target.value })
            }
          />{" "}
          Nouveau projet
        </div>

        <legend>
          <li className="projs mt-3">Secteur d'activité et descriptif du projet </li>
        </legend>
        <br />
        <label htmlFor="name" className="sec"></label>
        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="30"
          required
          placeholder="taper le secteur du projet"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille12: e.target.value })
          }
        />

        <br />
        <br />
        <legend>
          <li className="projs">plus d'infos ? </li>
        </legend>
        <br />
        <label htmlFor="name" className="sec"></label>
        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="30"
          required
          placeholder="plus d'infos ?"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, grille13: e.target.value })
          }
        />
         <button
        type="button"
        class="btn btn-danger w-20 mt-4 rounded-pill pull-left"
        onClick={() => {
          hundelUpdate1();
        
        }}
      >
        precedent
      </button>

        <button
          type="submit"
          class="btn btn-success w-20 mt-4 rounded-pill pull-right mb-4"
          onClick={() => {
            hundelUpdate();
          }}
        >
          Suivant
        </button>
      </div>
    </>
  );
}

export default Signaletique;
