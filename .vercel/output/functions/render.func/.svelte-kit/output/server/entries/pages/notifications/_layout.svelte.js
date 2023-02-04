import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const NotifHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"w-full h-16 border-b-2 flex items-center fixed shadow-sm bg-white z-50"}"><div class="${"px-5 flex gap-2 items-center"}"><a href="${"/"}"><span class="${"iconify text-3xl"}" data-icon="${"material-symbols:arrow-back-rounded"}"></span></a>
		<p class="${"text-2xl text-red-500 font-bold"}">Notification</p></div>
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NotifHeader, "NotifHeader").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
