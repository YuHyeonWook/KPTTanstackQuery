import AcommodationList from "../components/AcommodationList";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="flex justify-end">
        <Header />
      </div>
      <label htmlFor="input" className="flex items-center justify-center py-14">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-2/3 h-12 p-2 border-2 border-blue-300 rounded-lg focus:outline-none"
        />
      </label>
      <AcommodationList />
    </>
  );
}

export default Home;
