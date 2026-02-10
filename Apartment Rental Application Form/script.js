function submitForm(e) {
  e.preventDefault();

  emailjs.send("service_y6fpkya", "template_bognwwp", {
    full_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
  })
  .then(() => alert("Application sent successfully"))
 .catch((error) => {
  alert(error.text);
}); 
}