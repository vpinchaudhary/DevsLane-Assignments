import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserData from './UserData'

interface Props {}

const RandomUserList: React.FC<Props> = (props) => {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState<any>([])
  const [show, setShow] = useState(true)
  useEffect(() => {
    axios
      .get(
        'https://randomuser.me/api/?page=' +
          page +
          '&results=10&inc=name,email,id,picture,dob,nat'
      )
      .then((response) => {
        setUsers(response.data.results)
      })
    if (page === 1) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [page])

  return (
    <div className='relative bg-gray-200'>
      <div className='xl:hidden sticky bg-white shadow-lg top-0 px-10 py-4 flex justify-between'>
        <button
          className={
            show
              ? 'bg-blue-300 px-8 py-4 rounded-lg hover:bg-blue-600'
              : 'invisible'
          }
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className='bg-blue-300 px-8 py-4 rounded-lg hover:bg-blue-600'
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <div className='py-8'>
        <button
          className={
            show
              ? 'hidden xl:block fixed top-1/2 ml-24 rounded-full p-3 duration-500 ease-in-out hover:bg-gray-400'
              : 'invisible'
          }
          onClick={() => setPage(page - 1)}
        >
          <img
            className='h-20 w-20 object-contain'
            src='https://image.flaticon.com/icons/png/128/860/860790.png'
            alt=''
          />
        </button>
        <button
          className='hidden xl:block fixed top-1/2 right-0 mr-24 rounded-full p-3 duration-500 ease-in-out hover:bg-gray-400'
          onClick={() => setPage(page + 1)}
        >
          <img
            className='h-20 w-20 object-contain'
            src='https://image.flaticon.com/icons/png/128/709/709586.png'
            alt=''
          />
        </button>
        <div className='flex-1'>
          <h1 className='text-center text-3xl font-semibold'>List of Users</h1>
          {users.map((user: any) => (
            <UserData
              name={user.name}
              age={user.dob.age}
              email={user.email}
              image={user.picture.large}
              nat={user.nat}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

RandomUserList.defaultProps = {}

export default React.memo(RandomUserList)
