(function () {
    'use strict';
    var button = document.createElement("button"); //创建一个按钮
    button.textContent = "剪辑到笔记"; //按钮内容
    button.style.width = "90px"; //按钮宽度
    button.style.height = "28px"; //按钮高度
    button.style.align = "center"; //文本居中
    button.style.color = "white"; //按钮文字颜色
    button.style.background = "#e33e33"; //按钮底色
    button.style.border = "1px solid #e33e33"; //边框属性
    button.style.borderRadius = "4px"; //按钮四个角弧度
    button.addEventListener("click", clickBotton) //监听按钮点击事件

    // 点击触发
    function clickBotton() {
        setTimeout(function () {
            // alert("Hello World")
            // 尝试获取当前页面的内容
            let doc = document.getElementById("content_views")
            console.log("获取的内容为：", doc);

            // GM_xmlhttpRequestGM.xmlHttpRequesttypeof(GM_xmlhttpRequest) == "function"
            GM_xmlhttpRequest({
                method: "POST",
                url: "http://localhost:19880/inmind/comm/html_to_md",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                },
                data: "content=erwer",
                onload: function (response) {
                    console.log("请求成功");
                    console.log(response.responseText);
                },
                onerror: function (response) {
                    console.log("请求失败");
                }
            });
        }, 100);
    }


    // 添加到CSDN下方的按钮组中
    var like_comment = document.getElementsByClassName('toolbox-list')[0]; //getElementsByClassName 返回的是数组，所以要用[] 下标
    like_comment.appendChild(button); //把按钮加入到 x 的子节点中

})(); //(function(){})() 表示该函数立即执行