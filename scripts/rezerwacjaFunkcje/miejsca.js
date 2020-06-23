function miejsca() {
    const allSits = [...document.querySelectorAll("#Bombardier > *")];
    const buttonReturn = document.getElementById("buttonReturn");
    let savedSits;

    const a = localStorage.getItem('savedSits')
    const b = localStorage.getItem('flightDate')
    const c = localStorage.getItem('flyFromValue')
    const d = localStorage.getItem('flyToValue')
    const e = localStorage.getItem('adultsValue')
    const f = localStorage.getItem('childrenValue')
    const g = localStorage.getItem('travel-class')
    const h = localStorage.getItem('extras')
    const availableSits = (e && parseInt(e, 10)) + (f && parseInt(f, 10))
    let sitCounter = 0;
    const resultList = [`Seats: ${a}`, `Flight Date: ${b}`, `From: ${c}`, `To: ${d}`, `Adults: ${e}`, `Children: ${f}`, `Travel Class: ${g}`, `Extras: ${h}`]

    allSits.forEach((sit) => {
        sit.addEventListener("click", () => {
            if ((sitCounter < availableSits || sit.className.baseVal.includes('col--pick'))) {
                sit.classList.toggle("col--pick")
                sitCounter = [...document.querySelectorAll(".col--pick")].length
            } else {
                alert('You cannot choose more seats');
            }
        })
    })

    buttonReturn.addEventListener("click", (e) => {
        savedSits = [...document.querySelectorAll("#Bombardier > .col--pick")]
        savedSits = savedSits.map((sit) => sit.attributes.id.textContent.replace('bombSeat', ''))

        if (savedSits.length > 0) {
            localStorage.setItem('savedSits', savedSits);
        }
    })


    const showAllButton = document.getElementById("show-all")
    const result = document.querySelector(".result")

    showAllButton.addEventListener("click", () => {
        savedSits = [...document.querySelectorAll("#Bombardier > .col--pick")]

        savedSits = savedSits.map((sit) => sit.attributes.id.textContent.replace('bombSeat', ''))

        if (savedSits.length > 0) {
            localStorage.setItem('savedSits', savedSits);
        }

        result.className = "result-presentation"
        result.innerHTML = "Reservation Summary: "
        resultList.forEach((resultElement) => {
            const li = document.createElement('li')
            li.className = "result-presentation__element"
            li.innerHTML = resultElement
            result.appendChild(li)
        })

    })

}
document.addEventListener("DOMContentLoaded", miejsca);