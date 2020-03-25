AFRAME.registerComponent ('random-color', {
	schema: {
		target: {type: 'selector', default: ''}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		
		el.addEventListener('click', function () {
			var randomHEX = '#' + Math.random().toString(16).substr(-6);
			
			if (data.target) {
				data.target.setAttribute('material', 'color', randomHEX);
			} else {
				el.setAttribute('material', 'color', randomHEX);
			}			
		});
	}
});