import React , {useState} from 'react';
import Post from './Post'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import './Feed.css'

function Feed() {
  const [posts, setPosts] = useState([])
  const sendPost = e => {
    e.preventDefault();
  }
  return  (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type="text" placeholder="Write a post"></input>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption color="#7005f9" title="Photo" Icon={ImageIcon} />
          <InputOption color="#7005f9" title="Video" Icon={SubscriptionsIcon} />
          <InputOption color="#7005f9" title="Event" Icon={EventNoteIcon} />
        </div>
      </div>
      {posts.map(post => {
        <Post />
      })}
      <Post name="John" description="Lorem Ipsum" message="Hey there!" photoUrl=""/>
    </div>
  )
}

export default Feed;
