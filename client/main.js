const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const createBtn = document.getElementById("getSubmit");
const fortuneSearchBtn = document.getElementById("getParamsSubmit");
const deleteBtn = document.getElementById('delete-fortune');

//inputs
const paramsInput = document.getElementById('params-input');
const deleteInput = document.getElementById('delete-input');

//response section
const responseSection = document.getElementsByClassName('response-area')[0];

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
        .catch(err => console.log(err))
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);  
    })
        .catch(err => console.log(err))
};

const createFortuneList = () => {
    axios.get("http://localhost:4000/api/list/")
        .then(res => addToView(res.data))
        .catch(err => console.log(err))
};

const fortuneSearch = () => {
    axios.get(`http://localhost:4000/api/list/${paramsInput.value}`)
        .then(res => addToView([res.data]))
        .catch(err => console.log(err))
};

const deleteFortune = (id) => {
    axios.delete(`http://localhost:4000/api/list/${deleteInput.value}`)
        .then(res => addToView([res.data]))
        .catch(err => console.log(err))
};

function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item);
            p.appendChild(t);

            responseSection.appendChild(p)
            
        });  
    }
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
createBtn.addEventListener('click', createFortuneList);
fortuneSearchBtn.addEventListener('click', fortuneSearch);
deleteBtn.addEventListener('click', deleteFortune);
