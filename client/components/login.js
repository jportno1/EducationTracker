
angular.module('edtechApp')
.component('login', {
  controller: function($http) {
    let ctrl = this;
    this.username = '';
    this.password = '';
    this.username2 = '';
    this.password2 = '';
    this.loggedIn = false;

    this.login = () => {
      $http.get('/auth', { params: { username: ctrl.username, password: ctrl.password } })
        .then(() => {
          ctrl.loggedIn = true;
          console.log('successfully logged in')
          ctrl.username = '';
          ctrl.password = '';
        })
        .catch((err) => {
          console.log('something went wrong when logging in');
        });
      };
       
    this.logout = () => {
      alert('Successfully logged out. Goodbye!')
      ctrl.loggedIn = false;
    }
      
    this.signup = () => {
      console.log('clicked the signup button')
      $http.post('/auth', {username: ctrl.username2, password: ctrl.password2})
      .then(() => {
        alert('Successfully signed up! Please log in.')
        console.log('successfully signed up')
      })
      .catch((err) => {
        console.log('sign up did not work');
      });
    };
      
  },


  template:
  `
  <div>
    <div ng-if='!$ctrl.loggedIn' >
      <h1>this is the login page</h1>
      <input type='text' ng-model='$ctrl.username' />
      <input type='password' ng-model='$ctrl.password' />
      <button ng-click='$ctrl.login()' >Login</button>
      <input type='text' ng-model='$ctrl.username2' />
      <input type='password' ng-model='$ctrl.password2' />
      <button  ng-click='$ctrl.signup()' >Signup</button>
    </div>
    <button ng-if='$ctrl.loggedIn' ng-click='$ctrl.logout()' >Logout</button>
    <home ng-if='$ctrl.loggedIn' ></home>
  </div>
  `

})