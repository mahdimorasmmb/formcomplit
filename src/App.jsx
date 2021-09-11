import React, { useState } from "react";
import "./App.css";

function App() {
  const handelsubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, age, nationalCode } = e.target.elements;

    if (!firstName.value || !lastName.value) {
      return alert("فرم را تکمیل کنید ");
    }
    if (age.value < 18) {
      return alert("برو هنوز بچه ای  ");
    }

    if (nationalCode.value.length !== 10) {
      return alert("کد ملی صحیح نمی باشد");
    }

    alert("اطلاعات ثبت شد ");
  };
  return (
    <div className="form-root">
      <form onSubmit={handelsubmit}>
        <input id="firstName" placeholder="fill your name" />
        <input id="lastName" placeholder="fill your last name" />
        <input id="age" placeholder="fill your age" />
        <input id="nationalCode" placeholder="fill your national code" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
