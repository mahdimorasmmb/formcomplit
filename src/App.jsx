import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFitstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [nationalCode, setNationalCode] = useState("");
  const [rules, setrules] = useState([
    { name: "firstName", message: "نام خود را وارد نمایید", visible: true },
    {
      name: "lastName",
      message: "نام خانوادگی  خود را وارد نمایید",
      visible: true,
    },
    { name: "age", message: "سن خود را وارد نمایید", visible: true },
    {
      name: "nationalCode",
      message: "کد ملی   خود را وارد نمایید",
      visible: true,
    },
  ]);
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
            if (e.target.value) {
              const newRules = rules.map((rule) => {
                if (rule.name === "firstName") {
                  return { ...rule, visible: false };
                }
                return rule;
              });
              setrules(newRules);
            } else {
              const newRules = rules.map((rule) => {
                if (rule.name === "firstName") {
                  return { ...rule, visible: true };
                }
                return rule;
              });
              setrules(newRules);
            }
          }}
          placeholder="fill your name"
        />
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            if (e.target.value) {
              const newRules = rules.map((rule) => {
                if (rule.name === "lastName") {
                  return { ...rule, visible: false };
                }
                return rule;
              });
              setrules(newRules);
            } else {
              const newRules = rules.map((rule) => {
                if (rule.name === "lastName") {
                  return { ...rule, visible: true };
                }
                return rule;
              });
              setrules(newRules);
            }
          }}
          placeholder="fill your last name"
        />
        <input
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            if (e.target.value) {
              const newRules = rules.map((rule) => {
                if (rule.name === "age") {
                  return { ...rule, visible: false };
                }
                return rule;
              });
              setrules(newRules);
            } else {
              const newRules = rules.map((rule) => {
                if (rule.name === "age") {
                  return { ...rule, visible: true };
                }
                return rule;
              });
              setrules(newRules);
            }
          }}
          placeholder="fill your age"
        />
        <input
          value={nationalCode}
          onChange={(e) => {
            setNationalCode(e.target.value);
            if (e.target.value) {
              const newRules = rules.map((rule) => {
                if (rule.name === "nationalCode") {
                  return { ...rule, visible: false };
                }
                return rule;
              });
              setrules(newRules);
            } else {
              const newRules = rules.map((rule) => {
                if (rule.name === "nationalCode") {
                  return { ...rule, visible: true };
                }
                return rule;
              });
              setrules(newRules);
            }
          }}
          placeholder="fill your national code"
        />
        <div>
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
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
