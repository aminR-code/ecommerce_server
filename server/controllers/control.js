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
}