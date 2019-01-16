const Util = require("./util");
const mysql = require("mysql");
module.exports = function () {
    //调用自身的构造函数,其方法在本函数中定义
    _constructor();
    //数据查询接口
    this.findOneById = function (tableName,id,callback) {

    };
    //数据插入接口
    this.insert = function (tableName,rowInfo,callback) {

    };
    //数据修改接口
    this.modify = function (tableName,id,rowInfo,callback) {

    };
    //数据删除接口
    this.remove = function (tableName,id,callback) {

    };
    //数据条件查询接口
    this.find = function (tableName,whereJson,orderByJson,limitArr,fieldsArr,callback) {
        
    };
    //自身构造函数方法,涉及数据库的连接
    function _constructor() {
        //获取mysql配置信息
        let dbConfig = Util.get('config.json','db');
        let client = {};
        //获取主机地址
        client.host = dbConfig["host"];
        //获取端口号
        client.port = dbConfig["port"];
        //获取数据库用户名
        client.user = dbConfig["user"];
        //获取数据库密码
        client.password = dbConfig["password"];
        //创建mysql连接
        let dbClient = mysql.createConnection(client);
        //进行连接
        dbClient.connect();
        //执行mysql命令,连接mysql服务器的一个数据库
        dbClient.query("use" + dbClient["database"],function (error,results) {
            //回调处理mysql连接结果
            if(error){
                console.log("ClientConnectionReady Error :" + error.message);
                //关闭数据库
                dbClient.end();
            };
            console.log("connection local mysql success");

        })
    }
    
};