import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
