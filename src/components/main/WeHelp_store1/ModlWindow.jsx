import { useState } from "react";
import "./modlWindow.css";

const ModlWindow = ({ modlForm, setModlForm }) => {
    
  const [errorPr, setErrorPr] = useState("");

  const [flag, setFlag] = useState(false);

  const [inptName, setInptName] = useState("");
  const [inptGmail, setInptGmail] = useState("");
  const [inptPhone, setInptPhone] = useState("");

  const inputRen = () => {
    if (inptName === "" || inptGmail === "" || inptPhone === "") {
      setErrorPr("Усі поля повині бути заповнені правильно");
      setFlag(true);
      return;
    }

    if (inptName.length <= 2 || inptName.length > 12) {
      setErrorPr("Імя не повинно бути більшу 12 і менше 2-х символів");
      setFlag(true);
      return;
    }

    if (!inptGmail.includes("@")) {
      setErrorPr("Неправильно введенний Gmail");
      setFlag(true);
      return;
    }

    if (inptPhone.length !== 9) {
      setErrorPr("Неправильно введений номер");
      setFlag(true);
      return;
    }

    if (flag !== true) {
      setErrorPr("Повідомлення відправдено");
      setInptName("");
      setInptGmail("");
      setInptPhone("");
      return;
    }
  };

  return (
    <>
      <div className={modlForm === true ? "modalBox" : "openModl"}>
        <input
          placeholder="Введіть імя"
          type="text"
          value={inptName}
          onChange={(e) => setInptName(e.target.value)}
        />
        <input
          placeholder="Ваш email"
          type="email"
          value={inptGmail}
          onChange={(e) => setInptGmail(e.target.value)}
        />
        <input
          placeholder="Ваш номер телефону"
          type="number"
          value={inptPhone}
          onChange={(e) => setInptPhone(e.target.value)}
        />
        <button onClick={() => inputRen()}>Зареєструватися</button>
        <p className="errorP">{errorPr}</p>

        <button className="closesBtn" onClick={() => setModlForm(false)}>
          X
        </button>
      </div>
    </>
  );
};

export default ModlWindow;
