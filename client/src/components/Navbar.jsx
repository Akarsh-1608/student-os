import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    navigate("/login")
  }

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h2 className="text-xl font-semibold">
        Task Manager
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-xl"
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar