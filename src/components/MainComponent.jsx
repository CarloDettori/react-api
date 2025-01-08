import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import MyForm from "./MyForm";
import axios from "axios"


// const bestPost = {
//     id: 2,
//     title: "Carlo lorem ipsum",
//     image: 'https://picsum.photos/600/400',
//     content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
//     tags: ["js", "css"],
// };

const postsUrl = "http://localhost:3000"
function MainComponent() {
    const [publishedPosts, setPublishedPosts] = useState([])
    useEffect(() => {
        getData()
    }, []);
    //console.log(publishedPosts)
    function getData() {
        axios
            .get(postsUrl)
            .then((res) => {
                console.log(res.data)
                setPublishedPosts(res.data.data)
            })
            .catch((error) => {
                console.log("error")
            })
            .finally(() => {

            })
    }


    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    {publishedPosts.map((post) => (
                        <CardComponent key={`card-${post.id}`} element={post} />
                    ))}

                </div>
                {/* <MyForm tags={tagList} /> */}
            </main>

            {/* <aside>
                <CardComponent key={`best-card-${bestPost.id}`} element={bestPost} />
            </aside> */}
        </>
    )
}

export default MainComponent;