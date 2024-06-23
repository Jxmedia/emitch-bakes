import * as React from "react"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Avatar from "../images/avatar-polka-nobg.png"
import LogoText from "../images/emitch-bakes.png"

const IndexPage = () => (
  <>
    <div class="font-primary relative overflow-hidden bg-[#ffc5f7]">
      <div class="relative pb-16 sm:pb-20">
        <main class="mx-auto max-w-7xl px-4 px-6">
          <div class="flex justify-center items-end">
            <div class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none items-bottom">
              <div class="relative mx-auto w-full lg:max-w-md">
                <img class="w-full" src={Avatar} alt="" />
              </div>
            </div>

            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6">
              <img class="w-3/4 mx-auto" src={LogoText} alt="" />
              <p class="font-primary pt-5 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl">
                homemade cookies{" "}
                <span class="mt-2 block">shipped free nationwide</span>
              </p>
            </div>
          </div>
        </main>
      </div>
      <div class="border-t-4 border-black max-w-7xl border-dashed mx-auto" />
      <div class="relative pb-16 sm:pb-24 lg:pb-32">
        <main class="mx-auto max-w-7xl px-4 px-6">
          <div class="">
            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6">
              <p class="font-primary pt-5 text-base font-bold text-gray-900 sm:mt-14 sm:text-xl lg:text-lg xl:text-5xl">
                order by the dozen
              </p>
            </div>
            <div class="mt-14 flex justify-center">
              <a href="#" class="relative hover:opacity-70">
                <div class="relative w-full overflow-hidden rounded-3xl bg-gray-900 p-1">
                  <img
                    src="https://cdn.cosmicjs.com/8f043fe0-30bc-11ef-adb1-8b946b3a80e4-choc.png"
                    alt="Chocolate dozen"
                    class="rounded-3xl h-full w-full object-cover object-center"
                  />
                </div>

                <div class="drop-shadow-glow absolute inset-x-0 top-5 right-6 flex items-end justify-end overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <div class="absolute ml-[20px] bottom-5">
                  <div class="">
                    <p class="drop-shadow-glow flex items-center relative text-xl font-semibold text-gray-900 bg-[#ffc5f7] rounded-2xl py-4 pl-28 pr-28">
                      chocolate chip
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" class="ml-4 mr-4 relative hover:opacity-70">
                <div class="relative w-full overflow-hidden rounded-3xl bg-gray-900 p-1">
                  <img
                    src="https://cdn.cosmicjs.com/8f1b2340-30bc-11ef-adb1-8b946b3a80e4-choc-less.png"
                    alt="Chocolate chipless dozen"
                    class="rounded-3xl h-full w-full object-cover object-center"
                  />
                </div>

                <div class="drop-shadow-glow absolute inset-x-0 top-5 right-6 flex items-end justify-end overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <div class="absolute ml-[17px] bottom-5">
                  <div class="">
                    <p class="drop-shadow-glow flex items-center relative text-xl font-semibold text-gray-900 bg-[#ffc5f7] rounded-2xl py-4 pl-24 pr-24">
                      chocolate chipless
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" class="relative hover:opacity-70">
                <div class="relative w-full overflow-hidden rounded-3xl bg-gray-900 p-1">
                  <img
                    src="https://cdn.cosmicjs.com/8f23d5d0-30bc-11ef-adb1-8b946b3a80e4-sprinkles.png"
                    alt="Chocolate dozen"
                    class="rounded-3xl h-full w-full object-cover object-center"
                  />
                </div>

                <div class="drop-shadow-glow absolute inset-x-0 top-5 right-6 flex items-end justify-end overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <div class="absolute ml-[20px] bottom-5">
                  <div class="">
                    <p class="drop-shadow-glow flex items-center relative text-xl font-semibold text-gray-900 bg-[#ffc5f7] rounded-2xl py-4 pl-[8.5rem] pr-[8.5rem]">
                      sprinkles
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="">
            <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6">
              <p class="font-primary pt-5 text-base font-bold text-gray-900 sm:mt-14 sm:text-xl lg:text-lg xl:text-5xl">
                eMix & match
              </p>
            </div>
            <div class="mt-14 flex justify-center">
              <a href="#" class="w-1/3 relative">
                <div class="relative w-full overflow-hidden rounded-3xl bg-gray-900 p-1">
                  <img
                    src="https://cdn.cosmicjs.com/0f699f90-3180-11ef-adb1-8b946b3a80e4-6x6.png"
                    alt="6x6"
                    class="rounded-3xl h-full w-full object-cover object-center"
                  />
                </div>

                <div class="drop-shadow-glow absolute inset-x-0 top-5 right-6 flex items-end justify-end overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <div class="absolute ml-[34px] bottom-5">
                  <div class="">
                    <Popover className="relative">
                      <PopoverButton className="hover:opacity-80 drop-shadow-glow flex items-center relative text-xl font-semibold text-gray-900 bg-[#ffc5f7] rounded-2xl py-4 pl-12 pr-12">
                        <span>6x6 choose your flavors</span>
                        <ChevronDownIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute left-1/2 bottom-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div className="z-50 w-screen max-w-sm flex-auto rounded-3xl bg-white p-3 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                          <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                            <a href="#" className="font-semibold text-gray-900">
                              chocolate chip/chocolate chipless
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                          <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                            <a href="#" className="font-semibold text-gray-900">
                              chocolate chip/sprinkles
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                          <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                            <a href="#" className="font-semibold text-gray-900">
                              chocolate chipless/sprinkles
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  </div>
                </div>
              </a>
              <a href="#" class="ml-8 w-1/3 relative">
                <div class="relative w-full overflow-hidden rounded-3xl bg-gray-900 p-1">
                  <img
                    src="https://cdn.cosmicjs.com/0f644860-3180-11ef-adb1-8b946b3a80e4-4x3.png"
                    alt="4x3"
                    class="rounded-3xl h-full w-full object-cover object-center"
                  />
                </div>

                <div class="drop-shadow-glow absolute inset-x-0 top-5 right-6 flex items-end justify-end overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <div class="absolute ml-[34px] bottom-5">
                  <div class="">
                    <Popover className="relative">
                      <PopoverButton className="hover:opacity-80 drop-shadow-glow flex items-center relative text-xl font-semibold text-gray-900 bg-[#ffc5f7] rounded-2xl py-4 pl-12 pr-12">
                        <span>4x3 choose your flavors</span>
                        <ChevronDownIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute left-1/2 bottom-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div className="z-50 w-screen max-w-sm flex-auto rounded-3xl bg-white p-3 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                          <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                            <a href="#" className="font-semibold text-gray-900">
                              chocolate chip/chocolate chipless/sprinkles
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="p-6 border-4 border-gray-900 relative bg-[#ffeed7] text-gray-900 rounded-3xl sm:mt-28">
            <p class="font-primary pt-5 text-base font-bold sm:text-xl lg:text-lg xl:text-5xl ">
              how it started
            </p>
            <p class="mt-6 leading-8">
              Hi 😊 I’m Emily aka eMitch. A few years ago, I decided to perfect
              my chocolate chip cookie recipe. It ended up being a big hit
              amongst my friends & family. In 2020, I started selling my
              signature chocolate chip cookies at my friend’s sub shop here in
              Tampa, “Mickey’s Subs”. (You all should try it if you’re in the
              Bay Area, the sandwiches are to die for). In 2021, eMitch bakes
              was nominatted for Best of the Bay. And in 2024, I decided to take
              my talents to the web, creating: eMitch bakes online bakery! The
              cookies are all my own recipe and make for great gifts. I look
              forward to feeding people all over the country! Thank you for
              stopping by and please make sure to tag us on the web
              @emitchbakes. I would love to hear your thoughts.{" "}
              <span class="font-bold text-xl">💋💕😘- eMitch</span>
            </p>
          </div>
          <p class="text-center mt-28 text-gray-500 text-sm">
            All recipes are eMitch bakes original and have been thoroughly taste
            tested by all my friends and family. Thank you all, by the way 😊{" "}
          </p>
          <div class="border-t-2 mt-14 max-w-5xl mx-auto border-gray-900" />
          <p class="text-center mt-16 text-gray-500 text-lg">
            ©2024 eMitch Bakes. All rights reserved. Powered By{" "}
            <a
              href="https://thejxmediagroup.com/"
              target="_blank"
              class="hover:underline"
            >
              Jxmedia
            </a>{" "}
            | Terms | Privacy
          </p>
        </main>
      </div>
    </div>
  </>
)

export default IndexPage
