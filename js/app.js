const form=document.querySelector("#Add_people");
const email1=document.querySelector("#email1");

form.addEventListener("submit", e => {
  e.preventDefault();
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  db.collection("People").add({
    Guestname: form.Guest_name.value,
    GuestEmail: form.Guest_email.value,
    GuestPhoneNo: form.Guest_phone.value,
    Hostname: form.Host_name.value,
    HostEmail: form.Host_email.value,
    HostPhoneNo: form.Host_phone.value,
    CheckInTime:time,
    Address:form.Address.value
  });
  let templateParams = {
    from_name: first_name.value,
    email: email.value,
    phone: phone.value,
    to_address: email1.value,
  };
	emailjs.send("gmail", "template_ptLyx2sL", templateParams).then(() => {
    
    alert("Sent");
	});

  form.Guest_name.value = "";
  form.Guest_email.value = "";
  form.Guest_phone.value = "";
  form.Host_name.value = "";
  form.Host_email.value = "";
  form.Host_phone.value = "";
  form.Address.value = "";
});
