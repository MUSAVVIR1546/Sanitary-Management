import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Buttons from "./Components/Button/index";
import Table from "./Components/BillingHistory/index";
import PendingBills from "./Components/PendingBills/index";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Buttons /> },
  // { path: "/buttons", element: <Buttons /> },
  { path: "/billing-history", element: <Table /> },
  { path: "/pending-bills", element: <PendingBills /> }
  // { path: "*", element: <h1>404 - Page Not Found</h1> }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
