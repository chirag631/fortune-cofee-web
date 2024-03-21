import { Img, Text } from "components";

const CoffiePods = () => {
    return (
        <div id="coffie-pods" className="mt-[70px] z-[1]">
                    <div className="flex md:flex-col justify-center items-center bg-teal-900">
                      <Img
                        src="images/img_mask.png"
                        alt="mask_one"
                        className="w-[30%] md:w-full md:h-auto object-cover"
                      />
                      <div className="flex flex-col self-end items-center mb-[57px] gap-[63px] md:p-5 sm:gap-[31px] flex-1">
                        <div className="flex flex-col self-stretch items-center pl-14 pr-[59px] gap-6 py-[59px] md:p-5 bg-teal-900">
                          <Text
                            size="4xl"
                            as="p"
                            className="!text-gray-400 !font-ranade uppercase"
                          >
                            Coffee Pods
                          </Text>
                          <Text
                            size="2xl"
                            as="p"
                            className="w-[55%] md:w-full mb-5 !text-white-A700 text-justify !font-normal leading-[26px]"
                          >
                            <>
                              Fortune Coffee Pods take their cue from the self-sufficiency of an aircraft&#39;s
                              unit—compact, efficient, and a haven amidst the daily grind of office life. They&#39;re
                              social spots in an age where screens often replace handshakes. At these pods, a quick
                              coffee can turn into an unexpected conversation, turning new faces into friends, and
                              giving familiar ones more stories to share.
                              <br />
                              <br />
                              The setup is simple: come for the coffee, stay for the chat, with no pressure to linger
                              any longer than you want. It&#39;s a casual spot that invites you to pause, chat, and
                              connect without the wait you&#39;d find at a regular café. Speedy service for the busy
                              bees looking for a caffeine fix in between meetings, but with the space to stick around if
                              that&#39;s where the moment takes you.
                              <br />
                              <br />
                              What Fortune Coffee is brewing up with its Coffee Pods isn&#39;t just about drinking
                              coffee—it&#39;s about redefining coffee breaks.
                            </>
                          </Text>
                        </div>

                      </div>
                    </div>
                  </div>
    )
}

export default CoffiePods;