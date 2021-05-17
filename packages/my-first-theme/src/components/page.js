// File: /packages/my-first-theme/src/components/post.js

import React from "react"
import { connect } from "frontity"

const Page = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]   // data.type will be page instead of post now!

    return (
        <div>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>        
        </div>
    )
}

export default connect(Page)
