// function handleActive (event) {
// console.log(event)
// }
// console.log("hellooo 22")


// // handleActive()
console.log(window.location.pathname)



switch (window.location.pathname) {

    case '/contact':
        document.getElementById('contact').className = 'active';
        break;

    case '/products':

        document.getElementById('products').className = 'active';
        break;

    default:
        document.getElementById('home').className = 'active';


}