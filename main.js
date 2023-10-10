// alert("coucou")

console.log("coucou")


const btn = document.querySelector('.truc')
const btn2 = document.querySelector('.bidule')

btn.addEventListener('click', ()=>{

    document.querySelector('.rouge').innerHTML = "bidule"
    document.querySelector('.rouge').classList.remove("rouge")

})

btn2.addEventListener('click',()=>{
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response)=>response.json())
        .then((data)=>{

            document.querySelector('.rouge').innerHTML = data.value

        })

    document.querySelector('.carre').classList.toggle('invisible')
})