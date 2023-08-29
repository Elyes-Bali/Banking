import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editform } from "../../redux/FormSlice/formslice";
import "./Questioncli.css";
import ProgressBar from "react-customizable-progressbar";

function Questioncli() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    cli1: "",
    cli2: "",
    cli3: "",
    cli4: "",
    cli5: "",
    cli6: "",
    cli7: "",
    cli8: "",
    cli9: "",
    cli10: "",
    cli11: "",
    cli12: "",
    cli13: "",
    cli14: "",
    cli15: "",
    cli16: "",
  });
  console.log(formulaire2);
  const progress = 85;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/plan");
  };
  const hundelUpdate1 =() => {
    navigate("/performances");
  // setPing(!ping);
};
  return (
    <>
      <div
        className="shadow p-3 mb-5 bg-body rounded mt-5 container"
        id="Questioncli"
      >
        <h1 className="text-center p-3 fs-3 bg-primary text-white">
          <b>Questions climatiques</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="bbba">{progress}%</div>
        </div>
        <br />
        <table>
          <div>
            <tr>
              <td colSpan="2"></td>
            </tr>
            <br />
            <tr>
              <td colSpan="2">
                <label htmlFor="consommationEnergetique">
                  <legend>
                    <li>
                      Quelle est votre consommation énergétique globale en
                      KWh/an?
                    </li>
                  </legend>
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="Taper ici la consommation énergétique"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli1: e.target.value,
                    })
                  }
                 
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label htmlFor="sourcesEnergie">
                  <legend>
                    <li>
                      Quelles sont vos sources d'énergies? Et quelle est votre
                      consommation annuelle par source ?
                    </li>
                  </legend>
                </label>
              </td>
            </tr>
            <div className="m-2">
              <tr>
                <td>
                  <label>Fuel en KWh/an</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    maxLength="1000"
                    size="30"
                    className="form-control bordering"
                    placeholder="en KWL/an"
                    onChange={(e) =>
                      setFormulaire({
                        ...formulaire2,
                        cli2: e.target.value,
                      })
                    }
                   
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label htmlFor="gazNaturel">Gaz naturel en KWh/a</label>
                  <input
                    type="text"
                    id="name"
                    maxLength="1000"
                    size="30"
                    className="form-control bordering"
                    placeholder="en KWL/an"
                    onChange={(e) =>
                      setFormulaire({
                        ...formulaire2,
                        cli3: e.target.value,
                      })
                    }
                   
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label htmlFor="energieRenouvelable">
                    Energie renouvelable en KWh/a
                  </label>
                  <input
                    type="text"
                    id="name"
                    maxLength="1000"
                    size="30"
                    className="form-control bordering"
                    placeholder="en KWL/an"
                    onChange={(e) =>
                      setFormulaire({
                        ...formulaire2,
                        cli4: e.target.value,
                      })
                    }
                   
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label htmlFor="autres">Autres en KWh/a</label>
                  <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="en KWL/an"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli5: e.target.value,
                    })
                  }
                 
                />
                </td>
              </tr>
              <br />
              <tr>
                <td colSpan="2">
                  <label htmlFor="autresPrecisez">Si autres, précisez:</label>
                  <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="Taper ici"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli6: e.target.value,
                    })
                  }
                 
                />
                </td>
              </tr>
            </div>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    <li>
                      Etes-vous conscient(e) par les enjeux posés par le
                      changement climatique ?
                    </li>
                  </legend>
                </label>
                <br />
                <div className="qclima">
                <input type="radio" name="conscient" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli7: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="conscient" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli7: e.target.value,
                    })
                  }/>
                &nbsp; NON
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <legend>
                    <li>
                      {" "}
                      Etes-vous engagé dans un plan de transition énergétique ?
                    </li>
                  </legend>
                </label>
                <br />
                <div className="qclima">
                <input type="radio" name="engagement" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli8: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="engagement" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli8: e.target.value,
                    })
                  }/>
                &nbsp; NON <br />
                <input type="radio" name="engagement" value="engager" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli8: e.target.value,
                    })
                  }/>
                &nbsp; mais je compte m'engager</div>
                <br />
                <label htmlFor="date">
                  <li className="fs-4">Année prévue :</li>
                </label>
                <div className="qclima">
                <input className="form-control bordering" type="date" name="anniversaire" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli9: e.target.value,
                    })
                  }/>
                </div>
              </td>
            </tr>
            <br />

            <tr>
              <td>
                <label htmlFor="name">
                  <legend>
                    <li>
                      De quelle manière vous être engagé dans un plan de
                      transition énergétique ?
                    </li>
                  </legend>
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="Taper ici"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli10: e.target.value,
                    })
                  }
                 
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="name">
                  <legend>
                    <li>
                      Combien avez-vous investis en transition énergétique ?
                    </li>
                  </legend>
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="Taper combien ici"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli11: e.target.value,
                    })
                  }
                 
                />
              </td>
            </tr>
            <br />

            <tr>
              <td>
                <legend>
                  <li>Quel est l'impact de votre investissement sur ?</li>
                </legend>
                <label htmlFor="chiffreAffaire" className="fs-4">Chiffre d'affaire</label>
                <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="Taper l'impact ici"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli12: e.target.value,
                    })
                  }
                 
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label htmlFor="cout" className="fs-4">Le coût</label>
                <input
                  type="text"
                  id="name"
                  maxLength="1000"
                  size="30"
                  className="form-control bordering"
                  placeholder="Taper le coût ici"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli13: e.target.value,
                    })
                  }
                />
                <br />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <li className="fs-4"> Etes-vous une entreprise exportatrice ?</li>
                </label>
                <br />
                <div className="qclima">
                <input type="radio" name="export" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli14: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="export" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli14: e.target.value,
                    })
                  }/>
                &nbsp; NON <br />
                <input type="radio" name="export" value="engager" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli14: e.target.value,
                    })
                  }/>
                &nbsp; mais je compte m'engager</div>
                <br />
                <label htmlFor="date">
                  <li className="fs-4">Année prévue </li>
                </label><br/>
                <div className="qclima">
                <input className="form-control bordering" type="date" name="ddd" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli15: e.target.value,
                    })
                  }/>
                </div>
              </td>
            </tr>


            {formulaire2.cli14 == "OUI" &&
            <>
            <br />
            <tr>
              <td colSpan="2">
                <label>
                  <legend>Si OUI, quelles sont vos destinations ?</legend>
                </label>
              </td>
            </tr>
            <br />
            
                <div className="ligne1">
            <tr>
              <td>
                <input
                  type="radio"
                  id="afriqueNord"
                  name="destinations"
                  value="afriqueNord"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }
                />
                &nbsp;
                <label htmlFor="afriqueNord">Afrique du nord</label>
              </td>
            </tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <tr>
              <td>
                <input
                  type="radio"
                  id="afriqueSubSaharienne"
                  name="destinations"
                  value="afriqueSubSaharienne"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }
                />
                &nbsp;
                <label htmlFor="afriqueSubSaharienne">
                  Afrique sub-saharienne
                </label>
              </td>
            </tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <tr>
              <td>
                <input
                  type="radio"
                  id="europe"
                  name="destinations"
                  value="europe"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }
                />
                &nbsp;
                <label htmlFor="europe">Europe</label>
              </td>
            </tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            

            <tr>
              <td>
                <input
                  type="radio"
                  id="ameriqueNord"
                  name="destinations"
                  value="ameriqueNord"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }
                />
                &nbsp;
                <label htmlFor="ameriqueNord">Amérique du nord</label>
              </td>
            </tr>
            </div><br/>

            <div className="ligne2">
            <tr>
              <td>
                <input
                  type="radio"
                  id="ameriqueSud"
                  name="destinations"
                  value="ameriqueSud"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }
                />
                &nbsp;
                <label htmlFor="ameriqueSud">Amérique du sud</label>
              </td>
            </tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <tr>
              <td>
                <input
                  type="radio"
                  id="asie"
                  name="destinations"
                  value="asie"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }
                />
                &nbsp;
                <label htmlFor="asie">Asie</label>
              </td>
            </tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <tr>
              <td>
                <input type="radio" id="uk" name="destinations" value="uk"  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cli16: e.target.value,
                    })
                  }/>
                &nbsp;
                <label htmlFor="uk">UK</label>
              </td>
            </tr>
            </div>
</>}



          </div>
        </table>

        <br />
        <div className="">
          <button
            type="submit"
            class="btn btn-danger w-20 mt-4  rounded-pill mb-4"
            onClick={() => {
              hundelUpdate1();
            }}
          >
            Precedent
          </button>

          <button
            type="submit"
            class="btn btn-success w-20 mt-4 rounded-pill pull-right  mb-4"
            onClick={() => {
              hundelUpdate();
            }}
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}

export default Questioncli;
