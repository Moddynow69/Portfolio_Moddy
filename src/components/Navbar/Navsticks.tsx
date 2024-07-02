type NavsticksProps = {
    rotate: number;
};

export default function Navstick({rotate}:NavsticksProps) {
    return (
      <div className="w-[200px] h-4 absolute flex justify-start items-center top-[50%] -z-10 origin-left"
      style={{
        rotate: `${rotate-85}deg`,
        transition: "rotate 0.6s",
      }
      }>
        <div className="w-full h-1 bg-white"></div>
        <div className="w-4 h-4 rounded-full bg-slate-500"></div>
      </div>
    );
  }
  