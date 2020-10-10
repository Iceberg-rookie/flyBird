var bird = {
    flyTime : null, //小鸟飞翔的定时器
    wingTimer:null, //小鸟翅膀摆动的定时器
    div: document.createElement('div'),
    showBird: function(parentObj) {
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'
        parentObj.appendChild(this.div)
    },
    fallSpeed: 0, //小鸟下落的速度
    flyBird: function() { //控制小鸟下落的函数
        this.flyTime = setInterval(fly,60)
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
            if(bird.div.offsetTop >= 395) { //掉到地面,清除定时器
                bird,fallSpeed = 0
                clearInterval(bird.flyTime)
            }
        }
    }

}