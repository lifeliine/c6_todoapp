const fs = require('fs');

const name = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync(name,JSON.stringify(data)); //con JSON lo guardamos como un string, sino queda como objeto
}

const getData = () => {
    if (!fs.existsSync(name)){
        return null;
    }
    const data = fs.readFileSync(name,{encoding: 'utf-8'});
    if(data){
        return JSON.parse(data);
    }
    return null;
    
}

module.exports = {
    saveData,
    getData
}