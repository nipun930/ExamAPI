'use strict';

module.exports = function (Question) {
    Question.getQuestionWithId = function (id, cb) {
        Question.find({"_id" : id.id}, (err, data)=>{
            return cb(null, data);
        });
    }
    Question.remoteMethod('getQuestionWithId', {
        accepts: {arg: 'id', type: 'object'},
        returns: {arg: 'data', type: 'object'}
    });
};
