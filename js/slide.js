jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

window.onload=function(){
	var pic_lis=document.getElementById('slide_pic').getElementsByTagName('li');
	var an_lis=document.getElementById('slide_an').getElementsByTagName('li');
	an_lis[0].style.background='#6AAEBF';
	var c=0;
	
	function h_slide(){
		c++;
		if(c==pic_lis.length){c=0;}
		for(var i=0; i<pic_lis.length; i++){
			pic_lis[i].style.display='none';
			an_lis[i].style.background='#eee';
		}
		pic_lis[c].style.display='block';
		an_lis[c].style.background='#6AAEBF';	
	}

	var timer=setInterval(h_slide,2000);

	for(var j=0; j<pic_lis.length; j++){
		an_lis[j].index=j;
		an_lis[j].onmouseover=function(){
			index=this.index;
			clearInterval(timer);
			for(var k=0; k<an_lis.length; k++){
				pic_lis[k].style.display='none';
				an_lis[k].style.background='#eee';
			}
			pic_lis[index].style.display='block';
			an_lis[index].style.background='#6AAEBF';
		}

		an_lis[j].onmouseout=function(){
			timer=setInterval(h_slide,2000);
		}
	}
}


$(function(){
	var oul = $('.slide ul');
	var oulHtml = oul.html();
	oul.html(oulHtml+oulHtml)
	var timeId = null;

	var ali = $('.slide ul li');
	var aliWidth = ali.eq(0).width();
	var aliSize = ali.length;
	var ulWidth = aliWidth*aliSize;
	oul.width(ulWidth);
	
	var speed = -2;
	function slider(){
		if(speed < 0){
			if(oul.css('left')==-ulWidth/2+'px'){
				oul.css('left',0);
		 	}
		 	oul.css('left','+=-2px');
		}

		if(speed > 0){
			if(oul.css('left')=='0px'){
				oul.css('left',-ulWidth/2+'px');
		 	}
		 	oul.css('left','+='+speed+'px');
		}
	 	
	 }

	timeId = setInterval(slider,30);
	$('.slide').mouseover(function(){
		clearInterval(timeId);
	});

	$('.slide').mouseout(function(){
		timeId = setInterval(slider,30);
	});

	$('.goLeft').click(function(){
		speed=-2;
	});

	$('.goRight').click(function(){
		speed=2;
	});
});