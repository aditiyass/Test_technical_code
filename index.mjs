import express from "express";
import {EOL} from "os";

const app = express();
const port = 8000;

app.use(express.json());

// untuk test
app.post('/', (req, res) => {
    const number = req.body.number;
    if(!Number.isInteger(number)){
        res.send(`Invalid number`);
    }
    res.send(`Number inputted is ${number}`);
});

app.post('/segitiga', (req, res) => {
    const number = req.body.number;
    if(!Number.isInteger(number)){
        res.send(`Invalid number`);
    }
    let arrnum = String(number).split('');
    let response = '';
    for (let i = 0; i < arrnum.length; i++) {
        let element = arrnum[i];
        for (let j = 0; j < (i + 1); j++) {
            element = element+'0';
        }
        response = response+EOL+element;
    }
    res.send(`${response}`);
});

app.post('/ganjil', (req, res) => {
    const number = req.body.number;
    if(!Number.isInteger(number)){
        res.send(`Invalid number`);
    }
    let response = '';
    for (let i = 0; i <= number; i++) {
        if((i % 2) == 0){
            response = response+EOL+i;
        }
    }
    res.send(`${response}`);
});

app.post('/prima', (req, res) => {
    const number = req.body.number;
    if(!Number.isInteger(number)){
        res.send(`Invalid number`);
    }
    let response = '';
    for (let i = 3; i <= number; i++) {
        if(i == 0 || i == 1 || i == 2){
            response = response+EOL+i;
        }
        else if((i % 2) != 0){
            if(bilanganPrima(i)){
                response = response+EOL+i;
            }
        }
    }
    res.send(`${response}`);
});

function bilanganPrima(nm)
{
    let m = Math.sqrt(nm);
    for (let j = 3; j < m; j += 2) {
        if(nm % j === 0){
            return false;
        }
    }
    return true;
}

app.listen(port, error => {
    if(error){
        console.log("error on port "+port+" : ".error);
    }
    else{
        console.log("listen to port "+port);
    }
});