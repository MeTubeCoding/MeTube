import React from 'react'
import './HomePage.css'
import SResult, { SIResult } from '../components/Result/SResult'

export type SIResults = Array<SIResult>

interface Props {
  shorts: SIResults
  visible: boolean
}

const HomePage = (props: Props): JSX.Element => {
  return (
    <div className="max-h-screen">
      <div className="flex justify-center items-center max-w-3xl mx-auto">
        <div className="mt-[15%] video">
          <div>
            {props.shorts.map(short => (
              <SResult key={short.id} short={short} visible={props.visible} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
