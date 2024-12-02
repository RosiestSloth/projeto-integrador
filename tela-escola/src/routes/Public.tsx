import { Route } from "react-router-dom";
import Login from "pages/public/Login";
import PublicLayout from "src/layouts/PublicLayout";
import { CreateLoginAction } from "server/actions/loginAction";

const loginAction = CreateLoginAction('school', '/escola/home');

export default function Public() {
  return (
    <Route
      path="/"
      element={ <PublicLayout /> }
    >
      <Route 
        index 
        action={ loginAction }
        element={ <Login /> } 
      />
    </Route>
  );
}