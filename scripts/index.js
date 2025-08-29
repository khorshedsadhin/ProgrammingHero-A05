// reusable functions
function getElementById(id) {
  return document.getElementById(id);
}
function getInnerText(id) {
  return getElementById(id).innerText;
}
function getNumInnerText(id) {
  return parseInt(getInnerText(id));
}
function getAllElementsByClassName(className) {
  let classNameTotal = "." + className;
  return document.querySelectorAll(classNameTotal);
}

// 1. heart icon implementation
// heart-count (increase number), heart-icon (click event)
getAllElementsByClassName("heart-icon").forEach(icon => {

  icon.addEventListener("click", function() {
    let currentValue = getNumInnerText("heart-count");
    currentValue++;
    getElementById("heart-count").innerText = currentValue;

  })
})

// 2. call button part
// call-btn (click event) coin-count
const callHistory = [];
getAllElementsByClassName("call-btn").forEach(btn => {

  btn.addEventListener("click", function() {
    const card = btn.closest(".crd");
    const title = card.querySelector(".crd-title").innerText;
    const contactNo = card.querySelector(".crd-contact-no").innerText;

    let coinCount = getNumInnerText("coin-count");
    if (coinCount < 20) {
      alert("❌ Insufficient coin amount. You won't be able to call now.");
      return;
    }

    alert(`📞 Calling ${title} at ${contactNo}`);
    coinCount -= 20;
    getElementById("coin-count").innerText = coinCount;

    const history = {
      callTitle: title,
      callContact: contactNo,
      callDate: new Date().toLocaleTimeString()
    }
    callHistory.push(history);

    const callDatas = getElementById("history-container");
    callDatas.innerText = "";

    for (const data of callHistory) {

      const div = document.createElement("div");
      div.innerHTML = `
        <div class="bg-gray-100 mb-2 p-4 rounded-[8px] flex justify-between items-center">
          <div>
            <h2 class="inter text-lg font-[600]">${data.callTitle}</h2>
            <p class="hind-madurai text-lg font-[400]">${data.callContact}</p>
          </div>
          <p class="hind-madurai text-lg">${data.callDate}</p>
        </div>
      `

      callDatas.appendChild(div);

    }
  })
})

// 3. clear button implementation
getElementById("clear-btn").addEventListener("click", function() {
  const callDatas = getElementById("history-container");
  callDatas.innerText = "";
})

// 4. copy button implementation
getAllElementsByClassName("crd-copy-btn").forEach(button => {

  button.addEventListener("click", function() {
    const card = button.closest(".crd");
    const contactNo = card.querySelector(".crd-contact-no").innerText;

    navigator.clipboard.writeText(contactNo).then(() => {
      alert(`Copied contact info: ${contactNo}`);
    })

    let copyValue = getNumInnerText("copy-count");
    copyValue++;
    getElementById("copy-count").innerText = copyValue;
  })

})
