import * as React from "react"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Avatar from "../images/avatar-polka-nobg.png"
import LogoText from "../images/emitch-bakes.png"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>eMitch bakes | homemade cookies</title>

      <meta
        name="description"
        content="Hi :) I’m Emily aka eMitch. A few years ago, I decided to perfect my chocolate chip cookie recipe. It ended up being a big hit amongst my friends & family. In 2020, I started selling my signature chocolate chip cookies at my friend’s sub shop here in Tampa, “Mickey’s Subs”. (You all should try it if you’re in the Bay Area, the sandwiches are to die for.) In 2021, eMitch bakes was nominated for Best of the Bay. And in 2024, I decided to take my talents to the web, creating: eMitch bakes online bakery! The cookies are all my own recipe and make for great gifts. I look forward to feeding people all over the country! Thank you for stopping by and please make sure to follow @emitchbakes on Instagram and TikTok. Feel free to tag us, we would love to hear your thoughts."
      />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        property="og:image"
        content="https://cdn.cosmicjs.com/1e74c9e0-3308-11ef-a504-63e081e4680f-cookie_9004938.png"
      />
      <link rel="canonical" href="https://www.emitchbakes.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="eMitch bakes | homemade cookies" />
      <meta name="keywords" content="homemade cookies" />
      <meta
        property="og:description"
        content="Hi :) I’m Emily aka eMitch. A few years ago, I decided to perfect my chocolate chip cookie recipe. It ended up being a big hit amongst my friends & family. In 2020, I started selling my signature chocolate chip cookies at my friend’s sub shop here in Tampa, “Mickey’s Subs”. (You all should try it if you’re in the Bay Area, the sandwiches are to die for.) In 2021, eMitch bakes was nominated for Best of the Bay. And in 2024, I decided to take my talents to the web, creating: eMitch bakes online bakery! The cookies are all my own recipe and make for great gifts. I look forward to feeding people all over the country! Thank you for stopping by and please make sure to follow @emitchbakes on Instagram and TikTok. Feel free to tag us, we would love to hear your thoughts."
      />
      <meta property="og:url" content="https://www.emitchbakes.com/" />
      <meta property="og:site_name" content="eMitch bakes | homemade cookies" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Hi :) I’m Emily aka eMitch. A few years ago, I decided to perfect my chocolate chip cookie recipe. It ended up being a big hit amongst my friends & family. In 2020, I started selling my signature chocolate chip cookies at my friend’s sub shop here in Tampa, “Mickey’s Subs”. (You all should try it if you’re in the Bay Area, the sandwiches are to die for.) In 2021, eMitch bakes was nominated for Best of the Bay. And in 2024, I decided to take my talents to the web, creating: eMitch bakes online bakery! The cookies are all my own recipe and make for great gifts. I look forward to feeding people all over the country! Thank you for stopping by and please make sure to follow @emitchbakes on Instagram and TikTok. Feel free to tag us, we would love to hear your thoughts."
      />
      <meta name="twitter:title" content="eMitch bakes | homemade cookies" />

      <link
        rel="icon"
        type="image/png"
        href="https://cdn.cosmicjs.com/1e74c9e0-3308-11ef-a504-63e081e4680f-cookie_9004938.png"
      />
    </Helmet>
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
              <div class="mt-10 flex justify-center space-x-10">
                <a
                  href="https://www.tiktok.com/@emitchbakes"
                  class="text-gray-900 hover:opacity-80"
                >
                  <span class="sr-only">TikTok</span>
                  <svg
                    class="h-16 w-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/emitchbakes/"
                  class="text-gray-900 hover:opacity-80"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="h-16 w-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="border-t-4 border-black max-w-7xl border-dashed mx-auto" />
      <p class="px-5 pt-5 mx-auto text-center text-md mt-6 leading-6 md:text-lg md:max-w-4xl md:leading-8">
        cookies make for great gifts :) if you would like to include a personal
        note with your order, please email{" "}
        <a
          href="mailto:eMitchbakes@gmail.com"
          class="text-[#e9009a] underline font-medium hover:opacity-70"
        >
          eMitchbakes@gmail.com
        </a>{" "}
        and let me know what you would like the note to say.
      </p>
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
                  src="https://imgix.cosmicjs.com/81c68f30-a38b-11ef-b5a0-93db72e2be98-Snickerdoodle-alt.png"
                  alt="snickerdoodle dozen"
                  class="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div class="-ml-4 flex items-center gap-x-4"></div>
                </div>
                <h3 class="drop-shadow-glow bg-[#ffc5f7] rounded-2xl py-4 text-center mt-3 text-lg font-semibold leading-6 text-gray-900 hover:opacity-80">
                  <a href="https://buy.stripe.com/00g15O3dkdho3oA6oy">
                    <span class="absolute inset-0 "></span>
                    snickerdoodle
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
                  src="https://imgix.cosmicjs.com/81ded220-a38b-11ef-b5a0-93db72e2be98-sprinkles-snickerdoodle.png"
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
                            href="https://buy.stripe.com/9AQ29SeW2els0co9AI"
                            className="font-semibold text-gray-900"
                          >
                            chocolate chip/snickerdoodle
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
                            href="https://buy.stripe.com/14kbKsbJQ9189MYfZ7"
                            className="font-semibold text-gray-900"
                          >
                            snickerdoodle/sprinkles
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
                  src="https://imgix.cosmicjs.com/81d75810-a38b-11ef-b5a0-93db72e2be98-4x3.png"
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
                            href="https://buy.stripe.com/14kdSA0181yGe3e007"
                            className="font-semibold text-gray-900"
                          >
                            chocolate chip/snickerdoodle/sprinkles
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
              Hi :) I’m Emily aka eMitch. A few years ago, I decided to perfect
              my chocolate chip cookie recipe. It ended up being a big hit
              amongst my friends & family. In 2020, I started selling my
              signature chocolate chip cookies at my friend’s sub shop here in
              Tampa, “Mickey’s Subs”. (You all should try it if you’re in the
              Bay Area, the sandwiches are to die for.) In 2021, eMitch bakes
              was nominated for Best of the Bay. And in 2024, I decided to take
              my talents to the web, creating: eMitch bakes online bakery! The
              cookies are all my own recipe and make for great gifts. I look
              forward to feeding people all over the country! Thank you for
              stopping by and please make sure to follow @emitchbakes on
              Instagram and TikTok. Feel free to tag us, we would love to hear
              your thoughts.
              <span class="font-bold block md:text-xl">xoxo- eMitch</span>
            </p>
          </div>
          <p class="text-center mt-10 md:mt-28 text-gray-500 text-sm">
            All recipes are eMitch bakes original and have been thoroughly taste
            tested by all my friends and family. Thank you all, by the way :){" "}
          </p>
          <div class="border-t-2 mt-10 md:mt-14 max-w-5xl mx-auto border-gray-900" />
          <div class="mt-10 flex justify-center space-x-10 opacity-40">
            <a
              href="https://www.tiktok.com/@emitchbakes"
              class="text-gray-900 hover:opacity-80"
            >
              <span class="sr-only">TikTok</span>
              <svg
                class="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/emitchbakes/"
              class="text-gray-900 hover:opacity-80"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p class="text-center mt-6  text-gray-500 md:text-lg">
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
