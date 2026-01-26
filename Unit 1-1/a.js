function paragraphLoop()
{
    for (let i = 0; i < 10; i++)
    {
        let paragraph = document.querySelectorAll("#input")
        console.log(paragraph)
    }
}
let button = document.querySelector("#addButton")
button.addEventListener('click', paragraphLoop)