<script>
	import Home from '../components/Home.svelte';
	import { Router, Route } from "svelte-routing";
	export let url="";
</script>
<Router {url}>
	<Route path="/" component="{Home}"/>
</Router>