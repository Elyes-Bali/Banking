import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Test.css";
import ProgressBar from "react-customizable-progressbar";

const Test = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    test:false,
  });
  console.log(formulaire2);
  const progress = 100;
  const barColor = "#00AEFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate =() => {
    formulaire2.test = true;
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/sythese")
  }
  return (
    <div className='tst mt-5'>
      <div className="mrc">
      <p>Merci beaucoup pour l'assisstance<br/> votre rapport est prêt</p>
      <div className="container mt-1 progr">
          <ProgressBar
            progress={progress}
            radius={60}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
          <div className="prog10">{progress}%</div>
        </div>
      </div>
      <div className="btt">
            <button type="submit" className="mt-2 mb-5 btn btn-success" onClick={() => {
            hundelUpdate();
          }}>
              Suivant
            </button>
          </div>
      </div>
  )
}

export default Test;