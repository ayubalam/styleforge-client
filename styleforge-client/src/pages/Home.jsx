import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>

      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100">

        <h1 className="text-5xl font-bold mb-4">
          STYLEFORGE
        </h1>

        <p className="text-xl text-gray-600">
          Premium Men's Fashion Store
        </p>

      </div>

    </MainLayout>
  );
};

export default Home;