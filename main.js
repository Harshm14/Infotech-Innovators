const eventcardcont = document.querySelector(".eventcardcont");
const eventcard = document.querySelectorAll(".eventcard");
const width = eventcard[0].offsetWidth + 80;
const arrbut = document.querySelectorAll(".shiftarrow");
arrbut.forEach(btn => {
    btn.addEventListener("click", () => {
        eventcardcont.scrollLeft += btn.id === "left" ? -width : width;
    })
})


let currindex = 1;
const teamscardcont = document.querySelector(".teamscardcont");
const teamscard1 = document.querySelectorAll(".teamscard");
const width2 = teamscard1[0].offsetWidth;
const arrbut2 = document.querySelectorAll(".shiftarrow1");

arrbut2.forEach(btn => {
    btn.addEventListener("click", () => {
        currindex = btn.id === "left1" ? (currindex <= 1 ? currindex : currindex - 1) : (currindex >= teamscard1.length - 2 ? currindex : currindex + 1);
        changecard(currindex);
        teamscardcont.scrollLeft += btn.id === "left1" ? -width2 : width2;
    });
});
const changecard = (currindex1) => {
    teamscard1.forEach((card, index) => {
        card.classList.remove("small");

        if (index === currindex1 + 1 || index === currindex1 - 1) {
            card.classList.add("small");
        }
    });
};