$(function(){
	let h=$(window).height();
	let w=$(window).width();
	let t=(h-720)/2+"px";
	let center=$('#center');
	let loading=$('#loading');
	loading.animate({opacity:0},1000);
	loading.css({dispaly:'none'});
	if(h>720){
		center.animate({top:t},2000);
	}else{
		center.animate({top:'0px'},2000);
	};
	if(h<w){ setTimeout(function(){center.addClass('rotate_X')},2500)};
	$('body').mouseenter(function(){
    	center.css('transition','transform 1s');
	});
	center.hover(function(){
		center.css('transition','transform 3s');
	},function(){
		center.css('transition','transform 1s');
	});	
	$('img').hover(function(){
		 $(this).stop().animate({height:'60%',width:'60%'},500);
	},function(){
		 $(this).stop().animate({height:'73%',width:'73%'},500);
	});
});
function xingshi(div_id,div_height){
	$('#works_a').css({'bottom':'-1500px','height':'0px'});
	$('#works_b').css({'bottom':'-1500px','height':'0px'});
	$('#works_c').css({'bottom':'-1500px','height':'0px'});
	$('#works_d').css({'bottom':'-1500px','height':'0px'});
	$(div_id).animate({bottom:'0px',height:div_height},1000);	
	$('#center').css({'top':'0px','transform':'rotateX(0deg)'});
	setTimeout(function(){start()},1200)	
}