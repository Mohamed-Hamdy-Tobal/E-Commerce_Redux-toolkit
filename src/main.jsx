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
