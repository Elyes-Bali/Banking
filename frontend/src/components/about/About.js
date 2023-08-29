import React from "react";

const About = ({ id, id1 }) => {
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  return (
    <div>
      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/st5.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6"><br/><br/><br/><br/>
              <h2 className="fs-5">À Propos de Nous</h2>
              <h1 className="display-6">
              La Société <b>Tunisienne</b> de Banque
              </h1>
              <hr />
              <p className="lead mb-4">
              La Société Tunisienne de Banque est née au lendemain de l'indépendance. Entrée en activité le 26 mars 1958, c'est le premier établissement bancaire spécifiquement tunisien conçu afin de contribuer efficacement au développement économique et social du jeune Etat indépendant et ce, dans un contexte de désinvestissement, de désorganisation du marché de crédit et d'une véritable hémorragie de capitaux vers l'étranger
              </p>
              <a
                href={`#${id1}`}
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Nos Services
              </a>
              {/* {!isAdmin && token &&
              <a
                href={`#${id}`}
                className="btn btn-primary rounded-pill px-4 py-2 ms-2"
              >
                Contactez-nous
              </a>} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
