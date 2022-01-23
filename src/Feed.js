import React , {useEffect, useState} from 'react';
import Post from './Post'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import './Feed.css'
import {firebaseDb} from './firebase'
import firebase from 'firebase'

function Feed() {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    firebaseDb.collection("posts").onSnapshot((snapshot) => setPosts(
      snapshot.docs.map((doc) => ({
        id:doc.id,
        data:doc.data()
      }))
    ))
  })

  const sendPost = e => {
    e.preventDefault();
    firebaseDb.collection("posts").add({
      name: "John Doe",
      description: "Test",
      message: input,
      photoUrl: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
    
  }
  return  (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type="text" value={input} placeholder="Write a post" onChange={(e => setInput(e.target.value))}></input>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption color="#7005f9" title="Photo" Icon={ImageIcon} />
          <InputOption color="#7005f9" title="Video" Icon={SubscriptionsIcon} />
          <InputOption color="#7005f9" title="Event" Icon={EventNoteIcon} />
        </div>
      </div>
        {posts.map(post => (
          <Post
          key={post.id}
          name={post.data.name}
          description={post.data.description}
          message={post.data.message}
          photoUrl={post.data.photoUrl}
           />
        ))}
    </div>
  )
}

export default Feed;
