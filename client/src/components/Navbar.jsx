import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    navigate("/login")
  }

  return (
    <div className="bg-white shadow px-4 py-4 flex justify-between items-center">

      <h2 className="text-lg md:text-2xl font-semibold">
        Amazing-Task-Tracker-App(ATTA)
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-2 md:px-4 rounded-xl text-sm md:text-base"
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar