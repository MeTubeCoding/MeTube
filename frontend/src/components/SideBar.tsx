import React, { useRef } from 'react'
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

interface SideBarProps {
  visible: boolean
}

function SideBar(props: SideBarProps) {
  const bar = useRef<HTMLDivElement>(null)

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
      name: 'For You',
      href: '/feed/trending'
    },
    {
      icon: <MdOutlineBolt className="text-xl" />,
      name: 'Live',
      href: '/live'
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
      className={`flex fixed h-screen z-10
      pt-3 mr-4 bg-me-darkpurple ${props.visible ? 'w-[20%]' : 'w-1/12'}`}
    >
      <div
        className={`bg-me-darkpurple overflow-auto sidebar ${
          props.visible ? 'hidden' : 'block'
        }`}
        ref={bar}
      >
        <ul className="flex flex-col text-me-yellow p-4">
          {mainpart.map(({ icon, name, href }) => {
            return (
              <li
                key={name}
                className={`hover:bg-me-lightpurple rounded-lg py-4`}
              >
                <a href={href} className="flex flex-col items-center gap-2">
                  {icon}
                  <span className="text-xs tracking-wider">{name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className={`bg-me-darkpurple pr-5 overflow-auto pb-14 scrollbar-hide sidebar w-full px-4 ${
          props.visible ? 'block' : 'hidden'
        }`}
        ref={bar}
      >
        <ul className="flex flex-col border-b-2 py-4 text-me-yellow">
          {mainpart.map(({ icon, name, href }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-me-lightpurple rounded-lg`}
              >
                <a href={href} className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="flex flex-col border-b-2 py-4 text-me-yellow">
          {secondpart.map(({ icon, name, href }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-me-lightpurple rounded-lg`}
              >
                <a href={href} className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="flex flex-col border-b-2 py-4 text-me-yellow">
          {thirdpart.map(({ icon, name, href }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-me-lightpurple rounded-lg`}
              >
                <a href={href} className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="flex flex-col py-4 text-me-yellow">
          {helppart.map(({ icon, name, href }) => {
            return (
              <li
                key={name}
                className={`pl-6 py-3 hover:bg-me-lightpurple rounded-lg`}
              >
                <a href={href} className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
