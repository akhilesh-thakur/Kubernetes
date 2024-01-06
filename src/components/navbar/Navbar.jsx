import Links from "./links/Links";

export default function Navbar() {
  return (
    <div className="bg-[#050A30] flex justify-between items-center h-24">
      <div className="font-bold text-lg">Kuber.pro</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
