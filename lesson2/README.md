# fs模块(文件系统模块)

## 读取文件
    
    异步:
        fs.readFile("文件的路径","字符编码",callback)
    
    同步: 
        fs.readFileSync("文件的路径","字符编码")
    
    文件流读取:
        fs.createReadStream("文件的路径","字符编码")
 
## 写入文件

    异步:
        如果写入的文件名称不存在,那么会首先创建这个文件,然后在进行写入
        fs.writeFile("文件的名称","写入的内容","字符编码",callback)
    同步:
        fs.writeFileSync("文件名称","写入的内容","字符编码");
    文件流写入:
        