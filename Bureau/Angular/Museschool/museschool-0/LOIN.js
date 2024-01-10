let form = document.getElementById('login');
let email = document.getElementById('email').value;
let password = document.getElementById('pass').value;
let submit = document.querySelector('.btn').value;
// console.log(email);


    // email.addEventListener('click',function() {
    //     validEmail(this);
    // });

    // password.addEventListener('click',function() {
    //     validEmail(this);
    // });

    form.addEventListener('submit',function(e) {
        if (validEmail(email) && (password)){
            // function local() {
                
                localStorage.setItem('email', email);
                localStorage.setItem('password',password);
                
                // getting----items
                localStorage.getItem('email');
                localStorage.getItem('password');
                alert('your infirmations have been saved');
                // }
                // return local
                //    form.submit();
                
                e.preventDefault();
        }
    });




    const validEmail = function(inputEmail){
        let emailRegExp = new RegExp('^[A-Za-z0-9_]+[@]{1}[a-z]+[.]{1}[a-z]{2,10}$', 'g');
        let small = inputEmail.nextElementSibling;
        // console.log(small.innerHTML);
      if(emailRegExp.test(inputEmail.value == 0)){
        small.innerHTML = "adresse valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
      }else{
        small.innerHTML = "adresse non valide";
        small.classList.remove("text-success");
        small.classList.add = ("text-danger");
        return false;
      }
   
    }


    const validPassword = function(inputPassword){
        let msg;
        let valid = false;
        if (inputPassword.value.lenght < 8) {
            msg = 'le mot de passe doit contenir au moin 8 caracteres';
        } else if (!/[A-Z]/.test(inputPassword.value)) {
            msg = 'le mot de passe doit contenir au moin 1 majuscule';
        }
        else if (!/[a-z]/.test(inputPassword.value)) {
            msg = 'le mot de passe doit contenir au moin des minuscules';
        }else if (!/[0-9]/.test(inputPassword.value)) {
            msg = 'le mot de passe doit contenir au moin des chiffres';
        }else{
            msg = 'le mot de passe est valide';
            valid = true;
        }

        let small = inputEmail.nextElementSibling;
        if(valid){
            small.innerHTML = 'mot de passe valide';
            small.classList.remove("text-danger");
            small.classList.add("text-success");
            return true;
          }else{
            small.innerHTML = 'msg';
            small.classList.remove('text-success');
            small.classList.add = ('text-danger');
            return false;
          }
    }
