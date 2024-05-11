const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image")

buttons.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {

            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target

        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected")

        image.classList.add("changing")
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        //Fazendo o efeito de ir e voltar a transparência quando seleciona a cor (removendo a classe "changing")
        setTimeout(() => {
            image.classList.toggle("changing")
        }, 200);
    })
})