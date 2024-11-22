const People = require("../model/people.model");

class PeopleController{
    getAllPeople = (req,res, next) => {
        People.find(function (err, foundList) {
            if (!err) {
                res.send(foundList);
            } else {
                res.send(err);
            }
        })
    }
}
module.exports = PeopleController;