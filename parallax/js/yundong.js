// JavaScript Document
function getStyle(obj,attr){
      if(obj.currentStyle){
		   return obj.currenStyle[attr];  
	  }else{
	       return  getComputedStyle(obj,false)[attr];
	  };	
};
function yundong(obj,json,fn){
      clearInterval(obj.timer)
	  obj.timer=setInterval(function(){
		  var b=true;
		  for(var attr in json){
			  var C=0;
	          if(attr=='opacity'){
				  C=parseInt(parseFloat(getStyle(obj,attr)*100))
			  }else{
			      C=parseInt(getStyle(obj,attr));
			  }
			  var speed=(json[attr]-C)/5;
			  if(speed>0){
			        Math.ceil(speed);
			  }else{
			        Math.floor(speed);
			  }
			  if(json[attr]!=C){
				   b=false;  
			  }
			  if(attr=='opacity'){
				  obj.style.opacity=(speed+C)/100;
				  obj.style.filter='alpha(opacity='+(speed+C)+')';
			  }else{
				  obj.style[attr]=speed+C+'px';
			  }
			  
		  }
		  if(b){
			     clearInterval(obj.timer);
				 if(fn){
				      fn();
				 }
			  }
	  },30);
};