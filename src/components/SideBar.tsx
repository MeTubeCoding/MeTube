import React from 'react'
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb'
import { FaRegCompass } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineBolt
} from 'react-icons/md'

let isOpen = true

function SideBar() {
  const mainpart = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: 'Home',
      href: '/'
    },
    {
      icon: <FaRegCompass className="text-xl" />,
      name: 'Explore',
      href: '/explore'
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: 'Shorts',
      href: '/shorts'
    },
    {
      icon: <MdSubscriptions className="text-xl" />,
      name: 'Subscriptions',
      href: '/feed/subscriptions'
    }
  ]

  const secondpart = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: 'Library',
      href: '/feed/library'
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: 'History',
      href: '/feed/history'
    },
    {
      icon: <MdOutlineSmartDisplay className="text-xl" />,
      name: 'Your Videos',
      href: '/channel/videos'
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: 'Watch Later',
      href: '/playlist/wa'
    },
    {
      icon: <MdThumbUpOffAlt className="text-xl" />,
      name: 'Liked Videos',
      href: '/playlist/likes'
    }
  ]

  const thirdpart = [
    {
      icon: <MdOutlineBolt className="text-xl" />,
      name: 'Trending',
      href: '/feed/trending'
    },
    {
      icon: <TbMusic className="text-xl" />,
      name: 'Music',
      href: '/musics'
    },
    {
      icon: <TbDeviceGamepad2 className="text-xl" />,
      name: 'Gaming',
      href: '/gaming'
    },
    {
      icon: <GiFilmStrip className="text-xl" />,
      name: 'Films',
      href: '/films'
    }
  ]

  const helppart = [
    {
      icon: <MdSettings className="text-xl" />,
      name: 'Settings',
      href: '/account'
    },
    {
      icon: <MdOutlinedFlag className="text-xl" />,
      name: 'Report history',
      href: '/reporthistory'
    },
    {
      icon: <MdOutlineHelpOutline className="text-xl" />,
      name: 'Help',
      href: ''
    },
    {
      icon: <MdOutlineFeedback className="text-xl" />,
      name: 'Send feedback',
      href: ''
    }
  ]

  return (
    <div
      className={`mt-4 w-2/12 bg-me-darkpurple pr-5 overflow-auto pb-8 sidebar ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <ul className="flex flex-col border-b-2 text-me-yellow">
        {mainpart.map(({ icon, name, href }) => {
          return (
            <li key={name} className={`pl-6 py-3`}>
              <a href={href} className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="flex flex-col border-b-2 text-me-yellow">
        {secondpart.map(({ icon, name, href }) => {
          return (
            <li key={name} className={`pl-6 py-3`}>
              <a href={href} className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="flex flex-col border-b-2 text-me-yellow">
        {thirdpart.map(({ icon, name, href }) => {
          return (
            <li key={name} className={`pl-6 py-3`}>
              <a href={href} className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="flex flex-col border-b-2 text-me-yellow">
        {helppart.map(({ icon, name, href }) => {
          return (
            <li key={name} className={`pl-6 py-3`}>
              <a href={href} className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function toggleBoolean() {
  isOpen = !isOpen
  console.log(isOpen)
}
export default SideBar
