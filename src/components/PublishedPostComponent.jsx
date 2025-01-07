
//import posts from "../data/posts";

import { useEffect } from "react";
const postsUrl = "http://localhost:3000"
useEffect(() => {
    getData()
}, []);
function PublishedPostComponent() {
    function getData() {
        axios
            .get(postsUrl)
            .then((res) => {
                console.log(res.data)
                setFormPost(res.data.data)
            })
            .catch((error) => {
                console.log("error")
            })
            .finally(() => {

            })
    }



    const postList = [...posts];
    //console.log(postList);
    const truePosts = [];
    postList.filter((element) => {
        //console.log(element)
        if (element.published === true) {
            truePosts.push(element);
        }
    });
    //console.log(truePosts);
    return truePosts;
};


export default PublishedPostComponent;