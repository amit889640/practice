// function newPromise() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('Promise have been resolved')
//         }, 2000);
//     })
// }

// async function fetch() {
//     console.log(await newPromise())
//     console.log('later log');
// }

// /regex/.test('')

// fetch()

// $all or  $in:[]
// db.user.aggregation[{
//     $lookup:{
//         localField:'',
//         foreignField:'',
//         Collection:'',
//         as:'detail'
//     }
// }]



// {
//     Room_id: number | string,
//         meetingStart: Date,
//             meetingEnd: Date,
//                 personDetail: {
//         [
//             {
//                 personId: number,
//                 personEmail: string,
//                 personContact: string,
//             }

//         ]
//     }
// }


// db.getCollection("meetingDetail").update({ Room_id: 1, personDetail.personId: 2}, { personDetail.$.personEmail: 'amit@gmal.com'})



// function pattern(n) {
//     var p = '';
//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j <= n; j++) {
//             if (i + j == n) {
//                 p = p + '*';
//             } else if (i == 0 || i == n) {
//                 p = p + '*';
//             } else {
//                 p = p + ' ';
//             }
//         }
//         p = p + '\n'
//     }
//     return p;
// }

// console.log(pattern(10));


// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24
// 30 31 32 33 34
// 40 41 42 43 44



// Status
// selected for 1 and 2 round clear