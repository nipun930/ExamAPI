'use strict';

module.exports = function(Question) {
    Question.firstQuestion = function(cb) {
        var res = Question.find({"where":{_id : "5e14c431d2fa64037018dd95"}},(err, res)=>{console.table(res)});
        
        var response = {name:"nipun"}
        cb(null, response);
    }
    Question.remoteMethod(
        'firstQuestion', {
        http: { path: '/first', verb: 'get' },
        returns: { arg: 'location', type: 'string' }
    }
    );
};
