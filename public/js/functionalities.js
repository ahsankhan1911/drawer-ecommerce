
switch (window.location.pathname) {

    case '/contact':

        document.getElementById('contact').className = 'active';
        break;

    case '/products':


        document.getElementById('product').className = 'active';
        break;

    default:
        document.getElementById('home').className = 'active';


}

