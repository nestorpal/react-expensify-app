const moment = require.requireActual('moment'); // necessary for calling original library

export default (timestamp = 0) => moment(timestamp);