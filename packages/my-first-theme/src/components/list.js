import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const list = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <div>
            <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    return (
                        <Link key={item.id} link={post.link}>
                            {post.title.rendered}
                            <br />
                        </Link> 
                    )
                })}        
            </Items>
        </div>
    )
}

const Items = styled.div`
    & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`;

export default connect(list)
