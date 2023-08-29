import React from "react";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./Synthese.css";
import { useSelector } from "react-redux";
const Synthese = () => {
  const forme = useSelector((state) => state.form.form);
  const navigate = useNavigate();
  const hundelUpdate =() => {
   
    navigate("/page1")
  }
  return (
    <div className="sysn">
      <div className="row">
        <div className="col-md-12">
          <div className="card ">
            <div className="card-header border-transparent">
              <h3 className="card-title tdd">Synthèse :</h3>
              <div className="card-tools"></div>
            </div>
            {/* modification here */}

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table" id="table-to-xls">
                  <thead className="">
                    <tr>
                      <th colspan="5" className="text-center table-primary tdd">
                        Informations relative au client
                      </th>
                    
                    </tr>
                  </thead>
                  <tbody className="">
                   
                    <tr>
                      <td colspan="2" className="tdd">
                        Nom ou raison sociale :
                      </td>
                      <td colspan="3" className="tdd">
                       {forme.nom_client}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Compte courant :
                      </td>
                      <td colspan="3" className="tdd">
                      {forme?.compte}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Personne de contact :
                      </td>
                      <td colspan="3" className="tdd">
                      {forme?.nom}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Telephone :
                      </td>
                      <td colspan="3" className="tdd">
                      {forme?.telephone}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Coureil :
                      </td>
                      <td colspan="3" className="tdd">
                      {forme?.coureil}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Poste :
                      </td>
                      <td colspan="3" className="tdd">
                      {forme?.poste}
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Adress du Site :
                      </td>
                      <td colspan="3" className="tdd">
                      {forme?.grille1}
                      </td>
                    </tr>
                    
                   

                    <tr>
                      <td colspan="2" className="tdd">
                        Type de zone :
                      </td>
                      <td className="tdd " colspan="3">{forme?.grille5}</td>
                    
                    </tr>

                    <tr>
                      <td className="text-center table-primary tdd" colspan="2">
                        {""}
                      </td>
                      <td className="text-center table-primary tdd">OUI</td>
                      <td className="text-center table-primary tdd">NON</td>
                      <td className="text-center table-primary tdd">N/A</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        le projet est situé dans une zone industrielle :
                      </td>
                      <td className="tdd ccc">{forme?.grille6 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.grille6 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc"></td>
                    </tr>

                    

                    <tr>
                      <td colspan="2" className="tdd">
                        Nature du projet :
                      </td>
                      <td className="tdd" colspan="3">{forme?.grille11}</td>
                     
                    </tr>
                    <tr>
                      <td className=" tdd" colspan="2">
                        Categorie :
                      </td>
                      <tr>
                      <td className="tdd" colspan="3">{forme?.authcateg}</td>
                     
                    </tr>
                    </tr>

                    <tr>
                      <td className="text-center table-primary tdd" colspan="5">
                        Risque E & S non maitrisés :
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center table-primary tdd" colspan="2">
                        Informations :
                      </td>
                      <td className="text-center table-primary tdd">OUI</td>
                      <td className="text-center table-primary tdd">NON</td>
                      <td className="text-center table-primary tdd">N/A</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Etude d'impact sur l'environnement :
                      </td>
                      <td className="tdd ccc">{forme?.exig1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig1 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    {/* 10 UP  */}

                    <tr>
                      <td colspan="2" className="tdd">
                        Permis de bâtir :
                      </td>
                      <td className="tdd ccc">{forme?.exig5 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig5 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig5 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Etablissement classé :
                      </td>
                      <td className="tdd ccc">{forme?.exig6 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig6 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig6 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Permis/autorisation d'exploitation :
                      </td>
                      <td className="tdd ccc">{forme?.exig7 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig7 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.exig7 ==="N/A" && <p>✓</p>}</td>
                    </tr>



                    <tr>
                      <td colspan="2" className="tdd">
                        Existance de nuisances
                      </td>
                      <td className="tdd ccc">{forme?.cond3 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.cond3 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.cond3 ==="N/A" && <p>✓</p>}</td>
                    </tr>


                    <tr>
                      <td colspan="2" className="tdd">
                        Problèmes d'hygiène ou de securité
                      </td>
                      <td className="tdd ccc">{forme?.cond9 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.cond9 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.cond9 ==="N/A" && <p>✓</p>}</td>
                    </tr>





                    <tr>
                      <td colspan="2" className="tdd">
                        Mauvaises conditions de travail :
                      </td>
                      <td className="tdd ccc">{forme?.hum6 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum6 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum6 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Totalité du personnel ne dispose pas de contrat de
                        travail :
                      </td>
                      <td className="tdd ccc">{forme?.hum13 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum13 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum13 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        l'ensemble du personnel n'est pas affilié à la CNSS :
                      </td>
                      <td className="tdd ccc">{forme?.hum15 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum15 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum15 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Inexistance de politiques et procédures de ressources
                        humains :
                      </td>
                      <td className="tdd ccc">{forme?.hum16 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum16 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum16 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Absence de dispositifs de gestion des conflits sociaux :
                      </td>
                      <td className="tdd ccc">{forme?.hum18 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum18 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum18 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Manque ou insuffisance de suivi des accidents du travail
                        :
                      </td>
                      <td className="tdd ccc">{forme?.hum22 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum22 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.hum22 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Gestion inappropriée des déchets liquides
                      </td>
                      <td className="tdd ccc">{forme?.liquide1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.liquide1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.liquide1 ==="NSP" && <p>✓</p>}</td>
                    </tr>
                    {/* 20 up */}

                    <tr>
                      <td colspan="2" className="tdd">
                        Gestion inappropriée des déchets solides
                      </td>
                      <td className="tdd ccc">{forme?.solide1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.solide1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.solide1 ==="NSP" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Èmission de gaz ou de particules
                      </td>
                      <td className="tdd ccc">{forme?.gaze3 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.gaze3 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.gaze3 ==="NSP" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Stockage et/ou manipulation inappropriée de matières
                        dangereuses
                      </td>
                      <td className="tdd ccc">{forme?.danger7 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.danger7 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.danger7 ==="NSP" && <p>✓</p>}</td>
                    </tr>

                    <tr>
                      <td colspan="2" className="tdd">
                        Absence ou insuffisance de préparation aux situations
                        d'urgence
                      </td>
                      <td className="tdd ccc">{forme?.urgance1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.urgance1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.urgance1 ==="NSP" && <p>✓</p>}</td>
                    </tr>


                    <tr>
                      <td colspan="2" className="tdd">
                        Impact sur la santé et la sécurité des communautés
                      </td>
                      <td className="tdd ccc">{forme?.per1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.per1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.per1 ==="N/A" && <p>✓</p>}</td>
                    </tr>


                    <tr>
                      <td colspan="2" className="tdd">
                       Déplacement forcé de population
                      </td>
                      <td className="tdd ccc">{forme?.acc1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.acc1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.acc1 ==="N/A" && <p>✓</p>}</td>
                    </tr>


                    <tr>
                      <td colspan="2" className="tdd">
                        Atteinte à la protection et conservation de la biodiversité
                      </td>
                      <td className="tdd ccc">{forme?.cons3 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.cons3 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.cons3 ==="N/A" && <p>✓</p>}</td>
                    </tr>


                    <tr>
                      <td colspan="2" className="tdd">
                        Impact sur le patimoine culturel
                      </td>
                      <td className="tdd ccc">{forme?.auto1 ==="OUI" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.auto1 ==="NON" && <p>✓</p>}</td>
                      <td className="tdd ccc">{forme?.auto1 ==="N/A" && <p>✓</p>}</td>
                    </tr>

                    {/* 31 UP */}
                    {/* ))} */}
                  </tbody>
                </table>
                <div className="downloadd">
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success  mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Télécharger"
                  />
                </div>
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
            </div>

            <div className="card-footer clearfix"></div>
          </div>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Synthese;
