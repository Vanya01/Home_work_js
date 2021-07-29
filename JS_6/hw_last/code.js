// Зробити свій розпорядок дня.
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//     Наприклад.
//     Прокинутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобуса - 3с
// Пообідати - 1с
// І так далі
// function daily_routine(cb) {
//
//     setTimeout(() => {
//         cb('Wake_up - 6 a.m')
//     }, Math.random() * 2000)
// }
//     function breakfast(cb){
//         setTimeout(()=>{
//             cb('Breakfast - 7 a.m')
//         },Math.random()*2000)
//     }
//     function read_a_book(cb){
//         setTimeout(()=>{
//             cb('Read a book - 7:30 a.m')
//         },Math.random()*2000)
//     }
//
//     function meditation(cb){
//         setTimeout(()=>{
//             cb('Meditation - 7:50 a.m')
//         },Math.random()*2000)
//     }
//
//     function running(cb){
//         setTimeout(()=>{
//             cb('Running - 8:00 a.m')
//         },Math.random()*2000)
//     }
//
//     function shower(cb){
//         setTimeout(()=>{
//             cb('Shower - 9 a.m')
//         },Math.random()*2000)
//     }
//
//     function Go_studying(cb){
//         setTimeout(()=>{
//             cb('Studying - 12 p.m')
//         },Math.random()*2000)
//     }
//
//     function lunch(cb){
//         setTimeout(()=>{
//            cb('Lunch - 3:30 p.m')
//         },Math.random()*2000)
//     }
//     function still_studying(cb){
//         setTimeout(()=>{
//             cb('Still studying - 7:30 p.m')
//         },Math.random()*2000)
//     }
//
//     function night(cb){
//         setTimeout(()=>{
//            cb('Good night- 9:30 p.m')
//         },Math.random()*2000)
//     }
// daily_routine((arg) => {
//     console.log(arg)
//     breakfast((arg) => {
//         console.log(arg)
//         read_a_book((arg) => {
//             console.log(arg)
//             meditation((arg)=>{
//                 console.log(arg)
//                 running((arg)=>{
//                     console.log(arg)
//                     shower((arg)=>{
//                         console.log(arg)
//                         Go_studying((arg)=>{
//                             console.log(arg)
//                             lunch((arg)=>{
//                                 console.log(arg)
//                                 still_studying((arg)=>{
//                                     console.log(arg)
//                                     night((arg)=>{
//                                         console.log(arg)
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// Done  ---- ---- - - - -- - - - -- - - - -- - - - - -- - - -- -


function daily_routine_2(){
    return new Promise(resolve => setTimeout(()=>{
        resolve('Wake_up - 6 a.m')
    },Math.random()*2000))
}
 const breakfast_2 = () => new Promise(resolve => setTimeout(()=>{
     resolve(('Breakfast - 7 a.m'))
 },Math.random()*2000))


const read_a_book_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Read a book - 7:30 a.m'))
},Math.random()*2000))


const meditation_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Meditation - 7:50 a.m'))
},Math.random()*2000))


const running_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Running - 8:00 a.m'))
},Math.random()*2000))


const shower_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Shower - 9 a.m'))
},Math.random()*2000))


const studying_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Studying - 12 p.m'))
},Math.random()*2000))

const lunch_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Lunch - 3:30 p.m'))
},Math.random()*2000))

const still_studying_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Still studying - 7:30 p.m'))
},Math.random()*2000))

const night_2 = () => new Promise(resolve => setTimeout(()=>{
    resolve(('Good night- 9:30 p.m'))
},Math.random()*2000))

// daily_routine_2().then(value =>{
//     console.log(value)
//     breakfast_2().then(value=>{
//         console.log(value)
//         read_a_book_2().then(value=>{
//             console.log(value)
//             meditation_2().then(value=>{
//                 console.log(value)
//                 running_2().then(value=>{
//                     console.log(value)
//                     shower_2().then(value=>{
//                         console.log(value)
//                         studying_2().then(value=>{
//                             console.log(value)
//                             lunch_2().then(value=>{
//                                 console.log(value)
//                                 still_studying_2().then(value=>{
//                                     console.log(value)
//                                     night_2().then(value=>{
//                                         console.log(value)
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
//
//

const start = async ()=>{
    console.log(await daily_routine_2());
    console.log(await breakfast_2());
    console.log(await read_a_book_2());
    console.log(await meditation_2());
    console.log(await running_2());
    console.log(await shower_2());
    console.log(await studying_2());
    console.log(await lunch_2());
    console.log(await still_studying_2());
    console.log(await night_2());

}
start()


