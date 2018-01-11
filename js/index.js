$(function(){
	////////////////////////////////轮播图/////////////////////////////////////////////
	let dian = $('.dian > li');
	let box = $('.img-box');
	let banna = document.querySelector('.banna');
		box[0].innerHTML += box[0].innerHTML;
		let img = $('.img-box > a');
		box[0].style.width = img.length * img.width() + 'px';
		let sx ,m;
		banna.addEventListener('touchstart',function(e){
			let event = e.changedTouches[0];
			box[0].style.transition = 'none';
			sx = event.pageX;
			m = box[0].offsetLeft;
			if( m / img.width() == 0){
				box[0].style.left = -7 * img.width() + 'px';
			}
			if( m / img.width() == -13){
				box[0].style.left = -6 * img.width() + 'px';
			}
			m = box[0].offsetLeft;
		})
		banna.addEventListener('touchmove',function(e){
			let event = e.changedTouches[0];
			let mx = event.pageX;
			box[0].style.left =  mx - sx + m + 'px';		
		})
		banna.addEventListener('touchend',function(){
		let news = Math.round(box[0].offsetLeft / img.width());
		box[0].style.transition = 'all ease .7s';
		box[0].style.left =  news * img.width() + 'px';

		dian.each((index,ele) =>{
				$(ele).css({border:'2px solid #fff'})
			})

		dian[-(news % 7) ].style.border = '2px solid red';
	})

	
})
///////////////////////////推荐//////////////////////////////////////////

