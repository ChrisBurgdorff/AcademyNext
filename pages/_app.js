import '../styles/bulma/bulma.css';
import '../styles/fontawesome/css/all.min.css';
import '../styles/globals.css';

const db = require("../models");

function MyApp({ Component, pageProps }) {
  db.sequelize.sync({force: true})
    .then(() => {console.log("Sync is COMPLETE!")})
    .catch(err => {console.log(err);});
  return <Component {...pageProps} />
}

export default MyApp
