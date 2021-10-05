<script>
	import Home from '../components/Home.svelte';
	import Blog from '../components/Blog.svelte';
	import { Router, Route } from "svelte-routing";
</script>
<Router>
	<Route path="/" component="{Home}"/>
	<Route path="posts?id=blogposts/9hhel4dfsfe5uo2aev8abq0d7rfpjfugsr5lipo1" component="{Blog}"/>
</Router>