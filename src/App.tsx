import { Routes, Route } from "react-router-dom";
import { Signup } from "views/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
