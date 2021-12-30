import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home.tsx";
import CreateTxn from "./CreateTxn.tsx";
import Button from "@mui/material/Button";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <Button variant="text" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant="text" onClick={() => navigate("/create")}>
        New Transaction
      </Button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTxn />} />
      </Routes>
    </div>
  );
}

export default Main;
