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
          <div class="lg:flex lg:justify-center items-end">
            <div class="relative sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none items-bottom">
              <div class="relative mx-auto w-full lg:max-w-md">
                <img class="w-full" src={Avatar} alt="" />
              </div>
            </div>

            <div class="text-center md:mx-auto md:max-w-2xl lg:col-span-6">
              <img class="mt-10 sm:mt-0 w-3/4 mx-auto" src={LogoText} alt="" />
              <p class="font-primary pt-5 text-2xl text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-4xl">
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
            <div class="text-center md:mx-auto md:max-w-2xl lg:col-span-6">
              <p class="font-primary pt-5 mt-8 text-2xl font-bold text-gray-900 sm:mt-14 sm:text-5xl">
                order by the dozen
              </p>
            </div>

            <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article class="border-4 border-gray-900 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <div class="drop-shadow-glow absolute top-5 right-4 overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <img
                  src="https://cdn.cosmicjs.com/8f043fe0-30bc-11ef-adb1-8b946b3a80e4-choc.png"
                  alt="Chocolate dozen"
                  class="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div class="-ml-4 flex items-center gap-x-4"></div>
                </div>
                <h3 class="drop-shadow-glow bg-[#ffc5f7] rounded-2xl py-4 text-center mt-3 text-lg font-semibold leading-6 text-gray-900 hover:opacity-80">
                  <a href="https://buy.stripe.com/3cs8yg29ggtA2kw6ou">
                    <span class="absolute inset-0 "></span>
                    chocolate chip
                  </a>
                </h3>
              </article>
              <article class="border-4 border-gray-900 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <div class="drop-shadow-glow absolute top-5 right-4 overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <img
                  src="https://cdn.cosmicjs.com/8f1b2340-30bc-11ef-adb1-8b946b3a80e4-choc-less.png"
                  alt="Chocolate chipless dozen"
                  class="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div class="-ml-4 flex items-center gap-x-4"></div>
                </div>
                <h3 class="drop-shadow-glow bg-[#ffc5f7] rounded-2xl py-4 text-center mt-3 text-lg font-semibold leading-6 text-gray-900 hover:opacity-80">
                  <a href="https://buy.stripe.com/dR6g0I9BI3GOe3e28d">
                    <span class="absolute inset-0 "></span>
                    chocolate chipless
                  </a>
                </h3>
              </article>
              <article class="border-4 border-gray-900 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <div class="drop-shadow-glow absolute top-5 right-4 overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <img
                  src="https://cdn.cosmicjs.com/8f23d5d0-30bc-11ef-adb1-8b946b3a80e4-sprinkles.png"
                  alt="Sprinkles dozen"
                  class="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div class="-ml-4 flex items-center gap-x-4"></div>
                </div>
                <h3 class="drop-shadow-glow bg-[#ffc5f7] rounded-2xl py-4 text-center mt-3 text-lg font-semibold leading-6 text-gray-900 hover:opacity-80">
                  <a href="https://buy.stripe.com/8wMcOw9BIa5c0coaEI">
                    <span class="absolute inset-0 "></span>
                    sprinkles
                  </a>
                </h3>
              </article>
            </div>
          </div>

          <div class="">
            <div class="text-center md:mx-auto md:max-w-2xl lg:col-span-6">
              <p class="font-primary pt-5 mt-8 text-2xl font-bold text-gray-900 sm:mt-14 sm:text-5xl">
                eMix & match
              </p>
            </div>

            <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-4xl lg:mx-auto lg:grid-cols-2">
              <article class="border-4 border-gray-900 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <div class="drop-shadow-glow absolute top-5 right-4 overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <img
                  src="https://cdn.cosmicjs.com/0f699f90-3180-11ef-adb1-8b946b3a80e4-6x6.png"
                  alt="6x6"
                  class="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div class="-ml-4 flex items-center gap-x-4"></div>
                </div>
                <h3 class="drop-shadow-glow bg-[#ffc5f7] rounded-2xl py-4 text-center mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <Popover className="relative">
                    <PopoverButton className="inline-flex hover:opacity-80 hover:underline">
                      <span>6x6 choose your flavors</span>
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="opacity-100 absolute left-1/2 bottom-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="z-50 w-screen max-w-sm flex-auto rounded-3xl bg-white p-3 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                          <a
                            href="https://buy.stripe.com/dR601K6pwfpwf7icMO"
                            className="font-semibold text-gray-900"
                          >
                            chocolate chip/chocolate chipless
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                        <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                          <a
                            href="https://buy.stripe.com/4gw6q8g06918cZacMN"
                            className="font-semibold text-gray-900"
                          >
                            chocolate chip/sprinkles
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                        <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                          <a
                            href="https://buy.stripe.com/bIY5m429g3GO8IUaEE"
                            className="font-semibold text-gray-900"
                          >
                            chocolate chipless/sprinkles
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </h3>
              </article>
              <article class="border-4 border-gray-900 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <div class="drop-shadow-glow absolute top-5 right-4 overflow-hidden">
                  <p class="relative text-5xl font-semibold text-[#e9009a] bg-[#fff6e8] rounded-full p-7">
                    <span class="text-2xl absolute top-5 left-4">$</span>
                    48
                  </p>
                </div>
                <img
                  src="https://cdn.cosmicjs.com/0f644860-3180-11ef-adb1-8b946b3a80e4-4x3.png"
                  alt="4x3"
                  class="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div class="-ml-4 flex items-center gap-x-4"></div>
                </div>
                <h3 class="drop-shadow-glow bg-[#ffc5f7] rounded-2xl py-4 text-center mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <Popover className="relative">
                    <PopoverButton className="inline-flex hover:opacity-80 hover:underline">
                      <span>4x3 choose your flavors</span>
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </PopoverButton>

                    <PopoverPanel
                      transition
                      className="opacity-100 absolute left-1/2 bottom-1/4 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="z-50 w-screen max-w-sm flex-auto rounded-3xl bg-white p-3 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="text-center relative rounded-lg p-4 hover:bg-[#ffc5f7]">
                          <a
                            href="https://buy.stripe.com/6oE5m44hodho5wIbIL"
                            className="font-semibold text-gray-900"
                          >
                            chocolate chip/chocolate chipless/sprinkles
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                </h3>
              </article>
            </div>
          </div>

          <div class="mt-10 p-6 border-4 border-gray-900 relative bg-[#ffeed7] text-gray-900 rounded-3xl sm:mt-28">
            <p class="font-primary pt-5 text-2xl font-bold lg:text-5xl">
              how it started
            </p>
            <p class="text-xs mt-6 leading-6 md:text-base md:leading-8">
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
              <span class="font-bold md:text-xl">💋💕😘- eMitch</span>
            </p>
          </div>
          <p class="text-center mt-10 md:mt-28 text-gray-500 text-sm">
            All recipes are eMitch bakes original and have been thoroughly taste
            tested by all my friends and family. Thank you all, by the way 😊{" "}
          </p>
          <div class="border-t-2 mt-10 md:mt-14 max-w-5xl mx-auto border-gray-900" />
          <p class="text-center mt-10 md:mt-16 text-gray-500 md:text-lg">
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
