import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQueryHandler } from "../../hook/useQuery";
import saved from "../../shared/assets/icons/saved.svg";
import star from "../../shared/assets/icons/star.svg";
import bgimg from "../../shared/assets/icons/bgimg.svg";
const SingleWriterInfo = () => {
  const navigate = useNavigate();

  const HandleClick = (id) => {
    navigate(`/kitoblar/${id}`);
  };
  const { id } = useParams();
  const { data: data, isLoading: isLoading } = useQueryHandler({
    pathname: "todo",
    url: `ApiForWriters/${id}`,
  });
  const { data: data1, isLoading: isLoadingData1 } = useQueryHandler({
    pathname: "aaa",
    url: `ApiForBooks`,
  });

  return (
    <div className="w-[1440px] mx-auto">
      <div className="w-full flex  gap-10 py-2">
        <div className="w-[40%]">
          <img
            className="w-full h-[600px] object-cover rounded-r-4xl overflow-hidden"
            src={data?.image}
            alt=""
          />

          <div className="container1 py-5 flex items-center gap-10">
            <div className="flex items-start  flex-col">
              <p className="text-[#A3A3A3] text-[12px] font-normal">
                Tavallud sanasi
              </p>
              <p className="text-[#c9ac8c] text-[35px] font-['Great_Vibes'] font-normal">
                {data?.birthYear} yil{" "}
              </p>
              <p className="text-[#A3A3A3] text-[12px] font-normal">
                {data?.birthPlace}
              </p>
            </div>
            <p className="text-[#c9ac8c] text-[35px] font-normal">-</p>
            <div className="flex items-start  flex-col">
              <p className="text-[#A3A3A3] text-[12px] font-normal">
                Vafot etgan sanasi
              </p>
              <p className="text-[#c9ac8c] text-[35px] font-['Great_Vibes'] font-normal">
                {data?.deathYear} yil
              </p>
              <p className="text-[#A3A3A3] text-[12px] font-normal">
                {data?.birthPlace}
              </p>
            </div>
          </div>
        </div>
        <div className="p-[10px] w-[60%]">
          <h1 className="text-[#c9ac8c] text-[45px] font-normal font-['Great_Vibes']">
            {data?.name}
          </h1>
          <p className="text-[#D1D1D1] font-normal">{data?.description}</p>

          <div className="flex items-center justify-between py-3 pt-20">
            <h1 className="uppercase text-[30px] font-normal text-[#c9ac8c] ">
              Asarlari
            </h1>
            <Link to={"/kitoblar"} className="font-normal text-white">
              Barchasini ko’rish
            </Link>
          </div>
          <div className="  w-full  overflow-scroll">
            <div className="flex items-start justify-between gap-10 w-[2000px]">
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
      </div>
    </div>
  );
};

export default SingleWriterInfo;
