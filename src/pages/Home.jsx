import React from "react";

import rega from "../assets/images/Rectangle 38.png";
import regaMini from "../assets/images/regaMini.png";
import heroright from "../assets/images/Rectangle 33.png";
import herorightItem from "../assets/images/test.png";
import leftItem from "../assets/images/leaf.png";
import imgCategory from "../assets/images/category-img.png";
import imgCategory_destop from "../assets/images/category-destop.png";

import menufood from "../assets/images/menufood.png";
import visitorsSliderAvatar from "../assets/images/visitorsSlider-avatar.png";

import menufoodright1 from "../assets/images/menufood-right1.png";
import menufoodright2 from "../assets/images/menufood-right2.png";
import menufoodright3 from "../assets/images/menufood-right3.png";
import menufoodright4 from "../assets/images/menufood-right4.png";

import galleryfood from "../assets/images/galleryFood-img.png";
import galleryfood1 from "../assets/images/galleryFood1-img.png";
import galleryfood2 from "../assets/images/galleryFood2-img.png";
import galleryfood3 from "../assets/images/galleryFood3-img.png";
import galleryfood4 from "../assets/images/galleryFood4-img.png";
import galleryfood5 from "../assets/images/galleryFood5-img.png";

import galleryfoodPhone1 from "../assets/images/galleryFoodMini1-img.png";
import galleryfoodPhone2 from "../assets/images/galleryFoodMini2-img.png";
import galleryfoodPhone3 from "../assets/images/galleryFoodMini3-img.png";
import galleryfoodPhone4 from "../assets/images/galleryFoodMini4-img.png";
import galleryfoodPhone5 from "../assets/images/galleryFoodMini5-img.png";
import galleryfoodPhone6 from "../assets/images/galleryFoodMini6-img.png";

import chef1 from "../assets/images/chef1-img.png";
import chef2 from "../assets/images/chef2-img.png";
import chef3 from "../assets/images/chef3-img.png";

import menufood_icon1 from "../assets/images/menufood-icon1.png";
import menufood_icon2 from "../assets/images/menufood-icon2.png";
import menufood_icon3 from "../assets/images/menufood-icon3.png";
import menufood_icon4 from "../assets/images/menufood-icon4.png";
import Category from "../components/UI/Category/Category";

const menuFoodData = [
  {
    title: "Лумпия с соусом",
    price: "2500",
    imgUrl: menufoodright1,
    desc: "Начинка из свиного фарша, обжаренного с луком, морковью и другими овощами",
  },
  {
    title: "Рыба с овощами ",
    price: "3500",
    imgUrl: menufoodright2,
    desc: "Очень нежная рыбка, минимум масла и калорий, гарнир готовится в самой рыбе",
  },
  {
    title: "Чили с тофу",
    price: "2700",
    imgUrl: menufoodright3,
    desc: "Очень острое и пряное блюдо из рецептов индийско-китайской кухни",
  },
  {
    title: "Яичница с огурцом",
    price: "1980",
    imgUrl: menufoodright4,
    desc: "Наивкуснейшая яичница с солёными огурцами на завтрак",
  },
];

const Home = () => {
  return (
    <div className="bg-second">
      <section>
        <div className="tablet:h-[969px] relative bg-hero-pattern bg-no-repeat bg-cover bg-left h-[541px] text-first">
          <div className=" tablet:block hidden">
            <img src={rega} alt="hero__img " />
          </div>

          <div className="tablet:hidden absolute bottom-0 left-0">
            <img src={regaMini} alt="regaMini" />
          </div>

          <div className="laptop_max:top-[284px] laptop_max:left-[216px] tablet:absolute tablet:top-[250px] left-[380px] text-center">
            <h4 className=" tablet:text-[57px] tablet:leading-[66px] font-Tinos text-3xl pt-14">
              Добро пожаловать в
            </h4>
            <h1 className="tablet:text-[90px] tablet:leading-[103px] font-Tinos text-[40px] leading-[46px] mt-2 mb-[17px]">
              Наш ресторан
            </h1>

            <div className="tablet:gap-4 flex items-center gap-1 justify-center">
              <div className="tablet:w-[61px] w-[30px] h-[2px] bg-[#C4C4C4]"></div>
              <p className="font-Open text-lg text-third">ДОМ ЛУЧШЕЙ ЕДЫ</p>
              <div className="tablet:w-[61px] w-[30px] h-[2px] bg-[#C4C4C4]"></div>
            </div>

            <button className="tablet:hidden cursor-pointer mt-[68px] font-Open font-bold text-sm text-third pt-2 border border-first  rounded-3xl bg-first  pr-[43px] pb-[9px] pl-[42px]">
              МЕНЮ
            </button>
          </div>

          <div className="laptop_max:block hidden absolute right-0 top-[75px] z-10">
            <img src={heroright} alt="hero__img-right" />
          </div>

          <div className="tablet:block hidden absolute top-[60px] right-[267px] z-0">
            <img src={herorightItem} alt="herorightItem" />
          </div>

          <div className="tablet:block hidden absolute left-[23px] top-[704px]">
            <img src={leftItem} alt="herorightItem" />
          </div>
        </div>
      </section>

      <section>
        <Category />

        <div className="laptop:flex  md:px-[165px] md:gap-[117px] text-center font-Open">
          <div className="category__history">
            <h1 className="md:mt-[36px] md:mx-0 font-Tinos mt-[33px] m-auto mb-[19px]">
              Наша <span className="text-first">История</span>
            </h1>
            <div className=" laptop:w-[434px] md:mx-0 laptop:h-[210px]  font-normal text-base text-third leading-[22px] text-center mx-[22px]">
              Как и у любого другого самобытного места, у нас есть своя, особая
              история. Идея ресторана пришла основателям неожиданно. Во время
              прогулки по лесу создатель нашего ресторана застрял в сотнях
              километров от ближайшего населенного пункта. Вдали от цивилизации
              и связи им пришлось навремя обустровать себе нехитрый быт,
              добывать и готовить себе еду.
            </div>

            <div className="md:flex md:gap-10 justify-center">
              <div className="md:mt-[39px] flex flex-col font-bold  text-[40px] leading-[54px] text-first mt-[58px] ">
                93
                <span className="text-xl leading-[27px] text-third font-normal">
                  Напитки
                </span>
              </div>

              <div className="md:mt-[39px] flex flex-col font-bold  text-[40px] leading-[54px] text-first mt-[58px] ">
                206
                <span className="text-xl leading-[27px] text-third font-normal">
                  Еда
                </span>
              </div>
              <div className="md:mt-[39px] flex flex-col font-bold text-[40px] leading-[54px] text-first mt-[58px] ">
                71
                <span className="text-xl leading-[27px] text-third font-normal">
                  Закуски
                </span>
              </div>
            </div>
          </div>

          <img
            src={imgCategory_destop}
            alt="category__home-img"
            className=" hidden md:mt-[21px] md:flex md:m-auto "
          />

          <div className="flex justify-center mt-[58.7px] mx-2  ">
            <img
              src={imgCategory}
              alt="category__home-img"
              className="md:hidden"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="laptop:mt-[122px] md:h-[350px] md:bg-banner-mini bg-no-repeat bg-cover  w-full mt-[50px] h-[518px]">
          <div className="laptop:pl-[165px] laptop:pr-[201px] laptop:text-left laptop:flex-row laptop:items-center laptop:justify-between  md:bg-backopacity flex  flex-col  bg-black  w-full  h-full  text-third text-center">
            <div className="laptop:mt-0 laptop:w-4/6 w-full mt-10">
              <div className="laptop:text-[52px] laptop:leading-[60px]  mx-5 mb-[23px] font-Tinos font-normal text-first text-[40px] leading-[46px]">
                Отпразднуйте в одном из
                <div>самых лучших ресторанов.</div>
              </div>
              <p className="laptop:text-[24px] md:leading-[33px] mx-[13px]  font-Open font-bold text-[35px] leading-[48px]">
                Только в этом месяце бизнес-ланч от 3000 тенге
              </p>
            </div>

            <button className="laptop:m-0 mt-[33px] m-auto w-[141px] font-Open text-[14px] font-bold leading-5 border border-first rounded-3xl pt-2 pr-[6.73px] pb-[9px] pl-2 bg-first">
              3AKA3 СТОЛИКА
            </button>
          </div>
        </div>
      </section>

      <section className="relative">
        <h1 className="laptop:mt-[88px] mt-[30px] mb-[24px] text-center font-normal text-[54px] leading-[62px] text-first">
          Блюда
        </h1>

        <div className="tablet:flex-row  md:flex md:flex-col md:justify-center ">
          <div className="laptop:pl-[95px] laptop:mt-[124px] sm:flex sm:justify-center  z-10">
            <img src={menufood} alt="menufood" />
          </div>

          <div className="laptop:ml-[74px] laptop:mt-[154px] tablet:mt-0 md:m-auto md:mt-[40px]  mt-[37px] ml-[23px] z-10 ">
            {menuFoodData.map((item, idex) => (
              <div
                className="laptop:w-[468px] tablet:mb-[87px] rounded-tl-[122px] rounded-tr-[15px] rounded-br-[45px] rounded-bl-[15px] flex items-center  bg-card mb-[37px] mobile:w-[365px] w-full h-[177px]"
                key={idex}
              >
                <div className="relative top-[-13px] left-[-22px] w-full">
                  <img src={item.imgUrl} alt="menu__food-right" className="" />
                  <div className="laptop:left-[140px] top-0 right-[9px] absolute bg-[#101a24] w-[54px] h-[54px] rounded-[50%] flex items-center justify-center font-Inter font-bold text-[1.2rem] text-third leading-[26px]  ">
                    {item.price}
                  </div>
                </div>
                <div className="laptop:mb-[40px] laptop:ml-[-265px] laptop:w-[49%] font-Tinos font-normal w-[80%]">
                  <p className="  mb-[9px] text-xl leading-[26px] text-first">
                    {item.title}
                  </p>
                  <div className=" text-[15px] leading-[26px] text-third">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
            <button className="tablet:block hidden mt-[33px] m-auto w-fit font-Open text-[14px] font-bold leading-5 border border-first rounded-3xl pt-2 pr-[22px] pb-[9px] pl-[22px] text-third bg-first">
              ОСТОЛЬНОЕ МЕНЮ
            </button>
          </div>
        </div>

        <div className="md:block hidden ">
          <img
            className="laptop:top-0 laptop:left-[3%] absolute bottom-[20%] left-0 z-0"
            src={menufood_icon1}
            alt="menufood_icon1"
          />
          <img
            className="laptop:right-[3.8%] absolute top-0 right-0 z-0"
            src={menufood_icon2}
            alt="menufood_icon1"
          />
          <img
            className="laptop:top-[43%] laptop:right-[4%] absolute bottom-[4%] right-0 z-0"
            src={menufood_icon3}
            alt="menufood_icon1"
          />
          <img
            className="laptop:bottom-[6%] laptop:left-[40%] absolute bottom-[37%] right-0 z-0"
            src={menufood_icon4}
            alt="menufood_icon1"
          />
        </div>
      </section>

      <section>
        <div className="laptop:mt-[104px] laptop:px-[260px] laptop:bg-banner-slider laptop:h-[550px] flex flex-col items-center mt-[98px] bg-backopacity h-[589px] text-third text-center font-Open ">
          <div className="laptop:w-[99%] pt-[6.2%] w-[84%] text-xl  italic">
            Вид из ресторана потрясающий, интерьер необычный, еда отличная,
            обслуживание отличное, понравились закуски и десерт, утка с
            картошкой была восхитительна, все отлично дома в Мексике я не
            встречал таких отменных заведений, однозначно рекомендую
          </div>
          <div className=" laptop:mt-[73px] mt-[40px]">
            <img src={visitorsSliderAvatar} alt="visitorsSlider-avatar" />
            <div className="mt-2 font-semibold text-xl">Посетитель</div>
            <p className="laptop:mt-[10px] text-xl font-normal">Серхио</p>
            <div className="laptop:mt-[25px] flex items-center justify-center">
              <div className="mx-[3px] w-[5px] h-[5px] bg-third rounded-[50%] inline-block"></div>
              <div className="mx-[3px] w-[5px] h-[5px] bg-third rounded-[50%] inline-block"></div>
              <div className="mx-[3px] w-[7px] h-[7px] bg-black border border-first rounded-[50%] inline-block active"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="laptop:mt-[40px] mt-[31px] mb-[60px] text-center">
          Галерея <span className="text-first">Блюд</span>
        </h1>
        <div className="hidden lg:block ">
          <div className="tablet:gap-0 flex items-center justify-center laptop:gap-5">
            <img
              src={galleryfood}
              alt="menu__food-img1"
              className="max-w-[555px]"
            />
            <div className="tablet:gap-0 flex laptop:gap-[24px]">
              <img
                src={galleryfood1}
                alt="menu__food-img1"
                className="max-w-[411px]"
              />
              <img
                src={galleryfood2}
                alt="menu__food-img1"
                className="max-w-[411px]"
              />
            </div>
          </div>

          <div className="tablet:gap-0 flex laptop:gap-5 items-center justify-center mt-[28px]">
            <div className="tablet:gap-0 flex laptop:gap-[24px] items-center justify-center">
              <img
                src={galleryfood3}
                alt="menu__food-img1"
                className="max-w-[411px]"
              />
              <img
                src={galleryfood4}
                alt="menu__food-img1"
                className="max-w-[411px]"
              />
            </div>

            <img
              src={galleryfood5}
              alt="menu__food-img1"
              className="max-w-[555px]"
            />
          </div>
        </div>

        <div className="lg:hidden">
          <img
            src={galleryfoodPhone1}
            alt="menu__food-img1"
            className="w-full "
          />

          <img
            src={galleryfoodPhone2}
            alt="menu__food-img1"
            className="w-full"
          />

          <img
            src={galleryfoodPhone3}
            alt="menu__food-img1"
            className="w-full"
          />

          <img
            src={galleryfoodPhone4}
            alt="menu__food-img1"
            className="w-full"
          />

          <img
            src={galleryfoodPhone5}
            alt="menu__food-img1"
            className="w-full"
          />

          <img
            src={galleryfoodPhone6}
            alt="menu__food-img1"
            className="w-full"
          />
        </div>
      </section>

      <section>
        <h1 className="mt-[94px] mb-[60px] text-center">
          Наши <span className="text-first">Повара</span>
        </h1>
        <div className="md:flex md:px-[72px] md:flex-wrap-reverse">
          <img src={chef1} alt="chef1" className="m-auto" />
          <img src={chef2} alt="chef2" className="m-auto mt-3 mb-3" />
          <img src={chef3} alt="chef3" className="m-auto mt-3" />
        </div>
      </section>

      <section>
        <div className="tablet:mt-[84px] mt-[35px] w-full bg-banner-bottom bg-no-repeat bg-cover bg-center h-[1049px]"></div>
      </section>
    </div>
  );
};

export default Home;
