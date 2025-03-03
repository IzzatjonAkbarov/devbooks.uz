import React from "react";
import { useQueryHandler } from "../../../../hook/useQuery";
import audiobooks from "../../../../shared/assets/icons/audiobooks.svg";
import paperbooks from "../../../../shared/assets/icons/paperbooks.svg";
import writersicon1 from "../../../../shared/assets/icons/writersicon1.svg";
import writersicon2 from "../../../../shared/assets/icons/writersicon2.svg";
import { useNavigate } from "react-router-dom";
import SwiperCustom from "../../../../Components/swiper";
const Jadidlar = () => {
  const { data, isLoading } = useQueryHandler({
    pathname: "todo",
    url: "ApiForWriters",
  });

  const navigate = useNavigate();
  const HandleClick = (id) => {
    navigate(`/writers/${id}`);
  };
  return (
    <>
      <div className="text-white">
        {isLoading ? (
          <div className="flex items-start container1  gap-10 flex-wrap justify-center">
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="animate-pulse w-[170px] max-[425px]:w-full">
              <div className="flex items-center justify-center mt-4 w-full  py-10">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
              <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>{" "}
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <div className="h-2.5 my-2 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="flex items-start container1 gap-10 flex-wrap justify-center py-10">
            {data?.map((value) => (
              <div
                onClick={() => HandleClick(value?.id)}
                id={value?.id}
                className="w-[170px] max-[425px]:w-full overflow-hidden shadow-[0_3px_2px_rgba(0,0,0,0.12),0_7px_5px_rgba(0,0,0,0.03),0_13px_10px_rgba(0,0,0,0.04),0_22px_18px_rgba(0,0,0,0.04),0_42px_33px_rgba(0,0,0,0.05),0_100px_80px_rgba(0,0,0,0.07)] bg-gradient-to-br from-[#191919] to-[#212121]  rounded-lg  transition-all "
                key={value?.id}>
                <img
                  className="object-cover w-full h-[140px]"
                  src={value?.image}
                  alt=""
                />

                <div className="relative overflow-hidden p-4 ">
                  <img
                    className="absolute bottom-0 left-0"
                    src={writersicon1}
                    alt=""
                  />
                  <img
                    className="absolute -top-1/2  right-0"
                    src={writersicon2}
                    alt=""
                  />
                  <h1 className="text-[#c9ac8c]  text-center">{value?.name}</h1>
                  <div className="flex items-center justify-center py-2">
                    <p className="">{value?.birthYear}</p>-
                    <p>{value?.deathYear}</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1">
                      <img src={paperbooks} alt="" />
                      <p>{value?.paperBooks}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={audiobooks} alt="" />
                      <p>{value?.audioBooks}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Jadidlar;
