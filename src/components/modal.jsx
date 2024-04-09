import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Input from '@mui/material/Input'

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

const BasicModal = ({ open, setOpen, modalContent }) => {
  const { from, to, date, time, price } = modalContent
  console.log('modalContent: ', modalContent.from)
  // const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h3 className='text-[30px]'>Ваш билет</h3>
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
            <p className="text-gray-700">
              Цена: <span className="text-black text-[20px]">{price}</span>
            </p>
          </Typography>
          <from>
            <label>Укажите вашу почту, наш сотрудник уточнит и напишет вам на почту</label>
            <Input />
            {/* <label>
              C вами свяжется наш сотрудник по указанной почте (я просто напишу вам что то на почту)
            </label> */}
            <Button variant="text" type="submit" color="primary">
              Заказать билет
            </Button>
          </from>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
