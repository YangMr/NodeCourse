const BaseModel = require("./BaseModel");
let sql = new BaseModel();
sql.insert("registered",{userName : "jack",userPass : "123456"},function (response) {
    console.log(response);
});

sql.modify("registered",{id : "6"},{userName: "jack1"},function (response) {
    console.log(response);
});
sql.remove("registered",{id : "6"},function (response) {
    console.log(response)
});
sql.findOneById("registered",{id : "1"},function (response) {
    console.log(response)
});
// sql.find("registered",[0,4],function (response) {
//     console.log(response)
// })

var whereJson = {
    'and' : [{'key':'userName', 'opts':'=', 'userPass' : '"123456"'}],
    'or' : [{'key':'id', 'opts':'<', 'userPass' : "123456"}]
};
var fieldsArr = ['id', 'userName', 'userPass'];
var orderByJson = {'userName':'jack'};
var limitArr = [3];
sql.find("registered", whereJson, orderByJson, limitArr, fieldsArr, function(ret){
    console.log(ret);
});