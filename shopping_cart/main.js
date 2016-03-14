function addCart(id, name, price){
				//維護購物車資料（資料庫形態、如何儲存(use Array)、如何取得）
		window.location.reload();
		var cart=window.localStorage.getItem("cart");
		if (cart==null){//cart is empty
			//var cart=[];
			//cart.push({id:id, name:name, price:price, count:1});//將資料裝入array
			cart=[{id:id, name:name, price:price, count:1}];//cart[0]
			}else{//cart filled with items
				cart=JSON.parse(cart);//JSON.parse("{x:3}"); 將字串轉回物件或陣列;
				addItem(cart, {id:id, name:name, price:price, count:1});// new 一個新物件
			}
		
		window.localStorage.setItem("cart", JSON.stringify(cart));//將陣列轉換成JSON物件存放至localStorage,稍後再轉回來
		//網路傳輸字串，無法傳輸物件，所以必須先將資料轉成字串，稍後再轉回物件

	};

function addItem(cart, item){
	//偵測重複
	for(var i=0;i<cart.length;i++){
		if(cart[i].id==item.id){
			cart[i].count++;
			return; 

		}

	}
	//沒有重複
	cart.push(item);

};


/*var x={x:3};// JSON物件
					x.x; //合法

				var y="{x:3}"//JSON格式的字串
				var z=y.substring(0,2);
				alert(z); {x
*/



		

var btn=document.getElementById('btn');
btn.addEventListener('click', sendCart);
	
function sendCart(){//網頁一載入，就載入購物車資料

		var cart=window.localStorage.getItem('cart');//取得資料，在前端做處理
		var detail=document.getElementById('detail');
		var amount=document.getElementById('amount');
		var confirm=document.getElementById('confirm');
		var cancel=document.getElementById('cancel');
		
		if (cart==null){
			detail.innerHTML="購物車是空的";
			amount.style.display="none";
		}else{
			cart=JSON.parse(cart);//將字串轉回含JSON的物件陣列
			var total=0;
			for(var i=0;i<cart.length;i++){
				detail.innerHTML+="<div> "+cart[i].name+" $"+
				cart[i].price+" X "+cart[i].count+"</div>";
				total+=cart[i].price*cart[i].count;
			}

			amount.innerHTML+="<div> 總共: $"+total+" </div>";
			confirm.style.display="inline";
			cancel.style.display="inline";

			cancel.addEventListener('click', clear);


		}

		btn.removeEventListener('click', sendCart);
		
		};


function clear(){
			
			window.localStorage.clear();
			sendCart();
			
			};

	


/*function sendCart(){//Ajax 將資料傳回後端，使用POST,資料用參數('字串')傳遞
		var req=new XMLHttpRequest();
		req.open("post", "http://www.cart.php");
		req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		req.send("cart="+window.localStorage.getItem("cart"));

	}
*/


$('body').scrollspy({ target: '#navbar-example' })





function webAlert(){
			alert('即將進入付款頁面')

			}
	
