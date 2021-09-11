import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFitstName] = useState("نام");
  const [lastName, setLastName] = useState("نام خانوادگی");
  const [age, setAge] = useState(18);
  const [nationalCode, setNationalCode] = useState("0000000000");

  console.log(firstName);
  const handelsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-root">
      <form onSubmit={handelsubmit}>
        <input
          value={firstName}
          onChange={(e) => {
            setFitstName(e.target.value);
          }}
          placeholder="fill your name"
          style={{
            border: `solid 2px ${firstName ? "#84f387" : "red"}`,
          }}
        />
        {!firstName && (
          <div style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
            نام را وارد کنید{" "}
          </div>
        )}
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="fill your last name"
          style={{
            border: `solid 2px ${lastName ? "#84f387" : "red"}`,
          }}
        />
        {!lastName && (
          <div style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
            @نام خواندگی را وارد کنید
          </div>
        )}
        <input
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="fill your age"
          style={{ color: age >= 18 ? "#84f387" : "red" }}
          required
        />
        {age < 18 && (
          <div style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
            @سن وارد شده مجاز نیست
          </div>
        )}
        <input
          value={nationalCode}
          onChange={(e) => {
            setNationalCode(e.target.value);
          }}
          placeholder="fill your national code"
          style={{ color: nationalCode.length !== 10 ? "red" : "#84f387" }}
        />
        {nationalCode.length !== 10 && (
          <div style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
            @کد ملی صحیح نمی باشد
          </div>
        )}
        {/* <div>
          <ol>
            {rules.map((rule) => (
              <li
                style={{ display: rule.visible ? "" : "none" }}
                key={rule.name}
              >
                {rule.message}
              </li>
            ))}
          </ol>
        </div> */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
