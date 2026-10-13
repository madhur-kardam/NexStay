const express = require ("express");
const router= express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing }=require("../middleware");
const listingController= require("../controllers/listings.js");
const multer =require('multer')
const {storage} =require("../cloudConfig.js");
const upload =multer({ storage })

router.route("/")
.get(wrapAsync(listingController.index)) //all listings route
.post(isLoggedIn,                        //create listing route
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.create)
);                                       

//new route
router.get("/new",
    isLoggedIn,
    listingController.renderNewForm
);

router.route("/:id")
.get(wrapAsync(listingController.show)) //show indidvidual listing 
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing)) //update listing
.delete( isLoggedIn,isOwner,wrapAsync(listingController.deleteListing)); //delete listing


//edit-form route
router.get("/:id/edit"
    , isLoggedIn
    , isOwner
    , wrapAsync(listingController.editFrom)
);

module.exports = router;