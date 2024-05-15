const cloudinary = require('cloudinary');

const fileStorage = () => {
  if (process.env.APPLICATION === "BeehiveApplication") {
    cloudinary.config({
      cloud_name: 'dghwtoxsh',
      api_key: '544889684137735',
      api_secret: '7TaK50-Dn_qTOKuQ2AL09-iiQ5E'
    })
  } else if (process.env.APPLICATION === "AndromedaApplication") {
    cloudinary.config({
      cloud_name: 'dlvfg97qj',
      api_key: '211632761864738',
      api_secret: 'EPspVh7GdAvpjIDTqeCczfCAH00'
    })
  } else if (process.env.APPLICATION === "PinwheelApplication") {
    cloudinary.config({
      cloud_name: 'ds3cizki2',
      api_key: '164252863519729',
      api_secret: 'H9pPe_--InMjDSMi1W7hCQQ16LE'
    })
  } else if (process.env.APPLICATION === "TadpoleApplication") {
    cloudinary.config({
      cloud_name: 'dcjvq3nxs',
      api_key: '878297385766417',
      api_secret: 'K0svUEjgvLcos4wH8NQ1uiGWYiA'
    })
  } else {
    cloudinary.config({
      cloud_name: 'dprguhpph',
      api_key: '636787975923379',
      api_secret: 'wcFaz18DjoJCW5Z7isyzUGrHP9Q'
    })
  }
}

module.exports = fileStorage