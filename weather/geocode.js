const request = require('request');

var geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to Google servers');
        } else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find that address');
        } else if (body.status === 'OK'){
            callback(JSON.stringify(body, undefined, 2));
        }
        else{
            callback(body);
        }
    })
};

module.exports.geocodeAddress = geocodeAddress;
