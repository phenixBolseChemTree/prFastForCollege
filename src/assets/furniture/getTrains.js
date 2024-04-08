import { trainsAll } from '../data/trainsAll.js'

// criteria = {from: '', to: '', date: {start: 2024-04-07, end: 2024-04-09}}

const getTrains = (criteria = {}, data = trainsAll) => {
  let filteredData = data

    if (criteria.from) {
      filteredData = trainsAll.filter((train) => train.from === criteria.from)
    }

    if (criteria.to) {
      filteredData = filteredData.filter((train) => train.to === criteria.to)
    }

    if (criteria.date && criteria.date.start && criteria.date.end) {
      filteredData = filteredData.filter((train) => {
        const trainDate = train.date;
        return trainDate >= criteria.date.start && trainDate <= criteria.date.end;
      });
    }
  

  return filteredData
}

export default getTrains;
