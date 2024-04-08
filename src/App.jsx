import { useEffect, useState } from 'react'
import './App.css'
import Select from 'react-select'
import { cities } from './assets/data/other'
import getTrains from './assets/furniture/getTrains.js'
// import getTrains from './assets/furniture/getTrains'

function App() {
  const [citiesSelectParam, setCitiesSelectParam] = useState({ from: '', to: '' })
  const [trainsView, setTrainsView] = useState(getTrains())

  useEffect(() => {
    setTrainsView(getTrains(citiesSelectParam))
    // console.log('trainsView', trainsView)
    // console.log('trainsView', trainsView)
    // console.log('citiesSelectParam', citiesSelectParam);
  }, [citiesSelectParam])

  return (
    <>
      {JSON.stringify(citiesSelectParam)}
      <h1 className="text-3xl font-bold underlin">Текст главный</h1>
      <p>Текст с пояснением что может сделать пользователь на сайте</p>
      <div className="search w-[400px] h-[400px] bg-red-400 flex flex-col">
        <div className="flex flex-row">
          <div>
            <label className="text-20">Откуда</label>
            <Select
              onChange={(selectedOption) => {
                setCitiesSelectParam({ ...citiesSelectParam, from: selectedOption.value })
              }}
              options={cities}
              placeholder={'откуда'}
            />
          </div>
          <div>
            <label>Куда</label>
            <Select
              onChange={(selectedOption) => {
                setCitiesSelectParam({ ...citiesSelectParam, to: selectedOption.value })
              }}
              options={cities}
              placeholder={'куда'}
            />
          </div>
        </div>
      </div>
      <div className="view-content">
        {trainsView.map((train) => {
          return <div key={train.id}>{train.from}</div> // Добавлены фигурные скобки для вставки значения train.from
        })}
      </div>
    </>
  )
}

export default App
