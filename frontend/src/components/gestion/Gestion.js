// import { Link } from "react-router-dom";
import "./Gestion.css";
// import Button from "react-bootstrap/Button";
import ProgressBar from "react-customizable-progressbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";

function Gestion() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    hum1: "",
    hum2: "",
    hum3: "",
    hum4: "",
    hum5: "",
    hum6: "",
    hum7: "",
    hum8: "",
    hum9: "",
    hum10: "",
    hum11: "",
    hum12: "",
    hum13: "",
    hum14: "",
    hum15: "",
    hum16: "",
    hum17: "",
    hum18: "",
    hum19: "",
    hum20:"",
    hum21:"",
    hum22:"",
   
  });
  console.log(formulaire2);
  const progress = 40;
  const barColor = "#003CFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate =() => {
   
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/per22")
  }

  const hundelUpdate1 =() => {
    navigate("/gesthum");
  // setPing(!ping);
  };
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className="shadow p-3 mb-5 trt bg-body rounded container" id="Gestion">
        <h1 className="text-center azerty p-3 bg-primary text-white">
          <b> Norme de Performance 2 </b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          {formulaire2.hum4 == "" &&
          <div className="prog3">{progress}%</div>}
          {formulaire2.hum4 == "NON" &&
          <div className="prog3">{progress}%</div>}
           {formulaire2.hum4 == "OUI" &&
          <div className="prog31">{progress}%</div>}
         
        </div>
        <br />
        <h4>
          <b className="trav">Organisation du travail :</b>
        </h4>
        <br />
        <label htmlFor="name">
          <li className="travail">Nombre d'équipes/shifts : </li>
        </label>
        <input
          type="text"
          id="name"
        
          minLength="4"
          maxLength="1000"
          size="30"
          className="form-control bordering"
          placeholder="Nombre d'équipes"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, hum1: e.target.value })}
          required
        />
        <br />
        <br />
        <label htmlFor="name">
          <li className="travail">Nombre de jours de travail par semaine: </li>
        </label>
        <input
          type="text"
          id="name"
          maxLength="1000"
          size="30"
          className=" form-control bordering"
          placeholder="Nombre d'équipes"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, hum2: e.target.value })}
          required
        />
        <br />
        <br />
        <label htmlFor="name">
          <li className="travail">Horaires de travail : </li>{" "}
        </label>
        <input
          type="text"
          id="name"
          
          minLength="3"
          maxLength="1000"
          size="30"
          className="form-control bordering"
          placeholder="Horaires de travail"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, hum3: e.target.value })}
          required
        />
        <br />
        <div>
          <tr>
            <td>
              <label>
              <legend> <li>
                  {" "}
                  
                    Est-ce que votre société a une politique active pour la
                    promotion de l'égalité des chances et de traitement des
                    travailleurs, le respect du droit national du travail et de
                    l'emploi et la lutte contre les discriminations ?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="healthPolicy" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, hum4: e.target.value })}/> OUI <br />
              <input type="radio" name="healthPolicy" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, hum4: e.target.value })}/> NON
              </div>
            </td>
          </tr>

          {formulaire2.hum4 == "OUI" &&
            <>
          <label htmlFor="name" className="travail">Si oui Lesquelles </label>&nbsp;&nbsp;
          <input
            type="text"
            id="name"
            
            minLength="4"
            className="form-control bordering"
            maxLength="1000"
            size="30"
            placeholder="Tapez les dispositions du société ici"
            onChange={(e) =>
              setFormulaire({ ...formulaire2, hum5: e.target.value })}
            required
          />
</>}

          <br />
          <br />
          <tr>
            <td>
              <label>
              <legend>  <li>
                  
                    Est-ce que votre société a une politique active pour la
                    promotion de conditions de travail sures et saines et la
                    protection de la santé des travailleurs?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="h" value="OUI" onChange={(e) =>
            setFormulaire({ ...formulaire2, hum6: e.target.value })}/> OUI <br />
              <input type="radio" name="h" value="NON" onChange={(e) =>
            setFormulaire({ ...formulaire2, hum6: e.target.value })}/> NON
              </div>
            </td>
          </tr>

          {formulaire2.hum6 == "OUI" &&
            <>
          <label htmlFor="name" className="travail">Si oui Lesquelles</label>&nbsp;&nbsp;
          <input
            type="text"
            id="name"
         
            minLength="4"
            maxLength="1000"
            className="form-control bordering"
            size="30"
            placeholder="Tapez les dispositions du société ici"
            onChange={(e) =>
              setFormulaire({ ...formulaire2, hum7: e.target.value })}
            required
          />
</>}

          <br />
          <tr>
            <td>
              <label>
              <legend> <li>
                  
                    Est-ce que votre societe emploie (meme e titre temporaire)
                    des enfants ?
                  {" "}
                </li></legend>
              </label>
              <br/>
              <div className="health">
              <input type="radio" name="he" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum8: e.target.value })}/> OUI <br />
              <input type="radio" name="he" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum8: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend> <li>
                  
                    Est-ce que votre société emploie (méme é titre temporaire)
                    des travailleurs forcés ?
                  {" "}
                </li></legend>
              </label>
              <br /> <div className="health">
              <input type="radio" name="hea" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum9: e.target.value })}/> OUI <br />
              <input type="radio" name="hea" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum9: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend> <li>
                  
                    Est-ce que votre société prévoit des visites médicales
                    réguliéres pour son personnel ?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="heal" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum10: e.target.value })}/> OUI <br />
              <input type="radio" name="heal" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum10: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  
                    Est-ce que votre société est signataire des conventions
                    collectives/sectorielles relatives aux conditions de travail
                    des travailleurs ?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="healt" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum11: e.target.value })}/> OUI <br />
              <input type="radio" name="healt" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum11: e.target.value })}/> NON
              </div>
            </td>
          </tr>

          {formulaire2.hum11 == "OUI" &&
            <>
          <label htmlFor="name" className="travail">Si oui Lesquelles </label>&nbsp;&nbsp;
          <input
            type="text"
            id="name"
           
            minLength="4"
            maxLength="1000"
            className="form-control bordering"
            size="39"
            placeholder="Tapez les conventions collectives/sectorielles"
            onChange={(e) =>
              setFormulaire({ ...formulaire2, hum12: e.target.value })}
            required
          />
</>}


          <br />
          <br />
          
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  
                    Est-ce que la totalité du personnel (permanent et
                    temporaire) de votre société dispose d'un contrat de travail
                    ?
                  
                </li></legend>
              </label>
              <br /> <div className="health">
              <input type="radio" name="health" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum13: e.target.value })}/> OUI <br />
              <input type="radio" name="health" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum13: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  {" "}
                  
                    Est-ce que la totalité du personnel (permanent et
                    temporaire) de votre société est déclaré é la sécurité
                    sociale ?
                  
                </li></legend>
              </label>{" "}
              <br /> <div className="health">
              <input type="radio" name="p" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum14: e.target.value })}/> OUI <br />
              <input type="radio" name="p" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum14: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  {" "}
                  
                  Est-ce que la totalité du personnel (permanent et temporaire) de votre société dispose de fiches de paie périodiques ?
                 
                </li> </legend>
              </label>{" "}
              <br /> <div className="health">
              <input type="radio" name="po" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum15: e.target.value })}/> OUI <br />
              <input type="radio" name="po" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum15: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  
                    Est-ce que votre société dispose de politiques et procédures
                    de ressources humaines (ex : manuel, réglement intérieur),
                    qui décrivent son approche en matiére de gestion des
                    travailleurs{" "}
                  
                </li>{" "}</legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="pol" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum16: e.target.value })}/> OUI <br />
              <input type="radio" name="pol" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum16: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  
                    Est-ce que votre société fournit aux travailleurs des
                    informations, étayées par des documents, claires et faciles
                    à comprendre sur leurs droits en vertu du droit national du
                    travail et de l'emploi et de toute convention collective
                    applicable, y compris sur leurs droits en matiére d'horaire
                    de travail, de congés, de salaire, d'heures supplémentaires,
                    de rémunération et de prestations sociales au début de la
                    relation de travail et lorsqu'un changement important
                    survient ?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="poli" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum17: e.target.value })}/> OUI <br />
              <input type="radio" name="poli" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum17: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend> <li>
                  
                    Existe-il au sein de votre société des dispositifs mis en
                    place pour gérer les conflits sociaux au sein de
                    l'entreprise{" "}
                  
                  ?
                </li></legend>
              </label>
              <br />
              <br />
              <div className="health">
              <input type="radio" name="polic" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum18: e.target.value })}/> OUI <br />
              <input type="radio" name="polic" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum18: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                 
                    Existe-il au sein de votre société des dispositifs mis en
                    place pour le licenciement du personnel pour des raisons
                    économiques (plans sociaux)?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="policy" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum19: e.target.value })}/> OUI <br />
              <input type="radio" name="policy" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum19: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  
                    Existe-il des instances représentatives du personnel au sein
                    de votre société (syndicats, comité d'entreprise, délégués
                    du personnels, délégués syndicaux) ?
                  
                </li></legend>
              </label>
              <br /> <div className="health">
              <input type="radio" name="hpo" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum20: e.target.value })}/> OUI <br />
              <input type="radio" name="hpo" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum20: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend><li>
                  
                    Existe-il des litiges en cours entre votre société et
                    certains de ses employés ?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="hpol" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum21: e.target.value })}/> OUI <br />
              <input type="radio" name="hpol" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum21: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>
              <legend> <li>
                 
                  Est-ce que votre société a mis en place un suivi des accidents du travail ?
                  
                </li></legend>
              </label>
              <br />
              <div className="health">
              <input type="radio" name="hpoli" value="OUI"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum22: e.target.value })}/> OUI <br />
              <input type="radio" name="hpoli" value="NON"  onChange={(e) =>
              setFormulaire({ ...formulaire2, hum22: e.target.value })}/> NON
              </div>
            </td>
          </tr>
          <br />
        </div>
        <button
        type="button"
        class="btn btn-danger w-20  rounded-pill pull-left"
        onClick={() => {
          hundelUpdate1();
        
        }}
      >
        precedent
      </button>
        <button
          type="submit"
          class="btn btn-success w-20  rounded-pill pull-right mb-5"
          onClick={() => {
            hundelUpdate();
          }}
        >
          Suivant
        </button>        
        <br />
        {/* <Button variant="primary" onClick={handleShow}>
          Information complementaire
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Information commplementaire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Tapez ici </label>&nbsp;&nbsp;
            <input />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>

        <Link to="/" className="suivant1">
          Suivant{" "}
        </Link> */}
      </div>
    </>
  );
}

export default Gestion;
