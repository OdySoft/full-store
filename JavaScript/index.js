const style = () =>{
    const container = document.querySelector(".section-container");
    container.classList.toggle("blur");
}
const click_event = () =>{
    style();
    const accept = document.getElementById('submit_box')
    accept.classList.toggle("none")
}
const add = () =>{
    style();
    const accept = document.getElementById('submit_box_2')
    accept.classList.toggle("none")
}
const clickevent = () =>{
    style();
    document.getElementById("submit_box3333").classList.toggle("none")
}
const access = () =>{
    style();
    document.getElementById("submit_box444444").classList.toggle("none")
}
const kill = () =>{
    document.getElementById("submit_boxFamily").classList.toggle("none");
    style();
}