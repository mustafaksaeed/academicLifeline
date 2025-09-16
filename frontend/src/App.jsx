// import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {/* <Signup /> */}
        <Login />
      </div>
    </Container>
  );
}

export default App;
