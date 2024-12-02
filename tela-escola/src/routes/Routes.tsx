import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";
import ErrorElement from "components/errors/ErrorElement";
import Public from "./Public";
import School from "./School";

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={ <ErrorElement /> } >
        { Public() }
        { School() }
      </Route>
    ),
  );

  return <RouterProvider router={ router } />
}