import { useRef } from 'react'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  // const [formData, setFormData] = useState({ post: '', name: '' })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const form = useRef()

  const sendData = (e) => {
    e.preventDefault()

    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    form.current.reset()

    navigate('/')
  }

  // localStorage.setItem('myCat', 'Tom')

  return (
    <div className="flex justify-center items-center h-[500px]" id="login" data-testid="login">
      <div className="bg-gray">
        <h3 className="text-[30px]">Регистрация/Авторизация</h3>

        <form className="w-[400px]" ref={form} onSubmit={sendData}>
          <label htmlFor="email">
            Пожалуйста заполните поля ниже
          </label>
          <input
            className="w-[315px] m-2 p-2 rounded-lg border border-black"
            onChange={() => setEmail(form.current.email.value)}
            placeholder="Укажите свою почту"
            id="email"
            type="email"
            name="email"
            required
          />
          <input
            className="w-[315px] m-2 p-2 rounded-lg border border-black"
            onChange={() => setPassword(form.current.password.value)}
            placeholder="Укажите пароль"
            id="password"
            type="text"
            name="password"
            required
          />
          <Button className="w-[320px]" variant="contained" color="primary" type="submit">
            Отправить
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
