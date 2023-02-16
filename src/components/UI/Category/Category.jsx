import React from "react";

import iconCook from "../../../assets/images/Icon-cook.png";

const categoryData = [
  {
    display: "Магическая",
    lastDisplay: "Атмосфера",
    imgUrl: iconCook,
    desc: "B нашем заведении царит магическая атмосфера наполненная вкусными ароматами",
  },
  {
    display: "Лучшее качество ",
    lastDisplay: "Еды",
    imgUrl: iconCook,
    desc: `Качество нашей  Еды - отменное!`,
  },
  {
    display: "Незабываемый",
    lastDisplay: "Вкус",
    imgUrl: iconCook,
    desc: "Наши повара готовят удивительно вкусные блюда",
  },
];
const Category = () => {
  return (
    <div className="tablet:mt-[-125px] tablet:flex tablet:justify-center relative items-center gap-[31px] text-center mt-[-80px] ml-[21px] mr-[20px]  ">
      {categoryData
        ? categoryData.map((item, index) => (
            <div
              className="tablet:basis-1/4 tablet:w-full tablet:m-0 tablet:mb-[15px]  md:w-[500px] md:m-auto md:mb-[30px]  bg-[#353030] mb-[15px] pt-[35px] pb-[54px] shadow-card "
              key={index}
            >
              <div className="flex items-center justify-center">
                <img src={item.imgUrl} alt="img" />
              </div>

              <div className="category__content">
                <p className="font-Tinos text-[26px] leading-[30px] text-third mb-5">
                  {item.display}{" "}
                  <span className="text-first">{item.lastDisplay}</span>
                </p>
                <div className="m-auto w-[286px] h-[85px] font-Tinos text-[26px] leading-[30px] text-third">
                  {item.desc}
                </div>
              </div>
            </div>
          ))
        : "Error...."}
    </div>
  );
};

export default Category;
