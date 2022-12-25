import React from 'react'
import Button from '../home/Button'
import Headings from './Headings'

const ActivityContainer = () => {
  return (
    <div className="border hover:border-red min-w-[40%]  p-5 mt-5 bg-[#EAFFE4] rounded-xl">
    <Headings head="Activity" body="have a bone fire with your close friends"/>
    <Headings head="Participants" body="1" />
    <Headings head="Price" body="0.1" />
    <Headings head="Accessibility" body="0.3" />
    <Button text="Next"/>
    </div>
  )
}

export default ActivityContainer