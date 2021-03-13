/*
 * @Author: useker.cn 
 * @Date: 2019-07-09 08:47:49 
 * @Last Modified by: useker.cn
 * @Last Modified time: 2019-07-09 10:01:12
 */

/**
 * @name滚动时获取不可见区域的值
 * @returns {null};
 */
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

function animate(obj, json, callback) {
    //1,清除之前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            //1.当前的值
            var current = 0;
            //2.目标的值
            var target = 0;
            if (attr == "opacity") {
                current = getStyle(obj, attr) * 100;
                target = json[attr] * 100;
            } else {
                current = parseInt(getStyle(obj, attr))
                target = parseFloat(json[attr]);
            }
            //3.步长 (目标的值-当前的值)/10;
            var steps = (target - current) / 10;
            steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
            //4. 新的位置=当前的位置+步长
            if (attr == "opacity") {
                obj.style[attr] = (current + steps) / 100;
                obj.style.filter = "alpha(opacity=" + (current + steps) + ")";
            } else if (attr == "zIndex") {
                obj.style.zIndex = target;
            } else {
                obj.style[attr] = current + steps + "px";
            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (typeof (callback) == "function") {
                callback();
            }
        }
    }, 30)

}