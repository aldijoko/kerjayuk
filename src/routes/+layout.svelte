<script>
	import HomeFooter from '$lib/component/footer/HomeFooter.svelte';
	import HomeHeader from '$lib/component/header/HomeHeader.svelte';
	import '../app.css';
</script>

<HomeHeader />
<slot />
<HomeFooter />
