export default function Footer() {
  return (
    <footer className=" px-4 py-6 text-[9px] sm:text-[11px] md:text-xs text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p>265 Frobisher Drive, Unit 1, Waterloo, ON N2V 2G4 - Canada</p>
          <p className="mt-1">© 2021 Nfinite Nanotechnology Inc</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition">
            Privacy Policy
          </a>

          <p>Made by Numbered</p>
        </div>
      </div>
    </footer>
  );
}
