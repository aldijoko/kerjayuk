<script>
	import CardNotif from '$lib/component/CardNotif.svelte';
	import { fly } from 'svelte/transition';

	const listNotf = [
		{ date: 'Today', typeStatus: 'reimbursment', status: 'accepted', newNotif: true },
		{ date: 'Yesterday', typeStatus: 'reimbursment', status: 'rejected', newNotif: false },
		{ date: '2022-10-06', typeStatus: 'reimbursment', status: 'proses', newNotif: true },
		{ date: '2022-10-06', typeStatus: 'sickness', status: 'accepted', newNotif: true },
		{ date: '2022-10-06', typeStatus: 'sickness', status: 'rejected', newNotif: false },
		{ date: '2022-10-06', typeStatus: 'sickness', status: 'proses', newNotif: false },
		{ date: '2022-10-06', typeStatus: 'overtime', status: 'accepted', newNotif: true },
		{ date: '2022-10-06', typeStatus: 'overtime', status: 'rejected', newNotif: false },
		{ date: '2022-10-06', typeStatus: 'overtime', status: 'proses', newNotif: false }
	];
</script>

<!-- <div class="text-red-500">ini layout</div> -->
<div class="w-full pt-16 pb-20" out:fly|local={{ x: 100, duration: 500 }}>
	{#each listNotf as ln}
		<CardNotif
			dateNotif={ln.date}
			Typestatus={ln.typeStatus}
			status={ln.status}
			newNotif={ln.newNotif}
		/>
	{/each}
</div>

<style lang="postcss">
</style>
