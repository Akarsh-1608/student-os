import { useState } from "react"
import { loginUser } from "../api/authApi"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")
const navigate = useNavigate()
 const handleLogin = async (e) => {

  e.preventDefault()

  try {

    const data =
      await loginUser({
        email,
        password,
      })

    // Save Token
    localStorage.setItem(
      "token",
      data.token
    )

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    )

    alert("Login Successful!")
    navigate("/")

  } catch (error) {

    console.log(error)

    alert("Invalid Credentials")
  }
}

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 md:p-8 rounded-2xl shadow w-[90%] max-w-md"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 border rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 border rounded-xl mb-4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-xl"
        >
          Login
        </button>
        <p className="text-center mt-4">

  Don't have an account?{" "}

  <Link
    to="/register"
    className="text-blue-500"
  >
    Register
  </Link>

</p>

      </form>

    </div>
  )
}

export default Login