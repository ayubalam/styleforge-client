import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminDashboard from "./admin/AdminDashboard";

function App() {
  return (

    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/products" element={<Products />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />

      {/* Admin Protected Route */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">

            <AdminDashboard />

          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;