import React from "react";
import "./Plan.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Plan = () => {
  const forme = useSelector((state) => state.form.form);
  const quest = useSelector((state) => state.quest.allquest);
  const navigate = useNavigate();
  const hundelUpdate = () => {
    if (quest?.length !== 0) {
      navigate("/adder");
    } else {
      navigate("/persone");
    }
  };
  return (
    <div>
      <div className="devide">
        <div className="container txte justify-content-center ">
          <h1 className="titre text-center fs-1 mb-5 text-black ">
            {" "}
            Modèle de plan d'action correctif
          </h1>
          <h1 className="serv">
            <strong> </strong>
          </h1>
        </div>
        <section>
          <div className="blocs container">
            <table class="table blocs table-bordered ">
              <thead>
                <tr>
                  <th>Questions</th>
                  <th scope="col">Intitulé du risque non maitrisé</th>
                  <th scope="col">Impact potentiel E&S</th>
                  <th scope="col">Action corrective</th>
                </tr>
              </thead>
              <tbody>
                {forme?.exige1 === "NON" ||
                  (forme?.exige1 === "N/A" && (
                    <tr>
                      <th scope="row" className="text-size-[20px] ">
                        Est-ce que votre projet/activité a réalisé une étude
                        d'impact ?
                      </th>
                      <td className="tdd">
                        <p>
                          Le projet/activité n'est pas conforme à la
                          réglementation nationale du pays où la société opère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel
                          <br />
                          - Risque d'inondations
                          <br />
                          - Risque d'incendie
                          <br />
                          - Risque d'explosion <br />
                          - Risque de sanction <br />
                          -Risque de demande de compensation
                          <br /> ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Vérifier si le projet/activité est soumis à l'étude
                          d'impact. Si oui, régulariser la situation du
                          projet/activité.
                        </p>
                      </td>
                    </tr>
                  ))}
                {forme?.exige5 === "NON" ||
                  (forme?.exige5 === "N/A" && (
                    <tr>
                      <th scope="row">
                        Est-ce que votre projet/activité dispose d'une
                        autorisation de bâtir ?
                      </th>
                      <td className="tdd">
                        <p>
                          Le projet/activité n'est pas conforme à la
                          réglementation nationale du pays où la société opère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Risque de sanction (pécuniaire ou pénale) <br />
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Vérifier si le projet/activité est soumis à un permis
                          de bâtir. Si oui, régulariser la situation du
                          projet/activité.
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.exige7 === "NON" ||
                  (forme?.exige7 === "N/A" && (
                    <tr>
                      <th scope="row">
                        Est-ce que votre projet/activité dispose d'un
                        permis/autorisation d'exploitation ?
                      </th>
                      <td className="tdd">
                        <p>
                          Le projet/activité n'est pas conforme à la
                          réglementation nationale du pays où la société opère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Risque de sanction (pécuniaire ou pénale) <br />
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Vérifier si le projet/activité est soumis à un
                          permis/autorisation d'exploitation.
                          <br /> Si oui, régulariser la situation du
                          projet/activité.
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.per1 === "NON" ||
                  (forme?.per1 === "N/A" && (
                    <tr>
                      <th scope="row">
                        Est-ce votre société a mis en place un système
                        d'évaluation et de suivi des risques sociaux et
                        environnementaux ?
                      </th>
                      <td className="tdd">
                        <p>
                          La société n'a pas mis en place un système
                          d'évaluation et de suivi des risques sociaux et
                          environnementaux
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque d'inondations
                          <br />
                          - Risque d'incendie
                          <br />
                          - Risque d'explosion <br />
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de mettre en place un système
                          d'évaluation et de suivi des risques sociaux et
                          environnementaux
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.cond1 === "OUI" && (
                  <tr>
                    <th scope="row">Existence de nuisances : bruit ?</th>
                    <td className="tdd">
                      <p>Existence de nuisances : bruit</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme : réaliser une cartographie des nuisances
                        sonores dans l'usine
                        <br />A moyen terme: mettre en place des mesures
                        correctrices des nuisances sonores (équipement de
                        protection, machines moins sonores, etc.)
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond2 === "OUI" && (
                  <tr>
                    <th scope="row">Existence de nuisances: poussières?</th>
                    <td className="tdd">
                      <p>Existence de nuisances: poussières</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme: réaliser une mesure des concentrations
                        particulaires dans l'usine
                        <br />A moyen terme: mettre en place des mesures
                        correctrices des nuisances sonores (équipement de
                        protection, machines moins sonores, etc.)
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond3 === "OUI" && (
                  <tr>
                    <th scope="row">Existence de nuisances: fumées?</th>
                    <td className="tdd">
                      <p>Existence de nuisances: fumées</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel
                        <br />
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme: réaliser une mesure de qualité/nocivité
                        des fumées dans l'usine
                        <br />A moyen terme: mettre en place des mesures
                        correctrices pour le traitement /évitement des fumées
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond4 === "OUI" && (
                  <tr>
                    <th scope="row">Existence de nuisances: odeurs?</th>
                    <td className="tdd">
                      <p>Existence de nuisances: odeurs</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme: réaliser une mesure de qualité/nocivité
                        des odeurs dans et autour de l'usine
                        <br />A moyen terme: mettre en place des mesures
                        correctrices pour le traitement /évitement des odeurs
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond5 === "OUI" && (
                  <tr>
                    <th scope="row">Existence de nuisances: vibration?</th>
                    <td className="tdd">
                      <p>Existence de nuisances: vibration</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme: réaliser une mesure de nature/nocivité
                        des vibrations dans et autour de l'usine
                        <br />A moyen terme: mettre en place des mesures
                        correctrices pour l'atténuation/évitement des vibrations
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond6 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Existence de nuisances: trafic routier et congestion?
                    </th>
                    <td className="tdd">
                      <p>
                        Existence de nuisances: trafic routier et congestion
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme: réaliser une étude de trafic routier
                        origine/destination des poids lourds utilisés par
                        l'usine
                        <br />A moyen terme: mettre en place des mesures
                        correctrices pour l'atténuation/évitement du trafic
                        routier et congestion
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond7 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Existence de nuisances: manipulation de produits
                      dangereux?
                    </th>
                    <td className="tdd">
                      <p>
                        Existence de nuisances: manipulation de produits
                        dangereux
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel
                        <br />
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Risque d'inondations
                        <br />
                        -Risque d'explosion
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Mettre en place des procédures de stockage, de
                        manutention et de manipulation des produits dangereux
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond8 === "NON" && (
                  <tr>
                    <th scope="row">Consignes de sécurité affichées</th>
                    <td className="tdd">
                      <p>Consignes de sécurité non affichées</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel
                        <br />
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        <br />
                        -correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Afficher les consignes de sécurité</p>
                    </td>
                  </tr>
                )}

                {forme?.cond9 === "NON" && (
                  <tr>
                    <th scope="row">Consignes d'hygiène affichées</th>
                    <td className="tdd">
                      <p>Consignes d'hygiène non affichées</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Afficher les consignes d'hygiène</p>
                    </td>
                  </tr>
                )}

                {forme?.cond10 === "NON" && (
                  <tr>
                    <th scope="row">
                      Formation du personnel à l'hygiène/sécurité
                    </th>
                    <td className="tdd">
                      <p>
                        Absence de formation du personnel à l'hygiène/sécurité
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Former le personnel aux règles d'hygiène/sécurité</p>
                    </td>
                  </tr>
                )}

                {forme?.cond11 === "NON" && (
                  <tr>
                    <th scope="row">Equipements de protection individuelle</th>
                    <td className="tdd">
                      <p>
                        Inexistence d'équipements de protection individuelle
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        S'assurer que le personnel porte les équipements de
                        sécurité
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond14 === "NON" && (
                  <tr>
                    <th scope="row">Extincteurs opérationnels</th>
                    <td className="tdd">
                      <p>Extincteurs non opérationnels</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Vérifier le fonctionnement des extincteurs</p>
                    </td>
                  </tr>
                )}

                {forme?.cond18 === "NON" && (
                  <tr>
                    <th scope="row">Alarme et détection incendie</th>
                    <td className="tdd">
                      <p>Absence de système d'alarme et détection incendie</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        - Risque d'explosion
                        <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité d'installer une « alarme incendie
                        »
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond23 === "NON" && (
                  <tr>
                    <th scope="row">
                      Maintenance périodique des équipements sécurité incendie
                    </th>
                    <td className="tdd">
                      <p>
                        Insuffisance de Maintenance périodique des équipements
                        sécurité incendie
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        - Risque d'explosion
                        <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Procéder à la maintenance des équipements sécurité
                        incendie
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cond25 === "NON" && (
                  <tr>
                    <th scope="row">
                      Formation du personnel à la sécurité incendie
                    </th>
                    <td className="tdd">
                      <p>
                        Absence de Formation du personnel à la sécurité incendie
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - Risque d'incendie
                        <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        - Risque d'explosion
                        <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Former le personnel à la sécurité incendie</p>
                    </td>
                  </tr>
                )}

                {forme?.cond26 === "NON" && (
                  <tr>
                    <th scope="row">Existence plan sécurité/évacuation</th>
                    <td className="tdd">
                      <p>Inexistence de plan sécurité/évacuation</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        <br />
                        - Risque de sanction
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Mettre en place un plan de sécurité/évacuation</p>
                    </td>
                  </tr>
                )}

                {forme?.cond27 === "NON" && (
                  <tr>
                    <th scope="row">
                      Consignes de sécurité incendie affichées
                    </th>
                    <td className="tdd">
                      <p>Consignes de sécurité incendie non affichées</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>Afficher les consignes de sécurité incendie</p>
                    </td>
                  </tr>
                )}

                {forme?.cond28 === "NON" && (
                  <tr>
                    <th scope="row">Suivi et contrôle hygiène et sécurité</th>
                    <td className="tdd">
                      <p>Absence de suivi et contrôle hygiène et sécurité</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        - Incapacité de réagir <br />
                        - correctement et efficacement en cas d'accident /
                        d'incident
                        <br />
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de mettre en place un contrôle et
                        un suivi de l'hygiène et sécurité
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum8 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre société emploie (même à titre temporaire)
                      des enfants ?
                    </th>
                    <td className="tdd">
                      <p>
                        La société emploie (même à titre temporaire) des enfants
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Ne plus employer (même à titre temporaire) des enfants
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum9 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre société emploie (même à titre temporaire)
                      des travailleurs forcés ?
                    </th>
                    <td className="tdd">
                      <p>
                        la société emploie (même à titre temporaire) des
                        travailleurs forcés
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Ne plus employer (même à titre temporaire) des
                        travailleurs forcés
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum10 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre société prévoit des visites médicales
                      régulières pour son personnel ?
                    </th>
                    <td className="tdd">
                      <p>
                        La société ne prévoit pas de visites médicales
                        régulières pour son personnel
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé (du personnel et/ou des
                        populations locales) <br />
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de prévoir des visites médicales
                        régulières pour le personnel de l'entreprise
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum13 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est-ce que la totalité du personnel (permanent et
                      temporaire) de votre société dispose d'un contrat de
                      travail ?
                    </th>
                    <td className="tdd">
                      <p>
                        La totalité du personnel (permanent et temporaire) delà
                        société ne dispose pas d'un contrat de travail
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Fournir des contrats de travail à la totalité du
                        personnel
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum15 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est-ce que la totalité du personnel (permanent et
                      temporaire) de votre société dispose de fiches de paie
                      périodiques ?
                    </th>
                    <td className="tdd">
                      <p>
                        La totalité du personnel (permanent et temporaire) delà
                        société ne dispose pas de fiches de paie périodiques
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Fournir des fiches de paie périodiques à la totalité du
                        personnel
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum16 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre société dispose de politiques et
                      procédures de ressources humaines (ex : manuel, règlement
                      intérieur), qui décrivent son approche en matière de
                      gestion des travailleurs ?
                    </th>
                    <td className="tdd">
                      <p>
                        La société ne dispose pas de politiques et procédures de
                        ressources humaines (ex : manuel, règlement intérieur),
                        qui décrivent son approche en matière de gestion des
                        travailleurs
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité d'élaborer des politiques et
                        procédures de ressources humaines (ex : manuel,
                        règlement intérieur), qui décrivent l'approche de
                        l'entreprise en matière de gestion des travailleurs
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.hum22 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre société a mis en place un suivi des
                      accidents du travail ?
                    </th>
                    <td className="tdd">
                      <p>
                        La société n'a pas mis en place un suivi des accidents
                        du travail
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />
                        - Risque de demande de compensation ou d'indemnisation{" "}
                        <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de mettre en place un suivi des
                        accidents du travail
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.liquide2 === "NSP" ||
                  (forme?.liquide2 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce qu'il existe un contrôle régulier et un suivi des
                        rejets des eaux usées et pluviales ?
                      </th>
                      <td className="tdd">
                        <p>
                          Absence de contrôle régulier et de suivi des rejets
                          des eaux usées et pluviales
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>Procéder à l'analyse des eaux usées et pluviales</p>
                      </td>
                    </tr>
                  ))}

                {forme?.liquide3 === "NSP" ||
                  (forme?.liquide3 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existence d'un raccordement au réseau public
                        d'assainissement?
                      </th>
                      <td className="tdd">
                        <p>
                          Absence de raccordement au réseau public
                          d'assainissement
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de raccorder l'usine soit à une
                          station d'épuration interne, soit au réseau public
                          d'assainissement
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.solide1 === "NSP" && (
                  <tr>
                    <th scope="row">
                      Est-ce que l'usine produit des déchets solides?
                    </th>
                    <td className="tdd">
                      <p>Production inconnue de déchets solides</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Déterminer si le process est producteur de déchets
                        solides
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.solide2 === "NSP" ||
                  (forme?.solide2 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que l'usine procède la collecte séparative de ses
                        déchets solides (déchets recyclables, déchets
                        organiques, déchets dangereux, etc.)?
                      </th>
                      <td className="tdd">
                        <p>
                          L'usine ne procède pas à la collecte séparative de ses
                          déchets solides (déchets recyclables, déchets
                          organiques, déchets dangereux, etc.)
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Mettre en place un système de collecte sélective des
                          déchets solides
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.solide3 === "NSP" ||
                  (forme?.solide3 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que l'usine procède à la valorisation ou au
                        recyclage de ses déchets?
                      </th>
                      <td className="tdd">
                        <p>
                          L'usine ne procède pas à la valorisation ou au
                          recyclage de ses déchets
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de recycler ou valoriser les
                          déchets solides
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.solide4 === "NSP" ||
                  (forme?.solide4 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existe-il un contrôle et un suivi de la collecte et de
                        l'élimination des déchets solides de l'usine ?
                      </th>
                      <td className="tdd">
                        <p>
                          Absence de contrôle et de suivi de la collecte et de
                          l'élimination des déchets solides de l'usine
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Mettre en place un contrôle et suivi des déchets
                          solides
                          <br /> (quantités, nocivité, mode de collecte, mode de
                          traitement/élimination, etc.)
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.gaze1 === "NSP" ||
                  (forme?.gaze1 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que le process industriel conduit à l'émission de
                        gaz, de poussières ou de particules dans l'atmosphère
                      </th>
                      <td className="tdd">
                        <p>
                          Si NSP Le process industriel conduit à l'émission de
                          gaz, de poussières ou de particules dans l'atmosphère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Déterminer si le process est producteur d'émissions
                          atmosphériques
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.gaze2 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Emission de COV (composés organiques volatiles) ?
                    </th>
                    <td className="tdd">
                      <p>Emission de COV (composés organiques volatiles)</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme : Mettre en place des dispositifs de
                        captage des COV
                        <br />A moyen terme : Etudier l'opportunité de réduire
                        les émissions de COV
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.gaze3 === "OUI" && (
                  <tr>
                    <th scope="row">Emission de particules en suspension ?</th>
                    <td className="tdd">
                      <p>Emission de particules en suspension</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme : Mettre en place des dispositifs de
                        captage des particules
                        <br />A moyen terme : Etudier l'opportunité de réduire
                        les émissions de particules
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.gaze4 === "OUI" && (
                  <tr>
                    <th scope="row">Autres émissions gazeuses ?</th>
                    <td className="tdd">
                      <p>Autres émissions gazeuses</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        A court terme : Mettre en place des dispositifs de
                        captage des gaz émis
                        <br />A moyen terme : Etudier l'opportunité de réduire
                        les émissions de gaz
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.gaze5 === "NSP" ||
                  (forme?.gaze5 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existe-il un contrôle et un suivi des émissions de gaz,
                        poussières ou particules dans l'atmosphère ?
                      </th>
                      <td className="tdd">
                        <p>
                          Inexistence de contrôle et de suivi des émissions de
                          gaz, poussières ou particules dans l'atmosphère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Mettre en place un contrôle et suivi des émissions de
                          gaz, poussières ou particules
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.gaze6 === "NSP" ||
                  (forme?.gaze6 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que vos locaux de production sont équipés d'un
                        système de ventilation forcée ?
                      </th>
                      <td className="tdd">
                        <p>
                          les locaux de production ne sont pas équipés d'un
                          système de ventilation forcée
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité d'équiper les locaux de
                          production d'un système de ventilation forcée
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.gaze7 === "NSP" ||
                  (forme?.gaze7 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que vos locaux de production ou les machines sont
                        équipés de systèmes de traitement d'air appropriés et
                        dédiés, comportant un ensemble de filtres propres à
                        capter les gaz, poussières ou particules émis dans
                        l'atmosphère ?
                      </th>
                      <td className="tdd">
                        <p>
                          Les locaux de production et/ou les machines ne sont
                          pas équipés de systèmes de traitement d'air appropriés
                          et dédiés, comportant un ensemble de filtres propres à
                          capter les gaz, poussières ou particules émis dans
                          l'atmosphère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité d'équiper les locaux de
                          production ou les machines de systèmes de traitement
                          d'air appropriés et dédiés
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.danger1 === "NSP" && (
                  <tr>
                    <th scope="row">
                      Est-ce que le process industriel conduit à l'utilisation
                      de matières dangereuses ou/et à la production de déchets
                      dangereux ?
                    </th>
                    <td className="tdd">
                      <p>
                        Le process industriel conduit à l'utilisation de
                        matières dangereuses ou/et à la production de déchets
                        dangereux
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque d'incendie
                        <br />
                        - Risque d'explosion
                        <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Déterminer si le process est producteur de déchets
                        dangereux
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger2 === "OUI" && (
                  <tr>
                    <th scope="row">Utilisation d'amiante ?</th>
                    <td className="tdd">
                      <p>Utilisation d'amiante</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Définir un plan de sortie de l'amiante <br />
                        Procéder au désamiantage des installations
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger3 === "OUI" && (
                  <tr>
                    <th scope="row">Utilisation de PCB ?</th>
                    <td className="tdd">
                      <p>Utilisation de PCB</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier un plan de sortie des PCB <br />
                        Procéder à la dépollution des installations
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger4 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Utilisation de substances détruisant la couche d'ozone
                      (CFC, réfrigérants…) ?
                    </th>
                    <td className="tdd">
                      <p>
                        Utilisation de substances détruisant la couche d'ozone
                        (CFC, réfrigérants…)
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />- Risque
                        de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de remplacer les substances
                        détruisant la couche d'ozone par d'autres substances
                        moins nocives
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger5 === "OUI" && (
                  <tr>
                    <th scope="row">Utilisation de métaux lourds ?</th>
                    <td className="tdd">
                      <p>Utilisation de métaux lourds</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction <br />- Risque de demande de
                        compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de ne plus rejeter des métaux
                        lourds dans le milieu naturel
                        <br />
                        Rechercher des produits et/ou procédés de substitution
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger6 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Utilisation ou production de matières dangereuses ?
                    </th>
                    <td className="tdd">
                      <p>Utilisation ou production de matières dangereuses</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque d'incendie <br />
                        - Risque d'explosion <br />
                        - Risque de sanction <br />- Risque de demande de
                        compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de ne plus rejeter des matières
                        dangereuses dans le milieu naturel
                        <br />
                        Rechercher des produits et/ou procédés de substitution
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger7 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Existe-il un contrôle et un suivi de l'utilisation des
                      matières dangereuses et de la collecte et de l'élimination
                      des déchets dangereux de l'usine ?
                    </th>
                    <td className="tdd">
                      <p>
                        Inexistence de contrôle et de suivi de l'utilisation des
                        matières dangereuses et de la collecte et de
                        l'élimination des déchets dangereux de l'usine
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque d'incendie <br />
                        - Risque d'explosion <br />
                        - Risque de sanction <br />- Risque de demande de
                        compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Mettre en place un contrôle et suivi des déchets
                        dangereux
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.danger8 === "NSP" ||
                  (forme?.danger8 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existe-il des mesures visant à prévenir la production de
                        déchets dangereux ?
                      </th>
                      <td className="tdd">
                        <p>
                          Absence de mesures visant à prévenir la production de
                          déchets dangereux
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque sur la santé ( du personnel et/ou des
                          populations locales)
                          <br />
                          - Risque d'incendie <br />
                          - Risque d'explosion <br />
                          - Risque de sanction <br />- Risque de demande de
                          compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de mettre en place des mesures
                          de prévention de production de déchets dangereux
                          (production plus propre)
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.urgance1 === "NSP" ||
                  (forme?.urgance1 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existe-il des précautions à suivre en cas d'accident /
                        d'incendie et des procédures d'urgence ?
                      </th>
                      <td className="tdd">
                        <p>
                          Inexistence de précautions à suivre en cas d'accident
                          / d'incident et des procédures d'urgence
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque sur la santé ( du personnel et/ou des
                          populations locales)
                          <br />
                          - Incapacité de réagir correctement et efficacement en
                          cas d'accident / d'incident
                          <br />
                          - Risque d'incendie <br />
                          - Risque d'explosion <br />
                          - Risque de sanction <br />- Risque de demande de
                          compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de définir des précautions à
                          suivre en cas d'accident / d'incendie
                          <br />
                          Mettre en place des procédures d'urgence
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.urgance2 === "NSP" ||
                  (forme?.urgance2 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que les installations de stockage, systèmes de
                        canalisations, réseaux de drainage sont en bon état ?
                      </th>
                      <td className="tdd">
                        <p>
                          Les installations de stockage, systèmes de
                          canalisations, réseaux de drainage ne sont pas en bon
                          état
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque sur la santé ( du personnel et/ou des
                          populations locales)
                          <br />
                          - Incapacité de réagir correctement et efficacement en
                          cas d'accident / d'incident
                          <br />
                          - Risque d'incendie <br />
                          - Risque d'explosion <br />
                          - Risque de sanction <br />- Risque de demande de
                          compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Remettre en état les installations de stockage,
                          systèmes de canalisations, réseaux de drainage et
                          autres
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.urgance3 === "NSP" ||
                  (forme?.urgance3 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existence de normes internes de surveillance et
                        d'entretien des installations de stockage, systèmes de
                        canalisations, réseaux de drainage
                      </th>
                      <td className="tdd">
                        <p>
                          Inexistence de normes internes de surveillance et
                          d'entretien des installations de stockage,systèmes de
                          canalisations, réseaux de drainage
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque sur la santé ( du personnel et/ou des
                          populations locales)
                          <br />
                          - Incapacité de réagir correctement et efficacement en
                          cas d'accident / d'incident
                          <br />
                          - Risque d'incendie <br />
                          - Risque d'explosion <br />
                          - Risque de sanction <br />- Risque de demande de
                          compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de définir des normes internes
                          de surveillance et d'entretien
                          <br /> des installations de stockage, systèmes de
                          canalisations, réseaux de drainage
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.urgance4 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Cas de pollution des sols et des eaux souterraines au
                      niveau et aux alentours des sites de stockage
                    </th>
                    <td className="tdd">
                      <p>
                        Cas de pollution des sols et des eaux souterraines au
                        niveau et aux alentours des sites de stockage
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction <br />- Risque de demande de
                        compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier les sources de pollution des sols et des eaux
                        souterraines au niveau et aux alentours des sites de
                        stockage
                        <br />
                        Définir et mettre en œuvre un plan de dépollution des
                        sols et eaux souterraines pollués au niveau et aux
                        alentours des sites de stockage
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.comm1 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre projet ou votre activité a un impact sur
                      la santé et la sécurité des communautés (notamment pour
                      celles vivant à proximité du projet) ?
                    </th>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné des impacts sur la
                        santé et la sécurité des communautés
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction <br />
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de mettre en place des mesures
                        d'atténuation pour réduire les impacts
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.comm3 === "NON" && (
                  <tr>
                    <th scope="row">
                      Lors de l'étude d'impact sur l'environnement, avez-vous
                      procédé à une consultation publique ou à une enquête
                      publique auprès des parties
                      <br />
                      prenantes concernant votre projet ?
                    </th>
                    <td className="tdd">
                      <p>
                        Pas de consultation publique ou d'enquête publique
                        auprès des parties prenantes concernant le projet
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Pas de consultation publique ou d'enquête publique
                        auprès des parties prenantes concernant le projet
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de mettre en place des mesures de
                        communications
                        <br />
                        extérieures auprès des parties prenantes et des
                        mécanismes de
                        <br />
                        règlement des griefs concernant votre projet
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.comm5 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est-ce que votre société a mis en place des mécanismes de
                      divulgation continue
                      <br />
                      de l'information aux communautés affectées par votre
                      projet ?
                    </th>
                    <td className="tdd">
                      <p>
                        Pas de mécanismes de divulgation continue de
                        l'information aux communautés affectées par le projet
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Etudier l'opportunité de mettre en place des mécanismes
                        de divulgation continue de l'information
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.acc1 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Est-ce que la réalisation de votre projet a entraîné le
                      déplacement
                      <br />
                      non volontaire de populations vivant sur le site ?
                    </th>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné le déplacement non
                        volontaire de populations vivant sur le site
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />- Risque de demande de compensation ou
                        d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Préciser les mesures d'atténuation que votre société a
                        prises pour réduire l'impact économique et social pour
                        les populations déplacées
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.acc2 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est ce que votre société a pris les mesures d'atténuation
                      pour
                      <br />
                      réduire l'impact économique et social pour les populations
                      déplacées ?
                    </th>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné le déplacement non
                        volontaire de populations vivant sur le site
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />- Risque de demande de compensation ou
                        d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Préciser les mesures d'atténuation que votre société a
                        prises pour réduire l'impact économique et social pour
                        les populations déplacées
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cons1 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Est-ce que la réalisation de votre projet a entraîné des
                      atteintes à la protection et conservation de la
                      biodiversité, la gestion des services écosystémiques
                      <br />
                      ou à la gestion durable des ressources naturelles
                    </th>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné des atteintes à la
                        biodiversité
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />- Risque de demande de compensation ou
                        d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Préciser les mesures d'atténuation que votre société a
                        prises pour réduire les impacts du projet sur la
                        biodiversité
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.cons3 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est ce que votre société a pris les mesures
                      <br />
                      d'atténuation pour réduire les impacts du projet sur la
                      biodiversité ?
                    </th>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné des atteintes à la
                        biodiversité
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />- Risque de demande de compensation ou
                        d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Préciser les mesures d'atténuation que votre société a
                        prises pour réduire les impacts du projet sur la
                        biodiversité
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.auto1 === "OUI" && (
                  <tr>
                    <th scope="row">
                      Est-ce que la réalisation de votre projet a entraîné des
                      atteintes
                      <br />
                      à la dignité, aux droits de l'homme, aux aspirations,
                      <br />
                      aux cultures et aux modes de subsistance basés
                      <br />
                      sur des ressources naturelles de populations autochtones
                      vivant sur le site ?
                    </th>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné
                        <br />
                        des atteintes à la dignité, aux droits de l'homme, aux
                        aspirations,
                        <br />
                        aux cultures et aux modes de subsistance basés sur des
                        ressources naturelles
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque sur la santé ( du personnel et/ou des
                        populations locales)
                        <br />
                        - Risque de sanction (pécuniaire ou pénale)
                        <br />- Risque de demande de compensation ou
                        d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        La réalisation du projet a entraîné des
                        <br />
                        atteintes à la dignité, aux droits de l'homme, aux
                        aspirations,
                        <br />
                        aux cultures et aux modes de subsistance basés sur des
                        ressources naturelles
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.pat1 === "NON" && (
                  <tr>
                    <th scope="row">
                      Est ce que votre société a pris les mesures d'atténuation
                      <br />
                      pour réduire les impacts du projet sur les populations
                      autochtones,
                      <br />
                      ou, le cas échéant, les indemnisations de ces communautés
                      et
                      <br />
                      la fourniture d'opportunités de bénéfices développementaux
                      culturellement appropriés ?
                    </th>
                    <td className="tdd">
                      <p>populations autochtones vivant sur le site</p>
                    </td>
                    <td className="tdd">
                      <p></p>
                    </td>
                    <td className="tdd">
                      <p>
                        sur des ressources naturelles, les indemnisations
                        <br />
                        de ces communautés et la fourniture
                        <br />
                        d'opportunités de bénéfices développementaux
                        culturellement appropriés
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="btt">
            <button
              type="submit"
              className="mt-2 mb-5 btn btn-success"
              onClick={() => {
                hundelUpdate();
              }}
            >
              Suivant
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Plan;
