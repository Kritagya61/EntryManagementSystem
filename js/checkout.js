const form = document.querySelector("#Add_people");
const email = document.querySelector(".input100");

form.onsubmit = e => {
  e.preventDefault();
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  db.collection("People")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let mail = doc.data().GuestEmail;

        if (mail == email.value) {
          

          let id = doc.id;

          let templateParams = {
            from_name: doc.data().Hostname,
            email: doc.data().HostEmail,
            phone: doc.data().HostPhoneNo,
            to_address: doc.data().GuestEmail,
            checkintime: doc.data().CheckInTime,
            Address: doc.data().Address,
            checkouttime: time
          };
      
          emailjs
            .send("gmail", "checkout_template", templateParams)
            .then(() => {
              
              alert("Sent");
            });

          
          db.collection("People")
            .doc(id)
            .delete();
          email.value = "";
        }
      });
    });
};

