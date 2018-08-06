/**
 * Created by asus on 2017/8/5.
 */

NProgress.start();

var ap1 = new APlayer({
    element: document.getElementById('bgMusic'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    preload: 'metadata',
    mode: 'circulation',
    music: {
        title: '山丘',
        author: '金玟岐 - ( Cover 李宗盛 )',
        url: 'http://ougxgesj3.bkt.clouddn.com/shanqiu.mp3',
        pic: './img/musicAuthor.jpg'
    }
});




$(function() {
    NProgress.done();

    var musicOpen=false
    $('#musicArrow').click(function () {
        if (!musicOpen){
            $(this).parent().css({
                'transform':'translateX(0px)',
                'transition':'2s'
            })
            musicOpen=true
        }
        else {
            $(this).parent().css({
                'transform':'translateX(-264px)',
                'transition':'2s',
                'transition-timing-function':'ease-in'
            })
            musicOpen=false
        }

    })


    $('.links>ul>li').mouseover(function () {
        if ($('#imgHove')[0].paused){
            $('#imgHove')[0].play()
        }
    })
    $('.links>ul>li').mouseout(function () {
        $('#imgHove')[0].currentTime=0
        $('#imgHove')[0].pause()

    })
    // console.log($('#imgHove'))
    // $('#imgHove')[0].play()
})

