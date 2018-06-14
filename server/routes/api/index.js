var router = require('express').Router();

router.use('/', require('./users'));
router.use('/contact',require('./contact'));
router.use('/maincategories',require('./maincategories'));
router.use('/categories',require('./categories'));
router.use('/subcategories',require('./subcategories'));
router.use('/products',require ('./products'));
router.use('/brands',require('./brands'));
router.use('/markets',require('./markets'));
router.use('/checkout',require('./checkout'));
router.use('/profiles',require('./profiles'));
router.use('/purchases',require('./purchases'));
router.use('/search',require('./search'));
router.use('/discounts',require('./discounts'));


router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;