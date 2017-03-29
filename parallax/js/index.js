// JavaScript Document
window.onload=function(){
	var D=document;
	var S_animation=D.getElementById("Start-animation");
	var oImg=S_animation.getElementsByTagName('img')[0];
	var Cols=D.getElementsByClassName('cols');
	var iTem=D.getElementsByClassName('item');
	var Scene=D.getElementsByClassName('Scene');
	var Scene1=D.getElementsByClassName('Scene1');
	var dd=D.getElementById('head');
	var Warp2=D.getElementsByClassName('warp2')[0];
	var Nav=D.getElementById('navbar');
	var T_animation=D.getElementById('Transition-animation');
	var E_animation=D.getElementById('End-animation');
	var Plane=D.getElementById('plane');
	var Plane1=D.getElementById('plane1');
	var Navbar=D.getElementById('navbar');
	var P_img=Plane.getElementsByTagName('img');
	var clientW=window.screen.availWidth 
	var clientH=window.screen.availHeight
	var timer=null;
	var timer2=null;
	var startTime=0;
	var endTime=0;
	var allNum=5;
	var num=0;
	var y=['你','好','吗','!','去','玩','不'];
    var z=0;
    var Text=document.getElementById('text');
	var Text_=Text.getElementsByTagName('span')[0];
	var i=0;
	var timer=null;
	var arr3=['#EEEE00','#EE6363','#E0EEE0','#7FFF00','#5D478B'];
	var Bg=D.getElementsByClassName('bg');
	var Bg_p=Bg[1].getElementsByTagName('p')[0];;
		 
	//删除Class 
    function removeClass(obj, cls) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
	};
	//判断有无Class 
	function hasClass(obj, cls) {  
       return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));    } 
	//延时触开头发动画
	setTimeout(function(){
	    oImg.style.opacity=0;
		setTimeout(function(){
			WH();
			},10)
	},1000);
	
	function text(times){
		   setTimeout(function(){
			   timer3=setInterval(function(){
					if(z==y.length){
					   clearInterval(timer3);
					   z=0;
					   timer2=true;
                       return;
					}
						Text_.innerHTML+=y[z];
						z++;
				},100);
		   },times)
			   
	};
	function WH(){//元素宽高变大
		 timer=setInterval(function(){
			if(S_animation.offsetWidth>=clientW){
		       clearInterval (timer);
			   Plane.className=' planeFly';
			   Navbar.className+=' Opacity';
			   P_img[1].className+=' planeRotae';
			   Plane1.className='planeFly1';
			   dd.style.display='none';
			   text(2000);
			   
			   return;
		    }
			yundong(S_animation,{width:clientW*1.5,height:clientW*1.5,marginTop:-clientW*1.5/2,marginLeft:-(clientW*1.5)/2});
			
		 
		 },400);
		
	};
	
////事件委托
	Warp2.onmousemove=function(ev){
	     var ev=ev||event;
		 var target=ev.target||ev.srcElement;
		 
		 if(target.nodeName=='SPAN'){
			 var index;
			 for(var i=0;i<iTem.length;i++){
				 if(iTem[i]===target.parentNode){index=i}
			 }
			 
		     Bg[0].style.background=arr3[index];
		 }
	};
	
/////////////////////////////////////////////////
     //鼠标滚轮事件
	if(document.attachEvent){
		 document.attachEvent('onmousewheel',scrollFunc);
	}
    if(document.addEventListener){
	     document.addEventListener('DOMMouseScroll',scrollFunc,false);
    };     
    window.onmousewheel=document.onmousewheel=scrollFunc;
  function scrollFunc(e){ 
    var e=e || window.event;
	if(timer2){
	  startTime	=new Date().getTime(); 
	  if((endTime-startTime)<=-1000){//鼠标滚轮的间隔触发时间
		  	 
			 if(e.detail>0||e.wheelDelta<0){
				  num++;
				  if(num>allNum){
					  num=allNum;
				  };
				  GunDongX(num) ;
			 }else{
				  num--;
				  if(num<=0){
					  num=0;
				  } ;
				  GunDongS(num);
			 };
	    endTime =new Date().getTime();
	 }else{
	      return false;	 
	 };
   };
	
   };
   /////向下滚动
   function GunDongX(n){
        switch(n)
		{
			case 1:
			   removeClass(Plane, 'planeFly-in');
			   Plane.className='planeFly-out';
			   S_animation.style.zIndex=-1;
			   Text_.innerHTML='';
			   if(hasClass(Cols[0], 'colsRotate')){
				   return;
			   }else{
				   setTimeout(function(){
					   for(var i=0;i<Cols.length;i++){
						   removeClass(Cols[i], 'colsRotate-out');
						   Cols[i].className+=' colsRotate';
					   };
				   },500)
			   }
			  break;
			case 2:
			   T_animation.className='toTop';
			  break;
			case 3:
			    T_animation.className+=' toTop2';
			  break;
		   case 4:
		       
		       E_animation.className='hua-out';
			   
			  break;
		   case 5:
		       var text2=['E','n','d'];
			   var n=0;
			   var timer4=null;
			   if(Bg_p.innerHTML!=""){return;}else{
				   timer4=setInterval(function(){
					   if(n==text2.length){
						   clearInterval(timer4);
						   return;
					   }
						Bg_p.innerHTML+=text2[n];
						n++;
				   },500)
			   };
			   E_animation.className='hua-out1';
			  break;  	    
		 default:
		}
     };
	 ////////向上滚动
	 function GunDongS(n){
	       switch(n)
		   {
				case 0:
				    if(Text_.innerHTML==""){
				          text(100);
					}
					if(hasClass(Cols[0], 'colsRotate-out') ){
				          return;
					}else{
					   
							for(var i=0;i<Cols.length;i++){
								   removeClass(Cols[i], 'colsRotate');
								   Cols[i].className+=' colsRotate-out';
							};
					   
					};
				   setTimeout(function(){
					  removeClass(Plane1, 'planeFly-out');
					  
					  Plane.className='planeFly-in';
					  
				   },500)
				  break;
				case 1:
					 removeClass(T_animation, 'toTop');
				  break;
				case 2:
				     removeClass(T_animation, 'toTop2');
				  break;
				case 3:
				     
				     E_animation.className='hua-in';
				     
				  break;
				case 4:
				       var text2=['E','n','d'];
				       var n=text2.length;
					   var timer4=null;
					   
						   timer4=setInterval(function(){
							   if(n<0){
								   clearInterval(timer4);
								   E_animation.className='hua-in1';
								   return;
							   }
								Bg_p.innerHTML=Bg_p.innerHTML.slice(0,n);
								n--;
						   },200);
					   
					 
				  break;  	      
				default:
		 }
	 };

};