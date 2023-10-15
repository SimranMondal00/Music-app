window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector("visual");
    const colors = [
        "#2ee580",
        "#e11d1d",
        "#cd1bf1",
        "#ece930",
        "#3024d7",
        "#1ab0ec"
    ];
    pads.forEach((pad, index) =>{
        pad.addEventListener('click',function(){
            sounds[index].currenttime = 0;
            sounds[index].play();
            createBubbles(index);

        });
    });
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor =colors[index];
        bubble.style.animation = "jump is ease";
        bubble.addEventListener('animationend', function(){
            visuals.removeChild(this);
        })
    }
});
