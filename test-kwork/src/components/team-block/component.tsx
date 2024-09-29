import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

const TeamBlock = ({ props }) => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <div className='flex items-center h-full justify-center ' onClick={() => set(state => !state)}>
            <a.div className='absolute max-w-[500px] max-h-[500px] w-[332px] h-[377px] cursor-pointer will-change-transform'
                style={{
                    opacity: opacity.to(o => 1 - o),
                    transform
                }}>
                <div className='p-6 flex items-center flex-col space-y-2 bg-white rounded-3xl w-full h-full' >
                    <div className='rounded-full h-[223px] w-[223px]'>
                        <img src={props.img} alt={props.job} className='w-full rounded-full object-cover object-fill ' />
                    </div>
                    <div>
                        <h2 className='text-black'>{props.name}</h2>
                    </div>
                    <div>
                        <p className='text-neutral-400'>{props.job}</p>
                    </div>
                </div>
            </a.div>
            <a.div className='absolute max-w-[500px] max-h-[500px] w-[332px] h-[377px] cursor-pointer will-change-transform'
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                }}>
                <div className='p-6 flex items-center flex-col space-y-2 bg-white rounded-3xl w-full h-full'>
                    <div>
                        <h2 className='text-black'>Обо мне</h2>
                    </div>
                    <div>
                        <p className='text-neutral-400'>{props.describe}</p>
                    </div>
                </div>
            </a.div>
        </div>
    )
}

export default TeamBlock
