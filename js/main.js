
// VERSIÓN CON "ASYNC AWAIT"
// const url = "https://ghibliapi.vercel.app/films"
// const container = document.getElementById("container")

// const films = async (url) => {
//   try {
//     const response = await fetch(url)
//     const data = await response.json()
//     data.forEach((movie) => {
//       const img = document.createElement("img")
//       img.src = movie.image
//       const originaltitle = document.createElement("h1")
//       originaltitle.innerText = movie.original_title
//       container.appendChild(img)
//       container.appendChild(originaltitle)
//     })
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// films(url)


// VERSION CON ".THEN.CATCH"
const container = document.getElementById("container")
const container2 = document.getElementById("container2")

const ghibli = fetch('https://ghibliapi.vercel.app/films')
    .then(response => response.json())
    .then(response => {
        response.forEach((element) => {

            const title = document.createElement("h1")
            title.innerText = element.original_title
            const image = document.createElement("img")
            image.src = element.image

            container.appendChild(title)
            container.appendChild(image)
        })
    })
    .catch(error => console.log(error))

// const disney = fetch('https://api.disneyapi.dev/character')
//     .then(response => response.json())
//     .then(response => {
//         console.log(response.data)
//         response.data.forEach((element) => {

//             const nombre = document.createElement("h3")
//             nombre.innerText = element.films[0]
//             const im = document.createElement("img")
//             im.src = element.imageUrl

//             container2.appendChild(nombre)
//             container2.appendChild(im)
//         })
//     })
//     .catch(error => console.log(error))
