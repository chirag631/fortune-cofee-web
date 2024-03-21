import React from "react";
import { Button, Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col self-start justify-center items-center w-full mb-[3px] mx-auto max-w-[1392px]">
        <Img src="images/img_logo.svg" alt="logo_one" className="h-[52px] md:w-full md:h-auto" />
        <div className="flex justify-between mb-[11px] ml-[286px] gap-5 md:p-5 md:ml-0 flex-1">
          <a href="/#home">
            <Text size="md" as="p" className="!text-teal-900 !font-ranade">
              HOME
            </Text>
          </a>
          <a href="/#coffie-pods">
            <Text size="md" as="p" className="!text-teal-900 !font-ranade">
              COFFEE PODS
            </Text>
          </a>
          <a href="/about">
            <Text size="md" as="p" className="!text-teal-900 !font-ranade">
              ABOUT US
            </Text>
          </a>
        </div>
        <div className="flex sm:flex-col justify-center items-center mb-1 ml-[317px] gap-[5px] p-[9px] md:p-5 md:ml-0 bg-teal-900 rounded-[20px]">
          <Img src="images/img_icon_iconoir.svg" alt="iconiconoir_one" className="h-[18px] w-[18px]" />
          <Text size="md" as="p" className="self-start !text-white-A700">
            SEE DIGITAL MENU
          </Text>
        </div>
      </div>
    </header>
  );
}
