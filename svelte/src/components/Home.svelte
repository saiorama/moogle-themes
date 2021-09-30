<script>
    import Navbar from "./navbar/navbar.svelte";
    import Footer from "./footer/footer.svelte";
    import Posts from "./posts/posts.svelte";
</script>

<Navbar />
<br />
<br />
<br />
<div class="container text-center w-100  my-5">
    <div class="container headline">
        <h1 class="text-white text-center heading">
            Read the best blogs about your favorite blogs
        </h1>
    </div>
    <p class="text-white-50 text-center fs-1">
        ❝Reading is essential for those who seek to rise above the ordinary.❞
    </p>
    <p class="text-white-50 text-center">- Jim Rohn</p>
    <a href="" class="btn btn-outline-info text-center my-5 btn-rounded">Sign Up today !</a>
</div>
<Posts />
<Footer />
