import { Transition } from '@headlessui/react'
import React, { useState } from 'react'

interface Props {
  width?: string
  slider?: string
  background?: string
  children: React.ReactElement[]
}

const TabList: React.FC<Props> = ({ children, slider, background, width }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const sliderLength = 100 / children.length
  const left = 100 * selectedIndex

  return (
    <div>
      <div className={'relative mx-auto max-w-' + width}>
        <div className={'flex text-center' + ' bg-' + background}>
          {children.map((child, index) => (
            <div
              className='flex-1 px-4 py-4'
              onClick={() => {
                setSelectedIndex(index)
              }}
            >
              {child.props.title}
            </div>
          ))}
        </div>
        <div
          className={'absolute duration-500 ease-in-out h-1 b-0 bg-' + slider}
          style={{
            width: sliderLength + '%',
            transform: `translateX(${left}%)`,
          }}
        ></div>
        <div className='flex'>
          {children.map((child, index) => (
            <Transition
              as='div'
              className='w-full absolute text-center'
              show={selectedIndex === index}
              enter='transition-opacity duration-300'
              enterFrom='opactity-0'
              enterTo='opacity-100'
              entered='opactity-100'
              leave='transition-opacity duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              {child}
            </Transition>
          ))}
        </div>
      </div>
    </div>
  )
}

TabList.defaultProps = {
  width: 'md',
  slider: 'green-500',
  background: 'white',
}

export default React.memo(TabList)
