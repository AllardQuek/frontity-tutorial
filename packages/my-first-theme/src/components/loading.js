import React from "react"
import { styled, keyframes } from "frontity"

const Loading = () => <Spinner />


const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
    border: 12px solid #eee;
    border-top: 12px solid steelblue;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite
`

export default Loading    // Doesn't need to access the state so don't need to pass it the connect higher order component 
