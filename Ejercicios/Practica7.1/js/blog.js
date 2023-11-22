document.addEventListener("DOMContentLoaded", function (evento) {
    const Users = document.getElementById("Users");
    const Posts = document.getElementById("Posts");
    var tbodyid = document.getElementById("tbodyid");
    var container = document.getElementById("container");
    var mostrarTabla = true

    Users.addEventListener("click", function (evento) {
        BorrarContendido();
        accedeUsers().then((accedeUsersArray) => {
            pintUsuarios(accedeUsersArray, mostrarTabla)
            mostrarTabla = false
        })

    })
    Posts.addEventListener("click", function (evento) {
        BorrarContendido();
        obtenerAllPosts();
    })

})

const accedeUsers = async () => {
    try {
        const getAllUsers = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()
        return getAllUsers
    }
    catch (error) {
        console.log(error)
    }
}
const scroll = document.getElementById("body");

var usernameid = 0;
var showPosts = 0;
function pintUsuarios(accedeUsersArray, mostrarTabla) {
    container.style.display = "block"
    if (mostrarTabla) {

        for (let i = 0; i < accedeUsersArray.length; i++) {
            var id = accedeUsersArray[i].id
            var name = accedeUsersArray[i].username
            var email = accedeUsersArray[i].email
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var atd1 = document.createElement("a");
            var atd3 = document.createElement("a");
            tr.appendChild(th)
            th.setAttribute("scope", "row")
            atd1.setAttribute("href", `#profile`)
            atd1.setAttribute("onclick", `pintaUsuario(${id})`)
            atd3.setAttribute("href", `#`)
            atd3.setAttribute("onclick", `obtenePosts(${id})`)
            td1.appendChild(atd1)
            td3.appendChild(atd3)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            th.textContent = `${id}`
            atd1.textContent = `${name}`
            td2.textContent = `${email}`
            atd3.textContent = "Mostrar Posts"
            tbodyid.appendChild(tr);
        }

    }
}

var profile = document.getElementById("profile").style;
var cardname = document.getElementById("cardname");
var number = document.getElementById("number");
var Email = document.getElementById("Email");
var RealName = document.getElementById("RealName");
var Street = document.getElementById("Street");
var Company = document.getElementById("Company");
var ShowPosts = document.getElementById("ShowPosts");


const pintaUsuario = async (id) => {
    try {
        const getOneUser = await (await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)).json()
        usernameid = id;
        if (showPosts != usernameid) {
            PostZone.style.display = "none"
        }
        profile.display = "block"
        cardname.textContent = `${getOneUser[0].username}`
        number.textContent = `Telefono: ${getOneUser[0].phone}`
        Email.textContent = `Email: ${getOneUser[0].email}`
        RealName.textContent = `Nombre Real: ${getOneUser[0].name}`
        Street.textContent = `Direccion: C/ ${getOneUser[0].address.street}, ${getOneUser[0].address.suite}, ${getOneUser[0].address.city}`
        Company.textContent = `Compañia: ${getOneUser[0].company.name},${getOneUser[0].company.catchPhrase},${getOneUser[0].company.bs}`
        ShowPosts.setAttribute("onclick", `obtenePosts(${getOneUser[0].id})`)
    }
    catch (error) {
        console.log(error)
    }
}
var ArrayPosts = new Array();
let nameUser = "";

const obtenePosts = async (id) => {
    try {
        const getPostFromUser = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json()
        const getNameUser = await (await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)).json()
        nameUser = getNameUser[0].username
        showPosts = id
        ArrayPosts.pop();
        ArrayPosts.push(getPostFromUser)
        sacarPostArray(nameUser);
    }
    catch (error) {
        console.log(error)
    }
}
const obtenerAllPosts = async () => {
    try {
        const getPostFromAll = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json()
        ArrayPosts.pop();
        ArrayPosts.push(getPostFromAll)
        nameUser = "."
        sacarPostArray(nameUser);
    }
    catch (error) {
        console.log(error)
    }
}
//PostZone
var PostZone = document.getElementById("PostZone");
function sacarPostArray() {
    if (showPosts != usernameid) {
        profile.display = "none"
    }
    PostZone.style.display = "block"
    PostZone.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        var divCard = document.createElement("div");
        var CardHeader = document.createElement("div");
        var Carbody = document.createElement("div");
        var blockquote = document.createElement("blockquote");
        var p = document.createElement("p");
        var footer = document.createElement("footer");
        var a = document.createElement("a");
        divCard.setAttribute("class", "card card2")
        CardHeader.setAttribute("class", "card-header")
        Carbody.setAttribute("class", "card-body")
        blockquote.setAttribute("class", "blockquote mb-0")
        footer.setAttribute("class", "blockquote-footer")
        divCard.appendChild(CardHeader)
        divCard.appendChild(Carbody)
        Carbody.appendChild(blockquote)
        blockquote.appendChild(p)
        blockquote.appendChild(footer)
        CardHeader.textContent = ` ${ArrayPosts[0][i].title}`
        p.textContent = `${ArrayPosts[0][i].body} `
        if (nameUser != ".") {
            a.setAttribute("onclick", `pintaUsuario(${ArrayPosts[0][i].userId})`)
            a.setAttribute("href", "#profile")
            a.textContent = `${nameUser}`
            footer.textContent = `Post nº ${ArrayPosts[0][i].id} by `
            footer.appendChild(a)
        } else footer.textContent = `Post nº ${ArrayPosts[0][i].id}`
        PostZone.appendChild(divCard)
    }
    var boton1Izq = document.createElement("button");
    var i1Izq = document.createElement("i");
    var i2Der = document.createElement("i");
    i1Izq.setAttribute("class", "fa-solid fa-caret-left");
    i2Der.setAttribute("class", "fa-solid fa-caret-right");
    var boton2Der = document.createElement("button");
    var center = document.createElement("center")
    boton1Izq.setAttribute("type", "button")
    boton2Der.setAttribute("type", "button")
    boton1Izq.setAttribute("name", "boton1Izq")
    boton2Der.setAttribute("name", "boton2Der")
    boton1Izq.setAttribute("href", "#boton1Izq")
    boton2Der.setAttribute("href", "#boton2Der")
    boton2Der.setAttribute("onclick", `NextPageDer(5)`)
    boton1Izq.setAttribute("class", "btn btn-dark")
    boton2Der.setAttribute("class", "btn btn-dark")
    boton1Izq.appendChild(i1Izq)
    boton2Der.appendChild(i2Der)
    center.appendChild(boton1Izq)
    center.appendChild(boton2Der)
    PostZone.appendChild(center)
}
function NextPageIzq(numMinArray) {
    PostZone.innerHTML = ""
    var max = numMinArray
    var min = numMinArray
    for (let i = numMinArray - 5; i < numMinArray; i++) {
        var divCard = document.createElement("div");
        var CardHeader = document.createElement("div");
        var Carbody = document.createElement("div");
        var blockquote = document.createElement("blockquote");
        var p = document.createElement("p");
        var footer = document.createElement("footer");
        var a = document.createElement("a");
        divCard.setAttribute("class", "card card2")
        CardHeader.setAttribute("class", "card-header")
        Carbody.setAttribute("class", "card-body")
        blockquote.setAttribute("class", "blockquote mb-0")
        footer.setAttribute("class", "blockquote-footer")
        divCard.appendChild(CardHeader)
        divCard.appendChild(Carbody)
        Carbody.appendChild(blockquote)
        blockquote.appendChild(p)
        blockquote.appendChild(footer)
        CardHeader.textContent = ` ${ArrayPosts[0][i].title}`
        p.textContent = `${ArrayPosts[0][i].body} `
        if (nameUser != ".") {
            a.setAttribute("onclick", `pintaUsuario(${ArrayPosts[0][i].userId})`)
            a.setAttribute("href", "#profile")
            a.textContent = `${nameUser}`
            footer.textContent = `Post nº ${ArrayPosts[0][i].id} by `
            footer.appendChild(a)
        } else footer.textContent = `Post nº ${ArrayPosts[0][i].id}`
        PostZone.appendChild(divCard)
    }
    var boton1Izq = document.createElement("button");
    var boton2Der = document.createElement("button");
    var center = document.createElement("center");
    var i1Izq = document.createElement("i");
    var i2Der = document.createElement("i");
    i1Izq.setAttribute("class", "fa-solid fa-caret-left");
    i2Der.setAttribute("class", "fa-solid fa-caret-right")
    boton1Izq.setAttribute("type", "button")
    boton2Der.setAttribute("type", "button")
    if (numMinArray > 5) {
        boton1Izq.setAttribute("onclick", `NextPageIzq(${numMinArray - 5})`)
    }
    boton2Der.setAttribute("onclick", `NextPageDer(${numMinArray})`)
    boton1Izq.setAttribute("class", "btn btn-dark")
    boton2Der.setAttribute("class", "btn btn-dark")
    boton1Izq.appendChild(i1Izq)
    boton2Der.appendChild(i2Der)
    center.appendChild(boton1Izq)
    center.appendChild(boton2Der)
    PostZone.appendChild(center)
    scrollBottom(0)
}
function NextPageDer(numMinArray, name) {
    PostZone.innerHTML = ""
    if (numMinArray < ArrayPosts[0].length) {
        for (let i = numMinArray; i < numMinArray + 5; i++) {
            var divCard = document.createElement("div");
            var CardHeader = document.createElement("div");
            var Carbody = document.createElement("div");
            var blockquote = document.createElement("blockquote");
            var p = document.createElement("p");
            var footer = document.createElement("footer");
            var a = document.createElement("a");
            divCard.setAttribute("class", "card card2")
            CardHeader.setAttribute("class", "card-header")
            Carbody.setAttribute("class", "card-body")
            blockquote.setAttribute("class", "blockquote mb-0")
            footer.setAttribute("class", "blockquote-footer")
            divCard.appendChild(CardHeader)
            divCard.appendChild(Carbody)
            Carbody.appendChild(blockquote)
            blockquote.appendChild(p)
            blockquote.appendChild(footer)
            CardHeader.textContent = ` ${ArrayPosts[0][i].title}`
            p.textContent = `${ArrayPosts[0][i].body} `
            if (nameUser != ".") {
                a.setAttribute("onclick", `pintaUsuario(${ArrayPosts[0][i].userId})`)
                a.setAttribute("href", "#profile")
                a.textContent = `${nameUser}`
                footer.textContent = `Post nº ${ArrayPosts[0][i].id} by `
                footer.appendChild(a)
            } else footer.textContent = `Post nº ${ArrayPosts[0][i].id}`
            PostZone.appendChild(divCard)
        }
        var boton1Izq = document.createElement("button");
        var boton2Der = document.createElement("button");
        var center = document.createElement("center");
        var i1Izq = document.createElement("i");
        var i2Der = document.createElement("i");
        i1Izq.setAttribute("class", "fa-solid fa-caret-left");
        i2Der.setAttribute("class", "fa-solid fa-caret-right")
        boton1Izq.setAttribute("type", "button")
        boton2Der.setAttribute("type", "button")
        boton1Izq.setAttribute("onclick", `NextPageIzq(${numMinArray})`)
        if (numMinArray + 5 < ArrayPosts[0].length) { boton2Der.setAttribute("onclick", `NextPageDer(${numMinArray + 5})`) }
        boton1Izq.setAttribute("class", "btn btn-dark")
        boton2Der.setAttribute("class", "btn btn-dark")
        boton1Izq.appendChild(i1Izq)
        boton2Der.appendChild(i2Der)
        center.appendChild(boton1Izq)
        center.appendChild(boton2Der)
        PostZone.appendChild(center)
        scroll.scrollTop = 0;
    }
}
function pintaPost(posts, name) {
    PostZone.innerHTML = ""
    for (let i = 0; i < posts.length; i++) {
        var divCard = document.createElement("div");
        var CardHeader = document.createElement("div");
        var Carbody = document.createElement("div");
        var blockquote = document.createElement("blockquote");
        var p = document.createElement("p");
        var footer = document.createElement("footer");
        divCard.setAttribute("class", "card card2")
        CardHeader.setAttribute("class", "card-header")
        Carbody.setAttribute("class", "card-body")
        blockquote.setAttribute("class", "blockquote mb-0")
        footer.setAttribute("class", "blockquote-footer")
        divCard.appendChild(CardHeader)
        divCard.appendChild(Carbody)
        Carbody.appendChild(blockquote)
        blockquote.appendChild(p)
        blockquote.appendChild(footer)
        CardHeader.textContent = ` ${posts[i].title}`
        p.textContent = `${posts[i].body} `
        if (nameUser != ".") {
            footer.textContent = `Post nº ${ArrayPosts[0][i].id} by ${nameUser}`
        } else footer.textContent = `Post nº ${ArrayPosts[0][i].id}`
        PostZone.appendChild(divCard)
    }
}

function BorrarContendido() {
    container.style.display = "none";
    profile.display = "none";
    PostZone.style.display = "none";
}