AFRAME.registerComponent('animated-colorize', {
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
				el.setAttribute('animation', {
					property: 'material.color',
					from: data.initialColor,
					to: data.onClick,
					dir: 'alternate',
					loop: true
				});
			});
		}
	}
});

AFRAME.registerComponent('change-animated-colorize-property', {
	schema: {
		target: {type: 'selector', default: '#red'},
		newOnClick: {type: 'color', default: ''}
	},
						  
	init: function () {
		var el = this.el;
		var data = this.data;
		
		el.addEventListener('click', function () {
			data.target.setAttribute('animated-colorize', 'onClick', data.newOnClick);
		});
	}
});

AFRAME.registerComponent('match-animated-colorize', {
	schema: {
		target: {type: 'selector', default: '#red'}
	},
	
	init: function () {
		this.color = new THREE.Color();
	},
	
	tick: function () {
		var el = this.el;
		var data = this.data;
		var color = this.color;
		var targetColor = data.target.getAttribute('material').color;
		
		color.set(targetColor);
		el.components.material.material.color.copy(color);
	}
});