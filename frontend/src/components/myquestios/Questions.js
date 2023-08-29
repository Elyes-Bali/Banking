import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Questions.css";
import ProgressBar from "react-customizable-progressbar";
import { editquest } from "../../redux/QuestSlice/questslice";

const Questions = () => {
  const quest = useSelector((state) => state.quest.allquest);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [responses, setResponses] = useState({});

  const progress = 90;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;

  const handleInputChange = (e, questionId) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    Object.entries(responses).forEach(([questionId, response]) => {
      dispatch(editquest({ id: questionId, questionner: { reponse: response } }));
    });
    navigate("/persone");
  };

  return (
    <div>
      <div className="devide">
        <div className="container txte justify-content-center ">
          <h1 className="titre text-center fs-1 mb-5 text-black ">
            Utilisation rationnelle des ressources et prévention de la pollution
          </h1>
          <h1 className="serv">
            <div className="container mt-1 progr">
              <ProgressBar
                progress={progress}
                radius={50}
                strokeColor={barColor}
                strokeWidth={strokeWidth}
                trailWidth={trailWidth}
              />
              <div className="proges">{progress}%</div>
            </div>
          </h1>
        </div>
        <section>
          <div className="blocs container">
            <table className="table blocs table-bordered">
              <thead>
                <tr>
                  <th scope="col">Question</th>
                  <th scope="col">Reponse</th>
                </tr>
              </thead>
              <tbody>
                {quest?.map((el) => (
                  <tr key={el._id}>
                    <th scope="row" className="text-size-[20px]">
                      {el.question}
                    </th>
                    <td>
                      <textarea
                        className="input-holder form-control bordering"
                        type="text"
                        rows={2}
                        minLength="4"
                        maxLength="2000"
                        size="30"
                        required
                        placeholder="Reponse"
                        onChange={(e) => handleInputChange(e, el._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="btt">
            <button
              type="submit"
              className="mt-2 mb-5 btn btn-success"
              onClick={handleSubmit}
            >
              Suivant
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Questions;
