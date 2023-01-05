export const getUserLocation = async (): Promise<[number, number]> => {

  return await new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(

      ({ coords }) => {

        resolve([coords.longitude, coords.latitude])

      },

		  (err) => {

        alert('No es posible acceder a su localización'),

        console.log(err),

        reject()

		  }

    )

  })

}