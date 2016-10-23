window.onload=function(){
	var a1=[];//存放输入内容；
	var a2; //第一次输入的值
	var a3;	//第二次输入的值
	var temp=""; //存储运算符
	var jG="";		// 存储结果
	var num = 0;	// 运算符出现次数限定
	var spot = 0;	//小数点 出现次数限定
	var oRes = document.getElementsByClassName('res')[0];
	var oShow = document.getElementById('show');
	var aOper = document.getElementsByClassName('oper');
	var	aNum = document.getElementsByClassName('num');
	var oDeng = document.getElementsByClassName('deng')[0];
	var oSpot = document.getElementsByClassName('sqc')[0];
	var oZf = document.getElementsByClassName('zf')[0];
	var oBack = document.getElementsByClassName('back')[0];
	var oZx = document.getElementsByClassName('zx')[0];
	var oZq = document.getElementsByClassName('zq')[0];
	var oYx = document.getElementsByClassName('yx')[0];
	var oPfg = document.getElementsByClassName('pfg')[0];
	var open = 0;
	var nn;
	// 点击按钮
	for(var i=0; i<aNum.length;i++){
		aNum[i].onclick=function(){
		var b = this.innerHTML;		// 取出点击的运算符；
			if(temp!=''){			//判断是否出现运算符；(判断第一次输入)
				a1.push(b);			// 将输入内容存入数组；
				a3 = a1.join('');	// 将数组内容转化成字符串；
				oShow.setAttribute('value',a3); //设置屏幕显示内容；
				open=2;
			}else{
				a1.push(b);
				a2 = a1.join('');
				oShow.setAttribute('value',a2)
				open=1;
			}
		}
	}
// 运算符
	for(var j=0; j<aOper.length; j++){    
		aOper[j].onclick=function(){
			num++								//判断运算符出现次数
			if (num==2) {
				if(temp=='+'){
					jG=parseFloat(a2)+parseFloat(a3)
				}else if(temp=='-'){
					jG=parseFloat(a2)-parseFloat(a3)
				}else if(temp=='x'){
					jG=parseFloat(a2)*parseFloat(a3)
				}else if(temp=='÷'){
					if(a3==0){
					alert('0不能做除数');
					return
				}
					jG=parseFloat(a2)/parseFloat(a3)
				}else if(temp=='%'){
					jG=parseFloat(a2)%parseFloat(a3)
				}
					oShow.setAttribute('value',jG)	//设置屏幕显示内容；
					a2=jG;							//将结果复制给第一个变量（为了完成连续运算）
					a1=(a2.toString()).split('');	//
					temp='';						//
					a3=0;							// 
					num=1;							//
					open=3;	
			}
			temp= this.innerHTML;
			a1=[]; 
			spot=0;
		}
	}
//计算结果
	oDeng.onclick=function(){
		 if(temp=='+'){
				jG=parseFloat(a2)+parseFloat(a3)
			}else if(temp=='-'){
				jG=parseFloat(a2)-parseFloat(a3)
			}else if(temp=='x'){
				jG=parseFloat(a2)*parseFloat(a3)
			}else if(temp=='÷'){
				if(a3==0){
					alert('0不能做除数');
					return
				}
				jG=parseFloat(a2)/parseFloat(a3)
			}else if(temp=='%'){
				jG=parseFloat(a2)%parseFloat(a3)
			}

			jG=Number(jG.toFixed(5))

			oShow.setAttribute('value',jG)
			// a2=jG;
			//a1=(a2.toString()).split('');
			a2=0;
			a1=[];
			temp='';
			a3=0;
			num=0;
			open=3;
	}

// 重置
	oRes.onclick = function(){
		a1=[];
		a2;
		a3;
	 	num=0;
	 	temp="";
	 	jG="";
	 	spot=0;	
	 	oShow.setAttribute('value',0)
	};

	// 小数点
	oSpot.onclick = function(){
		spot++;
		if (spot>1) {
			return false;
		}
		if(a1.length>0){

			a1.push(this.innerHTML);
			console.log(a1);
		}else{
			a1.push(0+this.innerHTML);
			console.log(a1);
		}
	}

	// 退格
	oBack.onclick = function(){
	var oShow2 = oShow.getAttribute('value');
	var oShow3=oShow2.slice(0,oShow2.length-1);
		oShow.setAttribute('value',oShow3);
		if(open==1){
			a1 = a1.slice(0,length-1)
			a2 = a2.slice(0,length-1)
		}else if(open==2){
			a1 = a1.slice(0,length-1)
			a3 = a3.slice(0,length-1)
		}else if(open==3){
			jG = parseFloat((jG.toString()).slice(0,length-1));
			a2=jG;
			a1 = a1.slice(0,length-1)
		}
		
		console.log(a1);
		console.log(a2);
		console.log(a3);
		console.log(jG);
	}
	// 正负数
	oZf.onclick = function(){
		if (open==1) {
			if(a2>0){
				a2=-a2
				oShow.setAttribute('value',a2)	
			}else if(a2<0){
				a2=-a2
				oShow.setAttribute('value',a2)	
			}
			
		}else if(open==2){
			if(a3>0){
				a3=-a3
				oShow.setAttribute('value',a3)	
			}else if(a3<0){
				a3=-a3
				oShow.setAttribute('value',a3)	
			}
		}else if(open==3){
			if(a2>0){
				a2=-a2
				oShow.setAttribute('value',a2)
				jG=-jG	
				nn= -a1.join('');
				a1=[]
				a1.push(nn);
			}else if(a2<0){
				a2=-a2
				oShow.setAttribute('value',a2)
				jG=-jG	
				nn= -a1.join('');
				a1=[]
				a1.push(nn);
			}	
		}
		console.log(jG)
		console.log(a1)	
		console.log(a2)	
		console.log(nn)

	}
	//高级函数；
	oZx.onclick = function(){
		var cc = oShow.getAttribute('value');	
		oShow.setAttribute('value',Math.sin(cc))
		a1=[];
		a2=0;
		a3=0;	
	}
	oYx.onclick = function(){
		var cc = oShow.getAttribute('value');
		oShow.setAttribute('value',Math.cos(cc))
		a1=[];
		a2=0;
		a3=0;		
	}
	oZq.onclick = function(){
		var cc = oShow.getAttribute('value');	
		oShow.setAttribute('value',Math.tan(cc))
		a1=[];
		a2=0;
		a3=0;	
	}
	oPfg.onclick = function(){
		var cc = oShow.getAttribute('value');
		oShow.setAttribute('value',Math.sqrt(cc))	
		a1=[];
		a2=0;
		a3=0;
	}
}
