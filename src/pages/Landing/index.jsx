import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import SpalshFourServicing from "../../components/SpalshFourServicing";
import SpalshFourUsp from "../../components/SpalshFourUsp";
import SpalshFourValue from "../../components/SpalshFourValue";
import Header from "components/Header";
import CoffiePods from "components/CoffiePods";
import FollowPage from "components/FollowPage";
import Footer from "components/Footer";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Fortune - Coffee</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <div className="bg-gray-900_01">
          <div>
            <Header className="p-5 bg-white-A700" />
            <div>
              <div>
                <div className="h-[799px] z-[1] relative">
                  <Img
                    src="images/img_frame_animation.svg"
                    alt="image"
                    className="justify-center h-[799px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex sm:flex-col justify-between items-center w-[53%] right-[4%] top-[4%] gap-5 m-auto absolute">
                    <div className="flex self-end justify-between w-[31%] sm:w-full mb-[7px] gap-5 sm:p-5">
                      <Text size="md" as="p" className="!text-teal-900 !font-ranade">
                        COFFEE PODS
                      </Text>
                      <Text size="md" as="p" className="!text-teal-900 !font-ranade">
                        ABOUT US
                      </Text>
                    </div>
                    <Button
                      shape="round"
                      leftIcon={<Img src="images/img_icon_iconoir.svg" alt="icon / iconoir / page" />}
                      className="gap-[5px] sm:px-5 min-w-[216px]"
                    >
                      SEE DIGITAL MENU
                    </Button>
                  </div>
                </div>
                <div id="home" className="mt-[-799px]">
                  <div>
                    <div className="p-[26px] sm:p-5 bg-gradient1">
                      <div className="flex flex-col items-center w-full mt-[18px] mx-auto max-w-[1392px]">
                        <div className="flex md:flex-col self-stretch justify-between items-start gap-5">
                          <div className="flex mt-[136px] pr-3 py-3 md:p-5">
                            <div className="flex mt-[45px] mb-[116px]">
                              <Text size="5xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                                Brewing your
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-center w-[48%] md:w-full md:p-5">
                            <div className="h-[620px] w-full relative">
                              <Img
                                src="images/img_symbol.svg"
                                alt="symbol_one"
                                className="h-[614px] w-[614px] ml-[5px] left-[1%] bottom-0 top-0 my-auto absolute"
                              />
                              <Img
                                src="images/img_cup.png"
                                alt="cup_one"
                                className="justify-center h-[620px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                            </div>
                          </div>
                        </div>
                        <Text size="4xl" as="p" className="mt-[158px] !text-gray-400 !font-ranade uppercase">
                          Brand Story
                        </Text>
                        <div className="flex md:flex-col justify-between w-[89%] md:w-full mt-[65px] gap-5">
                          <Img src="images/img_glass.svg" alt="glass_one" className="h-[180px] w-[180px]" />
                          <Img src="images/img_glass.svg" alt="lotus_one" className="h-[180px] w-[180px]" />
                          <Img src="images/img_glass.svg" alt="jade_one" className="h-[180px] w-[180px]" />
                          <Img src="images/img_glass.svg" alt="fish_one" className="h-[180px] w-[180px]" />
                        </div>
                        <div className="flex justify-between w-[57%] md:w-full mt-9 gap-5">
                          <Text as="p" className="!text-white-A700 text-center !font-normal">
                            Lotus Flower
                          </Text>
                          <Text as="p" className="!text-white-A700 text-center !font-normal">
                            Jade Stone
                          </Text>
                          <Text as="p" className="!text-white-A700 text-center !font-normal">
                            Koi Fish
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full mt-[-51px] gap-[30px] mx-auto md:p-5 z-[1] max-w-[1232px]">
                      <Text
                        as="p"
                        className="w-[7%] md:w-full ml-[49px] md:ml-0 !text-white-A700 text-center !font-normal leading-[26px]"
                      >
                        <>
                          Mystic
                          <br />
                          Ball Glass
                        </>
                      </Text>
                      <Text size="2xl" as="p" className="!text-white-A700 text-justify !font-normal leading-[26px]">
                        <>
                          Fortune Coffee gets its name from a simple yet profound experience. It began with a fortune
                          cookie on a date—a simple message that read &quot;marry your match.&quot; Fast forward a few
                          months, and a wedding turned that message into a shared memory. It&#39;s this kind of everyday
                          magic that our brand captures.
                          <br />
                          <br />
                          The logo combines symbols of good luck: mystic ball mirrors the unseen forces that guide us
                          towards our destinies, a lotus flower for beauty in the everyday, a jade stone for a
                          harmonious life, and a koi fish for the strength to keep going. Together, they&#39;re not just
                          decorations; they&#39;re a nod to the little moments of serendipity we encounter every day.
                          It&#39;s about the personal signs we choose to see and the connections we make. Every cup
                          serves as a reminder that sometimes, the universe does have something to say. So, grab a cup
                          of Fortune Coffee and listen….
                        </>
                      </Text>
                    </div>
                  </div>
                  <CoffiePods />
                </div>
              </div>
            </div>
            <div className="my-10">
              <Text size="4xl" as="p" className="!text-gray-400 py-5 text-center !font-ranade uppercase">
                Strategic Levers
              </Text>
              <div className="flex md:flex-col w-full mt-1 gap-[50px] mx-auto md:p-5 max-w-[1390px]">
                <SpalshFourUsp className="flex flex-col w-full" />
                <SpalshFourValue className="flex flex-col w-full" />
                <SpalshFourServicing className="flex flex-col w-full" />
              </div>
            </div>
            <div className="my-5">

            <FollowPage />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
