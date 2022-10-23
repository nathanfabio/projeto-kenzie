console.log('Olá, mundo')
console.log('Executar depois do olá mundo')



const buyButton = document.getElementById('buy-button')
const cartForm = document.getElementById('cart-form')


const addTicket = document.getElementById('add-ticket')
const removeTicket = document.getElementById('remove-ticket')
const ticket = document.getElementById('ticket')


addTicket.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Adicionando ticket')
    ticket.innerText = parseInt(ticket.innerText)+1
})

removeTicket.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Removendo ticket')
    ticket.innerText = parseInt(ticket.innerText)-1
})



cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email = cartForm.email.value;
    console.log('Nome: ', nome)
    console.log('Email: ', email)
})




