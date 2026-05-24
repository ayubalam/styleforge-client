import {
  Link,
} from "react-router-dom";

const AdminLayout = ({
  children,
}) => {

  return (

    <div className="min-h-screen flex">

      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">

        <h2 className="text-3xl font-bold mb-10">

          Admin Panel

        </h2>

        <nav className="space-y-5">

          <Link
            to="/admin"
            className="block hover:text-gray-300"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="block hover:text-gray-300"
          >
            Products
          </Link>

          <Link
            to="/admin/add-product"
            className="block hover:text-gray-300"
          >
            Add Product
          </Link>

          <Link
            to="/"
            className="block hover:text-gray-300"
          >
            Back To Store
          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-10">

        {children}

      </main>

    </div>
  );
};

export default AdminLayout;