import React from "react";



const Services = ({id1}) => {
  return (
    <div id={id1}>
      <section >
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="fd-5 text-center mb-0">Nos Services</h2>
              <h1 className="display-6 text-center mb-4">
              Nos <b>Super</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-university fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Comptes personnels</h5>
                  <p className="card-text lead">
                  Nous proposons une variété de comptes personnels, notamment des comptes chèques pour vos transactions quotidiennes et des comptes d'épargne 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-money fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  
                  <h5 className="card-title mb-3 fs-4 fw-bold">Prêts et hypothèques</h5>
                  <p className="card-text lead">
                  Que vous envisagiez d'acheter une nouvelle maison,notre banque propose des options de prêts et d'hypothèques compétitives adaptées à vos besoins
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                
                <div className="card-body text-center">
                <i class="fa fa-credit-card fa-4x mb-4 text-primary" aria-hidden="true"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Cartes de crédit</h5>
                  <p className="card-text lead">
                  Profitez de la commodité et de la flexibilité de notre gamme de cartes de crédit. nos cartes de crédit offrent des avantages adaptés à votre mode de vie
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 down */}

        

        </div>
      </section>
      
    </div>
  );
};

export default Services;
