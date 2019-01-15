var AliDayu = require('node-alidayu');
var client = new AliDayu({
    app_key: '',
    app_secret: '你自己的'
})
//外部调用该方法
exports.messagecheck= function(req, res, next) {
    //随机产生六位数验证码
    var range=function(start,end)
    {
        var array=[];
        for(var i=start;i<end;++i) array.push(i);
        return array;
    };
    var randomstr = range(0,6).map(function(x){
        return Math.floor(Math.random()*10);
    }).join('');
    console.log(randomstr);


//获取前台的输入的手机号码
    var number=req.body.number;
    console.log(number);
    client.sms({
        rec_num: number,//要发送的手机号码
        sms_free_sign_name: '泰山',//你在阿里大于的应用名
        sms_template_code: 'SMS_70490513',//类型模板ID
        sms_param: {

            number: randomstr//要发送的验证码
        }
    }).then(function (data) {
        console.log('sucess');
        //res.json({'number':number,'success':ok});
    }).catch(function (err) {
        console.log('fail')
    })
    res.render('index', {title: 'Ex'});//返回index主页
};