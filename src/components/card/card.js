import React from 'react'
import './card.css'
import sking from './sking.webp'
import { decrement, increment } from '../likes/likesSlice'
import { useDispatch, useSelector } from 'react-redux'


export function Card() {

    const likes = useSelector((state) => state.likes.value);
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className='post-likes'>
                <button onClick={() => dispatch(increment())}>Upvote</button>
                <p>{likes}</p>
                <button onClick={() => dispatch(decrement())}>Downvote</button>
            </div>

            <div className='post-content'>
                <p className='post-heading'>This is the post titlegfdgfdgdgdfgfdgdfgdfgdgfdgdfg</p>
                <img className='post-img' src={sking}></img>
            </div>

            <div className='post-footer'>
                <p className='post-posted-by'>Posted by: </p>
                <p className='post-ago'>5 hours ago</p>
                <p className='post-comments'>45 comments</p>
            </div>
        </div>
    )
}

