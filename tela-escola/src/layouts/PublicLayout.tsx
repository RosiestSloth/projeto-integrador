import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <main className="flex flex-col h-screen w-screen bg-gradient-to-tr from-slate-900 to-neutral-900 text-neutral-800">
      <Outlet />
    </main>
  );
}