import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQueryHandler } from "../../hook/useQuery";
import star from "../../shared/assets/icons/star.svg";
import paperbooks from "../../shared/assets/icons/paperbooks.svg";
import audiobooks from "../../shared/assets/icons/audiobooks.svg";
import pdfbooks from "../../shared/assets/icons/pdfbooks.svg";
import arrowdown from "../../shared/assets/icons/arrowdown.svg";
import cardbg from "../../shared/assets/icons/cardbg.svg";
import quote from "../../shared/assets/images/quote.png";
import bgimg2 from "../../shared/assets/icons/bgimg2.svg";
const SingleBook = () => {
  const navigate = useNavigate();

  const HandleClick = (id) => {
    navigate(`/kitoblar/${id}`);
    window.location.reload();
  };
  const { id } = useParams();
  const { data: data, isLoading: isLloading } = useQueryHandler({
    pathname: "todo",
    url: `ApiForBooks/${id}`,
  });
  const { data: data1, isLoading: isLloading1 } = useQueryHandler({
    pathname: "aaa",
    url: `ApiForBooks`,
  });
  console.log(data1);

  return (
    <>
      <img className="absolute bottom-0" src={bgimg2} alt="" />

      <div className="relative z-auto">
        <div className="py-14 flex gap-10 container1">
          <div className="w-[50%]">
            <img
              className="w-full h-[650px] rounded-2xl overflow-hidden object-cover"
              src={data?.image}
              alt={data?.image}
            />
          </div>
          <div className="w-full">
            <div className="py-3">
              <h1 className="text-[40px] font-normal text-[#c9ac8c] font-['Great_Vibes']">
                {data?.title}
              </h1>
              <div className="flex items-center gap-2">
                <h6 className="text-[#c9ac8c] font-normal">{data?.author}</h6>
                <p className="text-[#fff]">|</p>
                <div className="flex items-center gap-1.5">
                  <img src={star} alt="" />
                  <p className="text-[#A3A3A3] text-[13px] font-thin ">
                    {data?.rating}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#fff] font-normal flex items-center gap-4">
                <span className="text-[#A3A3A3] text-[20px]">
                  Sahifalar soni:
                </span>
                <span>{data?.pages}</span>
              </p>
              <p className="text-[#fff] font-normal flex items-center gap-4">
                <span className="text-[#A3A3A3] text-[20px]">
                  Chop etilgan:
                </span>
                <span>{data?.publishedYear}</span>
              </p>
              <p className="text-[#fff] font-normal flex items-center gap-4">
                <span className="text-[#A3A3A3] text-[20px]">Janri:</span>{" "}
                <span>{data?.genre}</span>
              </p>
              <p className="text-[#fff] font-normal flex items-center gap-4">
                <span className="text-[#A3A3A3] text-[20px]">Nashriyot:</span>
                <span>{data?.publisher}</span>
              </p>
            </div>
            <div className="flex items-center gap-10 py-8">
              <p className="font-normal text-[#c9ac8c]">To’liq ma’lumot</p>
              <img src={arrowdown} alt="" />
              <hr className="!text-[#c9ac8c] w-[70%]" />
            </div>
            <p className="font-normal text-white ">
              {data?.description?.repeat(2)}
            </p>
            <p className="font-normal text-[#c9ac8c] py-8">Mavjud formatlar</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10">
                <div className="text-white flex items-center flex-col">
                  <img src={paperbooks} alt="" />
                  <p>Qog’oz kitob</p>
                  <p className="font-normal text-[#A3A3A3]">
                    {data?.price} so'm
                  </p>
                </div>
                <div className="text-white flex items-center flex-col">
                  <img src={audiobooks} alt="" />
                  <p>Audiokitob</p>
                  <p className="font-normal text-[#A3A3A3]">
                    {data?.audioDuration} soat
                  </p>
                </div>
                <div className="text-white flex items-center flex-col">
                  <img src={pdfbooks} alt="" />
                  <p>Elektron</p>
                  <p className="font-normal text-[#A3A3A3]">pdf, epub</p>
                </div>
              </div>
              <button className="px-10 py-5 bg-[#c9ac8c]  hover:bg-[#c9ac8cb0]">
                Javonga qo’shish{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 container1">
          <button className="p-3 text-[#A3A3A3] text-[20px] hover:text-[#c9ac8c]">
            Muallif haqida
          </button>
          <button className="p-3 text-[#A3A3A3] text-[20px] hover:text-[#c9ac8c]">
            Kitobdan iqtiboslar
          </button>
          <button className="p-3 text-[#A3A3A3] text-[20px] hover:text-[#c9ac8c]">
            Kitobxonlar taqrizi
          </button>
        </div>
        <div className="flex items-center gap-10 container1">
          <div className="p-10 relative shadow-xl  bg-[linear-gradient(224deg,#161616_0%,#1e1e1e_100%)] w-[50%] h-max">
            <img className="absolute -top-3 " src={quote} alt="" />
            <img className="absolute bottom-0 right-0 " src={cardbg} alt="" />

            <p className="text-white font-normal">
              Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
              bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
              o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
              ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
              olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
            </p>
          </div>
          <div className="p-10 relative shadow-xl  bg-[linear-gradient(224deg,#161616_0%,#1e1e1e_100%)] w-[50%] h-max">
            <img className="absolute -top-3 " src={quote} alt="" />
            <img className="absolute bottom-0 right-0 " src={cardbg} alt="" />

            <p className="text-white font-normal">
              Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
              bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
              o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
              ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
              olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between py-3 pt-20 container1">
          <h1 className="uppercase text-[20px] font-normal text-[#c9ac8c] ">
            Sizga yoqishi mumkin
          </h1>
          <Link to={"/kitoblar"} className="font-normal text-white">
            Barchasini ko’rish
          </Link>
        </div>
        <div className="  w-full  overflow-scroll pl-20 min-[1441px]:pl-0 min-[1441px]:w-[90%] min-[1441px]:mx-auto pb-40 pt-10">
          <div className="flex items-start justify-between gap-10 w-[2000px] min-[1441px]:mx-auto">
            {data1?.map((value) => (
              <div
                key={value?.id}
                className="w-[165px] h-auto max-[412px]:w-full"
                onClick={() => HandleClick(value?.id)}>
                <img
                  className=" object-cover w-full h-[246px] rounded-2xl overflow-hidden"
                  src={value?.image}
                  alt=""
                />

                <div>
                  <h1 className=" text-[16px] font-normal  text-[#c9ac8c]">
                    {value?.title}
                  </h1>
                  <p className="text-[#6F6F6F]  text-[12px] font-thin">
                    {value?.author}
                  </p>

                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <img src={star} alt="" />
                      <p className="text-[#6F6F6F]  text-[12px] font-thin">
                        {value?.rating} •
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[#6F6F6F]  text-[12px] font-thin">
                        {value?.reviews} ta fikrlar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
