import { trainsAll } from '../data/trainsAll.js'

const getTrains = (criteria = {}, data = trainsAll) => {
  let filteredData = data

    if (criteria.from) {
      filteredData = trainsAll.filter((train) => train.from === criteria.from)
    }

    if (criteria.to) {
      filteredData = filteredData.filter((train) => train.to === criteria.to)
    }

  return filteredData
}

// console.log(getTrains())

export default getTrains;
