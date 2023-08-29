import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Performance22.css";
import { editform } from "../../redux/FormSlice/formslice";
import ProgressBar from "react-customizable-progressbar";

function Performance22() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    cond1: "",
    cond2: "",
    cond3: "",
    cond4: "",
    cond5: "",
    cond6: "",
    cond7: "",
    cond8: "",
    cond9: "",
    cond10: "",
    cond11: "",
    cond12: "",
    cond13: "",
    cond14: "",
    cond15: "",
    cond16: "",
    cond17: "",
    cond18: "",
    cond19: "",
    cond20: "",
    cond21: "",
    cond22: "",
    cond23: "",
    cond24: "",
    cond25: "",
    cond26: "",
    cond27: "",
    cond28: "",

  });
  console.log(formulaire2);
  const progress = 30;
  const barColor = "#003CFF";
  const strokeWidth = 20;
  const trailWidth = 5;

  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/gesthum");
  };
  const hundelUpdate1 =() => {
    navigate("/per1");
  // setPing(!ping);
};

  return (
    <>
      <div
        className="shadow p-3 mb-5 bg-body rounded mt-5 container"
        id="Performance22"
      >
        <h1 className="text-center p-3 bg-primary text-white">
          <b>Norme de Performance 2</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="aaaa">{progress}%</div>
        </div>
        <h2 className="text-center">Main-d'œuvre et conditions de travail</h2>
        <h3>
          <b>Hygiène et sécurité :</b>
        </h3>
        <br/>
        <h4>
          Bloc 1 : la société ou le projet est-il la cause des nuisances
          suivantes ?
        </h4>
        <br/>
        <div>
          <tr>
            <td>
              <label>
                <li>Bruit</li>
              </label>
              <div className="r">
                <input type="radio" name="bruit" value="OUI"  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond1: e.target.value })
                  }/>
                &nbsp; OUI
                <br />
                <input type="radio" name="bruit" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond1: e.target.value })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Poussières</li>
              </label>
              <div className="r">
                <input type="radio" name="poussieres" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond2: e.target.value })
                  }/>
                &nbsp; OUI
                <br />
                <input type="radio" name="poussieres" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond2: e.target.value })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Fumées</li>
              </label>
              <div className="r">
                <input type="radio" name="fumees" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond3: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="fumees" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond3: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li> Odeurs:</li>
              </label>
              <div className="r">
                <input type="radio" name="odeurs" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond4: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="odeurs" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond4: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Vibrations:</li>
              </label>
              <div className="r">
                <input type="radio" name="vibrations" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond5: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="vibrations" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond5: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Trafic routier et congestion:</li>
              </label>
              <div className="r">
                <input type="radio" name="trafic" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond6: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="trafic" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond6: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Manipulation de produits dangereux:</li>
              </label>
              <div className="r">
                <input type="radio" name="manipulation" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond7: e.target.value })
                  }/> &nbsp;
                OUI
                <br />
                <input type="radio" name="manipulation" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond7: e.target.value })
                  }/> &nbsp;
                NON
              </div>
            </td>
          </tr>
          <br />
        </div>
        <br />
        <h4>
          Bloc 2 : Quelles sont les mesures d'hygiène et sécurité mises en place
          par votre société ?
        </h4>
        <br/>
        <div>
          <tr>
            <td>
              <label>
                <li>Q1 : Consignes de sécurité affichées</li>
              </label>
              <div className="r">
                <input type="radio" name="consignesSecurite" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond8: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input type="radio" name="consignesSecurite" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond8: e.target.value })
                  }/>{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q2 : Consignes d'hygiène affichées</li>
              </label>
              <div className="r">
                <input type="radio" name="consignesHygiene" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond9: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input type="radio" name="consignesHygiene" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond9: e.target.value })
                  }/>{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q3 : Formation du personnel à l'hygiène/sécurité</li>
              </label>
              <div className="r">
                <input type="radio" name="formationPersonnel" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond10: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input
                  type="radio"
                  name="formationPersonnel"
                  value="NON"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond10: e.target.value })
                  }
                />{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q4 : Equipements de protection individuelle</li>
              </label>
              <div className="r">
                <input type="radio" name="equipementsProtection" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond11: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input
                  type="radio"
                  name="equipementsProtection"
                  value="NON"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond11: e.target.value })
                  }
                />{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q5 : Infirmerie interne/médecin</li>
              </label>
              <div className="r">
                <input type="radio" name="infirmerieInterne" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond12: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input type="radio" name="infirmerieInterne" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond12: e.target.value })
                  }/>{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q6 : Comité d'hygiène et de sécurité</li>
              </label>
              <div className="r">
                <input type="radio" name="comiteHygiene" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond13: e.target.value })
                  }/> &nbsp;
                OUI
                <br />
                <input type="radio" name="comiteHygiene" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond13: e.target.value })
                  }/> &nbsp;
                NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q7 : Extincteurs opérationnels</li>
              </label>
              <div className="r">
                <input
                  type="radio"
                  name="extincteursOperationnels"
                  value="OUI"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond14: e.target.value })
                  }
                />{" "}
                &nbsp; OUI
                <br />
                <input
                  type="radio"
                  name="extincteursOperationnels"
                  value="NON"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond14: e.target.value })
                  }
                />{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q8 : Robinet incendie armé (RIA)</li>
              </label>
              <div className="r">
                <input type="radio" name="robinetIncendie" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond15: e.target.value })
                  }/> &nbsp;
                OUI
                <br />
                <input type="radio" name="robinetIncendie" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond15: e.target.value })
                  }/> &nbsp;
                NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q9 : Surpresseur</li>
              </label>
              <div className="r">
                <input type="radio" name="surpresseur" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond16: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="surpresseur" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond16: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q10 : Groupe électrogène</li>
              </label>
              <div className="r">
                <input type="radio" name="groupeElectrogene" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond17: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input type="radio" name="groupeElectrogene" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond17: e.target.value })
                  }/>{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q11 : Alarme et détection incendie</li>
              </label>
              <div className="r">
                <input type="radio" name="alarmeDetection" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond18: e.target.value })
                  }/> &nbsp;
                OUI
                <br />
                <input type="radio" name="alarmeDetection" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond18: e.target.value })
                  }/> &nbsp;
                NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q12 : Portes coupe-feu</li>
              </label>
              <div className="r">
                <input type="radio" name="portesCoupeFeu" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond19: e.target.value })
                  }/> &nbsp;
                OUI
                <br />
                <input type="radio" name="portesCoupeFeu" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond19: e.target.value })
                  }/> &nbsp;
                NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q13 : Sprinklers</li>
              </label>
              <div className="r">
                <input type="radio" name="sprinklers" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond20: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="sprinklers" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond20: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q14 : Audit sécurité</li>
              </label>
              <div className="r">
                <input type="radio" name="auditSecurite" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond21: e.target.value })
                  }/> &nbsp;
                OUI
                <br />
                <input type="radio" name="auditSecurite" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond21: e.target.value })
                  }/> &nbsp;
                NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label htmlFor="date">
                <li>Date dernier audit sécurité </li>
              </label>
              <br />
              <div className="bordering">
                <input className="form-control" type="date" name="datee" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond22: e.target.value })
                  }/>
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>
                  maintenance périodique des équipements sécurité incendie
                </li>
              </label>
              <br />
              <div className="r">
                <input type="radio" name="maintenancePeriodique" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond23: e.target.value })
                  }/>{" "}
                &nbsp; OUI
                <br />
                <input
                  type="radio"
                  name="maintenancePeriodique"
                  value="NON"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond23: e.target.value })
                  }
                />{" "}
                &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Période maintenance</li>
              </label>
              <br />
              <div className="r">
                <input
                  type="radio"
                  name="periodeMaintenance"
                  value="trimestrielle"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond24: e.target.value })
                  }
                />{" "}
                &nbsp; trimestrielle
                <br />
                <input
                  type="radio"
                  name="periodeMaintenance"
                  value="semestrielle"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond24: e.target.value })
                  }
                />{" "}
                &nbsp; semestrielle
                <br />
                <input
                  type="radio"
                  name="periodeMaintenance"
                  value="annuelle"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond24: e.target.value })
                  }
                />{" "}
                &nbsp; annuelle
                <br />
                <input
                  type="radio"
                  name="periodeMaintenance"
                  value="annuelle"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond24: e.target.value })
                  }
                />{" "}
                &nbsp; décennale
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q15 : Formation du personnel à la sécurité incendie</li>
              </label>
              <div className="r">
                <input type="radio" name="Fp" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond25: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="Fp" value="NON" 
                onChange={(e) =>
                  setFormulaire({ ...formulaire2, cond25: e.target.value })
                }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q16 : Existence plan sécurité/évacuation</li>
              </label>
              <div className="r">
                <input type="radio" name="Ep" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond26: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="Ep" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond26: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q17 : Consignes de sécurité incendie affichées </li>
              </label>
              <div className="r">
                <input type="radio" name="Csi" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond27: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="Csi" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond27: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
                <li>Q18 : Suivi et contrôle hygiène et sécurité</li>
              </label>
              <div className="r">
                <input type="radio" name="setc" value="OUI" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond28: e.target.value })
                  }/> &nbsp; OUI
                <br />
                <input type="radio" name="setc" value="NON" onChange={(e) =>
                    setFormulaire({ ...formulaire2, cond28: e.target.value })
                  }/> &nbsp; NON
              </div>
            </td>
          </tr>
         
          <br />
        </div>
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

        {/* <Link to="/Performance4" className="btnsuivant">
          Suivant{" "}
        </Link> */}
      </div>
    </>
  );
}

export default Performance22;
