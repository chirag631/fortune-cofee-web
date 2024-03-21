import { Img, Text } from "components";

const FollowPage = () => {
    return (
        <div className="w-full  mx-auto md:p-5 max-w-[1452px]">
        <div className="flex md:flex-col justify-center items-start">
          <div className="flex flex-col w-[60%] md:w-full mt-[84px] gap-8 z-[1]">
            <Text size="4xl" as="p" className="!text-teal-900 !font-ranadevariable !font-light">
              <span className="text-white-A700 text-2xl">
                <>
                  Follow us on
                  <br />
                </>
              </span>
              <span className="text-gray-400 font-medium">@fortunecoffee.co</span>
            </Text>
            <Text size="2xl" as="p" className="w-[82%] md:w-full !text-white-A700 !font-normal">
              Walk into our world of fortune. Latest launches, new coffee pods, exciting offers- unpacking
              magic and more. Tag us and stand a chance at getting featured on our page!
            </Text>
          </div>
          <Img
            src="images/img_symbol.svg"
            alt="symbol_five"
            className="h-[436px] md:w-full md:h-auto ml-[-164px] md:ml-0"
          />
        </div>
      </div>
    )
}

export default FollowPage;