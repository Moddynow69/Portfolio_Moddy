import Navsticks from "./Navsticks";
import NavbarItems from "@/constant/Navbar/NavbarItems";

type NavbarProps = {
    currPage: number;
    setCurrPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Navbar({currPage, setCurrPage}:NavbarProps) {
    const NavbarItemsSize = Object.keys(NavbarItems).length;
    const handleClick = () => {
        setCurrPage((currPage + 1) % NavbarItemsSize);
    };
  return (
    <div className="w-[250px] h-full flex justify-start items-center">
      <div className="w-[200px] h-[200px] z-20 cursor-pointer"
      onClick={handleClick}>
        <div className="h-full w-1/2 rounded-e-full bg-[#d8cdcd] hover:bg-[#f1f4f4] flex items-center text-black hover:text-[#302e2e] font-[orbitron]">
        <h1 className="text-2xl -translate-x-[50%] -translate-y-[50%] rotate-90 origin-bottom duration-50 uppercase font-semibold">{NavbarItems[currPage].title}</h1></div>
        <Navsticks rotate={currPage*170/(NavbarItemsSize-1)} />
      </div>
    </div>
  );
}
