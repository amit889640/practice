// //  moment import from
// //   "moment";

// import moment  from "moment";

// // const obj = [
// //   {Time:"2021-12-07 12:37:00"},
// //   {Time:"2024-08-23 7:56:00"},
// //   {Time:"2022-08-23 3:54:00"},
// //   { Time:"2022-08-23 7:54:00"},
// //   {Time:"2022-12-07 12:38:00"},
// //   { Time:"2022-08-23 7:54:00"},
// //   { Time:"2022-08-23 7:56:00"},
// //   { Time:"2022-08-23 7:54:00"},
// //   {Time:"2022-08-23 7:55:00"},
// //   { Time:"2022-08-23 7:55:00"},
// //   { Time:"2022-08-23 7:55:00"},
// //   ]
  
// // const obj = [
// //   {
// //     RunId: 2180976,
// //     Time: "2022-12-07 12:37:00",
// //     Latitude: 43.13007,
// //     Longitude: -76.14135,
// //     Status: "Arrived At PickUp",
// //   },
// //   {
// //     RunId: 2180976,
// //     Time: "2022-12-07 12:38:00",
// //     Latitude: 43.13007,
// //     Longitude: -76.14135,
// //     Status: "Onboard",
// //   },
// //   {
// //     RunId: 2180976,
// //     Time: "2022-12-07 12:46:00",
// //     Latitude: 43.13007,
// //     Longitude: -76.14135,
// //     Status: "Arrived At Destination",
// //   },
// //   {
// //     RunId: 2180976,
// //     Time: "2022-12-07 12:46:00",
// //     Latitude: 43.13007,
// //     Longitude: -76.14135,
// //     Status: "Offboard",
// //   },
// //   {
// //     Accuracy: 36.900001525878906,
// //     Bearing: 113.00041198730469,
// //     Distance: 2.295407713791229,
// //     Lat: 40.6933398,
// //     Lng: -73.6950896,
// //     Speed: 0.10433671426323769,
// //     Time: "2022-08-23 7:54:00",
// //   },
// //   {
// //     Accuracy: 9.100000381469727,
// //     Bearing: 331.8835754394531,
// //     Distance: 23.234110876533986,
// //     Lat: 40.693478,
// //     Lng: -73.6948827,
// //     Speed: 1.787239298194922,
// //     Time: "2022-08-23 7:54:00",
// //   },
// //   {
// //     Accuracy: 7.739999771118164,
// //     Bearing: 315.6393737792969,
// //     Distance: 12.927696815096281,
// //     Lat: 40.693476,
// //     Lng: -73.6950361,
// //     Speed: 2.5855393630192562,
// //     Time: "2022-08-23 7:54:00",
// //   },
// //   {
// //     Accuracy: 6.574999809265137,
// //     Bearing: 335.5682373046875,
// //     Distance: 10.884873894774634,
// //     Lat: 40.6935552,
// //     Lng: -73.6951121,
// //     Speed: 2.7212184736936584,
// //     Time: "2022-08-23 7:54:00",
// //   },
// //   {
// //     Accuracy: 6.5,
// //     Bearing: 0,
// //     Distance: 2.2600284763587317,
// //     Lat: 40.6935694,
// //     Lng: -73.6951313,
// //     Speed: 0.22600284763587317,
// //     Time: "2022-08-23 7:55:00",
// //   },
// // ]

// // const ob1=[
// //     {Time:6},
// //     {Time:3},
// //     {Time:1},
// //     {Time:4},
// // ]

// // const t = obj.sort((o1, o2) => { return o2.Time - o1.Time });
// // // const t = obj.sort((o1, o2) => { return moment(o2.Time).isAfter(moment(o1.Time))-1:1 });
// //   console.log(obj);



// // use this ParseExact
// // console.log(moment(1661256202000).format("YYYY-MM-DD HH:mm:ss"))
// // console.log(moment("2022-12-13 06:09:01.487+00").format("YYYY:MM:DD HH:mm:ss"))
// // console.log(moment(1661256202000).toDate())


// // list.map(obj => obj[timeVarName] = moment(obj[timeVarName]).format("YYYY-MM-DD HH:mm:ss"))
// // console.log(list);

// // function sortByTime(list, sortType=1,timeVarName='Time') {
// //     if (!list.length) {
// //         return false;
// //     }
// //     list.sort((o1, o2) => { return moment(o2[timeVarName]).isAfter(moment(o1[timeVarName])) ? (-1*sortType):sortType   });
// //     return list;
// // }

// // console.log(sortByTime(obj,1,"Time"));



// // console.log(moment("2022-08-23 7:55 AM").format("YYYY-MM-DD HH:mm:ss")); 



// const obj = [
//   { Time:"2022-08-23 7:54:00"},
//   { Time:"2022-08-23 7:55:00"},
//   { Time:"2022-08-23 7:56:00"},
//   { Time:"2022-08-23 7:58:00"},
//   { Time:"2022-08-23 7:60:00"},
//   { Time:"2022-08-23 8:06:00"},
//   { Time:"2022-08-23 8:10:00"},
//   ]


// function getLogByTimeInterval(list,intervalInSec) {
//     const logWithTimeInterval = [list[0]];
//     for (let i = 0; i < list.length-1; i++) {
//         if (!list[i].Time) {
//             continue;
//         }
//         const timeWithIntervalAdded = moment(logWithTimeInterval[logWithTimeInterval.length-1].Time).add(intervalInSec, "s").toDate();
//         if (isAfter(timeWithIntervalAdded,list[i+1].Time)) { 
//             continue;
//         }
//         logWithTimeInterval.push(list[i+1]);
//     }
//     return logWithTimeInterval;
        
// }



// function isAfter(date1, date2) {
//     const m1 = moment(date1);
//     const m2 = moment(date2);
//     return m1.isAfter(m2);
// }

// console.log(getLogByTimeInterval(obj,120));


// function solution(A) {
//     A =A.sort();
//     A = [...new Set(A)]
//     let startNumber = A[0]+1;
//     for(let i=1;i<A.length+1;i++){
//         if(startNumber!=A[i]&&startNumber!=0){
//             return startNumber;
//         }
//         startNumber=startNumber+1;
//     }
// }

// console.log(solution([-1, -3]))








// function solution(S) {
//     if(!S.length) return ;
//     hasGotB = false;
//     for(chr of S) {
//         if(chr=='b') {
//             hasGotB=true;
//         }
//         if(hasGotB==true && chr=='a'){
//             return false
//         }
//     }
//     return true;
// }



// function validateEmail(email, maxLength=64) {
//     if (email.length > maxLength) {
//         return false;
//     }
//     let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     return pattern.test(email);
// }

// console.log(validateEmail('.@.'));
// // console.log(validateEmail('amitkumar@gmail.com'));



    // Implement your solution here
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementById
    // or using jQuery:
    //   $('some_tag' )
    //
    // you can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');


// function validatePhone(phone) {
//     if (phone.replaceAll(/-/, '').length < 6) {
//         return false;
//     }
//     let pattern = /^[0-9.-]*$/;
//     return pattern.test(phone)
// }




function solution(S) {
    if(!S.length) return ;
    hasGotB = false;
    for(chr of S) {
        if(chr=='b') {
            hasGotB=true;
        }
        if(hasGotB==true && chr=='a'){
            return false
        }
    }
    return true;
}
