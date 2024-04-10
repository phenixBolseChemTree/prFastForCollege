import { useEffect, useState } from 'react'
import Select from 'react-select'
import { cities } from './assets/data/other'
import getTrains from '../assets/furniture/getTrains.js'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import ModalComponent from './components/Modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PageViewTrains = () => {
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState(false)
  const [citiesSelectParam, setCitiesSelectParam] = useState({ from: '', to: '' })
  const [trainsView, setTrainsView] = useState(getTrains())

  const handleOpenRow = (train) => {
    console.log('train', train)
    setModalContent(train)
    setOpen(true)
  }

  useEffect(() => {
    setTrainsView(getTrains(citiesSelectParam))
  }, [citiesSelectParam])

  return (
    <>
      <h1 className="text-3xl font-bold underlin">Покупка Билетов</h1>
      <ModalComponent open={open} setOpen={setOpen} modalContent={modalContent} />
      <p className="pt-3">
        Пожалуйста выберете билет который хотите приобрести, для поиска вы можете воспользоваться
        нашим фильтром
      </p>
      <div className="flex justify-between items-center flex-col">
        <div className="justify-between w-[600px] items-center p-3 flex flex-row">
          <Select
            className="p-4 w-60"
            onChange={(selectedOption) => {
              setCitiesSelectParam({ ...citiesSelectParam, from: selectedOption.value })
            }}
            options={cities}
            placeholder={'откуда'}
          />
          {/* <Button variant="contained" color="primary"></Button> */}
          <Select
            className="p-4 w-60"
            // value={}
            onChange={(selectedOption) => {
              setCitiesSelectParam({ ...citiesSelectParam, to: selectedOption.value })
            }}
            options={cities}
            placeholder={'куда'}
          />
        </div>
      </div>
      <div className="view-content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: '20%' }}>
                  Откуда
                </TableCell>
                <TableCell align="center" sx={{ width: '20%' }}>
                  Куда
                </TableCell>
                <TableCell align="center" sx={{ width: '20%' }}>
                  Дата отправки
                </TableCell>
                <TableCell align="center" sx={{ width: '20%' }}>
                  Время отправки
                </TableCell>
                <TableCell align="center" sx={{ width: '20%' }}>
                  Стоимость билета
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainsView.map((train) => (
                <TableRow
                  className="hover:bg-gray-200"
                  onClick={() => handleOpenRow(train)}
                  key={train.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{train.from}</TableCell>
                  <TableCell align="center">{train.to}</TableCell>
                  <TableCell align="center">{train.date}</TableCell>
                  <TableCell align="center">{train.time}</TableCell>
                  <TableCell align="center">{train.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <ToastContainer />
    </>
  )
}

export default PageViewTrains
