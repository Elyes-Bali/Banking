import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApplyOff, CurrentUser, hundelUpdate } from "../../apis/UserApi";
import Swal from "sweetalert2";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addform } from "../../redux/FormSlice/formslice";
import "./Formulaire.css";

const Formulaire = ({ ping, setPing }) => {
  const dispatch = useDispatch();
  const [formulaire1, setUser] = useState({
    formId: uuid(),
    annex1: "",
    annex2: "",
    annex3: "",
    annex4: "",
    annex5: "",
    annex6: "",
    annex7: "",
    annex8: "",
    annex9: "",
    annex10: "",
    annex11: "",
  });

  const navigate = useNavigate();

  const hundelUpdate1 =() => {
    const hasOuiValue = Object.values(formulaire1).includes("OUI");

    if (hasOuiValue) {
      navigate("/");
      Swal.fire({
        icon: "erreur",
        title: "Oops...",
        text: "Vous n'étes pas éligible ",
      });
    } else if (formulaire1.annex1 == "" || formulaire1.annex2 == "" || formulaire1.annex3 == "" || formulaire1.annex4 == "" || formulaire1.annex5 == "" || formulaire1.annex6 == "" || formulaire1.annex7 == "" || formulaire1.annex8 == "" || formulaire1.annex9 == "" || formulaire1.annex10 == "" || formulaire1.annex11 == ""){
      navigate("/");
    }else{
      navigate("/form2");
    }
    dispatch(addform(formulaire1));





    // setPing(!ping);
  };
  console.log(formulaire1);
  const hundelUpdate =() => {
      navigate("/bloc1");
    // setPing(!ping);

  };




  return (
    <div className="shadow p-3 mb-5 bg-body rounded mt-5" id="certification">
      <h3 className="text-center trt ttrt p-3 bg-primary text-white">
        {" "}
        Formulaire de vérification de non-exclusion
      </h3>
      <table class="table ">
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
            <th scope="row">1</th>
            <td>
              Production ou commerce de tout produit, bien ou activité
              considérée comme illégal par la réglementation tunisienne ou
              internationale, ou faisant l’objet d’une interdiction
              internationale (tels que certains herbicides/pesticides, certains
              médicaments, les substances détruisant la couche d’ozone, les PCB,
              etc.)
            </td>
            <td className="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex1"
                
                checked={formulaire1.annex1 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex1: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex1"
               
                checked={formulaire1.annex1 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex1: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Production ou commerce d’armes et munitions</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex2"
                checked={formulaire1.annex2 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex2: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex2"
                checked={formulaire1.annex2 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex2: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>
              {" "}
              Production ou commerce de boissons alcoolisées (à l’exception de
              la bière et du vin)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex3"
                checked={formulaire1.annex3 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex3: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex3"
                checked={formulaire1.annex3 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex3: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td> Production ou commerce du tabac</td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex4"
                checked={formulaire1.annex4 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex4: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex4"
                checked={formulaire1.annex4 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex4: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              Jeux de hasard, casinos, etc. (si activité principale du
              demandeur)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex5"
                checked={formulaire1.annex5 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex5: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex5"
                checked={formulaire1.annex5 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex5: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>
              Production ou commerce de matériaux radioactifs (à l’exception
              d’équipements médicaux, de contrôle de qualité, etc.)
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex6"
                checked={formulaire1.annex6 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex6: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex6"
                checked={formulaire1.annex6 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex6: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>
              Production ou commerce de biens contenant des fibres d’amiante (à
              l’exception de l’amiante-ciment à moins de 20%){" "}
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex7"
                checked={formulaire1.annex7 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex7: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex7"
                checked={formulaire1.annex7 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex7: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>
              {" "}
              Activités de pêche hauturière utilisant des filets dérivants de
              plus de 2,5 km de longueur
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex8"
                checked={formulaire1.annex8 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex8: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex8"
                checked={formulaire1.annex8 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex8: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>
              Production ou activités utilisant de la main d’œuvre forcée ou des
              enfants{" "}
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex9"
                checked={formulaire1.annex9 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex9: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex9"
                checked={formulaire1.annex9 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex9: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Activités dans la forêt tropicale humide primaire </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex10"
                checked={formulaire1.annex10 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex10: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex10"
                checked={formulaire1.annex10 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex10: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>

          <tr>
            <th scope="row">11</th>
            <td>
              Production ou commerce de bois ou de biens forestiers ne provenant
              pas de forêts gérées durablement{" "}
            </td>
            <td class="d-md-flex">
              <input
                type="radio"
                value="NON"
                name="annex11"
                checked={formulaire1.annex11 === "NON"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex11: e.target.value,
                  })
                }
              />{" "}
              Non
              <input
                type="radio"
                value="OUI"
                name="annex11"
                checked={formulaire1.annex11 === "OUI"}
                onChange={(e) =>
                  setUser({
                    ...formulaire1,
                    annex11: e.target.value,
                  })
                }
              />{" "}
              OUI
            </td>
          </tr>
        </tbody>
      </table>
      
      <button
        type="button"
        class="btn btn-success w-100 mt-4 rounded-pill"
        onClick={() => {
          hundelUpdate1();
          // hundelUpdate1();
        }}
      >
        SUIVANT
      </button>
     
    </div>
  );
};

export default Formulaire;
