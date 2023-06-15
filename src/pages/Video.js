import React,{ useRef, useState } from 'react'
import "./video.css"

function Video() {
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
      {/*  <video className='video__player' 
       ref={videoRef}
       onClick={handleStart}
       loop
       src='https://vm.tiktok.com/ZM2SNWWgB/'
       >
       </video> */}
       <iframe src="https://www.youtube.com/embed/UXAZR9UGhgk"  className='video__player'  ref={videoRef}
       onClick={handleStart}
       loop></iframe>

       
    </div>
  )
}

export default Video