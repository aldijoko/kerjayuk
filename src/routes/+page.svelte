<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
</script>

<div class="w-full pt-16 pb-28" out:fly|local={{ x: 100, duration: 500 }}>
	<div class="mt-1 px-5">
		<h2 class="text-sm">Hi, Good Morning</h2>
		<div class="w-full bg-base rounded-md mt-2 p-4">
			<div class="w-full flex items-start gap-2">
				<div class="w-1/5">
					<div class="w-10 rounded-full bg-white h-10" />
				</div>
				<div class="w-full flex justify-between items-center text-white">
					<div class="">
						<p class="font-bold text-sm">Tabay</p>
						<p class="text-[9px]">UI/UX Designer</p>
					</div>

					<div class="flex flex-col items-end">
						<p class="text-[9px]">Member Since</p>
						<p class="font-bold text-sm">01 Juni 2021</p>
					</div>
				</div>
			</div>
			<div class="w-full flex justify-between mt-2">
				<div class="text-white">
					<p class="text-[9px]">Location</p>
					<p class="text-xs font-bold">Kantor Sahid</p>
				</div>
				<div class="flex justify-end items-end text-[9px] text-white">
					<p>ICO</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-2 px-5">
		<h2 class="text-sm font-bold ">Today's Activity</h2>
		<div class="w-full flex justify-between my-2">
			<div class="w-full flex flex-col items-center">
				<span class="iconify text-red-500 text-4xl" data-icon="mdi:clock-time-nine-outline" />
				<div class="w-full flex flex-col items-center py-2">
					<p class="text-base font-bold">08.30</p>
					<p class="text-xs">Check In</p>
				</div>
			</div>
			<div class="w-full flex flex-col items-center">
				<span class="iconify text-red-500 text-4xl" data-icon="ph:clock-clockwise-bold" />
				<div class="w-full flex flex-col items-center py-2">
					<p class="text-base font-bold text-red-500">03:00:00</p>
					<p class="text-xs">Working Hours</p>
				</div>
			</div>
			<div class="w-full flex flex-col items-center">
				<span class="iconify text-red-500 text-4xl" data-icon="mdi:clock-time-six-outline" />
				<div class="w-full flex flex-col items-center py-2">
					<p class="text-base font-bold">--:--</p>
					<p class="text-xs">Check Out</p>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-2 px-5">
		<h2 class="text-base font-bold ">PCS News</h2>
		<div class="w-full flex overflow-x-auto gap-2 px-2">
			<div class="min-w-full p-3 bg-white border shadow-md rounded-xl my-2">
				<div class="w-full flex items-center">
					<div class="w-1/5">
						<div class="w-8 rounded-full bg-red-400 h-8" />
					</div>
					<div class="w-full flex justify-between items-center">
						<p class="text-red-500 font-bold text-sm">Ana Riswati</p>
						<div class="text-xs flex flex-col items-end">
							<p>Senin</p>
							<p>30 Mei 2022</p>
						</div>
					</div>
				</div>
				<div class="w-full text-xs mt-2 px-2">
					<p>Kalimat 1 - Lorem Ipsum is simply</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy text</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy text</p>
				</div>
			</div>
			<div class="min-w-full p-3 bg-white border shadow-md rounded-xl my-2">
				<div class="w-full flex items-center">
					<div class="w-1/5">
						<div class="w-8 rounded-full bg-red-400 h-8" />
					</div>
					<div class="w-full flex justify-between items-center">
						<p class="text-red-500 font-bold text-sm">Ana Riswati</p>
						<div class="text-xs flex flex-col items-end">
							<p>Senin</p>
							<p>30 Mei 2022</p>
						</div>
					</div>
				</div>
				<div class="w-full text-xs mt-2 px-2">
					<p>Kalimat 1 - Lorem Ipsum is simply</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy text</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy text</p>
				</div>
			</div>
			<div class="min-w-full p-3 bg-white border shadow-md rounded-xl my-2">
				<div class="w-full flex items-center">
					<div class="w-1/5">
						<div class="w-8 rounded-full bg-red-400 h-8" />
					</div>
					<div class="w-full flex justify-between items-center">
						<p class="text-red-500 font-bold text-sm">Ana Riswati</p>
						<div class="text-xs flex flex-col items-end">
							<p>Senin</p>
							<p>30 Mei 2022</p>
						</div>
					</div>
				</div>
				<div class="w-full text-xs mt-2 px-2">
					<p>Kalimat 1 - Lorem Ipsum is simply</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy text</p>
					<p>Kalimat 1 - Lorem Ipsum is simply dummy text</p>
				</div>
			</div>
		</div>
		<div class="w-full flex py-1 justify-center gap-2">
			<a class="w-4 h-4 rounded-full bg-gray-300" />
			<a class="w-4 h-4 rounded-full bg-red-500" />
			<a class="w-4 h-4 rounded-full bg-gray-300" />
		</div>
	</div>
	<div class="mt-3 px-5">
		<h2 class="text-base font-bold ">Online</h2>
		<div class="w-full h-24 p-4 bg-white border shadow-md rounded-xl mt-2 flex relative">
			<div
				class="absolute left-2 w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-0"
			>
				<div
					class="w-10 h-10 rounded-full bg-purple-400 flex flex-col items-center justify-center"
				/>
			</div>
			<div
				class="absolute left-[46px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[1]"
			>
				<div
					class="w-10 h-10 rounded-full bg-yellow-400 flex flex-col items-center justify-center"
				/>
			</div>
			<div
				class="absolute left-[84px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[2]"
			>
				<div class="w-10 h-10 rounded-full bg-zinc-400 flex flex-col items-center justify-center" />
			</div>
			<div
				class="absolute left-[120px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[3]"
			>
				<div class="w-10 h-10 rounded-full bg-blue-300 flex flex-col items-center justify-center" />
			</div>
			<div
				class="absolute left-[157px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[4]"
			>
				<div
					class="w-10 h-10 rounded-full bg-yellow-500 flex flex-col items-center justify-center"
				/>
			</div>
			<div
				class="absolute left-[195px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[5]"
			>
				<div
					class="w-10 h-10 rounded-full bg-slate-400 flex flex-col items-center justify-center"
				/>
			</div>
			<div
				class="absolute left-[230px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[6]"
			>
				<div class="w-10 h-10 rounded-full bg-red-400 flex flex-col items-center justify-center" />
			</div>
			<div
				class="absolute left-[267px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-[6]"
			>
				<div class="w-10 h-10 rounded-full bg-red-600 flex flex-col items-center justify-center" />
			</div>
			<div
				class="absolute left-[300px] w-12 h-12 rounded-full bg-white flex flex-col items-center justify-center z-0"
			>
				<div class="w-10 h-10 rounded-full bg-red-600 flex flex-col items-center justify-center">
					<p class="text-[7px] text-white ml-4 mr-1">10 More</p>
				</div>
			</div>
			<div class="flex gap-1 items-center mt-14">
				<div class="ml-1 flex flex-col items-center">
					<p class="text-[8px] font-bold">Jefril</p>
					<p class="text-[7px]">Sahid</p>
				</div>
				<div class="ml-2 flex flex-col items-center">
					<p class="text-[8px] font-bold">Zasami</p>
					<p class="text-[7px]">Bso</p>
				</div>
				<div class="ml-2 flex flex-col items-center">
					<p class="text-[8px] font-bold">Sam</p>
					<p class="text-[7px]">Sahid</p>
				</div>
				<div class="ml-3 flex flex-col items-center">
					<p class="text-[8px] font-bold">Aldo</p>
					<p class="text-[7px]">Sahid</p>
				</div>
				<div class="ml-3 flex flex-col items-center">
					<p class="text-[8px] font-bold">Erwin</p>
					<p class="text-[7px]">Sahid</p>
				</div>
				<div class="ml-3 flex flex-col items-center">
					<p class="text-[8px] font-bold">Arye</p>
					<p class="text-[7px]">Bso</p>
				</div>
				<div class="ml-2 flex flex-col items-center">
					<p class="text-[8px] font-bold">Risya</p>
					<p class="text-[7px]">Bso</p>
				</div>
				<div class="ml-3 flex flex-col items-center">
					<p class="text-[8px] font-bold">Nesha</p>
					<p class="text-[7px]">WFH</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
