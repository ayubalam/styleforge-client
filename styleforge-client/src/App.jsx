import {
  Routes,
  Route,
} from "react-router-dom";

import Home
  from "./pages/Home";

import Login
  from "./pages/Login";

import Register
  from "./pages/Register";

import Products
  from "./pages/Products";

import ProductDetails
  from "./pages/ProductDetails";

import Cart
  from "./pages/Cart";

import NotFound
  from "./pages/NotFound";

import ProtectedRoute
  from "./components/ProtectedRoute";

import AdminDashboard
  from "./admin/AdminDashboard";

import AdminProducts
  from "./admin/AdminProducts";

import AddProduct
  from "./admin/AddProduct";

import EditProduct
  from "./admin/EditProduct";

function App() {

  return (

    <Routes>

      {/* Public */}
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute role="admin">
            <AdminProducts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/add-product"
        element={
          <ProtectedRoute role="admin">
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit-product/:id"
        element={
          <ProtectedRoute role="admin">
            <EditProduct />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;