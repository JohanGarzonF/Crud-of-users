import React from 'react'

const CardUsers = ({data, deleteUser, reset,setIsShow, setObjectUpdate}) => {

  const changeData = () => {
    const obj = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      birthday: data.birthday,
    }
    setIsShow(true)
    reset(obj)
    setObjectUpdate(data)
  }

  return (
    <article className='card_users'>
      <div className='card_info'>
        <h2>{`${data.first_name} ${data.last_name}`}</h2>
        <ul>
          <li>{data.email}</li>
          <li>{data.password}</li>
          <li>{data.birthday}</li>
        </ul>
      </div>
      <div className='btn_container'>
        <button onClick={() => changeData()} className='blue'><i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={() => deleteUser(data.id)} className='red'><i className="fa-solid fa-trash"></i></button>
      </div>
    </article>
  )
}

export default CardUsers