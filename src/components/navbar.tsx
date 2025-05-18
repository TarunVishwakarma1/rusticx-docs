import React from 'react'
import { Navbar } from 'nextra-theme-docs';
import cn from 'clsx'

const PageNavbar = () => {
  return (
    <Navbar
    logo={<b className={cn(
      'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
      '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
      'hover:[mask-position:100%]'
    )}>Rusticx</b>}
    projectLink='https://github.com/TarunVishwakarma1/rustix-orm'
    chatLink="https://x.com/Assassingod5"
    chatIcon={
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 50 50">
        <path fill='currentColor' d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
      </svg>
  }
  />
  )
}

export default PageNavbar