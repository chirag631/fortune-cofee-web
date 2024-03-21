import React from "react";
import { Text, Img } from "./..";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function MenuMenu({
  enquiry = "Hot Brews",
  enquiryOne = "Cold Brews",
  enquiryTwo = "Zero-calorie drinks",
  enquiryThree = "Bakery",
  elixirsof = "Elixirs of Enlightenment - Hot Brews",
  description = (
    <>
      Warm, comforting brews that awaken the senses and
      <br />
      provide insights into life’s many wonders.
    </>
  ),
  icedcharms = "Iced Charms - Cold Brews",
  description1 = (
    <>
      Cool, refreshing beverages that offer a momentary
      <br />
      escape, transporting you to fateful adventures.
    </>
  ),
  cappuccino = "Cappuccino Chronicles",
  price = "₹140",
  price1 = "₹160",
  mysticalmocha = "Mystical Mocha",
  price2 = "₹160",
  price3 = "₹180",
  sageslatte = "Sage’s Latte",
  price4 = "₹140",
  price5 = "₹160",
  divineflat = "Divine Flat White",
  price6 = "₹140",
  price7 = "₹160",
  kismetsfrench = "Kismet’s French Vanilla Latte",
  price8 = "₹160",
  price9 = "₹180",
  healers = "Healer’s Hazelnut Cappuccino",
  price10 = "₹170",
  price11 = "₹190",
  enchantedhot = "Enchanted Hot Chocolate",
  price12 = "₹140",
  price13 = "₹160",
  insightlatte = "Insight Latte",
  fatesfrappe = "Fate’s Frappe",
  mysticaliced = "Mystical Iced Mocha",
  chocolate = "Chocolate Elixir",
  whimsicalice = "Whimsical Ice Tea (Lemon / Peach)",
  rizziced = "Rizz Iced Cappuccino",
  marvelmocha = "Marvel Mocha Choco Chip",
  ...props
}) {
  return (
    <Tabs
      {...props}
      selectedTabClassName="!text-gray-400 bg-teal-900 rounded-[32px]"
      selectedTabPanelClassName="relative tab-panel--selected"
    >
      <TabList className="flex self-start gap-[109px] p-5 md:gap-5 md:flex-wrap">
        <Tab className="ml-[41px] text-gray-400 uppercase text-lg font-medium">{enquiry}</Tab>
        <Tab className="text-gray-400 uppercase text-lg font-medium">{enquiryOne}</Tab>
        <Tab className="text-gray-400 uppercase text-lg font-medium">{enquiryTwo}</Tab>
        <Tab className="text-gray-400 uppercase text-lg font-medium">{enquiryThree}</Tab>
      </TabList>
      {[...Array(4)].map((_, index) => (
        <TabPanel key={`tab-panel${index}`} className="justify-center absolute">
          <div className="self-stretch w-full">
            <div>
              <div className="flex flex-col gap-11">
                <div className="flex md:flex-col w-[87%] md:w-full gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1">
                    <Text size="2xl" as="p" className="!text-teal-900 !font-ranade">
                      {elixirsof}
                    </Text>
                    <Text size="md" as="p" className="w-[91%] md:w-full !font-normal">
                      {description}
                    </Text>
                  </div>
                  <div className="flex flex-col w-[46%] md:w-full gap-2.5">
                    <Text size="2xl" as="p" className="!font-ranade">
                      {icedcharms}
                    </Text>
                    <Text size="md" as="p" className="!font-normal">
                      {description1}
                    </Text>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-end gap-4">
                    <div className="flex justify-between w-[30%] md:w-full mr-[374px] gap-5 md:mr-0">
                      <Text size="s" as="p">
                        Tumbler (R)
                      </Text>
                      <Text size="s" as="p">
                        Goblet (L)
                      </Text>
                    </div>
                    <div className="flex md:flex-col self-stretch justify-end gap-[35px]">
                      <div className="flex-1">
                        <div className="flex flex-col gap-[25px]">
                          <div className="flex justify-between gap-5">
                            <Text as="p" className="self-end">
                              {cappuccino}
                            </Text>
                            <div className="flex self-start justify-between w-[25%] gap-5">
                              <Text as="p">{price}</Text>
                              <Text as="p">{price1}</Text>
                            </div>
                          </div>
                          <div className="flex justify-between gap-5">
                            <Text as="p" className="self-end">
                              {mysticalmocha}
                            </Text>
                            <div className="flex self-start justify-between w-[25%] gap-5">
                              <Text as="p">{price2}</Text>
                              <Text as="p">{price3}</Text>
                            </div>
                          </div>
                          <div className="flex justify-between gap-5">
                            <Text as="p" className="self-end">
                              {sageslatte}
                            </Text>
                            <div className="flex self-start justify-between w-[25%] gap-5">
                              <Text as="p">{price4}</Text>
                              <Text as="p">{price5}</Text>
                            </div>
                          </div>
                          <div className="flex justify-between gap-5">
                            <Text as="p">{divineflat}</Text>
                            <div className="flex justify-between w-[25%] gap-5">
                              <Text as="p">{price6}</Text>
                              <Text as="p">{price7}</Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col justify-between gap-5">
                            <Text as="p">{kismetsfrench}</Text>
                            <div className="flex justify-between w-[25%] sm:w-full gap-5">
                              <Text as="p">{price8}</Text>
                              <Text as="p">{price9}</Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col justify-between gap-5">
                            <Text as="p" className="self-end">
                              {healers}
                            </Text>
                            <div className="flex self-start justify-between w-[25%] sm:w-full gap-5">
                              <Text as="p">{price10}</Text>
                              <Text as="p">{price11}</Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col justify-between gap-5">
                            <Text as="p">{enchantedhot}</Text>
                            <div className="flex justify-between w-[25%] sm:w-full gap-5">
                              <Text as="p">{price12}</Text>
                              <Text as="p">{price13}</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[316px] w-[36%] relative">
                        <Text as="p" className="left-0 top-[16%] m-auto absolute">
                          {insightlatte}
                        </Text>
                        <Text as="p" className="left-0 top-[31%] m-auto absolute">
                          {fatesfrappe}
                        </Text>
                        <Text as="p" className="w-max left-0 bottom-0 top-0 my-auto absolute">
                          {mysticaliced}
                        </Text>
                        <Text as="p" className="bottom-[31%] left-0 m-auto absolute">
                          {chocolate}
                        </Text>
                        <Text as="p" className="bottom-[16%] left-0 m-auto absolute">
                          {whimsicalice}
                        </Text>
                        <div className="flex flex-col justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex items-start">
                            <Text as="p" className="z-[1]">
                              {rizziced}
                            </Text>
                            <div className="ml-[-167px] flex-1">
                              <div>
                                <Img
                                  src="images/img_image_2.png"
                                  alt="imagetwo_one"
                                  className="h-[316px] w-full md:h-auto object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <Text as="p" className="mt-[-22px]">
                            {marvelmocha}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}
