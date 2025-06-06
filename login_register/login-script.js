
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const signUpForm = document.querySelector("#sign-up-form");
if (signUpForm) {
  signUpForm.addEventListener("submit", function (e) {
    if (!validatePasswords()) {
      e.preventDefault();
    }
  });
}

function validatePasswords() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("كلمة المرور وتأكيد كلمة المرور غير متطابقين!");
    return false;
  }
  return true;
}

// Capitalize first letter of names
document.getElementById("firstname").addEventListener("blur", function () {
  this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
});
document.getElementById("secondname").addEventListener("blur", function () {
  this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
});

// Password strength validation
const passwordInput = document.getElementById("password");
const ruleLength = document.getElementById("rule-length");
const ruleUppercase = document.getElementById("rule-uppercase");
const ruleLowercase = document.getElementById("rule-lowercase");
const ruleSymbol = document.getElementById("rule-symbol");

passwordInput.addEventListener("input", function () {
  const value = passwordInput.value;

  if (value.length >= 8 && value.length <= 16) {
    ruleLength.style.color = "green";
    ruleLength.textContent = "✔ 8-16 characters";
  } else {
    ruleLength.style.color = "red";
    ruleLength.textContent = "❌ 8-16 characters";
  }

  if (/[A-Z]/.test(value)) {
    ruleUppercase.style.color = "green";
    ruleUppercase.textContent = "✔ At least one uppercase letter";
  } else {
    ruleUppercase.style.color = "red";
    ruleUppercase.textContent = "❌ At least one uppercase letter";
  }

  if (/[a-z]/.test(value)) {
    ruleLowercase.style.color = "green";
    ruleLowercase.textContent = "✔ At least one lowercase letter";
  } else {
    ruleLowercase.style.color = "red";
    ruleLowercase.textContent = "❌ At least one lowercase letter";
  }

  if (/[@!$%]/.test(value)) {
    ruleSymbol.style.color = "green";
    ruleSymbol.textContent = "✔ At least one symbol (@!$%)";
  } else {
    ruleSymbol.style.color = "red";
    ruleSymbol.textContent = "❌ At least one symbol (@!$%)";
  }
});


// إظهار/إخفاء شروط الباسورد
passwordInput.addEventListener("focus", function () {
  document.getElementById("password-rules").style.display = "block";
});

function allRulesMet() {
  return ruleLength.style.color === "green" &&
         ruleUppercase.style.color === "green" &&
         ruleLowercase.style.color === "green" &&
         ruleSymbol.style.color === "green";
}

passwordInput.addEventListener("input", function () {
  const rulesDiv = document.getElementById("password-rules");
  if (allRulesMet()) {
    rulesDiv.style.display = "none";
  } else {
    rulesDiv.style.display = "block";
  }
});
