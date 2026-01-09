import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../style.css";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function alertToLoginSuccess() {
    Swal.fire({
      title: "Success!",
      text: "Login berhasil!",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  function alertToLoginFailed() {
    Swal.fire({
      title: "Error!",
      text: "Email atau password salah!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alertToLoginSuccess();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alertToLoginFailed();
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="text-center mb-4">Login</h2>

        <Form onSubmit={handleLogin}>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="input-modern"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <div className="password-wrapper">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-modern"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <Form.Text>
              Belum punya akun?{" "}
              <Link to="/signup" className="signup-link">
                SignUp
              </Link>
            </Form.Text>
          </Form.Group>

          <Button className="btn-modern w-100" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
