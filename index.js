const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (e)=>{
    let posX = e.offsetX;
    let posY = e.offsetY;
    let spanEl = document.createElement("span");
    spanEl.style.top = posY + "px";
    spanEl.style.left = posX + "px";
    bodyEl.appendChild(spanEl);
    const randomSize = Math.random();
    spanEl.style.width = randomSize * 120 + "px";
    spanEl.style.height = randomSize * 120 + "px";

    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
})