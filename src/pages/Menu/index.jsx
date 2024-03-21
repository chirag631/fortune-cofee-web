import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import Header from "../../components/Header";
import MenuMenu from "../../components/MenuMenu";

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>Chirag's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[979px] w-full relative">
        <div className="w-full h-full pb-[884px] left-0 bottom-0 right-0 top-0 m-auto md:pb-5 bg-gray-900_01 absolute">
          <Header className="p-5 bg-white-A700" />
        </div>
        <div className="w-full pt-10 pl-10 bottom-0 right-0 left-0 m-auto sm:pt-5 sm:pl-5 bg-gray-100 absolute">
          <div className="w-full max-w-[1265px]">
            <div className="flex flex-col items-end">
              <div className="flex self-stretch justify-between items-center mr-[266px] gap-5 md:mr-0">
                <Text size="4xl" as="p" className="!text-teal-900 !font-ranade uppercase">
                  Menu
                </Text>
                <Img src="images/img_x.svg" alt="x_one" className="h-[48px] w-[48px]" />
              </div>
              <div className="self-stretch mt-[41px]">
                <div className="flex md:flex-col justify-end items-center overflow-auto">
                  <div className="flex md:flex-col justify-end items-start w-[91%] md:w-full md:p-5">
                    <MenuMenu
                      className="flex flex-col gap-[34px] flex-1"
                      selectedTabClassName=""
                      selectedTabPanelClassName="tab-panel--selected"
                    />
                    <div className="flex flex-col items-center w-[32%] md:w-full mt-[98px] ml-[-122px] gap-2.5 md:ml-0 z-[1]">
                      <Text size="2xl" as="p" className="!font-ranade">
                        Mystical Mirages: (Zero calorie drinks){" "}
                      </Text>
                      <Text size="md" as="p" className="!font-normal">
                        <>
                          Pure, light concoctions that promise flavor without fate’s
                          <br />
                          added weight, guiding you on a guilt-free journey.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-row self-end w-[55%] md:w-full gap-8 md:p-5">
                    <div className="flex flex-col items-end w-[20%] gap-[27px]">
                      <div className="flex self-stretch justify-between mr-[3px] gap-5 md:mr-0">
                        <Text as="p">₹160</Text>
                        <Text as="p">₹180</Text>
                      </div>
                      <div className="flex self-stretch justify-between mr-[3px] gap-5 md:mr-0">
                        <Text as="p">₹175</Text>
                        <Text as="p">₹195</Text>
                      </div>
                      <div className="flex self-stretch justify-between mr-[3px] gap-5 md:mr-0">
                        <Text as="p">₹160</Text>
                        <Text as="p">₹180</Text>
                      </div>
                      <div className="flex self-stretch justify-between gap-5">
                        <Text as="p">₹180</Text>
                        <Text as="p">₹200</Text>
                      </div>
                      <div className="flex self-stretch justify-between mr-[3px] gap-5 md:mr-0">
                        <Text as="p">₹160</Text>
                        <Text as="p">₹180</Text>
                      </div>
                      <div className="flex justify-between w-[89%] md:w-full mr-[3px] gap-5 md:mr-0">
                        <Text as="p">-</Text>
                        <Text as="p">₹130</Text>
                      </div>
                      <div className="flex self-stretch justify-between mr-[3px] gap-5 md:mr-0">
                        <Text as="p">₹190</Text>
                        <Text as="p">₹210</Text>
                      </div>
                    </div>
                    <div className="flex justify-end pb-[98px] pl-[98px] md:pb-5 md:pl-5 flex-1">
                      <div className="flex flex-col w-[30%] md:w-full gap-[27px]">
                        <div className="flex justify-between gap-5">
                          <Text as="p">₹160</Text>
                          <Text as="p">₹180</Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p">₹175</Text>
                          <Text as="p">₹195</Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p">₹160</Text>
                          <Text as="p">₹180</Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p">₹180</Text>
                          <Text as="p">₹200</Text>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p">₹160</Text>
                          <Text as="p">₹180</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="w-[33%] mt-[83px] mr-[247px] md:mr-0 object-cover"
              />
              <Img
                src="images/img_image_1_1x311.png"
                alt="imageone_three"
                className="w-[31%] mt-[305px] mr-[270px] md:mr-0 object-cover"
              />
              <Img
                src="images/img_image_1_1x334.png"
                alt="imageone_five"
                className="w-[33%] mt-[704px] mr-[247px] md:mr-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
