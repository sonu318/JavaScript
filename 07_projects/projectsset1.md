# Projects related to DOM

# solution code

## Project 1 - color changer

```javascript
const buttons = document.querySelector('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    });
});

```

## Project 2 - BMI calculator

```javascript

const form = document.querySelector(`form`);

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`
    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //show result

        results.innerHTML = `<span>${bmi}</span>`;
    }
})

```