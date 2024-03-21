import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, TextArea, Input } from "../../components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function ContactusPage() {
  return (
    <>
      <Helmet>
        <title>Chirag's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div className="self-end bg-gray-900_01">
          <div>
            <Header className="p-5 bg-white-A700" />
            <div className="h-[full] relative">
             
              <div className="w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex justify-center p-[39px] sm:p-5 z-[1] bg-gray-100">
                  <div className="flex justify-center w-[54%] md:w-full mb-[199px]">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex self-stretch justify-between items-center gap-5">
                        <Link to="/">
                          <Text size="4xl" as="p" className="!text-teal-900 !font-ranade uppercase">
                            CONTACT US
                          </Text>
                        </Link>
                        <a href="/">
                          <Img src="images/img_x.svg" alt="x_one" className="h-[48px] w-[48px]" />
                          </a>
                      </div>
                      <Text size="md" as="p" className="self-start mt-5">
                        <>
                          We value your feedback. Whether you have a comment, question, or inquiry, please feel free to
                          fill out the form below.
                        </>
                      </Text>
                      <div className="flex md:flex-col self-stretch justify-between mt-[39px] gap-5">
                        <div className="flex flex-col w-[47%] md:w-full gap-[9px] md:p-5">
                          <Text size="s" as="p">
                            Name
                          </Text>
                          <Input shape="round" name="name" />
                        </div>
                        <div className="flex flex-col w-[47%] md:w-full gap-[9px] md:p-5">
                          <Text size="s" as="p">
                            Email
                          </Text>
                          <Input shape="round" name="email" />
                        </div>
                      </div>
                      <div className="flex flex-col self-stretch mt-[41px] gap-2">
                        <Text size="s" as="p">
                          Message
                        </Text>
                        <TextArea shape="round" name="textarea" />
                      </div>
                      <Button size="sm" className="mt-11 sm:px-5 !text-gray-400 uppercase min-w-[370px] rounded-[32px]">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
