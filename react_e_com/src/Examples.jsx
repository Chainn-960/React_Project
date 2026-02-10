import { useState } from "react";

function Examples() {
 // const [count, setcount] = useState(0);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // password must have at least one special character
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!specialCharRegex.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Backend response:", data);
      alert("Data saved to database ✅");
    } catch (err) {
      console.error(err);
      alert("Error sending data ❌");
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Examples;
