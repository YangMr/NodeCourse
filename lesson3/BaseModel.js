//引入UtilModel模块
const Util = require("./UtilModel");
//引入mysql模块
const mysql = require("mysql");
let connection = "";
module.exports = function () {
    //调用自身的构造函数,其方法在本函数中定义
    _constructor();

    /*数据插入*/
    this.insert = function (tableName,rowInfo,callback) {
        connection.query("insert into " + tableName + " SET ?" ,rowInfo,function (error,results) {
            if(error){
                console.log("数据插入失败,错误信息:" + error.message);
            }
            callback(results.insertId);
        })
    };
    /*数据修改*/
    this.modify = function (tableName,id,rowInfo,callback) {
        connection.query('update ' + tableName + ' SET ? where ?', [rowInfo, id], function(err, result) {
            if(err) {
                console.log("数据更新失败,错误信息: " + err.message);
                callback(false);
            } else {
                callback(result);
            }
        });
    }
    /*数据删除*/
    this.remove = function (tableName,id,callback) {
        connection.query('delete from ' + tableName + ' where ?', id,
            function(error, results) {
                if(error) {
                    console.log("数据更新失败,错误信息:" + error.message);
                    connection.end();
                    callback(false);
                } else {
                    callback(true);
                }
            });
    }
    /*查询单条*/
    this.findOneById = function (tableName,id,callback) {
        connection.query('SELECT * FROM ' + tableName + ' where ?', id,
            function(error, results) {
                if (error) {
                    console.log('数据更新失败,错误信息: ' + error.message);
                    connection.end();
                    callback(false);
                } else {
                    if(results){ //如果查询到数据则返回一条数据即可
                        callback(results.pop());
                    } else{ //查询数据为空则返回空数据
                        callback(results);
                    }
                }
            });
    }
    /*条件查询*/
    this.find = function(tableName, whereJson, orderByJson, limitArr, fieldsArr, callback){
        var andWhere   = whereJson['and']
            , orWhere    = whereJson['or']
            , andArr = []
            , orArr  = [];
        /* 将数组转换为where and条件array */
        for(var i=0; i<andWhere.length; i++){
            andArr.push(andWhere[i]['key'] + andWhere[i]['opts'] + andWhere[i]['value']);
        }
        /* 将数组转换为where or条件array */
        for(var i=0; i<orWhere.length; i++){
            orArr.push(orWhere[i]['key'] + orWhere[i]['opts'] +orWhere[i]['value']);
        }
        /* 判断条件是否存在，如果存在则转换相应的添加语句 */
        var filedsStr = fieldsArr.length>0 ? fieldsArr.join(',') : '*'
            , andStr    = andArr.length>0    ? andArr.join(' and ') : ''
            , orStr     = orArr.length>0     ? ' or '+orArr.join(' or ') : ''
            , limitStr  = limitArr.length>0  ? ' limit ' + limitArr.join(',') : ''
            , orderStr  = orderByJson ? ' order by ' + orderByJson['key'] + ' ' + orderByJson['type'] : '';
        /* 执行mysql语句 */
        connection.query('SELECT ' + filedsStr + ' FROM ' + tableName + ' where ' + andStr + orStr + orderStr + limitStr,
            function(error, results) {
                if (error) {
                    console.log('GetData Error: ' + error.message);
                    connection.end();
                    callback(false);
                } else {
                    callback(results);
                }
            });
    };
    //自身的构造方法,连接数据库
    function _constructor() {
        let dbConfig = Util.get("./SqlConfig.json","db");
        /*
        //存储数据库信息
        console.log(dbConfig)
        let client = {};
        //获取主机地址
        client.host = dbConfig["host"];
        //获取端口号
        client.port = dbConfig["port"];
        //获取数据库服务器用户名
        client.user = dbConfig["user"];
        //获取数据库服务器密码
        client.password = dbConfig["password"];
        //获取要连接的数据库名称
        client.database = dbConfig["database"];
        */
        //创建数据库连接
          connection = mysql.createConnection(dbConfig);
        //连接数据库
          connection.connect(function (error) {
              if(error){
                  console.log("数据库连接失败,错误信息:" + error.message);
              }else{
                  console.log("数据库连接成功");
              }
          });

    }
};


