<script>
    import Navbar from './navbar/navbar.svelte'
    import Footer from './footer/footer.svelte'
    import Blogs from './blog/blogs.svelte'
    async function request_data()
    {
        await axios
            .get(`http://localhost:3000/posts?id=${fil}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    request_data();
</script>
<Navbar/>
<Blogs/>
<Footer/>