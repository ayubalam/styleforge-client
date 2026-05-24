const Footer = () => {

  return (

    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-black mb-4">

              STYLEFORGE

            </h2>

            <p className="text-gray-400 leading-relaxed">

              Premium men's fashion store
              designed for modern style
              and elegance.

            </p>

          </div>

          {/* Links */}
          <div>

            <h3 className="text-2xl font-bold mb-5">

              Quick Links

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Home</li>

              <li>Products</li>

              <li>Cart</li>

              <li>Admin</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold mb-5">

              Contact

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Email: support@styleforge.com</li>

              <li>Phone: +91 9876543210</li>

              <li>Location: India</li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

          © 2026 STYLEFORGE.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;