import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";

const Login = ({ showWelcomeHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful ✅");
        localStorage.setItem("loginToken", data.token);
        localStorage.setItem("vendorId", data.vendorId);

        setEmail("");
        setPassword("");

        // 🔎 fetch vendor details (firms, etc.)
        const vendorResponse = await fetch(
          `${API_URL}/vendor/single-vendor/${data.vendorId}`
        );
        const vendorData = await vendorResponse.json();

        if (vendorResponse.ok) {
          if (vendorData.vendor.firms.length > 0) {
            const vendorFirmId = vendorData.vendor.firms[0]._id;
            const vendorFirmName = vendorData.vendor.firms[0].firmName;

            localStorage.setItem("firmId", vendorFirmId);
            localStorage.setItem("firmName", vendorFirmName);
          } else {
            console.log("No firm yet for this vendor.");
            localStorage.removeItem("firmId");
            localStorage.removeItem("firmName");
          }
        }

        showWelcomeHandler();
        window.location.reload();
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (error) {
      alert("Login failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="loginSection">
      <h3>Vendor Login</h3>
      <form className="authForm" onSubmit={loginHandler}>
        <label>
          Email <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />{" "}
          <br />
        </label>
        <label>
          Password <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />{" "}
          <br />
        </label>
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
