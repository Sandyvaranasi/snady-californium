const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const welcome = require('../logger/logger')
const utility = require('../util/helper')
const format = require('../validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    welcome.welcome("Sandeep")
    console.log(welcome.welcome)

    utility.printDate()
    console.log(utility.printDate)
    utility.printMonth()
    console.log(utility.printMonth)
    utility.getBatchInfo('californium','4','thursday','nodejs')
    console.log(utility.getBatchInfo)

    format.trim("   FunctionUp          ")
    format.toLowerCase("CALIFORNIUM")
    format.toUpperCase("sandeep")

    const month = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    console.log(lodash.chunk(month,[size=3]))
const oddNum = [1,3,5,7,9,11,13,15,17,19]
console.log(lodash.tail(oddNum))
const num1 = [1,2,3]
const num2 = [2,3,4]
const num3 = [3,4,5]
const num4 = [4,5,6]
const num5 = [5,6,7]
console.log(lodash.union(num1,num2,num3,num4,num5))
const movies = [["Horror","Kanchana"],["Comedy","Hera-Pheri"],["Action","Border"],["Drama","Mohobattein"]]
console.log(lodash.fromPairs(movies))


    res.send('any dummy text')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;