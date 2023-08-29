import { useDispatch, useSelector } from "react-redux";
import "./Certification.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import ProgressBar from "react-customizable-progressbar";

function Certification() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    exig9: "",
    exig10: "",
    exig11: "",
    exig12: "",
    exig13: "",
    exig14: "",
    exig15: "",
    exig16: "",
    exig17: "",
    exig18: "",
  });
  console.log(formulaire2);
  const progress = 20;
  const barColor = "#003CFF";
  const strokeWidth = 20;
  const trailWidth = 5;
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/per1");
  };

  const hundelUpdate1 = () => {
    navigate("/regle");
    // setPing(!ping);
  };

  return (
    <>
      <div
        className="shadow p-3 mb-5 bg-body rounded  container"
        id="Certification"
      >
        <h1 className="text-center trt p-3 bg-primary text-white head">
          <b> Certificat et Autorisation</b>
        </h1>
        <div className="container progr">
          <ProgressBar
            progress={progress}
            radius={50}
            strokeColor={barColor}
            strokeWidth={strokeWidth}
            trailWidth={trailWidth}
          />
            {formulaire2.exig9 == "" && <div className="progs11">{progress}%</div>}
          {formulaire2.exig9 == "NON" && (
            <div className="progs11">{progress}%</div>
          )}
          {formulaire2.exig9 == "N/A" && (
            <div className="progs11">{progress}%</div>
          )}
          {formulaire2.exig9 == "OUI" && (
            <div className="progs1">{progress}%</div>
          )}
          
        </div>
        <div>
          <div>
            <tr>
              <td>
                <label>
                  <legend>
                    {" "}
                    <li className="trt">Normes internationales</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="normes"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig9: e.target.value })
                    }
                  />{" "}
                  OUI <br></br>
                  <input
                    type="radio"
                    name="normes"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig9: e.target.value })
                    }
                  />{" "}
                  NON <br />
                  <input
                    type="radio"
                    name="normes"
                    value="N/A"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig9: e.target.value })
                    }
                  />{" "}
                  N/A
                </div>

                {formulaire2.exig9 == "OUI" && (
                  <>
                    <p className="sioui trt pl-4"> Si oui Lesquelles ? </p> <br />
                    <div className="lesqu">
                      <input
                        className="form-control inpu"
                        type="text"
                        placeholder="taper ici"
                        size="10"
                        onChange={(e) =>
                          setFormulaire({
                            ...formulaire2,
                            exig10: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </>
                )}
              </td>
            </tr>
            <br />
          </div>

          <br />
          <div>
            <tr>
              <td>
                <label>
                  <legend>
                    <li className="trt">EU Good Management Practices</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="euManagement"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig11: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="euManagement"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig11: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    <li className="trt">US Food & Drug Administration</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="usFDA"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig12: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="usFDA"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig12: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    {" "}
                    <li className="trt">Certification HACCP</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="haccp"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig13: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="haccp"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig13: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    <li className="trt">Certification EMAS</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="emas"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig14: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="emas"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig14: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    {" "}
                    <li className="trt">Certification ISO 9001</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="iso9001"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig15: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="iso9001"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig15: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    {" "}
                    <li className="trt">Certification ISO 14001</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="iso14001"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig16: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="iso14001"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig16: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    <li className="trt">Certification ISO/TS 16949</li>
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="isoTS16949"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig17: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="isoTS16949"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig17: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>
                  <legend>
                    {" "}
                    <li className="trt"> Certification OHSAS 18001 </li>{" "}
                  </legend>
                </label>
                <br />
                <div className="normes">
                  <input
                    type="radio"
                    name="ohsas18001"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig18: e.target.value })
                    }
                  />{" "}
                  OUI <br />
                  <input
                    type="radio"
                    name="ohsas18001"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig18: e.target.value })
                    }
                  />{" "}
                  NON
                </div>
              </td>
            </tr>
          </div>
        </div>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-danger w-20 mt-4 rounded-pill pull-left"
          onClick={() => {
            hundelUpdate1();
          }}
        >
          precedent
        </button>
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
    </>
  );
}

export default Certification;
