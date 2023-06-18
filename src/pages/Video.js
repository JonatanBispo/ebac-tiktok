import React,{ useRef, useState } from 'react'
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from './components/sidebar/VideoSidebar';
import "./video.css"
import { UTurnLeftRounded } from '@mui/icons-material';

function Video({likes, messages, shares, name, description, music, url}) {
    const videoRef= useRef(null)
    const [play, setPlay] = useState(false)
    function handleStart() {
        if(play){
            videoRef.current.pause()
            setPlay(false)
        }else{
            videoRef.current.play()
            setPlay(true)
        }
        
    }



  return (
    <div className='video'>
       <video className='video__player' 
       ref={videoRef}
       onClick={handleStart}
       loop
       src={url}
       >
        </video> 
      {/*  <iframe src="https://www.youtube.com/embed/UXAZR9UGhgk" 
       className='video__player'  ref={videoRef}
       onClick={handleStart}
       loop></iframe>  */}
       {/* Side bar  */} 
       <VideoSidebar
       likes={likes}
       messages={messages}
       shares={shares} 
      


       />
        
       {/* Footer */} 
       <VideoFooter
        name={name}
        description={description}
        music={music}
       />
       
    </div>
  )
}

export default Video