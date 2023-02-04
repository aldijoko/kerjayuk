<script>
	export let newNotif = false;
	export let Typestatus = 'reimbursment';
	export let status = 'accepted';
	export let dateNotif = 'Today';
</script>

{#if newNotif}
	{#if Typestatus === 'reimbursment'}
		<div class="p-2 w-full flex gap-3 min-h-[50px] bg-blue-200">
			<div class="w-1/4 p-1">
				<div class="w-full p-3 rounded-md relative flex justify-center items-center bg-base">
					{#if status === 'accepted'}
						<span class="iconify text-yellow-500 text-2xl" data-icon="fa6-solid:coins" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500">
							<span class="iconify text-white" data-icon="material-symbols:check-small" />
						</div>
					{:else if status === 'proses'}
						<span class="iconify text-yellow-500 text-2xl" data-icon="fa6-solid:coins" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500">
							<span
								class="iconify text-white"
								data-icon="material-symbols:line-end-arrow-notch-rounded"
							/>
						</div>
					{:else if status === 'rejected'}
						<span class="iconify text-yellow-500 text-2xl" data-icon="fa6-solid:coins" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500">
							<span class="iconify text-white" data-icon="ic:outline-close" />
						</div>
					{/if}
				</div>
			</div>
			<div class="w-full">
				<div class="w-full flex p-1 justify-between">
					<h2 class="text-sm font-bold">Reimbursment</h2>
					<p class="text-[11px] text-gray-400 font-bold">{dateNotif}</p>
				</div>
				<p class="text-[11px] pl-1 pr-10">
					{#if status === 'accepted'}
						Your Submission "Lorem Ipsum is simply dummy..." with the "with a total cost of 50,000
						has been
						<span class="font-bold">paid</span>, please check your BRIMO application, Thankyou
					{:else if status === 'proses'}
						Your Submission will be
						<span class="font-bold">paid</span> according to the reimbursment schedule. Please Wait.
					{:else}
						Your Submission "description" has been
						<span class="font-bold">rejected</span>, please check for details.
					{/if}
				</p>
			</div>
		</div>
	{:else if Typestatus === 'sickness'}
		<div class="p-2 w-full flex gap-3 min-h-[50px] bg-blue-200">
			<div class="w-1/4 p-1">
				<div class="w-full p-3 rounded-md relative flex justify-center items-center bg-base">
					{#if status === 'accepted'}
						<img class="w-full" src="/img/icon/pillsIcon.svg" alt="" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500">
							<span class="iconify text-white" data-icon="material-symbols:check-small" />
						</div>
					{:else if status === 'proses'}
						<img class="w-full" src="/img/icon/pillsIcon.svg" alt="" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500">
							<span
								class="iconify text-white"
								data-icon="material-symbols:line-end-arrow-notch-rounded"
							/>
						</div>
					{:else if status === 'rejected'}
						<img class="w-full" src="/img/icon/pillsIcon.svg" alt="" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500">
							<span class="iconify text-white" data-icon="ic:outline-close" />
						</div>
					{/if}
				</div>
			</div>
			<div class="w-full">
				<div class="w-full flex p-1 justify-between">
					<h2 class="text-sm font-bold">Sickness</h2>
					<p class="text-[11px] text-gray-400 font-bold">{dateNotif}</p>
				</div>
				<p class="text-[11px] pl-1 pr-10">
					{#if status === 'accepted'}
						Your Submission has been
						<span class="font-bold">approved</span> by the Superior.
					{:else if status === 'proses'}
						Your Submission is being
						<span class="font-bold">reviewed</span> to the Superior for the approval process, please
						wait.
					{:else}
						Your Submission has been
						<span class="font-bold">rejected</span>, please confirm with your Superior.
					{/if}
				</p>
			</div>
		</div>
	{:else if Typestatus === 'overtime'}
		<div class="p-2 w-full flex gap-3 min-h-[50px] bg-blue-200">
			<div class="w-1/4 p-1">
				<div class="w-full p-3 rounded-md relative flex justify-center items-center bg-base">
					{#if status === 'accepted'}
						<span class="iconify text-3xl" data-icon="noto:alarm-clock" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500">
							<span class="iconify text-white" data-icon="material-symbols:check-small" />
						</div>
					{:else if status === 'proses'}
						<span class="iconify text-3xl" data-icon="noto:alarm-clock" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500">
							<span
								class="iconify text-white"
								data-icon="material-symbols:line-end-arrow-notch-rounded"
							/>
						</div>
					{:else if status === 'rejected'}
						<span class="iconify text-3xl" data-icon="noto:alarm-clock" />
						<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500">
							<span class="iconify text-white" data-icon="ic:outline-close" />
						</div>
					{/if}
				</div>
			</div>
			<div class="w-full">
				<div class="w-full flex p-1 justify-between">
					<h2 class="text-sm font-bold">Overtime</h2>
					<p class="text-[11px] text-gray-400 font-bold">{dateNotif}</p>
				</div>
				<p class="text-[11px] pl-1 pr-10">
					{#if status === 'accepted'}
						Your Submission has been
						<span class="font-bold">approved</span> by the Superior.
					{:else if status === 'proses'}
						Your Submission is being
						<span class="font-bold">reviewed</span> to the Superior for the approval process, please
						wait.
					{:else}
						Your Submission has been
						<span class="font-bold">rejected</span>, please confirm with your Superior.
					{/if}
				</p>
			</div>
		</div>
	{/if}
{:else if Typestatus === 'reimbursment'}
	<div class="p-2 w-full flex gap-3 min-h-[50px] bg-white">
		<div class="w-1/4 p-1">
			<div class="w-full p-3 rounded-md relative flex justify-center items-center bg-base">
				{#if status === 'accepted'}
					<span class="iconify text-yellow-500 text-2xl" data-icon="fa6-solid:coins" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500">
						<span class="iconify text-white" data-icon="material-symbols:check-small" />
					</div>
				{:else if status === 'proses'}
					<span class="iconify text-yellow-500 text-2xl" data-icon="fa6-solid:coins" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500">
						<span
							class="iconify text-white"
							data-icon="material-symbols:line-end-arrow-notch-rounded"
						/>
					</div>
				{:else if status === 'rejected'}
					<span class="iconify text-yellow-500 text-2xl" data-icon="fa6-solid:coins" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500">
						<span class="iconify text-white" data-icon="ic:outline-close" />
					</div>
				{/if}
			</div>
		</div>
		<div class="w-full">
			<div class="w-full flex p-1 justify-between">
				<h2 class="text-sm font-bold">Reimbursment</h2>
				<p class="text-[11px] text-gray-400 font-bold">{dateNotif}</p>
			</div>
			<p class="text-[11px] pl-1 pr-10">
				{#if status === 'accepted'}
					Your Submission "Lorem Ipsum is simply dummy..." with the "with a total cost of 50,000 has
					been
					<span class="font-bold">paid</span>, please check your BRIMO application, Thankyou
				{:else if status === 'proses'}
					Your Submission will be
					<span class="font-bold">paid</span> according to the reimbursment schedule. Please Wait.
				{:else}
					Your Submission "description" has been
					<span class="font-bold">rejected</span>, please check for details.
				{/if}
			</p>
		</div>
	</div>
{:else if Typestatus === 'sickness'}
	<div class="p-2 w-full flex gap-3 min-h-[50px] bg-white">
		<div class="w-1/4 p-1">
			<div class="w-full p-3 rounded-md relative flex justify-center items-center bg-base">
				{#if status === 'accepted'}
					<img class="w-full" src="/img/icon/pillsIcon.svg" alt="" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500">
						<span class="iconify text-white" data-icon="material-symbols:check-small" />
					</div>
				{:else if status === 'proses'}
					<img class="w-full" src="/img/icon/pillsIcon.svg" alt="" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500">
						<span
							class="iconify text-white"
							data-icon="material-symbols:line-end-arrow-notch-rounded"
						/>
					</div>
				{:else if status === 'rejected'}
					<img class="w-full" src="/img/icon/pillsIcon.svg" alt="" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500">
						<span class="iconify text-white" data-icon="ic:outline-close" />
					</div>
				{/if}
			</div>
		</div>
		<div class="w-full">
			<div class="w-full flex p-1 justify-between">
				<h2 class="text-sm font-bold">Sickness</h2>
				<p class="text-[11px] text-gray-400 font-bold">{dateNotif}</p>
			</div>
			<p class="text-[11px] pl-1 pr-10">
				{#if status === 'accepted'}
					Your Submission has been
					<span class="font-bold">approved</span> by the Superior.
				{:else if status === 'proses'}
					Your Submission is being
					<span class="font-bold">reviewed</span> to the Superior for the approval process, please wait.
				{:else}
					Your Submission has been
					<span class="font-bold">rejected</span>, please confirm with your Superior.
				{/if}
			</p>
		</div>
	</div>
{:else if Typestatus === 'overtime'}
	<div class="p-2 w-full flex gap-3 min-h-[50px] bg-white">
		<div class="w-1/4 p-1">
			<div class="w-full p-3 rounded-md relative flex justify-center items-center bg-base">
				{#if status === 'accepted'}
					<span class="iconify text-3xl" data-icon="noto:alarm-clock" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500">
						<span class="iconify text-white" data-icon="material-symbols:check-small" />
					</div>
				{:else if status === 'proses'}
					<span class="iconify text-3xl" data-icon="noto:alarm-clock" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500">
						<span
							class="iconify text-white"
							data-icon="material-symbols:line-end-arrow-notch-rounded"
						/>
					</div>
				{:else if status === 'rejected'}
					<span class="iconify text-3xl" data-icon="noto:alarm-clock" />
					<div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500">
						<span class="iconify text-white" data-icon="ic:outline-close" />
					</div>
				{/if}
			</div>
		</div>
		<div class="w-full">
			<div class="w-full flex p-1 justify-between">
				<h2 class="text-sm font-bold">Overtime</h2>
				<p class="text-[11px] text-gray-400 font-bold">{dateNotif}</p>
			</div>
			<p class="text-[11px] pl-1 pr-10">
				{#if status === 'accepted'}
					Your Submission has been
					<span class="font-bold">approved</span> by the Superior.
				{:else if status === 'proses'}
					Your Submission is being
					<span class="font-bold">reviewed</span> to the Superior for the approval process, please wait.
				{:else}
					Your Submission has been
					<span class="font-bold">rejected</span>, please confirm with your Superior.
				{/if}
			</p>
		</div>
	</div>
{/if}

<style lang="postcss">
</style>
