/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">Lab 7</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only"> </span></router-link>
          </li>
          <li class="nav-item active">
             <router-link class="nav-link" to="/register">Register <span class="sr-only"> </span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="login">Login<span class="sr-only"> </span></router-link>
          </li>
        </ul>
      </div>
    </nav>
    `
});

Vue.component('app-footer', {
    template: `
    <footer>
        <div class="container">
            <p>Copyright &copy; Flask Inc.</p>
        </div>
    </footer>
    `
});

const Home = Vue.component('home', {
   template: `
    <div class="jumbotron">
        <h1>Flask-VueJS Template</h1>
        <p class="lead"> This template is to allow for easy development by implementing features
common to multiple apps</p>
    </div>
   `,
    data: function() {
       return {}
    }
});

const Register = Vue.component('Register', {
   template: `
    <div class="jumbotron">
        <h1>Register</h1>
        <p class="lead"> Register form</p>
    </div>
   `,
    data: function() {
       return {}
    }
});

const Login = Vue.component('Login', {
   template: `
    <div class="jumbotron">
        <h1>Login</h1>
        <p class="lead">login form</p>
    </div>
   `,
    data: function() {
       return {}
    }
});

// Define Routes
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: Home },
        { path: "/register", component: Register },
        { path: "/login", component: Login }
    ]
});

// Instantiate our main Vue Instance
const app = new Vue({
    el: '#app',
    router
})

// let app = new Vue({
//     el: "#app",
//     router
// });