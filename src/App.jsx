import { useEffect, useState } from 'react'
import './App.css'
import Select from 'react-select'
import { cities } from './assets/data/other'
import getTrains from './assets/furniture/getTrains.js'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

function App() {
  const [citiesSelectParam, setCitiesSelectParam] = useState({ from: '', to: '' })
  const [trainsView, setTrainsView] = useState(getTrains())

  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')

  const handleExchange = () => {
    const temp = fromValue
    setFromValue(toValue)
    setToValue(temp)
  }

  useEffect(() => {
    setTrainsView(getTrains(citiesSelectParam))
  }, [citiesSelectParam])

  return (
    <>
      <h1 className="text-3xl font-bold underlin">Покупка Билетов</h1>
      <p className="pt-3">
        Пожалуйста выберете билет который хотите приобрести, для поиска вы можете воспользоваться
        нашим фильтром
      </p>
      <div className="flex justify-between items-center flex-col">
        <div className="justify-between w-[600px] bg-black items-center p-3 flex flex-row">
          <Select
            className="p-4 w-60"
            onChange={(selectedOption) => {
              setCitiesSelectParam({ ...citiesSelectParam, from: selectedOption.value })
            }}
            options={cities}
            placeholder={'откуда'}
          />
          <Button onClick={() => handleExchange()} variant="contained" color="primary">
            🌀
          </Button>
          <Select
            className="p-4 w-60"
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
    </>
  )
}

export default App
