import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useRef } from 'react'
import { toast } from 'react-toastify'

// import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ModalComponent = ({ open, setOpen, modalContent }) => {
  const { from, to, date, time, price } = modalContent
  // const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setOpen(false)

    toast('Билет куплен, с вами свяжется наш оператор по последней указанной вами почте!', { type: 'success' })
    form.current.reset()
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="text-[30px]">Ваш билет</h3>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-gray-700">
              Откуда: <span className="text-black text-[20px]">{from}</span>
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-gray-700">
              Куда: <span className="text-black text-[20px]">{to}</span>
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-gray-700">
              Дата посадки: <span className="text-black text-[20px]">{date}</span>
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-gray-700">
              Время посадки: <span className="text-black text-[20px]">{time}</span>
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="text-gray-700 pb-4">
              Цена: <span className="text-black text-[20px]">{price}</span>
            </p>
          </Typography>
          <hr className="pb-4" />
          <form className="" ref={form} onSubmit={sendEmail}>
            <label htmlFor="email">
              Укажите вашу почту, наш сотрудник уточнит и напишет вам на почту
            </label>
            <input
              className="w-[315px] m-2 p-2 rounded-lg border border-black"
              placeholder="Укажите свою почту"
              id="email"
              type="email"
              name="email"
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Заказать билет и отправить на почту оператору для оплаты и получения билета.
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent
