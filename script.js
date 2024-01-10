const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
console.log(phrase);
const container = document.querySelector(".main");
const body = document.querySelector(".body");
const spanElements = [];
createAnimation();

function createAnimation() {
    splitWords(phrase);
    console.log('anim')
    gsap.to(spanElements, {
        scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "top top",
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    });
}

function splitWords(phrase) {
    console.log('anim 2')
    phrase.split(" ").forEach((word, i) => {
        const letters = splitLetters(word);
        const p = document.createElement("p");
        p.innerHTML = letters.join("");
        body.appendChild(p);
    });
}

function splitLetters(word) {
    console.log('anim 3')
    const letters = [];
    word.split("").forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        spanElements.push(span);
        letters.push(span.outerHTML);
    });
    return letters;
}