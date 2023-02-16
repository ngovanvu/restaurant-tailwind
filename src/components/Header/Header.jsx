import houseLogo from "../../assets/images/logo.png"
import { BiCartAlt, BiMenu, BiPhoneCall } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
    const [menu,SetMenu] = useState(false);
    const handleClick = () => SetMenu(!menu)
  
  return (
    <header className="  bg-second" >
      <div className="flex justify-between items-center px-[9px] py-1 tablet:pr-[50px] tablet:pl-12 tablet:pt-[2px] tablet:pb-[3px]">
        <div className="flex tablet:flex-[1]">
          <img src={houseLogo} alt="logo" className="" />
        </div>

        
        <div className={`z-50 tablet:flex tablet:flex-[2] tablet:bg-transparent tablet:static tablet:w-fit tablet:h-fit fixed top-0 left-0 bg-fouth w-full h-full z-1 ${menu? '' : 'hidden'}`} onClick = {handleClick}>
          <ul className="flex tablet:bg-transparent tablet:static tablet:w-full tablet:flex-row tablet:gap-[38px]  tablet:text-[14px]   font-Montserrat font-bold absolute top-0 right-0 bg-third w-[50%] h-full flex-col justify-center text-center gap-14">
            <li>МЕНЮ</li>
            <li>O HAC</li>
            <li>ГАЛЕРЕЯ</li>
            <li>КОНТАКТЫ</li>
          </ul>
        </div>
       

        <div className=" tablet:flex items-center hidden">
          <div className="m-3">
            {" "}
            <BiCartAlt size="24.59px" />
          </div>

          <div className="border-l-[2px] border-first flex flex-col items-center leading-[1px] font-Open pl-[10px] mr-[18px]">
            <div className="flex items-center font-bold text-[10px] leading-3">
              <BiPhoneCall size="24.59px" /> +7(708)555-55-55
            </div>
            <p className="leading-3 text-[10px]">
              Свяжитесь c нами для
              <br />
              бронирования
            </p>
          </div>

          <button className="border border-first pt-2 pb-[9px] px-[7px] text-sm rounded-[20px] font-bold bg-first text-third">
            3AKA3 СТОЛИКА
          </button>
        </div>

        <BiMenu className="tablet:hidden font-bold" onClick={handleClick} size="2.5rem"/>
      </div>
    </header>
  );
};

export default Header;
