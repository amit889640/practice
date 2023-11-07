


const obj = [
  { Time:"2022-08-23 7:54:00"},
  { Time:"2022-08-23 7:55:00"},
  { Time:"2022-08-23 7:56:00"},
  { Time:"2022-08-23 7:58:00"},
  { Time:"2022-08-23 7:60:00"},
  ]

function sortByTime(list, sortType = 1, timeVarName = 'Time') {
    if (!list.length) {
        return false;
    }
    list.sort((o1, o2) => { return moment(o2[timeVarName]).isAfter(moment(o1[timeVarName])) ? (-1*sortType):sortType   });
    return list;
}



// conver in particular format

list.map(obj => obj[timeVarName] = moment(obj[timeVarName]).format("YYYY-MM-DD HH:mm:ss"))
// console.log(list);

