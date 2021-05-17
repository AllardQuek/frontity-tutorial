// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect } from "frontity" 
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"


const Root = ({ state }) => {
  const data = state.source.get(state.router.link);    // Get the data from whichever route we go

  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/page/2">More posts</Link>
          <br />
          <Link link="/about-us">About us</Link>
      </nav>
      <hr />
      <main>
          <Switch>
              <List when={data.isArchive} />
              <Post when={data.isPost}>This is a post</Post>
              <Post when={data.isPage}>This is a page</Post>
          </Switch>
      </main>
    </>
  )
}

export default connect(Root)    // connect is a higher order component that takes a React component as an argument