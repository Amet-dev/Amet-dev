var typed = new Typed('.typed', {
    stringsElement: '#typed-strings'
    , typeSpeed: 150, backSpeed: 40, shuffle: true, loop: true, loopCount: Infinity, 
  });
console.log(navigator.userAgent);

if (!( (screen.width<480) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) )){
	let bg = document.querySelector('.mouse-parallax-bg');
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	});
}