import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'
import {rightImg, watchImg} from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(()=>{
      gsap.to('#title',{
        scrollTrigger:{
          trigger:'#highlights',
          start:'top 80%',
          end:'top 50%',
          scrub:1,
          markers:true
        },
        opacity:1,
        y:0,
        duration:1.5,
      })
      gsap.to('.link',{
        scrollTrigger:{
          trigger:'#highlights',
          start:'top 80%',
          end:'top 50%',
          scrub:1,
          markers:true
        },
        opacity:1,
        y:0,
        stagger:0.2,
        ease:'power2.out',
        duration:1.5,
      })
  },[])


  return (
    <section id="highlights" className="bg-zinc-900 common-padding h-full py-16 w-screen overflow-hidden">
      <div className="screen-max-width">
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='section-heading'>Get the Highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link  '>Watch The Film
              <img src={watchImg} alt="" className='ml-2' />
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link  '>Watch The Event
              <img src={rightImg} alt="" className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
