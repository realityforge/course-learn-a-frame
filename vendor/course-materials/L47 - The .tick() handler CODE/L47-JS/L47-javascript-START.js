AFRAME.registerComponent('colorize', {
	schema: {
		initialColor: {type: 'color', default: ''},
		onClick: {type: 'color', default: ''}
	},
	
	init: function () {
		var el = this.el;
		var data = this.data;
		
		el.setAttribute('material', 'color', data.initialColor);
	},

	update: function (oldData) {
		var el = this.el;
		var data = this.data;
		
		if (oldData.onClick !== data.onClick) {
			el.addEventListener('click', function () {
				el.setAttribute('material', 'color', data.onClick);
			});
		}
	}
});

AFRAME.registerComponent('change-colorize-property', {
	schema: {
		target: {type: 'selector', default: '#red'},
		newOnClick: {type: 'color', default: ''}
	},
						  
	init: function () {
		var el = this.el;
		var data = this.data;
		
		el.addEventListener('click', function () {
			data.target.setAttribute('colorize', 'onClick', data.newOnClick);
		});
	}
});