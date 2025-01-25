import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
    const params = useParams()
  if (params.chatID) return <h2>Chat : {params.chatID}</h2>;
  else return <h2>Empty Screen</h2>;
}

export default Chat