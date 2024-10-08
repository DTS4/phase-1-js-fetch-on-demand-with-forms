const init = () => {
    const inputForm = document.querySelector("form")
    console.log(inputForm);
    // Add event listener to an input
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const input = document.querySelector("input#searchById")
        console.log(input.value)
        fetch(`http://localhost:3000/games/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4")
                console.log(data.title)
                title.textContent = data.title
                const summary = document.querySelector("section#movieDetails ")
                console.log(data.genre)
            }
            )
    })
}
document.addEventListener("DOMContentLoaded", init)




