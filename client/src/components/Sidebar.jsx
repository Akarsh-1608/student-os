function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        Student OS
      </h1>

      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-gray-300">
          Dashboard
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          Tasks
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          Habits
        </li>
      </ul>

    </div>
  )
}

export default Sidebar
