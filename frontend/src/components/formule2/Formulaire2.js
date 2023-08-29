import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "react-customizable-progressbar";
import Swal from "sweetalert2";
import "./Formulaire.css";
import { useDispatch, useSelector } from "react-redux";
import { editform } from "../../redux/FormSlice/formslice";
const Formulaire2 = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const [formulaire2, setUser] = useState({
    authcateg:"",
    categ1: "",
    categ2: "",
    categ3: "",
    categ4: "",
    categ5: "",
    categ6: "",
    categ7: "",
    categ8: "",
    categ9: "",
    categ10: "",
    categ11: "",
    categ12: "",
    categ13: "",
    categ14: "",
    categ15: "",
    categ16: "",
    categ17: "",
    categ18: "",
    categ19: "",
    categ20: "",
    categ21: "",
    categ22: "",
    categ23: "",
    categ24: "",
    categ25: "",
  });

  const navigate = useNavigate();
  const progress = 5;
  const barColor = "#003CFF";
  const strokeWidth = 20;
  const trailWidth = 5;

  const hundelUpdate1 = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedUser = { ...formulaire2 };
  
        if (
          formulaire2.categ1 === "NON" &&
          formulaire2.categ2 === "NON" &&
          formulaire2.categ3 === "NON" &&
          formulaire2.categ4 === "NON" &&
          formulaire2.categ5 === "NON" &&
          formulaire2.categ6 === "NON" &&
          formulaire2.categ7 === "NON" &&
          formulaire2.categ8 === "NON" &&
          formulaire2.categ9 === "NON" &&
          formulaire2.categ10 === "NON" &&
          formulaire2.categ11 === "NON"
        ) {
          updatedUser.authcateg = "A";
        } else if (
          formulaire2.categ12 === "NON" &&
          formulaire2.categ13 === "NON" &&
          formulaire2.categ14 === "NON" &&
          formulaire2.categ15 === "NON" &&
          formulaire2.categ16 === "NON" &&
          formulaire2.categ17 === "NON"
        ) {
          updatedUser.authcateg = "B+";
        } else if (
          formulaire2.categ18 === "NON" &&
          formulaire2.categ19 === "NON" &&
          formulaire2.categ20 === "NON" &&
          formulaire2.categ21 === "NON" &&
          formulaire2.categ22 === "NON" &&
          formulaire2.categ23 === "NON"
        ) {
          updatedUser.authcateg = "B";
        } else if (formulaire2.categ24 === "NON") {
          updatedUser.authcateg = "C";
        } else if (formulaire2.categ25 === "NON") {
          updatedUser.authcateg = "FI";
        }
  
        // setUser(updatedUser);
  
        dispatch(editform({ formulaire2: updatedUser, id: forme._id })).then(() => {
          Swal.fire("Applied!", "Your Apply is successful.", "success");
          navigate("/form3");
        });
      }
    });
  };
  const hundelUpdate =() => {
    navigate("/form1");
  // setPing(!ping);
};

  return (
    <div className="shadow p-3 mb-5 bg-body rounded mt-5" id="certification">
      <h3 className="text-center trt ttrt p-3 bg-primary text-white">Categorisation</h3>
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
      <table class="table tdd">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <center>Question</center>
            </th>
            <th scope="col">Réponse</th>
          </tr>
        </thead>
        
        <tbody className="sizing">
          <tr>
            <td></td>
            <td className="categories">
              <center>CATEGORIE A</center>
            </td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>
              Usines industrielles de grande taille (cimenterie, usine
              sidérurgique, métallurgique, production d'engrais, etc.)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ1"
                checked={formulaire2.categ1 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ1: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ1"
                checked={formulaire2.categ1 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ1: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>
              {" "}
              Construction d’infrastructures (barrages, port, aéroport,
              autoroute, centrale électrique, etc.)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ2"
                checked={formulaire2.categ2 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ2: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ2"
                checked={formulaire2.categ2 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ2: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td> Impact sur une forêt vierge</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ3"
                checked={formulaire2.categ3 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ3: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ3"
                checked={formulaire2.categ3 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ3: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              Impact sur un site de patrimoine culturel (par exemple,
              emplacements religieux ou archéologiques)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ4"
                checked={formulaire2.categ4 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ4: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ4"
                checked={formulaire2.categ4 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ4: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              Impacts sur des lignes de partage des eaux par de grands
              programmes d’aménagement hydraulique (par exemple, lutte contre
              les inondations, irrigation ou drainage)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ5"
                checked={formulaire2.categ5 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ5: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ5"
                checked={formulaire2.categ5 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ5: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Déplacement involontaire de communautés ou de familles</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ6"
                checked={formulaire2.categ6 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ6: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ6"
                checked={formulaire2.categ6 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ6: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>
              {" "}
              Production ou utilisation commerciale de produits agrochimiques
              (production ou commercialisation de pesticides, engrais,
              fongicides)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ7"
                checked={formulaire2.categ7 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ7: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ7"
                checked={formulaire2.categ7 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ7: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Impact sur une voie maritime navigable internationale</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ8"
                checked={formulaire2.categ8 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ8: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ8"
                checked={formulaire2.categ8 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ8: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>
              Impact sur les habitats naturels protégés ou des zones à
              diversité biologique élevée (par exemple, marécages, récifs
              coralliens, palétuviers){" "}
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ9"
                checked={formulaire2.categ9 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ9: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ9"
                checked={formulaire2.categ9 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ9: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">10</th>
            <td>Impacts sur des populations indigènes</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ10"
                checked={formulaire2.categ10 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ10: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ10"
                checked={formulaire2.categ10 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ10: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>
              Génération d’impacts sur l’environnement irréversibles
              significatifs qui affecteront probablement le milieu physique
              (carrières, mines, zones d’aménagement
              agricole/urbain/industriel/touristique, etc.)
            </td>
            <br />

            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ11"
                checked={formulaire2.categ11 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ11: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ11"
                checked={formulaire2.categ11 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ11: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          {/* Categorie B+ */}

          <tr>
            <td></td>
            <td className="categories">
              <center>CATEGORIE B+</center>
            </td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>
              Stockage, manipulation ou utilisation de substances toxiques sous
              forme de liquides, de solides ou de gaz
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ12"
                checked={formulaire2.categ12 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ12: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ12"
                checked={formulaire2.categ12 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ12: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">13</th>
            <td>Production de déchets solides dangereux ou non dangereux</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ13"
                checked={formulaire2.categ13 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ13: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ13"
                checked={formulaire2.categ13 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ13: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">14</th>
            <td>Utilisation de substances appauvrissant la couche d’ozone</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ14"
                checked={formulaire2.categ14 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ14: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ14"
                checked={formulaire2.categ14 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ14: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">15</th>
            <td>
              Le produit final devient un polluant une fois qu’il est utilisé
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ15"
                checked={formulaire2.categ15 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ15: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ15"
                checked={formulaire2.categ15 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ15: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">16</th>
            <td>
              Nécessité d’obtention de permis d’autorisations environnementales
              pour l’exécution du projet
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ16"
                checked={formulaire2.categ16 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ16: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ16"
                checked={formulaire2.categ16 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ16: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">17</th>
            <td>Contamination antérieure des sols</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ17"
                checked={formulaire2.categ17 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ17: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ17"
                checked={formulaire2.categ17 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ17: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          {/* Categorie B */}
          <tr>
            <td></td>
            <td className="categories">
              <center>CATEGORIE B</center>
            </td>
          </tr>

          <tr>
            <th scope="row">18</th>
            <td>Impact sur la santé et la sécurité sur les lieux de travail</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ18"
                checked={formulaire2.categ18 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ18: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ18"
                checked={formulaire2.categ18 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ18: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">19</th>
            <td>
              Niveaux élevés de bruit (dans l’usine ou dans les limites de
              l’emplacement)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ19"
                checked={formulaire2.categ19 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ19: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ19"
                checked={formulaire2.categ19 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ19: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">20</th>
            <td>
              Production ou augmentation de la production de déchets liquides
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ20"
                checked={formulaire2.categ20 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ20: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ20"
                checked={formulaire2.categ20 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ20: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">21</th>
            <td>Emission de gaz ou particules dans l’air</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ21"
                checked={formulaire2.categ21 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ21: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ21"
                checked={formulaire2.categ21 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ21: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">22</th>
            <td>Augmentation de la consommation d’eau</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ22"
                checked={formulaire2.categ22 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ22: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ22"
                checked={formulaire2.categ22 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ22: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">23</th>
            <td>Augmentation de la consommation d’énergie</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ23"
                checked={formulaire2.categ23 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ23: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ23"
                checked={formulaire2.categ23 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ23: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          {/* Categorie C */}
          <tr>
            <td></td>
            <td className="categories">
              <center>CATEGORIE C</center>
            </td>
          </tr>

          <tr>
            <th scope="row">24</th>
            <td>Société de service</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ24"
                checked={formulaire2.categ24 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ24: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ24"
                checked={formulaire2.categ24 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ24: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          {/* Categorie FI */}
          <tr>
            <td></td>
            <td className="categories">
              <center>CATEGORIE FI</center>
            </td>
          </tr>

          <tr>
            <th scope="row">25</th>
            <td>Intermédiaire financier</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="categ25"
                checked={formulaire2.categ25 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ25: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="categ25"
                checked={formulaire2.categ25 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire2,
                    categ25: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
        </tbody>
      </table>
      <div className="diraction">
      <button
        type="button"
        class="btn btn-danger w-40 mt-4 rounded-pill"
        onClick={() => {
          hundelUpdate();
        
        }}
      >
        precedent
      </button>
      <button
        type="submit"
        class="btn btn-success w-40  mt-4 rounded-pill"
        onClick={() => {        
          hundelUpdate1();
        }}
      >
        Suivant
      </button>
      </div>
    </div>
  );
};

export default Formulaire2;
