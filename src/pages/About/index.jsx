import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Chirag's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_01">
        <Header className="p-5 bg-white-A700" />
        <div className="flex flex-col items-center">
          <div className="self-stretch h-[600px] bg-teal-900 relative">
            <Img
              src="images/img_image_8.png"
              alt="imageeight_one"
              className="justify-center h-[599px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <Text
              size="5xl"
              as="p"
              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-400 !font-ranade uppercase text-shadow-ts absolute"
            >
              About Us
            </Text>
          </div>
          <Text size="4xl" as="p" className="w-[92%] md:w-full mt-16 !text-gray-400 !font-ranade !font-normal">
            We are dedicated to serving the finest brews for true coffee enthusiasts
          </Text>
          <Text size="2xl" as="p" className="w-[92%] md:w-full mt-[34px] !text-gray-400 text-justify italic">
            “We are coffee nerds who don&#39;t exaggerate about their Destiny’s Dark Roast! Time, temperature, and
            technique needs to be on point to make the best cup of Deja Brew”
          </Text>
          <Text size="2xl" as="p" className="w-[92%] md:w-full mt-[33px] !text-white-A700 text-justify !font-normal">
            <>
              Our journey begins with a deep reverence for the coffee bean, and an unwavering commitment to delivering
              only the finest brews. Our coffee selection is meticulously curated, with beans sourced from the finest
              estates around the world. We engage in fair and direct trade practices, ensuring that every hand in the
              process, from the farmer to the roaster, is valued and rewarded. Precision is in our genes, and in our
              beans. 
              <br />
              <br />
              At Fortune Coffee, every sip comes with a promise – not just of unparalleled quality, but of a personal
              journey. We invite our customers to savor the rich, complex flavors of our brews, while unravelling the
              hidden signs in their fortunes. Join us in this extraordinary coffee adventure, where every cup is a
              discovery, and every fortune a new beginning. 
            </>
          </Text>
          <div className="flex md:flex-col justify-between items-center w-full mt-[72px] gap-5 mx-auto md:p-5 max-w-[1392px]">
            <div className="flex flex-col w-[50%] md:w-full gap-6">
              <div className="flex">
                <Text size="4xl" as="p" className="!text-gray-400 !font-ranade uppercase">
                  Founder’s Story
                </Text>
              </div>
              <Text size="xl" as="p" className="!text-white-A700 leading-[26px]">
                <>
                  Kruti, is the Founder & CEO of Fortune Coffee. Her passion for coffee is matched only by her zeal to
                  empower women. She has been recognised in Pitch Marketing 30 under 30, 2022 list among the cream de la
                  cream of India&#39;s marketing industry. 
                  <br />
                  <br />
                  Her academic journey, marked by a masterful blend of marketing and business acumen, laid the
                  foundation for Fortune Coffee. But it&#39;s her personal journey, filled with resilience, innovation,
                  and a deep-seated desire to contribute to a greater cause, that truly defines her motivation for
                  building her own brand.
                </>
              </Text>
            </div>
            <div className="h-[625px] w-[46%] relative">
              <Img
                src="images/img_vector.svg"
                alt="vector_one"
                className="h-[472px] bottom-[7%] right-0 left-0 m-auto absolute"
              />
              <Img
                src="images/img_img.png"
                alt="img_one"
                className="justify-center h-[625px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[45px]"
              />
            </div>
          </div>
          <div className="self-stretch h-[463px] mt-8 pt-[27px] pl-[27px] sm:pt-5 sm:pl-5 relative">
            <div className="flex md:flex-col justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Text
                size="2xl"
                as="p"
                className="self-end w-[41%] md:w-full mb-[109px] !text-white-A700 !font-normal z-[1]"
              >
                Walk into our world of fortune. Latest launches, new coffee pods, exciting offers- unpacking magic and
                more. Tag us and stand a chance at getting featured on our page!
              </Text>
              <Img
                src="images/img_symbol_gray_400_01.svg"
                alt="symbol_one"
                className="h-[436px] md:w-full md:h-auto ml-[-32px] md:ml-0"
              />
            </div>
            <Text
              size="4xl"
              as="p"
              className="w-[51%] left-[4%] top-[24%] m-auto !text-teal-900 !font-ranadevariable !font-light absolute"
            >
              <span className="text-white-A700 text-2xl">
                <>
                  Follow us on
                  <br />
                </>
              </span>
              <span className="text-gray-400 font-medium">@fortunecoffee.co</span>
            </Text>
          </div>
        </div>
        <footer className="p-[37px] sm:p-5 bg-teal-900">
          <div className="w-full mb-2 mx-auto max-w-[1396px]">
            <div className="flex flex-col gap-[15px]">
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="flex sm:flex-col justify-between items-center w-[44%] md:w-full gap-5 md:p-5">
                  <Img src="images/img_logo_gray_400.svg" alt="logo_three" className="h-[52px] sm:w-full sm:h-auto" />
                  <div className="flex flex-col self-end items-start gap-2.5">
                    <Text size="xs" as="p" className="!text-indigo-50_7e tracking-[0.40px] uppercase opacity-0.4">
                      Address
                    </Text>
                    <Text size="s" as="p" className="!text-indigo-50 !font-normal">
                      EEPS-01, Emerald Estate , Sector 65, Gurugram
                    </Text>
                  </div>
                </div>
                <div className="flex self-end justify-between w-[22%] md:w-full gap-5 md:p-5">
                  <Button color="white_A700" shape="round" className="sm:px-5 min-w-[133px]">
                    Contact Us
                  </Button>
                  <Button color="white_A700" shape="round" className="min-w-[133px]">
                    Be a partner
                  </Button>
                </div>
              </div>
              <div className="h-px bg-gray-400" />
              <div className="flex justify-between gap-5">
                <Text size="xs" as="p" className="self-end !text-gray-400">
                  © 2024 — Copyright
                </Text>
                <div className="flex self-end justify-between w-[13%] gap-5">
                  <Text size="xs" as="p" className="self-start !text-white-A700">
                    Fortune Coffee Pvt. Ltd.
                  </Text>
                  <a href="#" className="self-end">
                    <Text size="xs" as="p" className="!text-white-A700">
                      Privacy
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
