import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardUsers from './CardUsers'
import { useForm } from 'react-hook-form'
import Form from './Form'

const URL = 'https://users-crud1.herokuapp.com/users/'

const UserList = () => {
  const [isData, setIsData] = useState()
  const {register, reset, handleSubmit} = useForm()
  const [isShow, setIsShow] =  useState(false)
  const [objectUpdate , setObjectUpdate] = useState()

  const getData = () => {
    axios.get(URL)
      .then(res => {
        setIsData(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  const createUser = data => {
    axios.post(URL, data)
      .then()
      .catch(err => console.log(err))
      .finally(() => getData())
  }

  const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then()
      .catch(err => console.log(err))
      .finally(() => getData())
  }

  const updateUser = (id, change) => {
    axios.patch(`${URL}${id}/`, change)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
      .finally(() => {
        getData()
        setObjectUpdate()
        setIsShow(false)
      })
      
  }

  const active = () => {
    const obj = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    }
    setIsShow(!isShow)
    reset(obj)
  }

  return (
    <div>
      <button onClick={active} className='button-create btn'>{isShow ? 'Hide Form': 'Create New User'}</button>
      {
        isShow &&
          <Form
            reset={reset}
            register={register}
            handleSubmit={handleSubmit}
            updateUser={updateUser}
            createUser={createUser}
            setIsShow={setIsShow}
            objectUpdate={objectUpdate}
            active={active}
          />
      }
      <div className='list_container'>
        {
          isData?.map(data => (
            <CardUsers
              data={data}
              key={data.id}
              reset={reset}
              deleteUser={deleteUser}
              setIsShow={setIsShow}
              setObjectUpdate={setObjectUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default UserList