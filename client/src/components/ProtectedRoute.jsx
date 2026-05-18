import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

  const token =
    localStorage.getItem("token")

  // If not logged in
  if (!token) {

    return <Navigate to="/login" />
  }

  // If logged in
  return children
}

export default ProtectedRoute