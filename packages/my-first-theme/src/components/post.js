// File: /packages/my-first-theme/src/components/post.js

import React from "react"
import { connect, styled, Head } from "frontity"
import dayjs from "dayjs"

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const formmattedDate = dayjs(post.date).format("DD MMMM YYYY")
    const Html2React = libraries.html2react.Component

    return (
        <div>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered}/>
            </Head>

            <h2>{post.title.rendered}</h2>
            <PostInfo>
                <p>
                    <strong>Posted: </strong>
                    {formmattedDate}
                </p>
                <p>
                    <strong>Author: </strong>
                    {author.name}
                </p>
            </PostInfo>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>         */}
            <Html2React html={post.content.rendered} />
        </div>
    )
}

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`;

export default connect(Post)
