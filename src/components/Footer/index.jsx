import { Img, Text } from "components";
import { Link } from "react-router-dom";

const Footer = () =>{
    return (
        <div className="p-[37px] sm:p-5 bg-teal-900">
              <div className="flex flex-col mb-2 gap-[15px]">
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
                    <div className="h-[40px] w-[43%] bg-white-A700 relative rounded-[20px]">
                      <Link
                        to="/contact-us"
                        className="flex justify-center items-center h-[40px] w-max left-0 bottom-0 right-0 top-0 px-[23px] py-2.5 m-auto sm:px-5 bg-white-A700 absolute rounded-[20px]"
                      >
                        <Text size="md" as="p" className="!text-teal-900">
                          Contact Us
                        </Text>
                      </Link>
                    </div>
                    <div className="h-[40px] w-[43%] bg-white-A700 relative rounded-[20px]">
                      <div className="flex justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-2 m-auto bg-white-A700 absolute rounded-[20px]">
                        <Text size="md" as="p" className="self-end mt-0.5 !text-teal-900">
                          Be a partner
                        </Text>
                      </div>
                    </div>
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
    )
}

export default Footer;