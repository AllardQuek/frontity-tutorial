// File: /packages/my-first-theme/src/components/post.js

import React from "react"
import { connect, Head } from "frontity"

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]   // data.type will be page instead of post now!
    const Html2React = libraries.html2react.Component

    return (
        <div>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered}/>
            </Head>

            <h2>{post.title.rendered}</h2>
            {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>         */}
            <Html2React html={post.content.rendered} />
        </div>
    )
}

export default connect(Page)
