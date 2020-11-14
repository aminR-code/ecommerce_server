const router = require("express").Router()
const Controller = require('../controllers/control')
const authentication = require('../middlewares/authentication')
const authorization = require("../middlewares/authorization")

router.post("/login", Controller.login)


router.use(authentication)

router.get("/products/showAll", Controller.ProductShowAll)
router.get("/banner/showAll", Controller.BannerShowAll)

router.post("/products/create", Controller.ProductCreate)
router.post("/banner/create", Controller.BannerCreate)

router.get('/products/:id', authorization, Controller.ProductsShowById)
router.get('/products/:id', authorization, Controller.ProductsShowById)

router.put("/products/:id", authorization, Controller.ProductsEdit)
router.put("/products/:id", authorization, Controller.ProductsEdit)

router.delete("/products/delete/:id", authorization, Controller.ProductsDelete)
router.delete("/banner/delete/:id", authorization, Controller.BannerDelete)

module.exports=router