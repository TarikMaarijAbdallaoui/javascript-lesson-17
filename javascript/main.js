
// toggle the light & dark mode
{const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});}


const hiddenul = document.getElementById("hiddenul")
const changecolor = document.getElementById("changecolor")


// when hover on HEADER => change color
{changecolor.addEventListener("mousemove", (eo) => {
  hiddenul.style.display = "block"
})

changecolor.addEventListener("mouseout", (eo) => {
  hiddenul.style.display = "none"
})}


// change HEADER backroundColor when click "header BG"
headerbg.addEventListener("click", (eo) => {
  const random = Math.round(Math.random() * 360)
  header.style.backgroundColor = `hsl(${random}, 44%, 55%)`

  const websiteTitle = document.querySelector("#header > h1")
  websiteTitle.style.backgroundColor = `hsl(${random}, 44%, 55%)`
  
  dark.style.backgroundColor = `hsl(${Math.round( Math.random() * 100)}, 44%, 65%)`
})

// change title Color when click on "Title color"
titlebg.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")
  const random = Math.round(Math.random() * 360)
  allTitle.forEach(item => {
    item.style.backgroundColor = `hsl(${random}, 44%, 55%)`
  });
})

const changeColor = () => {
  return Math.round(Math.random() * 360)
}

titlecolor.addEventListener("click", (eo) => {
  const allTitle = document.querySelectorAll("h1:not(#header > h1)")

  allTitle.forEach(item => {
    item.style.color = `hsl(${changeColor()}, 44%, 55%)`
  });
})