// let students = ["Ashly", "Winnie", "Stephen"];

let ul = document.getElementById('list-of-student');


// fetch
// helps you to connect with the server through an api url

fetch("http://localhost:3000/students", () => { })
    .then((response) => response.json())
    .then((datareturned) => {
        // do anything with the above data.
        console.log(datareturned);

        datareturned.forEach(element => {
            // let li = document.createElement('li');
            // li.textContent = element.name + " age:"  + element.age;
            // ul.append(li);

            ul.innerHTML += `
            <div id="div1">
            <p>Name: ${element.name}</p>
            <p>Age: ${element.age}</p>
            <p>Marital status: ${element['marital-status']}</p>
            <p>School: ${element.school}</p>
            </div>
            
            `
        });
    })

ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'DIV'){
        alert("am clicked");
    }
} )


