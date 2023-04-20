import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { useOnSearch } from '../components/useOnSearch'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import SResult, { SIResult } from '../components/Result/SResult'

export type SIResults = Array<SIResult>
interface Props {
  shorts: SIResults
  visible: boolean
}

const HomePage = (props: Props): JSX.Element => {
  const navigate = useNavigate()

  const { onSearch } = useOnSearch()

  const verify = () => {
    navigate('/videopage')
  }

  const toggleSideBarVisibility = () => {
    // setIsSideBarVisible((prevState) => !prevState);
  }

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}></div>
      <div className="flex justify-center items-center max-w-3xl mx-auto">
        <div className="mt-[15%] video">
          <div>
            {props.shorts.map(short => (
              <SResult key={short.id} short={short} visible={props.visible} />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-[10%]">
        <button
          onClick={verify}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#a45d2b'
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} size="4x" />
        </button>
      </div>
    </div>
  )
}

export default HomePage
