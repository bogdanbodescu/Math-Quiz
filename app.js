//questions

const qa = [{
    question : "1. Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?", //c
    a1: "4.2",
    a2: "4.4",
    a3: "4.7",
    a4: "5.1",
    a : "3"
},
{
    question : "2. Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?", //b
    a1: "7",
    a2: "10",
    a3: "12",
    a4: "13",
    a : "2"
},
{
    question : "3. Look at this series: 36, 34, 30, 28, 24, ... What number should come next?", //b
    a1: "20",
    a2: "22",
    a3: "23",
    a4: "26",
    a : "2"
},
{
    question : "4. Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?", // c
    a1: "22",
    a2: "24",
    a3: "25",
    a4: "26",
    a : "3"
},
{
    question : "5. Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?", //d
    a1: "12",
    a2: "53",
    a3: "27",
    a4: "14",
    a : "4"
},
{
    question : "6. Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?", //a
    a1: "15",
    a2: "14",
    a3: "21",
    a4: "23",
    a : "1"
},
{
    question : "7. Look at this series: 58, 52, 46, 40, 34, ... What number should come next?", //d
    a1: "26",
    a2: "30",
    a3: "32",
    a4: "28",
    a : "4"
},
{
    question : "8. Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?", //b
    a1: "14",
    a2: "15",
    a3: "10",
    a4: "13",
    a : "2"
},
{
    question : "9. Look at this series: 8, 22, 8, 28, 8, ... What number should come next?",//d
    a1: "36",
    a2: "8",
    a3: "32",
    a4: "34",
    a : "4"
},
{
    question : "10. Look at this series: 31, 29, 24, 22, 17, ... What number should come next?",//c
    a1: "12",
    a2: "14",
    a3: "15",
    a4: "17",
    a : "3"
}
];

// import questions from JS class.

const questionListForm = document.querySelector('.quiz-form');
questionListForm.innerHTML=`<form class="quiz-form text-light"> `;
qa.forEach((e,i)=>{
    const template=`

    <div class="my-5"></div>
    <p class="lead font-weight-normal">${e.question} </p>

    <div class="form-check my-2 text-white-50">
        <input type="radio" name = "q${i+1}" value = "A" checked>
        <label class ="form-check-label">${e.a1}</label>
    </div>

    <div class="form-check my-2 text-white-50">
        <input type="radio" name = "q${i+1}" value = "B">
        <label class ="form-check-label">${e.a2}</label>
    </div>

    <div class="form-check my-2 text-white-50">
        <input type="radio" name = "q${i+1}" value = "C">
        <label class ="form-check-label">${e.a3}</label>
    </div>

    <div class="form-check my-2 text-white-50">
        <input type="radio" name = "q${i+1}" value = "D">
        <label class ="form-check-label">${e.a4}</label>
    </div>`;
    questionListForm.innerHTML+=template;
});
questionListForm.innerHTML+=`<div class="text-center">
<input type="submit" class = "btn btn-light">
</div>
</form>`;


// calculate the score

let score =0;

const scoreCalculator = () =>{
    score = 0;
    const len = qa.length;
    for(let i=0; i<qa.length;i++)
        {
            let q='q'+(i+1);
            let answer='';
            switch(qa[i].a){
                case '1': answer='A'; break;
                case '2': answer='B'; break;
                case '3': answer='C'; break;
                case '4': answer='D'; break;
            }
            console.log(answer);
            if(questionListForm[q].value == answer){
                
                score+=10;
            }
            
        }
        
};

//DOM of the score result section
const scoreDom = document.querySelector('.result');


//Submit event, prevents default (page refresh)
questionListForm.addEventListener('submit', e => {

    e.preventDefault();
    scrollTo(0,0);
    scoreDom.classList.remove('d-none');
    let output = 0;
    scoreCalculator();
    const timer = setInterval(()=>{
        console.log(score);
        scoreDom.querySelector('span').textContent=`${output}%`;  
        if(output === score)
        {
            clearInterval(timer);
        }
        else
        {
            output++;
        }
    },50);
    
    
    
    
    
});




