import React from "react";
import { BiCopyright } from "react-icons/bi";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className=" md:text-left bg-second text-center text-third font-Inter px-9 pt-[42px] pb-6 md:pt-[82px] md:pl-[145px] md:pr-[143px] md:pb-[197px]">
      <div className="md:flex md:flex-row">
        <div className="md:m-0 md:w-[47.5%]">
          <img src={logo} alt="logo" className="md:m-0 m-auto" />
          <p className=" mt-7 mb-[17px] text-[1rem] font-normal leading-[29px] md:w-[80%]">
            Наш ресторан ждет вас, обслуживание и еда на самом высоком уровне,
            потому что вы этого заслуживаете
          </p>
          <p className="md:ml-0 leading-10 m-[23px] font-bold text-xs uppercase">
            Время работы
          </p>
          <div className="md:flex md:flex-row md:gap-[42px]">
            <ul className="mb-[14px] font-normal text-base leading-7">
              <li className="md:w-2/4">Понедельниц - Пятница</li>
              <li>8:00 am to 9:00 pm</li>
            </ul>

            <ul className="mb-[7px] font-normal text-base leading-7">
              <li>Суббота</li>
              <li>8:00 am to 9:00 pm</li>
            </ul>

            <ul className="mb-[27px] font-normal text-base leading-7">
              <li>Воскресенье</li>
              <li>Закрыто</li>
            </ul>
          </div>
        </div>

        <div className="md:mr-[104px] md:mt-3 ml-[-21px]">
          <h6 className="font-bold text-xs leading-10 uppercase">Навигация</h6>
          <ul className="mb-[27px]">
            <li className="text-base leading-10">Меню</li>
            <li className="text-base leading-10">О нас</li>
            <li className="text-base leading-10">Контакты</li>
            <li className="mb-6 text-base leading-10">Галерея</li>
          </ul>
        </div>

        <div className="md:mt-3">
          <h6 className=" font-bold text-xs leading-10 uppercase">Блюда</h6>
          <ul className="">
            <li className="text-base leading-10">Рыба с овощами</li>
            <li className="text-base leading-10">Чили с тофу</li>
            <li className="text-base leading-10">Яичница с огурцом</li>
            <li className="text-base leading-10">Остальные блюда</li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between mt-[87px] ">
        <p className="flex items-center gap-2">
          <BiCopyright /> 2022 Restaurants. All Right Reserved. Designed by
          Delinc
        </p>

        <div className="flex gap-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
