import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ArrowLeft } from "lucide-react";

function Cashier() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* BACK BUTTON */}
      <Button
        variant="link"
        className="d-flex align-items-center gap-2 text-decoration-none mb-3"
        onClick={() => navigate("/dashboard")}
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </Button>

      <div
        style={{
          height: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>
          Sorry, this menu is not available right now...
          <br />
          Please check back later!
        </h1>
      </div>
    </div>
  );
}

export default Cashier;
