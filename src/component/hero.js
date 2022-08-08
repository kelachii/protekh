import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

let img_url = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/73f94bdad19bfcaa7d3b36dc6f3c72be/CourseraLearners_C_Composition_Hillary_copy.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40'
const Hero = () => {

    const [toggle, setToggle] = useState(false)

    const toggleMenu = (e) => {
        setToggle(!toggle);
    }
    // if (toggle) {
    //     document.body.classList.remove('active-modal')
    // } else {
    //     document.body.classList.add('active-modal')

    // }
    if (toggle) {

        document.body.classList.add('active-modal')
    }
    // else {
    //     document.getElementById('signup').style.display = 'none'
    // }
    return (
        <section className='hero'>
            <section className='hero_banner'>
                <p className='h1'>Learn without limits</p>
                <p>Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                <div className='hero_inner'>
                    <div className='hero_inner_left'>
                        <button className='btn' label='Sign Up' onClick={toggleMenu} >Sign Up</button>
                        {toggle && (

                            <Input />
                        )
                        }
                    </div>
                    <div className='hero_inner_right'>
                        <Button label='Try Protekh For Universities' />
                    </div>
                </div>
            </section>
            <section>
                <img src={img_url} alt='' />
            </section>
        </section>
    )
}

export default Hero