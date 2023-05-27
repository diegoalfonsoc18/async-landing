const API = "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/";
const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b42cb3ea6emsh431b1c4416881ecp161689jsne0b2cb1d21ab",
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
};
async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const planetas = await fetchData(API);
    console.log(planetas);
    let view = `
    ${planetas
      .map(
        (planeta) => `
    <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${planeta.imgSrc.img}" alt="Hola" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
            ${planeta.name}
        </h3>
        <p>${planeta.imgSrc.imgDescription}</p>
        </div>
    </div>
    `
      )
      .slice(0, 8)
      .join("")}
     
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
