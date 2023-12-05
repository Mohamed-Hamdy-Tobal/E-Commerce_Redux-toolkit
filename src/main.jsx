import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { Root } from "./Layout/Root";
import { Cart } from "./Pages/Cart";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import SignIn from "./Pages/Log/SignIn";
// import { RequireAuth } from "./Components/RequireAuth";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: 'filterProducts/:type',
        element: <FilteredProducts/>
      },
      {
        path: 'filterProducts/:type/:productID',
        element: <SingleProduct/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'signin',
        element: <SignIn/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
