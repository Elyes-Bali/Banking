import ProgressBar from "react-customizable-progressbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editform } from "../../redux/FormSlice/formslice";
import "./Performance5678.css";

function Performance5678() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    acc1: "",
    acc2: "",
    cons1: "",
    cons2: "",
    cons3: "",
    cons4: "",
    auto1: "",
    auto2: "",
    pat1: "",
    pat2: "",
  });
  console.log(formulaire2);
  const progress = 80;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/climatique");
  };
  const hundelUpdate1 = () => {
    navigate("/per4");
    // setPing(!ping);
  };
  return (
    <>
      <div
        className="shadow p-3 mb-5 bg-body rounded mt-5 container"
        id="Performance5"
      >
        <h1 className="text-center p-3 fs-3 bg-primary text-white">
          <b>Normes de performance 5 :</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="bbaa">{progress}%</div>
        </div>
        <h3 className="text-center fs-5 fw-bold mt-2">
          <b>Acquisition de terres et réinstallation involontaire</b>
        </h3>
        <br />
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que la réalisation de votre projet a entraîné le
                    déplacement (physique ou économique) non volontaire de
                    populations vivant sur le site (prière noter que la
                    responsabilité de votre société comprend également les cas
                    de réinstallations prises en charge par le gouvernement) ?
                  </li>
                </legend>
              </label>
              <div className="rea">
                <input
                  type="radio"
                  name="real"
                  value="OUI"
                  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      acc1: e.target.value,
                    })
                  }
                />
                &nbsp; OUI <br />
                <input type="radio" name="real" value="NON"  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      acc1: e.target.value,
                    })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <b>
              Quelles sont les mesures d'atténuation que votre société a prises
              pour réduire l'impact économique et social pour les populations
              déplacées (notamment l'engagement des communautés, leur
              réinstallation et la restauration de leurs moyens de subsistance)
              ?
            </b>
          </label>
          <br />
          <br />
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les mesures d'atténuation ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                acc2: e.target.value,
              })
            }
          />
          <br />
        </div>

        <h1 className="text-center p-3 bg-primary text-white">
          <b>Normes de performance 6 :</b>
        </h1>
        <h3>
          <b>
            Conservation de la biodiversité et gestion durable des ressources
            naturelles vivantes
          </b>
        </h3>
        <br />
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que la réalisation de votre projet a entraîné des
                    atteintes à la protection et conservation de la
                    biodiversité, la gestion des services écosystémiques ou à la
                    gestion durable des ressources naturelles vivantes ?
                  </li>
                </legend>
              </label>
              <div className="rea">
                <input type="radio" name="realp" value="OUI"  onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cons1: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="realp" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cons1: e.target.value,
                    })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <b>
              Quelles sont les mesures d'atténuation que votre société a prises
              pour réduire les impacts du projet sur la conservation de la
              biodiversité et la gestion durable des ressources naturelles ?
            </b>
          </label>
          <br />
          <br />
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les mesures d'atténuation ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                cons2: e.target.value,
              })
            }
          />
          <br />
        </div>
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que votre société achète des produits primaires (en
                    particulier, mais pas exclusivement, des denrées
                    alimentaires et des fibres) dont on sait qu'ils sont
                    produits dans des régions où il existe un risque important
                    de conversion d'habitats naturels et/ou critiques ?
                  </li>
                </legend>
              </label>
              <div className="rea">
                <input type="radio" name="primaire" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cons3: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="primaire" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      cons3: e.target.value,
                    })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <b>
              Quelles sont les mesures pour limiter et réorienter la chaîne
              d'approvisionnement de votre société vers des fournisseurs pouvant
              établir qu'ils n'ont pas d'impacts négatifs importants sur ces
              aires ?
            </b>
          </label>
          <br />
          <br />
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les mesures pour limiter et réorienter ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                cons4: e.target.value,
              })
            }
          />
          <br />
        </div>

        <h1 className="text-center p-3 bg-primary text-white">
          <b>Normes de performance 7 :</b>
        </h1>
        <h3>
          <b>Peuples autochtones</b>
        </h3>
        <br />
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que la réalisation de votre projet a entraîné des
                    atteintes à la dignité, aux droits de l'homme, aux
                    aspirations, aux cultures et aux modes de subsistance basés
                    sur des ressources naturelles de populations autochtones
                    vivant sur le site ?
                  </li>
                </legend>
              </label>
              <div className="rea">
                <input type="radio" name="realpro" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      auto1: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="realpro" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      auto1: e.target.value,
                    })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <b>
              Quelles sont les mesures d'atténuation que votre société a prises
              pour réduire les impacts du projet sur les populations
              autochtones, ou, le cas échéant, les indemnisations de ces
              communautés et la fourniture d'opportunités de bénéfices
              développementaux culturellement appropriés ?
            </b>
          </label>
          <br />
          <br />
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les mesures d'atténuation ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                auto2: e.target.value,
              })
            }
          />
          <br />
        </div>

        <h1 className="text-center p-3 bg-primary text-white">
          <b>Normes de performance 8 :</b>
        </h1>
        <h3>
          <b>Patrimoine culturel</b>
        </h3>
        <br />
        <div>
          <tr>
            <td>
              <label>
                <legend>
                  <li>
                    Est-ce que votre projet se trouve sur ou à proximité d'un
                    site culturel ?
                  </li>
                </legend>
              </label>
              <div className="rea">
                <input type="radio" name="prox" value="OUI" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      pat1: e.target.value,
                    })
                  }/>
                &nbsp; OUI <br />
                <input type="radio" name="prox" value="NON" onChange={(e) =>
                    setFormulaire({
                      ...formulaire2,
                      pat1: e.target.value,
                    })
                  }/>
                &nbsp; NON
              </div>
            </td>
          </tr>

          <label htmlFor="name">
            <b>
              Quelles sont les mesures d'atténuation que votre société a prises
              pour protéger le site culturel contre les impacts négatifs des
              activités du projet et soutenir sa conservation ?
            </b>
          </label>
          <br />
          <br />
          <input
            type="text"
            id="name"
            maxLength="1000"
            size="30"
            className="form-control bordering"
            placeholder="Taper les mesures d'atténuation ici"
            onChange={(e) =>
              setFormulaire({
                ...formulaire2,
                pat2: e.target.value,
              })
            }
          />
          <br />
        </div>

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

export default Performance5678;
