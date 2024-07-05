let array = [
    {
        name: 'Nigar',
        surname:'Abdullayeva',
        group_no:'681.20'
    },
    {
        name: 'Semed',
        surname:'Aslanov',
        group_no:'681.20'
    },
    {
        name: 'Nermin',
        surname:'Pasayeva',
        group_no:'681.20'
    },
    {
        name: 'Fatime',
        surname:'Zeynalova',
        group_no:'683.20'
    },
    {
        name: 'Gozel',
        surname:'Baxisova',
        group_no:'683.20'
    },
    {
        name: 'Murad',
        surname:'Abiyev',
        group_no:'683.20'
    },
    {
        name: 'Aysel',
        surname:'Abdullayeva',
        group_no:'685.20'
    },
    {
        name: 'Rufet',
        surname:'Isgenderov',
        group_no:'685.20'
    },
    {
        name: 'Xedice',
        surname:'Babayeva',
        group_no:'685.20'
    }
]

let tbody = document.getElementById('tbody')
function show(arr) {
    tbody.innerHTML = ""
    arr.forEach((element) =>{
        tbody.innerHTML += `<tr>
                        <td>${element.name}</td>
                        <td>${element.surname}</td>
                        <td>${element.group_no}</td>
                    </tr>`
    })
}
show(array)

function button_group(a) {
    let filterArr = array.filter((item) => {
        return a.innerHTML == item.group_no
    })
    show(filterArr)
}
document.getElementById('all').addEventListener('click', ()=>{
    show(array)
})
