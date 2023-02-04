import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/index.js";
const CardNotif = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { newNotif = false } = $$props;
  let { Typestatus = "reimbursment" } = $$props;
  let { status = "accepted" } = $$props;
  let { dateNotif = "Today" } = $$props;
  if ($$props.newNotif === void 0 && $$bindings.newNotif && newNotif !== void 0)
    $$bindings.newNotif(newNotif);
  if ($$props.Typestatus === void 0 && $$bindings.Typestatus && Typestatus !== void 0)
    $$bindings.Typestatus(Typestatus);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.dateNotif === void 0 && $$bindings.dateNotif && dateNotif !== void 0)
    $$bindings.dateNotif(dateNotif);
  return `${newNotif ? `${Typestatus === "reimbursment" ? `<div class="${"p-2 w-full flex gap-3 min-h-[50px] bg-blue-200"}"><div class="${"w-1/4 p-1"}"><div class="${"w-full p-3 rounded-md relative flex justify-center items-center bg-base"}">${status === "accepted" ? `<span class="${"iconify text-yellow-500 text-2xl"}" data-icon="${"fa6-solid:coins"}"></span>
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:check-small"}"></span></div>` : `${status === "proses" ? `<span class="${"iconify text-yellow-500 text-2xl"}" data-icon="${"fa6-solid:coins"}"></span>
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:line-end-arrow-notch-rounded"}"></span></div>` : `${status === "rejected" ? `<span class="${"iconify text-yellow-500 text-2xl"}" data-icon="${"fa6-solid:coins"}"></span>
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500"}"><span class="${"iconify text-white"}" data-icon="${"ic:outline-close"}"></span></div>` : ``}`}`}</div></div>
			<div class="${"w-full"}"><div class="${"w-full flex p-1 justify-between"}"><h2 class="${"text-sm font-bold"}">Reimbursment</h2>
					<p class="${"text-[11px] text-gray-400 font-bold"}">${escape(dateNotif)}</p></div>
				<p class="${"text-[11px] pl-1 pr-10"}">${status === "accepted" ? `Your Submission &quot;Lorem Ipsum is simply dummy...&quot; with the &quot;with a total cost of 50,000
						has been
						<span class="${"font-bold"}">paid</span>, please check your BRIMO application, Thankyou` : `${status === "proses" ? `Your Submission will be
						<span class="${"font-bold"}">paid</span> according to the reimbursment schedule. Please Wait.` : `Your Submission &quot;description&quot; has been
						<span class="${"font-bold"}">rejected</span>, please check for details.`}`}</p></div></div>` : `${Typestatus === "sickness" ? `<div class="${"p-2 w-full flex gap-3 min-h-[50px] bg-blue-200"}"><div class="${"w-1/4 p-1"}"><div class="${"w-full p-3 rounded-md relative flex justify-center items-center bg-base"}">${status === "accepted" ? `<img class="${"w-full"}" src="${"/img/icon/pillsIcon.svg"}" alt="${""}">
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:check-small"}"></span></div>` : `${status === "proses" ? `<img class="${"w-full"}" src="${"/img/icon/pillsIcon.svg"}" alt="${""}">
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:line-end-arrow-notch-rounded"}"></span></div>` : `${status === "rejected" ? `<img class="${"w-full"}" src="${"/img/icon/pillsIcon.svg"}" alt="${""}">
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500"}"><span class="${"iconify text-white"}" data-icon="${"ic:outline-close"}"></span></div>` : ``}`}`}</div></div>
			<div class="${"w-full"}"><div class="${"w-full flex p-1 justify-between"}"><h2 class="${"text-sm font-bold"}">Sickness</h2>
					<p class="${"text-[11px] text-gray-400 font-bold"}">${escape(dateNotif)}</p></div>
				<p class="${"text-[11px] pl-1 pr-10"}">${status === "accepted" ? `Your Submission has been
						<span class="${"font-bold"}">approved</span> by the Superior.` : `${status === "proses" ? `Your Submission is being
						<span class="${"font-bold"}">reviewed</span> to the Superior for the approval process, please
						wait.` : `Your Submission has been
						<span class="${"font-bold"}">rejected</span>, please confirm with your Superior.`}`}</p></div></div>` : `${Typestatus === "overtime" ? `<div class="${"p-2 w-full flex gap-3 min-h-[50px] bg-blue-200"}"><div class="${"w-1/4 p-1"}"><div class="${"w-full p-3 rounded-md relative flex justify-center items-center bg-base"}">${status === "accepted" ? `<span class="${"iconify text-3xl"}" data-icon="${"noto:alarm-clock"}"></span>
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:check-small"}"></span></div>` : `${status === "proses" ? `<span class="${"iconify text-3xl"}" data-icon="${"noto:alarm-clock"}"></span>
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:line-end-arrow-notch-rounded"}"></span></div>` : `${status === "rejected" ? `<span class="${"iconify text-3xl"}" data-icon="${"noto:alarm-clock"}"></span>
						<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500"}"><span class="${"iconify text-white"}" data-icon="${"ic:outline-close"}"></span></div>` : ``}`}`}</div></div>
			<div class="${"w-full"}"><div class="${"w-full flex p-1 justify-between"}"><h2 class="${"text-sm font-bold"}">Overtime</h2>
					<p class="${"text-[11px] text-gray-400 font-bold"}">${escape(dateNotif)}</p></div>
				<p class="${"text-[11px] pl-1 pr-10"}">${status === "accepted" ? `Your Submission has been
						<span class="${"font-bold"}">approved</span> by the Superior.` : `${status === "proses" ? `Your Submission is being
						<span class="${"font-bold"}">reviewed</span> to the Superior for the approval process, please
						wait.` : `Your Submission has been
						<span class="${"font-bold"}">rejected</span>, please confirm with your Superior.`}`}</p></div></div>` : ``}`}`}` : `${Typestatus === "reimbursment" ? `<div class="${"p-2 w-full flex gap-3 min-h-[50px] bg-white"}"><div class="${"w-1/4 p-1"}"><div class="${"w-full p-3 rounded-md relative flex justify-center items-center bg-base"}">${status === "accepted" ? `<span class="${"iconify text-yellow-500 text-2xl"}" data-icon="${"fa6-solid:coins"}"></span>
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:check-small"}"></span></div>` : `${status === "proses" ? `<span class="${"iconify text-yellow-500 text-2xl"}" data-icon="${"fa6-solid:coins"}"></span>
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:line-end-arrow-notch-rounded"}"></span></div>` : `${status === "rejected" ? `<span class="${"iconify text-yellow-500 text-2xl"}" data-icon="${"fa6-solid:coins"}"></span>
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500"}"><span class="${"iconify text-white"}" data-icon="${"ic:outline-close"}"></span></div>` : ``}`}`}</div></div>
		<div class="${"w-full"}"><div class="${"w-full flex p-1 justify-between"}"><h2 class="${"text-sm font-bold"}">Reimbursment</h2>
				<p class="${"text-[11px] text-gray-400 font-bold"}">${escape(dateNotif)}</p></div>
			<p class="${"text-[11px] pl-1 pr-10"}">${status === "accepted" ? `Your Submission &quot;Lorem Ipsum is simply dummy...&quot; with the &quot;with a total cost of 50,000 has
					been
					<span class="${"font-bold"}">paid</span>, please check your BRIMO application, Thankyou` : `${status === "proses" ? `Your Submission will be
					<span class="${"font-bold"}">paid</span> according to the reimbursment schedule. Please Wait.` : `Your Submission &quot;description&quot; has been
					<span class="${"font-bold"}">rejected</span>, please check for details.`}`}</p></div></div>` : `${Typestatus === "sickness" ? `<div class="${"p-2 w-full flex gap-3 min-h-[50px] bg-white"}"><div class="${"w-1/4 p-1"}"><div class="${"w-full p-3 rounded-md relative flex justify-center items-center bg-base"}">${status === "accepted" ? `<img class="${"w-full"}" src="${"/img/icon/pillsIcon.svg"}" alt="${""}">
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:check-small"}"></span></div>` : `${status === "proses" ? `<img class="${"w-full"}" src="${"/img/icon/pillsIcon.svg"}" alt="${""}">
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:line-end-arrow-notch-rounded"}"></span></div>` : `${status === "rejected" ? `<img class="${"w-full"}" src="${"/img/icon/pillsIcon.svg"}" alt="${""}">
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500"}"><span class="${"iconify text-white"}" data-icon="${"ic:outline-close"}"></span></div>` : ``}`}`}</div></div>
		<div class="${"w-full"}"><div class="${"w-full flex p-1 justify-between"}"><h2 class="${"text-sm font-bold"}">Sickness</h2>
				<p class="${"text-[11px] text-gray-400 font-bold"}">${escape(dateNotif)}</p></div>
			<p class="${"text-[11px] pl-1 pr-10"}">${status === "accepted" ? `Your Submission has been
					<span class="${"font-bold"}">approved</span> by the Superior.` : `${status === "proses" ? `Your Submission is being
					<span class="${"font-bold"}">reviewed</span> to the Superior for the approval process, please wait.` : `Your Submission has been
					<span class="${"font-bold"}">rejected</span>, please confirm with your Superior.`}`}</p></div></div>` : `${Typestatus === "overtime" ? `<div class="${"p-2 w-full flex gap-3 min-h-[50px] bg-white"}"><div class="${"w-1/4 p-1"}"><div class="${"w-full p-3 rounded-md relative flex justify-center items-center bg-base"}">${status === "accepted" ? `<span class="${"iconify text-3xl"}" data-icon="${"noto:alarm-clock"}"></span>
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:check-small"}"></span></div>` : `${status === "proses" ? `<span class="${"iconify text-3xl"}" data-icon="${"noto:alarm-clock"}"></span>
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500"}"><span class="${"iconify text-white"}" data-icon="${"material-symbols:line-end-arrow-notch-rounded"}"></span></div>` : `${status === "rejected" ? `<span class="${"iconify text-3xl"}" data-icon="${"noto:alarm-clock"}"></span>
					<div class="${"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500"}"><span class="${"iconify text-white"}" data-icon="${"ic:outline-close"}"></span></div>` : ``}`}`}</div></div>
		<div class="${"w-full"}"><div class="${"w-full flex p-1 justify-between"}"><h2 class="${"text-sm font-bold"}">Overtime</h2>
				<p class="${"text-[11px] text-gray-400 font-bold"}">${escape(dateNotif)}</p></div>
			<p class="${"text-[11px] pl-1 pr-10"}">${status === "accepted" ? `Your Submission has been
					<span class="${"font-bold"}">approved</span> by the Superior.` : `${status === "proses" ? `Your Submission is being
					<span class="${"font-bold"}">reviewed</span> to the Superior for the approval process, please wait.` : `Your Submission has been
					<span class="${"font-bold"}">rejected</span>, please confirm with your Superior.`}`}</p></div></div>` : ``}`}`}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const listNotf = [
    {
      date: "Today",
      typeStatus: "reimbursment",
      status: "accepted",
      newNotif: true
    },
    {
      date: "Yesterday",
      typeStatus: "reimbursment",
      status: "rejected",
      newNotif: false
    },
    {
      date: "2022-10-06",
      typeStatus: "reimbursment",
      status: "proses",
      newNotif: true
    },
    {
      date: "2022-10-06",
      typeStatus: "sickness",
      status: "accepted",
      newNotif: true
    },
    {
      date: "2022-10-06",
      typeStatus: "sickness",
      status: "rejected",
      newNotif: false
    },
    {
      date: "2022-10-06",
      typeStatus: "sickness",
      status: "proses",
      newNotif: false
    },
    {
      date: "2022-10-06",
      typeStatus: "overtime",
      status: "accepted",
      newNotif: true
    },
    {
      date: "2022-10-06",
      typeStatus: "overtime",
      status: "rejected",
      newNotif: false
    },
    {
      date: "2022-10-06",
      typeStatus: "overtime",
      status: "proses",
      newNotif: false
    }
  ];
  return `
<div class="${"w-full pt-16 pb-20"}">${each(listNotf, (ln) => {
    return `${validate_component(CardNotif, "CardNotif").$$render(
      $$result,
      {
        dateNotif: ln.date,
        Typestatus: ln.typeStatus,
        status: ln.status,
        newNotif: ln.newNotif
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
export {
  Page as default
};
