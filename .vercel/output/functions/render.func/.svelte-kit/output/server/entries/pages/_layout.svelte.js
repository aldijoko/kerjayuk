import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const HomeFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"w-full h-16 bg-white flex items-center fixed bottom-0 border-t-2 shadow-lg z-50"}"><div class="${"w-full flex px-5 justify-between relative"}"><div class="${"w-2/5 flex items-center gap-4"}"><a href="${""}" class="${"flex flex-col items-center text-red-500"}"><span class="${"iconify text-2xl"}" data-icon="${"ion:home"}"></span>
				<p class="${"text-xs font-bold "}">Home</p></a>
			<a href="${""}" class="${"flex flex-col items-center text-gray-400"}"><span class="${"iconify text-2xl"}" data-icon="${"gridicons:scheduled"}"></span>
				<p class="${"text-xs font-bold "}">Attendance</p></a></div>
		<div class="${"relative w-full flex items-center justify-center"}"><div class="${"w-14 h-14 bg-red-500 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"}"><span class="${"iconify text-white text-2xl font-bold"}" data-icon="${"codicon:sign-out"}"></span></div>
			<p class="${"absolute bottom-0 right-13 text-[10px] font-bold text-red-500"}">Check out</p></div>
		<div class="${"w-2/5 flex items-center gap-4 text-gray-400"}"><a href="${""}" class="${"flex flex-col items-center"}"><span class="${"iconify text-2xl "}" data-icon="${"ri:file-list-fill"}"></span>
				<p class="${"text-xs font-bold "}">Form</p></a>
			<a href="${""}" class="${"flex flex-col items-center text-gray-400"}"><span class="${"iconify text-2xl "}" data-icon="${"icon-park-solid:setting-two"}"></span>
				<p class="${"text-xs font-bold "}">Setting</p></a></div></div></footer>`;
});
const HomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"w-full h-16 bg-white flex items-center fixed z-50"}"><div class="${"w-full px-5 flex gap-2 items-center justify-between"}"><p class="${"text-2xl text-red-500 font-bold"}">KerjaYuk!</p>
		<a href="${"/notifications"}"><img class="${"w-6 h-6"}" src="${"/img/icon/notifIcon.svg"}" alt="${""}"></a></div>
</header>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HomeHeader, "HomeHeader").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(HomeFooter, "HomeFooter").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
