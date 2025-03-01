import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
