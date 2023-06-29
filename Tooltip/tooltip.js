const object = [
  { title: "HLAS - SD", tooltip: "HLASKA HLAS - SD" },
  { title: "SMER - SD", tooltip: "HLASKA SMER - SD" },
  {
    title: "Sloboda a Solidarita (SaS)",
    tooltip: "HLASKA Sloboda a Solidarita (SaS)",
  },
  { title: "Progresívne Slovensko", tooltip: "HLASKA Progresívne Slovensko" },
  { title: "SME RODINA", tooltip: "HLASKA SME RODINA" },
  { title: "OĽANO a priatelia", tooltip: "HLASKA OĽANO a priatelia" },
  { title: "REPUBLIKA", tooltip: "HLASKA REPUBLIKA" },
  { title: "KDH", tooltip: "HLASKA KDH" },
  { title: "Aliancia - Szövetség", tooltip: "HLASKA Aliancia - Szövetség" },
  { title: "SNS", tooltip: "HLASKA SNS" },
  {
    title: "Kotlebovci - ĽS Naše Slovensko",
    tooltip: "HLASKA Kotlebovci - ĽS Naše Slovensko",
  },
  { title: "ZA ĽUDÍ", tooltip: "HLASKA ZA ĽUDÍ" },
  {
    title:
      "Maďarské fórum, Občianski demokrati Slovenska, Za regióny, Rómska koalícia, Demokratická strana",
    tooltip:
      "HLASKA Maďarské fórum, Občianski demokrati Slovenska, Za regióny, Rómska koalícia, Demokratická strana",
  },
  { title: "Demokrati", tooltip: "HLASKA Demokrati" },
  { title: "Modrí, Most - Híd", tooltip: "HLASKA Modrí, Most - Híd" },
];

document.getElementsByClassName("answers")[0].style.display = "flex";
document.getElementsByClassName("answers")[0].style.flexFlow = "row wrap";

const tooltip = document.createElement("div");
tooltip.style.display = "none";
tooltip.style.placeItems = "center";
tooltip.style.background = "#353535";
tooltip.style.color = "white";
tooltip.style.position = "absolute";
tooltip.style.top = "50px";
tooltip.style.left = "50%";
tooltip.style.height = "20%";
tooltip.style.width = "40%";
tooltip.style.transform = "translateX(-50%)";
tooltip.style.zIndex = "100";

document.body.appendChild(tooltip);

const texts = document
  .getElementsByClassName("answers")[0]
  .querySelectorAll(".style-0");

const toggles = document
  .getElementsByClassName("answers")[0]
  .querySelectorAll(".toggle.scale");

toggles.forEach((thing) => {
  thing.addEventListener("mouseenter", () => {
    console.log(thing.getElementsByClassName("style-0")[0].innerText);
    object.forEach((element) => {
      if (
        element.title.toLowerCase() ==
        thing.getElementsByClassName("style-0")[0].innerText.toLowerCase()
      ) {
        tooltip.innerHTML = element.tooltip;
        tooltip.style.display = "grid";
      }
    });
  });

  thing.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
