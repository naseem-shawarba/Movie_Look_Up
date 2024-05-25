export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code) {
      console.log(`Error code: ${code}`)
      if (code === 400) {
        // redirect('/400')
      }
    }
  })
}
