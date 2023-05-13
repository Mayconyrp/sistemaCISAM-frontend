const selectLgpd = document.getElementById("lgpd");
const btnNext = document.querySelector(".btn-next");

selectLgpd.addEventListener("change", function () {
  if (this.value === "nao") {
    btnNext.disabled = true;
    btnNext.style.display = "none";
    alert("É necessário concordar com a LGPD para prosseguir.");
  } else {
    btnNext.disabled = false;
    btnNext.style.display = "inline-block";
  }
});
