import { Route } from "react-router-dom";
import SchoolLayout from "src/layouts/SchoolLayout";
import Home from "src/pages/school/Home";

export default function School() {
  return (
    <Route
      path="/escola"
      element={ <SchoolLayout /> }
    >
      <Route 
        path="/escola/home"
        element={ <Home /> } 
      />
    </Route>
  );
}