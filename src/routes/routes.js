'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
    express = require('express'),
    urlUtils = require('../models/utils/urlUtils');

//=============================================================================
/**
 * Router instance
 */
//=============================================================================
const router = express.Router();

//=============================================================================
/**
 * Routes
 */
//=============================================================================
router.get('/test', (req, res) => {
  return res.json("Ok");
});

router.post('/generateUrl', (req, res) => {
  //Generate shortened URL
  urlUtils.generateUrl(req.body)
      .then(urls => {
        console.log('Successfully generated url for ' + JSON.stringify(req.body));
        return res.status(200).json(urls.shortUrl);
      })
      .catch(err => {
        console.log('/generateUrl err ' + JSON.stringify(err));
        return res.status(500).json("Oops! Something went wrong, please contact support!");
      });
});

router.get('*', (req,res,next) => {
  //Redirect to actual URL
    urlUtils.getUrl(req.get('host') + req.originalUrl)
        .then(result => {
            if(result && result.redirectTo){
                res.redirect(301, "https://"+result.redirectTo);
                return res.end();
            }else{
                return next();
            }
        }).catch(err => {
            console.log(err);
            return next();
    });
});

//=============================================================================
/**
 * Export Router
 */
//=============================================================================
module.exports = router;
//=============================================================================
