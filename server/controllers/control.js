const {User} = require("../models")
const {Product} = require("../models")
const {Banner} = require("../models")
const {comparePassword} = require("../helpers/bcrypt")
const {signToken} = require("../helpers/jwt")

class Controller {
    static async login(req, res, next) {
        try {

        }

        catch (err) {
            console.log(err, "<<<<eror_LOGIN")
            next(err)
        }
    }

    static async ProductShowAll(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_productShowAll")
            next(err)
        }
    }

    static async BannerShowAll(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_bannerShowAll")
            next(err)
        }
    }

    static async ProductCreate(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_productCreate")
            next(err)
        }
    }

    static async BannerCreate(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_bannerCreate")
            next(err)
        }
    }

    static async ProductsShowById(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_ProductsShowById")
            next(err)
        }
    }

    static async BannerShowById(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_BannerShowById")
            next(err)
        }
    }

    static async ProductsEdit(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_ProductsEdit")
            next(err)
        }
    }

    static async BannerEdit(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_BannerEdit")
            next(err)
        }
    }

    static async ProductsDelete(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_ProductsDelete")
            next(err)
        }
    }

    static async BannerDelete(req, res, next) {
        try {

        }

        catch(err) {
            console.log(err, "<<<<<eror_BannerDelete")
            next(err)
        }
    }


}

module.exports = Controller