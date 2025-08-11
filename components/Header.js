import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-primary">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome back, Trader!</span>
        <FaUserCircle className="w-8 h-8 text-secondary" />
      </div>
    </header>
  );
}