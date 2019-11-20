'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const Url = require('../url'),
    shortid = require('shortid'),
    _ = require('lodash');


//=============================================================================
/**
 *  Url Integration functions
 */
//=============================================================================

exports.generateUrl = (url) => {

    if(_.isEmpty(url)  || url && _.isEmpty(url.url) ) {
        return Promise.reject("Please provide url to shorten.");
    }

    let redirect = {shortUrl:"localhost:3000/"+shortid.generate(), redirectTo: url.url};

    const newUrl = new Url(redirect);
    return newUrl.save();

};

exports.getUrl = (shortUrl) => {
    if (_.isEmpty(shortUrl)) {
        return Promise.reject("Please provide URL");
    }

    return Url.findOne({shortUrl})
        .then(result => {
            return result;
        });
};