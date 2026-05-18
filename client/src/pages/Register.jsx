import { useState } from "react"
import { registerUser } from "../api/authApi"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
function Register() {

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")
const navigate = useNavigate()
  const handleRegister = async (e) => {

  e.preventDefault()

  try {

    const data =
      await registerUser({
        name,
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

    alert("Registered Successfully!")
    navigate("/")

  } catch (error) {

    console.log(error)

    alert("Registration Failed")
  }
}

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleRegister}
       className="bg-white p-6 md:p-8 rounded-2xl shadow w-[90%] max-w-md"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full p-3 border rounded-xl mb-4"
        />

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
          Register
        </button>
        <p className="text-center mt-4">

  Already have an account?{" "}

  <Link
    to="/login"
    className="text-blue-500"
  >
    Login
  </Link>

</p>

      </form>

    </div>
  )
}

export default Register