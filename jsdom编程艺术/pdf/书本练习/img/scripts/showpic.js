//实现图片跳转换图
function showpic(pic){
    console.log(pic)
    var src= pic.getAttribute('href')
    var id=document.getElementById('placehoder')
    id.setAttribute('src',src)
}