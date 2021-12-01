let data = []

const checkAction = (act) => {
    if(act.toLowerCase() === 'app') {
        return 1
    }else if(act.toLowerCase() === 'del') {
        return 0
    }
}

const ActionReduce = (act) => {
    let newAction = prompt('Введите задачу')
    if(act) {
        dataApp(newAction)
    }else {
        dataDel(newAction)
    }
}

const dataApp = (app) => {
    data.push(app)
}

const dataDel = (del) => {
    data.splice(del-1, 1)
}

while(true) {
    let action = prompt('Введите "добавить" или "удалить"')
    ActionReduce(checkAction(action))
    console.log(data)
}