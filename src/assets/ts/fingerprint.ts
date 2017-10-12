import Fingerprint2 from 'fingerprintjs2'

const getFinger = new Promise((resolve) => {

  new Fingerprint2().get((result) => {
    resolve(result)
  })
})

export default getFinger
