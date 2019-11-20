'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const mongoose = require('mongoose');
//=============================================================================
/**
 * Url Schema
 */
//=============================================================================
const UrlSchema = mongoose.Schema({
        shortUrl:{
            type: String,
            required: true
        },
        redirectTo:{
            type: String,
            required: true
        }
    },
    {timestamps: true});

UrlSchema.set('toJSON', {virtuals: true, getters: true});
UrlSchema.set('toObject', { virtuals: true , getters: true});

UrlSchema.index({ shortUrl: 1});
//=============================================================================
/**
 * Compile to Model
 */
//=============================================================================
const UrlModel = mongoose.model('Url', UrlSchema);
//=============================================================================
/**
 * Export UrlsModel
 */
//=============================================================================
module.exports = UrlModel;
//=============================================================================
