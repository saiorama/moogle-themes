<script>
    import Post from "../post/post.svelte";
    import Data from "../../data/index.js";
    import moment from 'moment';
    // const post_show = () => {
    //     Data.map((ele, index) => {
    //                 return <Post title={ele.post_title} author={ele.author} time={getMoment(ele.published_unix_ts).fromNow()} pos={index} url={img[index]} />

    //             })
    // }
    let img = [
        "https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg",
        "http://cdn2.hubspot.net/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg",
        "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg",
        "https://elearningindustry.com/wp-content/uploads/2013/09/how-to-use-blogs-in-the-classroom.jpg",
        "https://colmanandcompany.com/blog/wp-content/uploads/2014/04/blog-word-cloud1.jpg",
        "https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png",
        "https://i0.wp.com/digest.myhq.in/wp-content/uploads/2018/07/blog-1-1.jpg?resize=1000%2C675&ssl=1",
        "https://www.anita.com/blog/us/wp-content/uploads/sites/3/2016/02/blog-success.jpg",
        "https://cdn.shopify.com/s/files/1/0070/7032/files/blog_examples_hero.jpg?v=1528925017",
    ];
    const sort_posts = () => {
        return Data.sort((a, b) => {
            return b.published_unix_ts - a.published_unix_ts;
        });
    };
    sort_posts();
    function getMoment(UTS) {
        let date = new Date(UTS * 1000);
        //check if UTS is already in milliseconds
        //if so, don't multiply by 1000
        if (Math.floor(UTS / Date.now() + 0.5) === 1) {
            date = new Date(UTS);
        }
        return moment(date);
    }
</script>

<div class="container d-flex flex-wrap justify-content-evenly">
    {#each Data as ele, i}
        <Post title={ele.post_title} author={ele.author} pos={i} time="{getMoment(ele.published_unix_ts).fromNow()}" url="{img[i]}" fil="{ele.filepath}"/>
    {/each}
</div>
