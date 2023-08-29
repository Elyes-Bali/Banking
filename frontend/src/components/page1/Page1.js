import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useSelector } from "react-redux";
import "./Page1.css"
const Page1 = () => {
  const forme = useSelector((state) => state.form.form);

  return (
    <div className="pt-5">
      <table class="table mt-5 fs-6 " id="table-to-xls">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Client Id</th>
            <th scope="col" colspan="2">
              {forme?._id}
            </th>
          </tr>
        </thead>
        <tbody className="ttablee">
          <tr>
            <th scope="row"></th>
            <th scope="col">Questions</th>
            <th scope="col">Reponse</th>
            <th scope="col">Reference</th>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>
              Production ou commerce de tout produit, bien ou activité
              considérée comme illégal par la réglementation
              <br /> tunisienne ou internationale, ou faisant l'objet d'une
              interdiction internationale
              <br /> (tels que certains herbicides/pesticides, certains
              médicaments,
              <br /> les substances détruisant la couche d'ozone, les PCB, etc.)
            </td>
            <td>{forme?.annex1}</td>
            <td>annex1</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Production ou commerce d'armes et munitions</td>
            <td>{forme?.annex2}</td>
            <td>annex2</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              {" "}
              Production ou commerce de boissons alcoolisées (à l'exception de
              la bière et du vin)
            </td>
            <td>{forme?.annex3}</td>
            <td>annex3</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Production ou commerce du tabac</td>
            <td>{forme?.annex4}</td>
            <td>annex4</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              Jeux de hasard, casinos, etc. (si activité principale du
              demandeur)
            </td>
            <td>{forme?.annex5}</td>
            <td>annex5</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>
              Production ou commerce de matériaux radioactifs <br />
              (à l'exception d'équipements médicaux, de contrôle de qualité,
              etc.)
            </td>
            <td>{forme?.annex6}</td>
            <td>annex6</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>
              Production ou commerce de biens contenant des fibres d'amiante
              <br /> (à l'exception de l'amiante-ciment à moins de 20%)
            </td>
            <td>{forme?.annex7}</td>
            <td>annex7</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>
              Activités de pêche hauturière utilisant des filets dérivants de
              plus de 2,5 km de longueur
            </td>
            <td>{forme?.annex8}</td>
            <td>annex8</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>
              Production ou activités utilisant de la main d'œuvre forcée ou des
              enfants
            </td>
            <td>{forme?.annex9}</td>
            <td>annex9</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Activités dans la forêt tropicale humide primaire</td>
            <td>{forme?.annex10}</td>
            <td>annex10</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>
              Production ou commerce de bois ou de biens <br />
              forestiers ne provenant pas de forêts gérées durablement
            </td>
            <td>{forme?.annex11}</td>
            <td>annex11</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>
              Usines industrielles de grande taille (cimenterie, usine
              sidérurgique, métallurgique, production d'engrais, etc.)
            </td>
            <td>{forme?.categ1}</td>
            <td>categ1</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>
              Construction d'infrastructures (barrages, port, aéroport,
              autoroute, centrale électrique, etc.)
            </td>
            <td>{forme?.categ2}</td>
            <td>categ2</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td>Impact sur une forêt vierge</td>
            <td>{forme?.categ3}</td>
            <td>categ3</td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td>
              Impact sur un site de patrimoine culturel <br />
              (par exemple, emplacements religieux ou archéologiques)
            </td>
            <td>{forme?.categ4}</td>
            <td>categ4</td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td>
              Impacts sur des lignes de partage des eaux par de grands
              programmes d'aménagement hydraulique
              <br /> (par exemple, lutte contre les inondations, irrigation ou
              drainage)
            </td>
            <td>{forme?.categ5}</td>
            <td>categ5</td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td>Déplacement involontaire de communautés ou de familles</td>
            <td>{forme?.categ6}</td>
            <td>categ6</td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td>
              Production ou utilisation commerciale de produits agrochimiques
              <br /> (production ou commercialisation de pesticides, engrais,
              fongicides)
            </td>
            <td>{forme?.categ7}</td>
            <td>categ7</td>
          </tr>
          <tr>
            <th scope="row">19</th>
            <td>Impact sur une voie maritime navigable internationale</td>
            <td>{forme?.categ8}</td>
            <td>categ8</td>
          </tr>
          <tr>
            <th scope="row">20</th>
            <td>
              Impact sur les habitats naturels protégés ou des zones à diversité
              biologique élevée <br />
              (par exemple, marécages, récifs coralliens, palétuviers)
            </td>
            <td>{forme?.categ9}</td>
            <td>categ9</td>
          </tr>
          <tr>
            <th scope="row">21</th>
            <td>Impacts sur des populations indigènes</td>
            <td>{forme?.categ10}</td>
            <td>categ10</td>
          </tr>
          <tr>
            <th scope="row">22</th>
            <td>
              Génération d'impacts sur l'environnement irréversibles
              significatifs
              <br /> qui affecteront probablement le milieu physique <br />
              (carrières, mines, zones d'aménagement
              agricole/urbain/industriel/touristique, etc.)
            </td>
            <td>{forme?.categ11}</td>
            <td>categ11</td>
          </tr>
          <tr>
            <th scope="row">23</th>
            <td>
              Stockage, manipulation ou utilisation de substances
              <br /> toxiques sous forme de liquides, de solides ou de gaz
            </td>
            <td>{forme?.categ12}</td>
            <td>categ12</td>
          </tr>
          <tr>
            <th scope="row">24</th>
            <td>Production de déchets solides dangereux ou non dangereux</td>
            <td>{forme?.categ13}</td>
            <td>categ13</td>
          </tr>
          <tr>
            <th scope="row">25</th>
            <td>Utilisation de substances appauvrissant la couche d'ozone</td>
            <td>{forme?.categ14}</td>
            <td>categ14</td>
          </tr>
          <tr>
            <th scope="row">26</th>
            <td>
              Le produit final devient un polluant une fois qu'il est utilisé
            </td>
            <td>{forme?.categ15}</td>
            <td>categ15</td>
          </tr>
          <tr>
            <th scope="row">27</th>
            <td>
              {" "}
              Nécessité d'obtention de permis d'autorisations environnementales
              pour l'exécution du projet
            </td>
            <td>{forme?.categ16}</td>
            <td>categ16</td>
          </tr>
          <tr>
            <th scope="row">28</th>
            <td>Contamination antérieure des sols</td>
            <td>{forme?.categ17}</td>
            <td>categ17</td>
          </tr>
          <tr>
            <th scope="row">29</th>
            <td>Impact sur la santé et la sécurité sur les lieux de travail</td>
            <td>{forme?.categ18}</td>
            <td>categ18</td>
          </tr>
          <tr>
            <th scope="row">30</th>
            <td>
              Niveaux élevés de bruit (dans l'usine ou dans les limites de
              l'emplacement)
            </td>
            <td>{forme?.categ19}</td>
            <td>categ19</td>
          </tr>
          <tr>
            <th scope="row">31</th>
            <td>
              Production ou augmentation de la production de déchets liquides
            </td>
            <td>{forme?.categ20}</td>
            <td>categ20</td>
          </tr>
          <tr>
            <th scope="row">32</th>
            <td>Emission de gaz ou particules dans l'air</td>
            <td>{forme?.categ21}</td>
            <td>categ21</td>
          </tr>
          <tr>
            <th scope="row">33</th>
            <td>Augmentation de la consommation d'eau</td>
            <td>{forme?.categ22}</td>
            <td>categ22</td>
          </tr>
          <tr>
            <th scope="row">34</th>
            <td>Augmentation de la consommation d'énergie</td>
            <td>{forme?.categ23}</td>
            <td>categ23</td>
          </tr>
          <tr>
            <th scope="row">35</th>
            <td>Société de service</td>
            <td>{forme?.categ24}</td>
            <td>categ24</td>
          </tr>
          <tr>
            <th scope="row">36</th>
            <td>Intermédiaire financier</td>
            <td>{forme?.categ25}</td>
            <td>categ25</td>
          </tr>
          <tr>
            <th scope="row">37</th>
            <td>Nom ou Raison Sociale du projet</td>
            <td>{forme?.grille1}</td>
            <td>grille1</td>
          </tr>
          <tr>
            <th scope="row">38</th>
            <td>Rue</td>
            <td>{forme?.grille2}</td>
            <td>grille2</td>
          </tr>
          <tr>
            <th scope="row">39</th>
            <td>Ville</td>
            <td>{forme?.grille3}</td>
            <td>grille3</td>
          </tr>
          <tr>
            <th scope="row">40</th>
            <td>Code postal</td>
            <td>{forme?.grille4}</td>
            <td>grille4</td>
          </tr>
          <tr>
            <th scope="row">41</th>
            <td>Description de la zone d'implantation du projet</td>
            <td>{forme?.grille5}</td>
            <td>grille5</td>
          </tr>
          <tr>
            <th scope="row">42</th>
            <td>Est-ce que le projet est situé dans une zone industrielle ?</td>
            <td>{forme?.grille6}</td>
            <td>grille6</td>
          </tr>
          <tr>
            <th scope="row">43</th>
            <td>Nom et position du responsable/interlocuteur</td>
            <td>{forme?.grille7}</td>
            <td>grille7</td>
          </tr>
          <tr>
            <th scope="row">44</th>
            <td>Date de création</td>
            <td>{forme?.grille8}</td>
            <td>grille8</td>
          </tr>
          <tr>
            <th scope="row">45</th>
            <td>Superficie totale</td>
            <td>{forme?.grille9}</td>
            <td>grille9</td>
          </tr>
          <tr>
            <th scope="row">46</th>
            <td>Superficie couverte</td>
            <td>{forme?.grille10}</td>
            <td>grille10</td>
          </tr>
          <tr>
            <th scope="row">47</th>
            <td>Type de projet</td>
            <td>{forme?.grille11}</td>
            <td>grille11</td>
          </tr>
          <tr>
            <th scope="row">48</th>
            <td>Secteur d'activité et descriptif du projet</td>
            <td>{forme?.grille12}</td>
            <td>grille12</td>
          </tr>
          <tr>
            <th scope="row">49</th>
            <td>plus d'infos ?</td>
            <td>{forme?.grille13}</td>
            <td>grille13</td>
          </tr>
          <tr>
            <th scope="row">50</th>
            <td>Etude d'impact sur l'environnement</td>
            <td>{forme?.exig1}</td>
            <td>exig1</td>
          </tr>
          <tr>
            <th scope="row">51</th>
            <td>Date :</td>
            <td>{forme?.exig2}</td>
            <td>exig2</td>
          </tr>
          <tr>
            <th scope="row">52</th>
            <td>Autorités de contrôle :</td>
            <td>{forme?.exig3}</td>
            <td>exig3</td>
          </tr>
          <tr>
            <th scope="row">53</th>
            <td>Etat</td>
            <td>{forme?.exig4}</td>
            <td>exig4</td>
          </tr>
          <tr>
            <th scope="row">54</th>
            <td>Autorisation de bâtir</td>
            <td>{forme?.exig5}</td>
            <td>exig5</td>
          </tr>
          <tr>
            <th scope="row">55</th>
            <td>Votre usine est-elle un établissement classé</td>
            <td>{forme?.exig6}</td>
            <td>exig6</td>
          </tr>
          <tr>
            <th scope="row">56</th>
            <td>Autre permis/autorisation d'exploitation</td>
            <td>{forme?.exig7}</td>
            <td>exig7</td>
          </tr>
          <tr>
            <th scope="row">57</th>
            <td>plus d'infos ?</td>
            <td>{forme?.exig8}</td>
            <td>exig8</td>
          </tr>
          <tr>
            <th scope="row">58</th>
            <td>Normes internationales</td>
            <td>{forme?.exig9}</td>
            <td>exig9</td>
          </tr>
          <tr>
            <th scope="row">59</th>
            <td>Si oui Lesquelles ?</td>
            <td>{forme?.exig10}</td>
            <td>exig10</td>
          </tr>
          <tr>
            <th scope="row">60</th>
            <td>EU Good Management Practices</td>
            <td>{forme?.exig11}</td>
            <td>exig11</td>
          </tr>
          <tr>
            <th scope="row">61</th>
            <td>US Food & Drug Administration</td>
            <td>{forme?.exig12}</td>
            <td>exig12</td>
          </tr>
          <tr>
            <th scope="row">62</th>
            <td>Certification HACCP</td>
            <td>{forme?.exig13}</td>
            <td>exig13</td>
          </tr>
          <tr>
            <th scope="row">63</th>
            <td>Certification EMAS</td>
            <td>{forme?.exig14}</td>
            <td>exig14</td>
          </tr>
          <tr>
            <th scope="row">64</th>
            <td>Certification ISO 9001</td>
            <td>{forme?.exig15}</td>
            <td>exig15</td>
          </tr>
          <tr>
            <th scope="row">65</th>
            <td>Certification ISO 14001</td>
            <td>{forme?.exig16}</td>
            <td>exig16</td>
          </tr>
          <tr>
            <th scope="row">66</th>
            <td>Certification ISO/TS 16949</td>
            <td>{forme?.exig17}</td>
            <td>exig17</td>
          </tr>
          <tr>
            <th scope="row">67</th>
            <td>Certification OHSAS 18001</td>
            <td>{forme?.exig18}</td>
            <td>exig18</td>
          </tr>
          <tr>
            <th scope="row">68</th>
            <td>
              Est-ce que votre société a mis en place un systéme <br />
              d'évaluation et de suivi des risques sociaux et environnementaux ?
            </td>
            <td>{forme?.per1}</td>
            <td>per1</td>
          </tr>
          <tr>
            <th scope="row">69</th>
            <td>Enoncé de Politique</td>
            <td>{forme?.per2}</td>
            <td>per2</td>
          </tr>
          <tr>
            <th scope="row">70</th>
            <td>Identification des risques et des impacts</td>
            <td>{forme?.per3}</td>
            <td>per3</td>
          </tr>
          <tr>
            <th scope="row">71</th>
            <td>Programme de gestion</td>
            <td>{forme?.per4}</td>
            <td>per4</td>
          </tr>
          <tr>
            <th scope="row">72</th>
            <td>Capacité organisationnelle et compétences</td>
            <td>{forme?.per5}</td>
            <td>per5</td>
          </tr>
          <tr>
            <th scope="row">73</th>
            <td>Préparation et réponse aux situations d'urgence</td>
            <td>{forme?.per6}</td>
            <td>per6</td>
          </tr>{" "}
          <tr>
            <th scope="row">74</th>
            <td>Engagement des parties prenantes</td>
            <td>{forme?.per7}</td>
            <td>per7</td>
          </tr>
          <tr>
            <th scope="row">75</th>
            <td>Suivi et évaluation</td>
            <td>{forme?.per8}</td>
            <td>per8</td>
          </tr>
          <tr>
            <th scope="row">76</th>
            <td>plus d'infos ?</td>
            <td>{forme?.per9}</td>
            <td>per9</td>
          </tr>
          <tr>
            <th scope="row">77</th>
            <td>Bruit</td>
            <td>{forme?.cond1}</td>
            <td>cond1</td>
          </tr>
          <tr>
            <th scope="row">78</th>
            <td>Poussières</td>
            <td>{forme?.cond2}</td>
            <td>cond2</td>
          </tr>
          <tr>
            <th scope="row">79</th>
            <td>Fumées</td>
            <td>{forme?.cond3}</td>
            <td>cond3</td>
          </tr>
          <tr>
            <th scope="row">81</th>
            <td>Odeurs</td>
            <td>{forme?.cond4}</td>
            <td>cond4</td>
          </tr>
          <tr>
            <th scope="row">82</th>
            <td>Vibrations</td>
            <td>{forme?.cond5}</td>
            <td>cond5</td>
          </tr>
          <tr>
            <th scope="row">83</th>
            <td>Trafic routier et congestion</td>
            <td>{forme?.cond6}</td>
            <td>cond6</td>
          </tr>
          <tr>
            <th scope="row">84</th>
            <td>Manipulation de produits dangereux</td>
            <td>{forme?.cond7}</td>
            <td>cond7</td>
          </tr>
          <tr>
            <th scope="row">85</th>
            <td> Consignes de sécurité affichées</td>
            <td>{forme?.cond8}</td>
            <td>cond8</td>
          </tr>
          <tr>
            <th scope="row">86</th>
            <td> Consignes d'hygiène affichées</td>
            <td>{forme?.cond9}</td>
            <td>cond9</td>
          </tr>
          <tr>
            <th scope="row">87</th>
            <td> Formation du personnel à l'hygiène/sécurité</td>
            <td>{forme?.cond10}</td>
            <td>cond10</td>
          </tr>
          <tr>
            <th scope="row">88</th>
            <td>Equipements de protection individuelle</td>
            <td>{forme?.cond11}</td>
            <td>cond11</td>
          </tr>
          <tr>
            <th scope="row">89</th>
            <td> Infirmerie interne/médecin</td>
            <td>{forme?.cond12}</td>
            <td>cond12</td>
          </tr>
          <tr>
            <th scope="row">90</th>
            <td>Comité d'hygiène et de sécurité</td>
            <td>{forme?.cond13}</td>
            <td>cond13</td>
          </tr>
          <tr>
            <th scope="row">91</th>
            <td>Extincteurs opérationnels</td>
            <td>{forme?.cond14}</td>
            <td>cond14</td>
          </tr>
          <tr>
            <th scope="row">92</th>
            <td>Robinet incendie armé (RIA)</td>
            <td>{forme?.cond15}</td>
            <td>cond15</td>
          </tr>
          <tr>
            <th scope="row">93</th>
            <td>Surpresseur</td>
            <td>{forme?.cond16}</td>
            <td>cond16</td>
          </tr>
          <tr>
            <th scope="row">94</th>
            <td>Groupe électrogène</td>
            <td>{forme?.cond17}</td>
            <td>cond17</td>
          </tr>
          <tr>
            <th scope="row">95</th>
            <td>Alarme et détection incendie</td>
            <td>{forme?.cond18}</td>
            <td>cond18</td>
          </tr>
          <tr>
            <th scope="row">96</th>
            <td>Portes coupe-feu</td>
            <td>{forme?.cond19}</td>
            <td>cond19</td>
          </tr>
          <tr>
            <th scope="row">97</th>
            <td>Sprinklers</td>
            <td>{forme?.cond20}</td>
            <td>cond20</td>
          </tr>
          <tr>
            <th scope="row">98</th>
            <td>Audit sécurité</td>
            <td>{forme?.cond21}</td>
            <td>cond21</td>
          </tr>
          <tr>
            <th scope="row">99</th>
            <td>Date dernier audit sécurité</td>
            <td>{forme?.cond22}</td>
            <td>cond22</td>
          </tr>
          <tr>
            <th scope="row">100</th>
            <td>maintenance périodique des équipements sécurité incendie</td>
            <td>{forme?.cond23}</td>
            <td>cond23</td>
          </tr>
          <tr>
            <th scope="row">101</th>
            <td>Période maintenance</td>
            <td>{forme?.cond24}</td>
            <td>cond24</td>
          </tr>
          <tr>
            <th scope="row">102</th>
            <td>Formation du personnel à la sécurité incendie</td>
            <td>{forme?.cond25}</td>
            <td>cond25</td>
          </tr>
          <tr>
            <th scope="row">103</th>
            <td>Existence plan sécurité/évacuation</td>
            <td>{forme?.cond26}</td>
            <td>cond26</td>
          </tr>
          <tr>
            <th scope="row">104</th>
            <td>Consignes de sécurité incendie affichées</td>
            <td>{forme?.cond27}</td>
            <td>cond27</td>
          </tr>
          <tr>
            <th scope="row">105</th>
            <td>Suivi et contrôle hygiène et sécurité</td>
            <td>{forme?.cond28}</td>
            <td>cond28</td>
          </tr>
          <tr>
            <th scope="row">106</th>
            <td>Cadres (Hommes)</td>
            <td>{forme?.cond29}</td>
            <td>cond29</td>
          </tr>
          <tr>
            <th scope="row">107</th>
            <td>Cadres (Femmes)</td>
            <td>{forme?.cond30}</td>
            <td>cond30</td>
          </tr>
          <tr>
            <th scope="row">108</th>
            <td>Maîtrise(Hommes)</td>
            <td>{forme?.cond31}</td>
            <td>cond31</td>
          </tr>
          <tr>
            <th scope="row">109</th>
            <td>Maîtrise(Femmes)</td>
            <td>{forme?.cond32}</td>
            <td>cond32</td>
          </tr>
          <tr>
            <th scope="row">110</th>
            <td>Agents d'exécution(Hommes)</td>
            <td>{forme?.cond33}</td>
            <td>cond33</td>
          </tr>
          <tr>
            <th scope="row">111</th>
            <td>Agents d'exécution(Femmes)</td>
            <td>{forme?.cond34}</td>
            <td>cond34</td>
          </tr>
          <tr>
            <th scope="row">112</th>
            <td>Personnel permanent(Hommes)</td>
            <td>{forme?.cond35}</td>
            <td>cond35</td>
          </tr>
          <tr>
            <th scope="row">113</th>
            <td>Personnel permanent(Femmes)</td>
            <td>{forme?.cond36}</td>
            <td>cond36</td>
          </tr>
          <tr>
            <th scope="row">114</th>
            <td>Personnel intérimaire(Hommes)</td>
            <td>{forme?.cond37}</td>
            <td>cond37</td>
          </tr>
          <tr>
            <th scope="row">115</th>
            <td>Personnel intérimaire(Femmes)</td>
            <td>{forme?.cond38}</td>
            <td>cond38</td>
          </tr>
          <tr>
            <th scope="row">116</th>
            <td>Nombre d'équipes/shifts </td>
            <td>{forme?.hum1}</td>
            <td>hum1</td>
          </tr>
          <tr>
            <th scope="row">117</th>
            <td>Nombre de jours de travail par semaine</td>
            <td>{forme?.hum2}</td>
            <td>hum2</td>
          </tr>
          <tr>
            <th scope="row">118</th>
            <td>Horaires de travail</td>
            <td>{forme?.hum3}</td>
            <td>hum3</td>
          </tr>
          <tr>
            <th scope="row">119</th>
            <td>
              Est-ce que votre société a une politique active
              <br /> pour la promotion de l'égalité des chances et de traitement
              des travailleurs, <br />
              le respect du droit national du travail et de l'emploi et la lutte
              contre les discriminations ?
            </td>
            <td>{forme?.hum4}</td>
            <td>hum4</td>
          </tr>
          <tr>
            <th scope="row">120</th>
            <td>Si oui Lesquelles</td>
            <td>{forme?.hum5}</td>
            <td>hum5</td>
          </tr>
          <tr>
            <th scope="row">121</th>
            <td>
              Est-ce que votre société a une politique active pour la promotion
              <br /> de conditions de travail sures et saines et la protection
              de la santé des travailleurs?
            </td>
            <td>{forme?.hum6}</td>
            <td>hum6</td>
          </tr>
          <tr>
            <th scope="row">121</th>
            <td>Si oui Lesquelles </td>
            <td>{forme?.hum7}</td>
            <td>hum7</td>
          </tr>
          <tr>
            <th scope="row">123</th>
            <td>
              Est-ce que votre societe emploie (meme e titre temporaire) des
              enfants ?
            </td>
            <td>{forme?.hum8}</td>
            <td>hum8</td>
          </tr>
          <tr>
            <th scope="row">124</th>
            <td>
              Est-ce que votre société emploie (méme é titre temporaire) <br />
              des travailleurs forcés ?
            </td>
            <td>{forme?.hum9}</td>
            <td>hum9</td>
          </tr>
          <tr>
            <th scope="row">125</th>
            <td>
              Est-ce que votre société prévoit des visites médicales
              <br /> réguliéres pour son personnel ?
            </td>
            <td>{forme?.hum10}</td>
            <td>hum10</td>
          </tr>
          <tr>
            <th scope="row">126</th>
            <td>
              Est-ce que votre société est signataire des conventions
              <br /> collectives/sectorielles relatives aux conditions de
              travail des travailleurs ?
            </td>
            <td>{forme?.hum11}</td>
            <td>hum11</td>
          </tr>
          <tr>
            <th scope="row">127</th>
            <td>Si oui Lesquelles</td>
            <td>{forme?.hum12}</td>
            <td>hum12</td>
          </tr>
          <tr>
            <th scope="row">128</th>
            <td>
              Est-ce que la totalité du personnel (permanent et temporaire){" "}
              <br />
              de votre société dispose d'un contrat de travail ?
            </td>
            <td>{forme?.hum13}</td>
            <td>hum13</td>
          </tr>
          <tr>
            <th scope="row">129</th>
            <td>
              Est-ce que la totalité du personnel (permanent et temporaire)
              <br /> de votre société est déclaré é la sécurité sociale ?
            </td>
            <td>{forme?.hum14}</td>
            <td>hum14</td>
          </tr>
          <tr>
            <th scope="row">130</th>
            <td>
              Est-ce que la totalité du personnel (permanent et temporaire)
              <br /> de votre société dispose de fiches de paie périodiques ?
            </td>
            <td>{forme?.hum15}</td>
            <td>hum15</td>
          </tr>
          <tr>
            <th scope="row">131</th>
            <td>
              Est-ce que votre société dispose de politiques et
              <br /> procédures de ressources humaines (ex : manuel, réglement
              intérieur),
              <br /> qui décrivent son approche en matiére de gestion des
              travailleurs
            </td>
            <td>{forme?.hum16}</td>
            <td>hum16</td>
          </tr>
          <tr>
            <th scope="row">132</th>
            <td>
              Est-ce que votre société fournit aux travailleurs des
              informations,
              <br /> détayées par des documents, claires et faciles à
              comprendre?
            </td>
            <td>{forme?.hum17}</td>
            <td>hum17</td>
          </tr>
          <tr>
            <th scope="row">133</th>
            <td>
              Existe-il au sein de votre société des dispositifs
              <br /> mis en place pour gérer les conflits sociaux au sein de
              l'entreprise ?
            </td>
            <td>{forme?.hum18}</td>
            <td>hum118</td>
          </tr>
          <tr>
            <th scope="row">134</th>
            <td>
              Existe-il au sein de votre société des dispositifs mis en place
              pour
              <br /> le licenciement du personnel pour des raisons économiques
              (plans sociaux)?
            </td>
            <td>{forme?.hum19}</td>
            <td>hum19</td>
          </tr>
          <tr>
            <th scope="row">135</th>
            <td>
              Existe-il des instances représentatives du personnel au sein de
              votre société <br />
              (syndicats, comité d'entreprise, délégués du personnels, délégués
              syndicaux) ?
            </td>
            <td>{forme?.hum20}</td>
            <td>hum20</td>
          </tr>
          <tr>
            <th scope="row">136</th>
            <td>
              Existe-il des litiges en cours entre votre société et certains de
              ses employés ?
            </td>
            <td>{forme?.hum21}</td>
            <td>hum21</td>
          </tr>
          <tr>
            <th scope="row">137</th>
            <td>
              Est-ce que votre société a mis en place un suivi des accidents du
              travail ?
            </td>
            <td>{forme?.hum22}</td>
            <td>hum22</td>
          </tr>
          <tr>
            <th scope="row">138</th>
            <td>Nature de l'accident</td>
            <td>{forme?.cond39}</td>
            <td>cond39</td>
          </tr>
          <tr>
            <th scope="row">139</th>
            <td>Nombre annuel d'occurence</td>
            <td>{forme?.cond40}</td>
            <td>cond40</td>
          </tr>
          <tr>
            <th scope="row">140</th>
            <td>Nature de l'accident</td>
            <td>{forme?.cond41}</td>
            <td>cond41</td>
          </tr>
          <tr>
            <th scope="row">141</th>
            <td>Nombre annuel d'occurence</td>
            <td>{forme?.cond42}</td>
            <td>cond42</td>
          </tr>
          <tr>
            <th scope="row">142</th>
            <td>Nature de l'accident</td>
            <td>{forme?.cond43}</td>
            <td>cond43</td>
          </tr>
          <tr>
            <th scope="row">143</th>
            <td>Nombre annuel d'occurence</td>
            <td>{forme?.cond44}</td>
            <td>cond44</td>
          </tr>
          <tr>
            <th scope="row">144</th>
            <td>Nature de l'accident</td>
            <td>{forme?.cond45}</td>
            <td>cond45</td>
          </tr>
          <tr>
            <th scope="row">145</th>
            <td>Nombre annuel d'occurence</td>
            <td>{forme?.cond46}</td>
            <td>cond46</td>
          </tr>
          <tr>
            <th scope="row">146</th>
            <td>
              Est-ce que votre société a mis en place des dispositifs
              particuliers relatifs à la protection des droits <br />
              (travail des enfants, travail forcé, sécurité et hygiène) de vos
              sous-traitants et de vos fournisseurs{" "}
            </td>
            <td>{forme?.cond47}</td>
            <td>cond47</td>
          </tr>
          <tr>
            <th scope="row">147</th>
            <td>
              Si oui, quelles sont les dispositions que votre société a prises
              pour préserver
              <br /> les droits de vos sous-traitants et de vos fournisseurs ?
            </td>
            <td>{forme?.cond48}</td>
            <td>cond48</td>
          </tr>
          <tr>
            <th scope="row">148</th>
            <td>
              Est-ce que l'usine ou le projet produit des déchets liquides?
            </td>
            <td>{forme?.liquide1}</td>
            <td>liquide1</td>
          </tr>
          <tr>
            <th scope="row">149</th>
            <td>
              Existence d'un raccordement au réseau public d'assainissement ?
            </td>
            <td>{forme?.liquide2}</td>
            <td>liquide2</td>
          </tr>
          <tr>
            <th scope="row">150</th>
            <td>
              Existence d'une station de prétraitement avant rejet extérieur ?
            </td>
            <td>{forme?.liquide3}</td>
            <td>liquide3</td>
          </tr>
          <tr>
            <th scope="row">151</th>
            <td>
              Est-ce qu'il existe un contrôle régulier et un suivi des rejets
              des eaux usées et pluviales ?
            </td>
            <td>{forme?.liquide4}</td>
            <td>liquide4</td>
          </tr>
          <tr>
            <th scope="row">152</th>
            <td>
              Est-ce que l'usine ou le projet produit des déchets solides ?
            </td>
            <td>{forme?.solide1}</td>
            <td>solide1</td>
          </tr>
          <tr>
            <th scope="row">153</th>
            <td>
              Est-ce que l'usine ou le projet procède la collecte séparative de
              ses déchets solides?
            </td>
            <td>{forme?.solide2}</td>
            <td>solide2</td>
          </tr>
          <tr>
            <th scope="row">154</th>
            <td>
              Est-ce que l'usine ou le projet procède à la valorisation ou au
              recyclage de ses déchets ?
            </td>
            <td>{forme?.solide3}</td>
            <td>solide3</td>
          </tr>
          <tr>
            <th scope="row">155</th>
            <td>
              Existe-il un contrôle et un suivi de la collecte et de
              l'élimination
              <br /> des déchets solides de l'usine ou du projet ?
            </td>
            <td>{forme?.solide4}</td>
            <td>solide4</td>
          </tr>
          <tr>
            <th scope="row">156</th>
            <td>
              Est-ce que le process industriel ou le projet conduit à l'émission
              de gaz,
              <br /> de poussières ou de particules dans l'atmosphère ?
            </td>
            <td>{forme?.gaze1}</td>
            <td>gaze1</td>
          </tr>
          <tr>
            <th scope="row">157</th>
            <td>Emission de COV (composés organiques volatiles) ?</td>
            <td>{forme?.gaze2}</td>
            <td>gaze2</td>
          </tr>
          <tr>
            <th scope="row">158</th>
            <td>EEmission de particules en suspension ?</td>
            <td>{forme?.gaze3}</td>
            <td>gaze3</td>
          </tr>
          <tr>
            <th scope="row">159</th>
            <td>Autres émissions gazeuses ?</td>
            <td>{forme?.gaze4}</td>
            <td>gaze4</td>
          </tr>
          <tr>
            <th scope="row">160</th>
            <td>
              Existe-il un contrôle et un suivi des émissions de gaz,
              <br /> poussières ou particules dans l'atmosphère ?
            </td>
            <td>{forme?.gaze5}</td>
            <td>gaze5</td>
          </tr>
          <tr>
            <th scope="row">161</th>
            <td>
              Est-ce que vos locaux de production ou de stockage
              <br /> sont équipés d'un système de ventilation forcée ?
            </td>
            <td>{forme?.gaze6}</td>
            <td>gaze6</td>
          </tr>
          <tr>
            <th scope="row">162</th>
            <td>
              Est-ce que vos locaux de production ou de stockage ou les machines
              sont <br />
              équipés de systèmes de traitement d'air appropriés et dédiés?
            </td>
            <td>{forme?.gaze7}</td>
            <td>gaze7</td>
          </tr>
          <tr>
            <th scope="row">163</th>
            <td>
              Est-ce que le process industriel ou le projet conduit à
              l'utilisation de matières
              <br /> dangereuses ou/et à la production de déchets dangereux ?
            </td>
            <td>{forme?.danger1}</td>
            <td>danger1</td>
          </tr>
          <tr>
            <th scope="row">164</th>
            <td>Utilisation d'amiante ?</td>
            <td>{forme?.danger2}</td>
            <td>danger2</td>
          </tr>
          <tr>
            <th scope="row">165</th>
            <td>Utilisation de PCB ?</td>
            <td>{forme?.danger3}</td>
            <td>danger3</td>
          </tr>
          <tr>
            <th scope="row">166</th>
            <td>
              Utilisation de substances détruisant la couche d'ozone (CFC,
              réfrigérants…) ?
            </td>
            <td>{forme?.danger4}</td>
            <td>danger4</td>
          </tr>
          <tr>
            <th scope="row">167</th>
            <td>Utilisation de métaux lourds ?</td>
            <td>{forme?.danger5}</td>
            <td>danger5</td>
          </tr>
          <tr>
            <th scope="row">168</th>
            <td>Utilisation ou production de matières dangereuses ?</td>
            <td>{forme?.danger6}</td>
            <td>danger6</td>
          </tr>
          <tr>
            <th scope="row">169</th>
            <td>
              Existe-il un contrôle et un suivi de l'utilisation des matières
              dangereuses et de la collecte
              <br /> et de l'élimination des déchets dangereux de l'usine ou du
              projet ?
            </td>
            <td>{forme?.danger7}</td>
            <td>danger7</td>
          </tr>
          <tr>
            <th scope="row">170</th>
            <td>Existe-il des mesures visant à prévenir la production de déchets dangereux ?</td>
            <td>{forme?.danger8}</td>
            <td>danger8</td>
          </tr>




          <tr>
            <th scope="row">171</th>
            <td>Existe-il des précautions à suivre en cas d'accident / d'incident<br/> et des procédures d'urgence ?</td>
            <td>{forme?.urgance1}</td>
            <td>urgance1</td>
          </tr>
          <tr>
            <th scope="row">172</th>
            <td>Est-ce que les installations de stockage,<br/> systèmes de canalisations, réseaux de drainage sont en bon état ?</td>
            <td>{forme?.urgance2}</td>
            <td>urgance2</td>
          </tr>
          <tr>
            <th scope="row">173</th>
            <td>Existence de normes internes de surveillance et d'entretien des installations de stockage,<br/> systèmes de canalisations, réseaux de drainage ?</td>
            <td>{forme?.urgance3}</td>
            <td>urgance3</td>
          </tr>
          <tr>
            <th scope="row">174</th>
            <td>Cas de pollution des sols et des eaux souterraines<br/> au niveau et aux alentours des sites de stockage ou du projet?</td>
            <td>{forme?.urgance4}</td>
            <td>urgance4</td>
          </tr>


          <tr>
            <th scope="row">175</th>
            <td>Est-ce que votre projet ou votre activité a un impact sur la santé et la sécurité des communautés<br/> (notamment pour celles vivant à proximité du projet) ?</td>
            <td>{forme?.comm1}</td>
            <td>comm1</td>
          </tr>
          <tr>
            <th scope="row">176</th>
            <td>Quelles sont les mesures de mitigation<br/> que votre société a prises pour réduire les impacts<br/> de votre projet sur la santé et la sécurité des communautés <br/>(notamment pour celles vivant à proximité du projet) ?</td>
            <td>{forme?.comm2}</td>
            <td>comm2</td>
          </tr>
          <tr>
            <th scope="row">177</th>
            <td>Lors de l'étude d'impact sur l'environnement,<br/> avez-vous procédé à une consultation publique ou à une enquête publique auprès<br/> des parties prenantes concernant votre projet ?</td>
            <td>{forme?.comm3}</td>
            <td>comm3</td>
          </tr>
          <tr>
            <th scope="row">178</th>
            <td>Quelles sont les mesures de communications extérieures<br/> auprès des parties prenantes et les mécanismes de règlement des griefs concernant<br/> votre projet que votre société a mis en œuvre ?</td>
            <td>{forme?.comm4}</td>
            <td>comm4</td>
          </tr>
          <tr>
            <th scope="row">179</th>
            <td>Est-ce que votre société a mis en place des mécanismes de divulgation continue de<br/> l'information aux communautés affectées par votre projet ?</td>
            <td>{forme?.comm5}</td>
            <td>comm5</td>
          </tr>
          <tr>
            <th scope="row">180</th>
            <td>Quels sont les mécanismes de divulgation continue<br/> de l'information aux communautés affectées par votre projet ?</td>
            <td>{forme?.comm6}</td>
            <td>comm6</td>
          </tr>



          <tr>
            <th scope="row">181</th>
            <td>Est-ce que la réalisation de votre projet a entraîné le déplacement<br/> (physique ou économique) non volontaire de <br/>populations vivant sur le site (prière noter que la responsabilité de votre société<br/> comprend également les cas de réinstallations prises en charge par le gouvernement) ?</td>
            <td>{forme?.acc1}</td>
            <td>acc1</td>
          </tr>
          <tr>
            <th scope="row">182</th>
            <td>Quelles sont les mesures d'atténuation que votre société a prises pour réduire<br/> l'impact économique et social pour les populations déplacées?</td>
            <td>{forme?.acc2}</td>
            <td>acc2</td>
          </tr>
          <tr>
            <th scope="row">183</th>
            <td>Est-ce que la réalisation de votre projet a entraîné<br/> des atteintes à la protection et conservation de la biodiversité?</td>
            <td>{forme?.cons1}</td>
            <td>cons1</td>
          </tr>
          <tr>
            <th scope="row">184</th>
            <td>Quelles sont les mesures d'atténuation que votre société a prises pour réduire les impacts du projet sur la conservation<br/> de la biodiversité et la gestion durable des ressources naturelles ?</td>
            <td>{forme?.cons2}</td>
            <td>cons2</td>
          </tr>
          <tr>
            <th scope="row">185</th>
            <td>Est-ce que votre société achète des produits primaire?</td>
            <td>{forme?.cons3}</td>
            <td>cons3</td>
          </tr>
          <tr>
            <th scope="row">186</th>
            <td>Quelles sont les mesures pour limiter et réorienter la chaîne d'approvisionnement de votre société vers des fournisseurs pouvant<br/> établir qu'ils n'ont pas d'impacts négatifs importants sur ces aires ?</td>
            <td>{forme?.cons4}</td>
            <td>cons4</td>
          </tr>
          <tr>
            <th scope="row">187</th>
            <td>Est-ce que la réalisation de votre projet a entraîné des atteintes à la dignité,<br/> aux droits de l'homme, aux aspirations, aux cultures et aux modes de subsistance basés sur des ressources<br/> naturelles de populations autochtones vivant sur le site ?</td>
            <td>{forme?.auto1}</td>
            <td>auto1</td>
          </tr>
          <tr>
            <th scope="row">188</th>
            <td>Quelles sont les mesures d'atténuation que votre<br/> société a prises pour réduire les impacts du projet sur les populations autochtones, ou, le cas échéant,<br/> les indemnisations de ces communautés et la fourniture d'opportunités de bénéfices<br/> développement aux culturellement appropriés ?</td>
            <td>{forme?.auto2}</td>
            <td>auto2</td>
          </tr>
          <tr>
            <th scope="row">189</th>
            <td>Est-ce que votre projet se trouve sur ou à proximité d'un site culturel ?</td>
            <td>{forme?.pat1}</td>
            <td>pat1</td>
          </tr>
          <tr>
            <th scope="row">190</th>
            <td>Quelles sont les mesures d'atténuation que votre société a prises pour protéger le site culturel contre<br/> les impacts négatifs des activités du projet et soutenir sa conservation ?</td>
            <td>{forme?.pat2}</td>
            <td>pat2</td>
          </tr>



          <tr>
            <th scope="row">191</th>
            <td>Quelle est votre consommation énergétique globale en KWh/an?</td>
            <td>{forme?.cli1}</td>
            <td>cli1</td>
          </tr>
          <tr>
            <th scope="row">192</th>
            <td>Fuel en KWh/an</td>
            <td>{forme?.cli2}</td>
            <td>cli2</td>
          </tr>
          <tr>
            <th scope="row">193</th>
            <td>Gaz naturel en KWh/a</td>
            <td>{forme?.cli3}</td>
            <td>cli3</td>
          </tr>
          <tr>
            <th scope="row">194</th>
            <td>Energie renouvelable en KWh/a</td>
            <td>{forme?.cli4}</td>
            <td>cli4</td>
          </tr>
          <tr>
            <th scope="row">195</th>
            <td>Autres en KWh/a</td>
            <td>{forme?.cli5}</td>
            <td>cli5</td>
          </tr>
          <tr>
            <th scope="row">196</th>
            <td>Si autres, précisez:</td>
            <td>{forme?.cli6}</td>
            <td>cli6</td>
          </tr>
          <tr>
            <th scope="row">197</th>
            <td>Etes-vous conscient(e) par les enjeux posés par le changement climatique ?</td>
            <td>{forme?.cli7}</td>
            <td>cli7</td>
          </tr>
          <tr>
            <th scope="row">198</th>
            <td>Etes-vous engagé dans un plan de transition énergétique ?</td>
            <td>{forme?.cli8}</td>
            <td>cli8</td>
          </tr>
          <tr>
            <th scope="row">199</th>
            <td>Année prévue :</td>
            <td>{forme?.cli9}</td>
            <td>cli9</td>
          </tr>
          <tr>
            <th scope="row">200</th>
            <td>De quelle manière vous être engagé dans un plan de transition énergétique ?</td>
            <td>{forme?.cli10}</td>
            <td>cli10</td>
          </tr>
          <tr>
            <th scope="row">201</th>
            <td>Combien avez-vous investis en transition énergétique ?</td>
            <td>{forme?.cli11}</td>
            <td>cli11</td>
          </tr>
          <tr>
            <th scope="row">202</th>
            <td>Chiffre d'affaire</td>
            <td>{forme?.cli12}</td>
            <td>cli12</td>
          </tr>
          <tr>
            <th scope="row">203</th>
            <td>Le coût</td>
            <td>{forme?.cli13}</td>
            <td>cli13</td>
          </tr>
          <tr>
            <th scope="row">204</th>
            <td>Etes-vous une entreprise exportatrice ?</td>
            <td>{forme?.cli14}</td>
            <td>cli14</td>
          </tr>
          <tr>
            <th scope="row">205</th>
            <td>Année prévue</td>
            <td>{forme?.cli15}</td>
            <td>cli15</td>
          </tr>
          <tr>
            <th scope="row">206</th>
            <td>Si OUI, quelles sont vos destinations ?</td>
            <td>{forme?.cli16}</td>
            <td>cli16</td>
          </tr>

        </tbody>
        <div className="downloadd mt-4">
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success  mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Télécharger"
                  />
                </div>
                
      </table>
    </div>
  );
};

export default Page1;
