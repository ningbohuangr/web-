/*
 * @Author: useker.cn 
 * @Date: 2019-07-09 08:47:49 
 * @Last Modified by: useker.cn
 * @Last Modified time: 2019-07-09 09:32:40
 */

/**
 * @name 获取样式操作
 * @param {element} obj 操作的DOM对象
 * @param {String} attr css的属性
 * @returns {String} 返回css属性的值
 */
function getStyle(obj, attr) {
    //google,火狐
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    }
    return obj.currentStyle[attr];
}

//JSON ={"left":400,"top":400}
/**
 * @name 缓动画多个参数
 * @param {Element} obj 
 * @param {Object} json 
 * @param {Function} callback 
 * @returns{null}
 */
function animate(obj, json, callback) {
    //1.清除之前的定时器
    clearInterval(obj.timer);
    //2.开启新的定时器
    obj.timer = setInterval(function () {

        var flag = true; //10点.准时爬山
        for (var attr in json) {

            var target = json[attr];
            //3.步长   (目标-当前位置)/10;
            var current = parseInt(getStyle(obj, attr));
            var steps = (target - current) / 10;
            steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps)
            //4.动画公司  新的位置=当前位置+步长
            obj.style[attr] = current + steps + "px";

            //5.动画走了,清空定时器
            if (current != target) {
                flag = false;
            }
        }

        //只有一个改变了 flag的状态,就不能清空定时
        if (flag == true) {
            clearInterval(obj.timer);
            // if (typeof callback == 'function') {
            //     callback();
            // }
        }

        console.log(111)



    }, 30)
}


function myscroll() {
    if (window.pageXOffset != undefined) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode == "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop,
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}