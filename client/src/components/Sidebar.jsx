function Sidebar() {

  return (
    <div className="hidden md:flex w-64 bg-black text-white p-6 flex-col">

      <h1 className="text-2xl font-bold mb-8">
        Student OS
      </h1>

      <ul className="space-y-4">

        <li className="hover:text-gray-300 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Tasks
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Productivity
        </li>

      </ul>

    </div>
  )
}

export default Sidebar