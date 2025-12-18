console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event)=> {
    event.preventDefault();
        // console.log(event.target)
        // console.log(event.target.elements.firstName.value);
        // console.log(event.target.elements.lastName.value);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        event.target.reset();
        event.target.elements.firstName.focus();
        // const name = event.target.elements.firstName.value
        // const ageP = event.target.elements.age.value
        // const howBad = event.target.elements.badness.value
        // console.log(name ,"is " ,ageP + howBad)

})