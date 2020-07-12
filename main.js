window.onload = () => {
    console.log("頁面載入完成")

    // 取得所有元素
    var elements = document.getElementsByTagName("*");
    
    for (let index = 0; index < elements.length; index++) {
        const e = elements[index];

        e.onclick = () => {
            var target = e.getAttribute("data-gte-target");  //目標屬性
            var offset = e.getAttribute("data-gte-offset");  //位移屬性
    
            if (target) {
                var element = document.getElementById(target);  //取得目標
    
                // 視窗.捲動至({元素.上方,行為})
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: "smooth"
                })
    }

        }



    }
}

