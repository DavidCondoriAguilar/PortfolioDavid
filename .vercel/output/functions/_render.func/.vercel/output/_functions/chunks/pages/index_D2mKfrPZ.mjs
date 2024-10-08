/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes } from '../astro_DYcTmH-J.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$m = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Disponible para trabajar</span>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/Badge.astro", void 0);

const $$Astro$l = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class=""> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="https://www.instagram.com/davidragewild/" class="flex items-center space-x-3 rtl:space-x-reverse" target="_blank"> <picture> <img class="size-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 ml-4 lg:ml-10" src="https://avatars.githubusercontent.com/u/103283145?s=400&u=55706b1168488dc4bea4464464e4fbb3aa51f489&v=4" alt="David"> </picture> </a> <button data-collapse-toggle="navbar-default" type="button" id="toggle-btn" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"> <li> <a href="/#top" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  transition">Inicio</a> </li> <!-- <li>
          <a
            href="/#experiencia"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition"
            >Experiencia</a
          >
        </li> --> <li> <a href="/#proyectos" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition">Proyectos</a> </li> </ul> </div> </div> </nav> `;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/Header.astro", void 0);

const $$Astro$k = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "\xA1PortfolioWeb David Condori Aguilar, Programador y desarrollador!"
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(title, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/code-dots.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="absolute top-0 z-[-2] h-screen mx-auto w-auto lg:w-full lg:h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/layouts/Layout.astro", void 0);

const $$Astro$j = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#FFFFFF"></path> </svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$i = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$SocialPill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<span> <a${addAttribute("rounded-full cursor-pointer w-auto text-white border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition", "class")}${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a> </span>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/SocialPill.astro", void 0);

const $$Astro$h = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="#FFF"></path> </svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/GitHub.astro", void 0);

const $$Astro$g = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-code" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"></path> <path d="M3 7l9 6l9 -6"></path> <path d="M20 21l2 -2l-2 -2"></path> <path d="M17 17l-2 2l2 2"></path> </svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Mail.astro", void 0);

const $$Astro$f = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Resume;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"></path><path d="M13 16h-7a2 2 0 0 0 -2 2"></path><path d="M15 19l3 3l3 -3"></path><path d="M18 22v-9"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Resume.astro", void 0);

const $$Astro$e = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="w-full mx-auto  md:w-[750px] lg:w-[67%] py-8 sm:py-10 md:py-12 lg:py-14"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/SectionContainer.astro", void 0);

const $$Astro$d = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99a3.468 3.468 0 0 1 3.307 2.444"></path><path d="M20 21l2 -2l-2 -2"></path><path d="M17 17l-2 2l2 2"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Code.astro", void 0);

const $$Astro$c = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$React = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/React.astro", void 0);

const $$Astro$b = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$TailwindCSS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TailwindCSS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a"><stop stop-color="#2298BD" offset="0%"></stop><stop stop-color="#0ED7B5" offset="100%"></stop></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#a)"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/TailwindCSS.astro", void 0);

const $$Astro$a = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Bootstrap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Bootstrap.astro", void 0);

const $$Astro$9 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Css = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path> </svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Css.astro", void 0);

const $$Astro$8 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Html = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Html.astro", void 0);

const $$Astro$7 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Vite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Vite;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 257" width="256" height="257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a"><stop stop-color="#41D1FF" offset="0%"></stop><stop stop-color="#BD34FE" offset="100%"></stop></linearGradient><linearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b"><stop stop-color="#FFEA83" offset="0%"></stop><stop stop-color="#FFDD35" offset="8.333%"></stop><stop stop-color="#FFA800" offset="100%"></stop></linearGradient></defs><path d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z" fill="url(#a)"></path><path d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z" fill="url(#b)"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Vite.astro", void 0);

const $$Astro$6 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Angular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Angular;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 242 256"><g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"></path></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"></path><path fill="url(#d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"></path></g></g><defs><linearGradient id="c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"></stop><stop offset=".2" stop-color="#F60A48"></stop><stop offset=".4" stop-color="#F20755"></stop><stop offset=".5" stop-color="#DC087D"></stop><stop offset=".7" stop-color="#9717E7"></stop><stop offset="1" stop-color="#6C00F5"></stop></linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"></stop><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"></stop></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h242v256H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/Angular.astro", void 0);

const $$Astro$5 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    REACT: {
      name: "React",
      class: "bg-black text-white",
      icon: $$React
    },
    TAILWIND: {
      name: "TailwindCSS",
      class: "bg-black text-white",
      icon: $$TailwindCSS
    },
    BOOTSTRAP: {
      name: "Bootstrap",
      class: "bg-black text-white",
      icon: $$Bootstrap
    },
    CSS: {
      name: "Css",
      class: "bg-black text-white",
      icon: $$Css
    },
    HTML: {
      name: "Html",
      class: "bg-black text-white",
      icon: $$Html
    },
    VITE: {
      name: "Vite",
      class: "bg-black text-white",
      icon: $$Vite
    },
    ANGULAR: {
      name: "Angular",
      class: "bg-black text-white",
      icon: $$Angular
    }
  };
  const PROJECTS = [
    {
      title: "Project 1",
      description: "Un proyecto React con Vite y Bootstrap para gestionar un CRUD en una tienda en l\xEDnea. Permite crear, leer, actualizar y eliminar productos de manera \xE1gil y amigable. La combinaci\xF3n de Vite y Bootstrap asegura una experiencia r\xE1pida y adaptable para administrar la tienda en React.",
      link: "#",
      github: "https://github.com/DavidCondoriAguilar/ReactCRUD/tree/main",
      image: "images/reactEcommerce.webp",
      tags: [TAGS.VITE, TAGS.REACT, TAGS.BOOTSTRAP, TAGS.CSS, TAGS.HTML]
    },
    {
      title: "Project 2",
      description: "Proyecto Angular con Bootstrap: gesti\xF3n de datos eficiente con CRUD y b\xFAsqueda. Una combinaci\xF3n robusta para una experiencia fluida y poderosa en la administraci\xF3n de datos.",
      link: "#",
      github: "https://github.com/DavidCondoriAguilar/Angular-CRUD",
      image: "images/angularCRUD.webp",
      tags: [TAGS.ANGULAR, TAGS.BOOTSTRAP, TAGS.CSS, TAGS.HTML]
    },
    {
      title: "Project 3",
      description: "Una landing est\xE1tica, responsive y atractiva hecha con React y Tailwind CSS. Utiliza Grid para una distribuci\xF3n visual y cumple con buenas pr\xE1cticas de desarrollo frontend, garantizando una experiencia adaptable en diferentes dispositivos.",
      link: "#",
      github: "https://github.com/DavidCondoriAguilar/Practicas-Manyare",
      image: "images/tailwindLayout.webp",
      tags: [TAGS.VITE, TAGS.REACT, TAGS.TAILWIND, TAGS.HTML, TAGS.CSS]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ title, description, tags, image, github }) => renderTemplate`${maybeRenderHead()}<article class="mt-5 relative "><div class="flex flex-row gap-x-4" data-scroll-reveal><h3 class="text-[20px] lg:text-2xl font-semibold text-yellow-200 mb-2">${title}</h3></div><p class="text-[16px] lg:text-[18px] mb-4 text-pretty" data-scroll-reveal>${description}</p><ul class="py-2 flex gap-x-4 flex-wrap " data-scroll-reveal>${tags.map((tag) => renderTemplate`<li><span${addAttribute(
    "flex flex-wrap gap-x-1 lg:gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 items-center text-pretty",
    "class"
  )}>${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-6 " })}${tag.name}</span></li>`)}</ul><div class="relative group" data-scroll-reveal><img class="rounded"${addAttribute(image, "src")}${addAttribute("Captura de pantalla del proyecto ${image}", "alt")} data-scroll-reveal><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded flex items-center justify-center duration-700">${renderComponent($$result, "SocialPill", $$SocialPill, { "href": github }, { "default": ($$result2) => renderTemplate`<button class=" ">${renderComponent($$result2, "Code", $$Code, { "class": "cursor-pointer  py-2 px-4 rounded-md text-red-500  " })}</button>` })}</div></div></article>`)}`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/Projects.astro", void 0);

const $$Astro$4 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$ToTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ToTop;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-navigation-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.54 12.843l-4.54 -9.843l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463"></path><path d="M19 22v-6"></path><path d="M22 19l-3 -3l-3 3"></path></svg>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/icons/ToTop.astro", void 0);

const $$Astro$3 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="#" class="flex items-center mb-[10px] sm:mb-0 space-x-3 rtl:space-x-reverse"> ${renderComponent($$result, "ToTop", $$ToTop, { "class": "ml-[19.5rem] lg:ml-6 mb-[-2rem] sm:mb-7 lg:mb-[1px] rounded-full h-8" })} </a> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> <li> <a href="https://www.linkedin.com/in/david-condori-aguilar/" target="_blank" class="hover:underline me-4 md:me-6">linkedin</a> </li> <li> <a href="https://www.instagram.com/davidragewild/" target="_blank" class="hover:underline me-4 md:me-6">Instagram</a> </li> <li> <a href="https://twitter.com/davidwi17213714" target="_blank" class="hover:underline me-4 md:me-6">Twiter</a> </li> </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/DavidCondoriAguilar" class="hover:underline">DavidDev™</a></span> </div> </footer>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$TypedAnimation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TypedAnimation;
  return renderTemplate`<!-- Contenedor para el texto animado -->${maybeRenderHead()}<div class="h-[30px]" data-astro-cid-kfp27i3d> <span id="typed-text" class="text-3xl font-bold" data-astro-cid-kfp27i3d></span> </div>  `;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/TypedAnimation.astro", void 0);

const $$Astro$1 = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Slider;
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-3xl overflow-hidden select-none bg-[#ffffff00]"${addAttribute({
    WebkitMask: "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
    mask: "linear-gradient(90deg, transparent, black 20%, black 80%, black transparent)"
  }, "style")}> <div class="w-full h-fit max-w-3xl flex flex-col justify-center select-none overflow-hidden"> <div class="w-max flex flex-nowrap gap-[4rem] animate-slide-logos"> ${renderComponent($$result, "Css", $$Css, { "class": "size-20 object-contain" })} ${renderComponent($$result, "GitHub", $$GitHub, { "class": "size-20 object-contain" })} ${renderComponent($$result, "Html", $$Html, { "class": "size-20 object-contain" })} ${renderComponent($$result, "React", $$React, { "class": "size-20 object-contain" })} ${renderComponent($$result, "Vite", $$Vite, { "class": "size-20 object-contain" })} ${renderComponent($$result, "TailwindCSS", $$TailwindCSS, { "class": "size-20 object-contain" })} </div> </div> </section>`;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/components/Slider.astro", void 0);

const $$Astro = createAstro("https://DavidCondoriAguilar.github.io/PortfolioDavid/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio de David- Desarrollador y Programador Web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 w-[400px] mx-auto lg:w-auto"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "h-auto", "id": "inicio" }, { "default": ($$result3) => renderTemplate` <span class="flex flex-col items-start"> <h1 class="text-white text-3xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-5" data-scroll-reveal> ${renderComponent($$result3, "TypedAnimation", $$TypedAnimation, {})} </h1> <a href="https://www.linkedin.com/in/david-condori-aguilar/" class="flex justify-center items-center py-4" target="_blank" rel="noopener"> ${renderComponent($$result3, "Badge", $$Badge, {})} </a> </span> <h2 class="text-[20px] lg:text-[21px] text-pretty text-white" data-scroll-reveal>
Desarrollador web. De Lima Perú <span class="text-yellow-200/90">Mi objetivo es ofrecer resultados atractivos</span>,seguros y escalables para cada proyecto en el que trabajo. <span class="text-red-200/90">Ya sea que esté desarrollando</span> o creando interfaces de usuario atractivas.
</h2> <nav class="flex flex-wrap gap-y-4 gap-x-14 mx-auto lg:gap-x-4 mt-10 py-2  lg:py-14 w-[320px] lg:w-full" data-scroll-reveal> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/david-condori-aguilar/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedIn", $$LinkedIn, { "class": "size-6 text-white" })}
LinkedIn
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/DavidCondoriAguilar" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GitHub", $$GitHub, { "class": "size-6 text-white" })}
GitHub
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:davids.condori.aguilar@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailTo", $$Mail, { "class": "size-6 text-white" })}
Gmail
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://drive.google.com/drive/folders/19ewA4QhvjsmLUTyxkDDaihu-xVlc86qU?usp=sharing" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Resume", $$Resume, { "class": "size-6 text-white" })}
Resume
` })} </nav> ` })} <!-- <SectionContainer class="h-auto" id="experiencia" data-scroll-reveal>
      <h2
        class="text-2xl font-semibold py-5 flex gap-x-2 items-center"
        data-scroll-reveal
      >
        <BriefCase class="size-7" data-scroll-reveal />
        Estudios
      </h2>
      <Experience data-scroll-reveal />
    </SectionContainer> --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "", "id": "proyectos", "data-scroll-reveal": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl mb-14 font-semibold data-scroll-reveal flex gap-x-2 items-center" data-scroll-reveal> ${renderComponent($$result3, "Code", $$Code, { "class": "size-7", "data-scroll-reveal": true })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "h-auto" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Slider", $$Slider, {})} ` })} <!-- <SectionContainer  data-scroll-reveal>
      <Acordition/>
    </SectionContainer> --> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}  `;
}, "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/pages/index.astro", void 0);

const $$file = "C:/Users/DAVIDWILD/Desktop/Proyects/Astro/former-flare/src/pages/index.astro";
const $$url = "/PortfolioDavid";

export { $$Index as default, $$file as file, $$url as url };
