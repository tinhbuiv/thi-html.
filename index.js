var btnsubmit = document.forms['main-login']['submit'];
btnsubmit.onclick = function () {
    if (check()) {
        var delform = document.getElementsByClassName("body")[0];
        delform.innerHTML = "";
        save();

    }
}

// var delform =
function save() {
    var name = document.forms['main-login']['name'].value;
    var phone = document.forms['main-login']['phone'].value;
    var email = document.forms['main-login']['email'].value;
    htmlcontent += '<div class="form">';
    htmlcontent += '<div class="name">' + name + '</div>';
    htmlcontent += '<div class="phone">' + phone + '</div>';
    htmlcontent += '<div class="email">' + email + '</div>';
    document.getElementById("main-content").innerHTML += htmlcontent;
}

function check() {
    var isvalid = true;
    var isvalidname = true;
    var isvalidphone = true;
    var isvalidemail = true;
    var name = document.forms['main-login']['name'];
    var phone = document.forms['main-login']['phone'];
    var email = document.forms['main-login']['email'];
    // var gender = document.forms['main-login']['gender'];

    var msgname = name.nextElementSibling;
    if (name == null || name.value.length === 0) {
        msgname.innerHTML = "Vui lòng nhập lastname.";
        msgname.classList.remove("msg-success");
        msgname.classList.add("msg-error");
        isvalidname = false;
    }
    else if (name.value.length >= 50) {
        msgname.innerHTML = "Tối đa 50 kí tự";
        msgname.classList.remove("msg-success");
        msgname.classList.add("msg-error");
        isvalidname = false;
    }
    else {
        msgname.innerHTML = "Lastname hợp lệ.";
        msgname.classList.remove("msg-error");
        msgname.classList.add("msg-success");
    }

    var msgphone = phone.nextElementSibling;
    if (phone == null || phone.value.length === 0) {
        msgphone.innerHTML = "Vui lòng nhập phone.";
        msgphone.classList.remove("msg-success");
        msgphone.classList.add("msg-error");
        isvalidphone = false;
    } else if (phone.value.length < 5) {
        msgphone.innerHTML = "Phone quá ngắn, vui lòng nhập ít nhất 5 ký tự.";
        msgphone.classList.remove("msg-success");
        msgphone.classList.add("msg-error");
        isvalidphone = false;
    } else {
        msgphone.innerHTML = "Phone hợp lệ.";
        msgphone.classList.remove("msg-error");
        msgphone.classList.add("msg-success");
    }

    var msgemail = email.nextElementSibling;
    if (email == null || email.value.length === 0) {
        msgemail.innerHTML = "Vui lòng nhập email.";
        msgemail.classList.remove("msg-success");
        msgemail.classList.add("msg-error");
        isvalidemail = false;
    } else {
        msgemail.innerHTML = "Email hợp lệ.";
        msgemail.classList.remove("msg-error");
        msgemail.classList.add("msg-success");
    }

    isvalid = isvalidname && isvalidphone && isvalidemail;
    return isvalid;

}
