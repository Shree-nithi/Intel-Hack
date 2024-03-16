import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AudiocallGameThreePage() {
  return (
    <>
      <Helmet>
        <title>Kids learning platform</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="p-6 sm:p-5 bg-gray-100 shadow-bs" />
        <div>
          <div className="flex justify-center px-14 py-[100px] md:p-5 bg-gray-100">
            <div className="flex md:flex-col justify-center items-center w-[41%] md:w-full gap-2.5 p-5 bg-white-A700 shadow-sm rounded-[14px]">
              <div className="w-[39%] md:w-full">
                <div>
                  <div>
                    <div className="z-[1]">
                      <div className="flex justify-between items-start gap-5">
                        <Img
                          src="images/img_image_52.png"
                          alt="imagefiftytwo"
                          className="w-[23%] mt-[27px] object-cover"
                        />
                        <div className="flex flex-col w-[39%] gap-5">
                          <Img src="images/img_image_53.png" alt="imagefiftythree" className="object-cover" />
                          <Img
                            src="images/img_image_51.png"
                            alt="imagefiftyone"
                            className="w-[54px] ml-6 md:ml-0 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_29.png"
                      alt="imagetwentynine"
                      className="h-[375px] w-full md:h-auto mt-[-121px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[29px] flex-1">
                <div className="flex flex-col self-stretch">
                  <div className="flex justify-center items-start gap-2.5">
                    <Text size="3xl" as="p" className="tracking-[-1.92px]">
                      Audio-Call
                    </Text>
                    <Button shape="round" className="mt-[21px] tracking-[-0.48px] font-semibold min-w-[92px]">
                      audition task
                    </Button>
                  </div>
                  <Heading as="h1" className="tracking-[-0.64px] !font-semibold !leading-[140%]">
                    The Audio-Call training develops vocabulary and improves listening comprehension.
                  </Heading>
                </div>
                <div className="flex flex-col self-stretch gap-[9px]">
                  <Heading size="s" as="h2" className="tracking-[-0.56px]">
                    Choose a level:
                  </Heading>
                  <div className="flex justify-between pr-[13px] gap-5">
                    <a
                      href="#"
                      className="flex justify-center items-center h-[44px] border-green-400 border-[3px] border-solid rounded-[50%]"
                    >
                      <Heading as="h3" className="!text-green-400 tracking-[-0.64px] text-center">
                        A1
                      </Heading>
                    </a>
                    <a
                      href="#"
                      className="flex justify-center items-center h-[44px] border-lime-700 border-[3px] border-solid rounded-[50%]"
                    >
                      <Heading as="h4" className="!text-lime-700 tracking-[-0.64px] text-center">
                        A2
                      </Heading>
                    </a>
                    <a
                      href="#"
                      className="flex justify-center items-center h-[44px] w-[44px] border-red-400 border-[3px] border-solid bg-red-400 rounded-[50%]"
                    >
                      <Heading as="h5" className="!text-white-A700 tracking-[-0.64px] text-center">
                        B1
                      </Heading>
                    </a>
                    <a
                      href="#"
                      className="flex justify-center items-center h-[44px] border-pink-800 border-[3px] border-solid rounded-[50%]"
                    >
                      <Heading as="h6" className="!text-pink-800 tracking-[-0.64px] text-center">
                        B2
                      </Heading>
                    </a>
                    <a
                      href="#"
                      className="flex justify-center items-center h-[44px] border-purple-400 border-[3px] border-solid rounded-[50%]"
                    >
                      <Heading as="h6" className="!text-purple-400 tracking-[-0.64px] text-center">
                        C1
                      </Heading>
                    </a>
                    <a
                      href="#"
                      className="h-[44px] p-[11px] border-blue_gray-400 border-[3px] border-solid rounded-[21px]"
                    >
                      <Heading as="h6" className="!text-blue_gray-400 tracking-[-0.64px]">
                        C2
                      </Heading>
                    </a>
                  </div>
                </div>
                <Button
                  color="cyan_800"
                  size="4xl"
                  className="sm:px-5 tracking-[-0.64px] font-bold min-w-[132px] rounded-[22px]"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="p-[37px] sm:p-5 bg-gray-100" />
      </div>
    </>
  );
}
