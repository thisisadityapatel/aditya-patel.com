import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Introduction = () => {
  return (
    <div className="container introDiv portfolioElement">
        <div className="text-center my-5">
            <Image src="/introImage.webp" width={250} height={250} alt={"Aditya Patel Profile Picture"}/>
        </div>
        <p> 
            {"Hey, my name is Aditya Patel and I'm a Computer Science major at"} <a href="https://www.torontomu.ca/about/" className="introLink hover-underline-animation">Toronto Metropolitan University</a> {"in my Sophomore year, planning on graduating by April 2025. An industrious student aspiring to be an amazing Software Engineer."}
        </p>
        <p>
            {"Outside of school, I interned as a Trade Floor Web Developer and Technology Analyst for"} <a href="https://www.gbm.scotiabank.com/en.html" className="introLink hover-underline-animation">Scotiabank</a> {"and am currently looking for Co-op/Internship opportunities starting May 2023."}
        </p>
        <p>
            {"I love talking about Space, Sports (literally any) and about different food options in the Toronto area, I'm also a sucker for a good book or TV Show recommendation - So feel free to shoot me an email - "} <span><a className="hover-underline-animation introLink" href="mailto:adityakdpatel@gmail.com">adityakdpatel@gmail.com</a></span> {" , or set-up some time in my schedule by clicking the calendar below!"}
        </p>
        <div className="introSocials">
            <Link href="https://www.linkedin.com/in/thisisadityapatel/" className="introSocialIconLink" target="_blank"><i className="bi bi-linkedin introIconFont"></i></Link>
            <Link href="https://www.instagram.com/thisisadityapatel/" className="introSocialIconLink" target="_blank"><i className="bi bi-instagram introIconFont"></i></Link>
            <Link href="https://github.com/thisisadityapatel" className="introSocialIconLink" target="_blank"><i className="bi bi-github introIconFont"></i></Link>
            <Link href="mailto:adityakdpatel@gmail.com" className="introSocialIconLink"><i className="bi bi-envelope-fill introIconFont"></i></Link>
            <Link href="https://calendly.com/adityakdpatel/30min" className="introSocialIconLink" target="_blank"><i className="bi bi-calendar2-check introIconFont"></i></Link>
        </div>

        <div className="text-secondary text-center mt-5 mb-2">
            {"👾 Developed and designed by Aditya Patel © 2023"}
        </div>
    </div>
  )
}

export default Introduction
