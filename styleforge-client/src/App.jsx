import {
  Routes,
  Route,
} from "react-router-dom";


// Pages
import Home
  from "./pages/Home";

import Products
  from "./pages/Products";

import ProductDetails
  from "./pages/ProductDetails";

import Cart
  from "./pages/Cart";

import Login
  from "./pages/Login";

import Register
  from "./pages/Register";

import Dashboard
  from "./pages/Dashboard";

import Checkout
  from "./pages/Checkout";


// Admin
import AdminDashboard
  from "./admin/AdminDashboard";

import AdminProducts
  from "./admin/AdminProducts";

import AddProduct
  from "./admin/AddProduct";

import EditProduct
  from "./admin/EditProduct";


// Protected
import ProtectedRoute
  from "./components/ProtectedRoute";

  import PaymentSuccess
  from "./pages/PaymentSuccess";

import PaymentFailed
  from "./pages/PaymentFailed";

function App() {

  return (

    <Routes>

      {/* Public */}
      <Route
        path="/"
        element={<Home />}
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

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected User */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminProducts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/add-product"
        element={
          <ProtectedRoute adminOnly={true}>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit-product/:id"
        element={
          <ProtectedRoute adminOnly={true}>
            <EditProduct />
          </ProtectedRoute>

        }
      />

      <Route
  path="/payment-success"
  element={<PaymentSuccess />}
/>

<Route
  path="/payment-failed"
  element={<PaymentFailed />}
/>

    </Routes>
  );
}

export default App;