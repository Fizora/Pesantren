function Navbar({ children }) {
  return (
    <div className=" flex flex-col md:flex-row justify-between py-2 px-4 items-center text-white border-b border-b-gray-800 w-full ">
      {children}
    </div>
  );
}

Navbar.Group = function Group({ children }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
      {children}
    </div>
  );
};

Navbar.Brand = function Brand({ children }) {
  return (
    <div className="p-2 rounded-md bg-green-500 text-black font-medium text-sm md:text-base">
      {children}
    </div>
  );
};

Navbar.LeftNav = function LeftNav({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center mt-2 md:mt-0">
      {children}
    </div>
  );
};

Navbar.RightNav = function RightNav({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 sm:gap-3 items-center mt-2 md:mt-0">
      {children}
    </div>
  );
};

export default Navbar;
