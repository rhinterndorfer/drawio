/**
 * Sample plugin.
 */
Draw.loadPlugin(function (ui) {

	var graph = ui.editor.graph;

	function mxIsometric(cell) {
		this.images = [];
		var currentCell = cell;

		if (graph.model.isEdge(currentCell)) {
			var state = graph.getView().getState(currentCell);
			var pts = state.absolutePoints;

			// endpoint
			x = pts[1].x;
			y = pts[1].y;


			var up = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
				'stroke="#fff" transform="rotate(0 14 14)" fill="' + HoverIcons.prototype.arrowFill + '"/>');
			var imgUp = mxUtils.createImage(up.src);
			imgUp.style.position = 'absolute';
			imgUp.style.cursor = 'pointer';
			imgUp.style.width = '26px';
			imgUp.style.height = '26px';
			imgUp.style.left = (x - 14 + 3) + 'px';
			imgUp.style.top = (y - 14 - 30) + 'px';

			mxEvent.addListener(imgUp, 'click',
				mxUtils.bind(this, function (evt) {
					this.addChild(cell, 'up');
					this.destroy();
				})
			);

			graph.container.appendChild(imgUp);
			this.images.push(imgUp);


			var down = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
				'stroke="#fff" transform="rotate(180 14 14)" fill="' + HoverIcons.prototype.arrowFill + '"/>');
			var imgDown = mxUtils.createImage(down.src);
			imgDown.style.position = 'absolute';
			imgDown.style.cursor = 'pointer';
			imgDown.style.width = '26px';
			imgDown.style.height = '26px';
			imgDown.style.left = (x - 14 - 6) + 'px';
			imgDown.style.top = (y - 14 + 30) + 'px';

			mxEvent.addListener(imgDown, 'click',
				mxUtils.bind(this, function (evt) {
					this.addChild(cell, 'down');
					this.destroy();
				})
			);

			state.view.graph.container.appendChild(imgDown);
			this.images.push(imgDown);


			var right = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
				'stroke="#fff" transform="rotate(60 14 14)" fill="' + HoverIcons.prototype.arrowFill + '"/>');
			var imgRight = mxUtils.createImage(right.src);
			imgRight.style.position = 'absolute';
			imgRight.style.cursor = 'pointer';
			imgRight.style.width = '26px';
			imgRight.style.height = '26px';
			imgRight.style.left = (x - 14 + 30) + 'px';
			imgRight.style.top = (y - 14 - 15) + 'px';

			mxEvent.addListener(imgRight, 'click',
				mxUtils.bind(this, function (evt) {
					this.addChild(cell, 'right');
					this.destroy();
				})
			);

			state.view.graph.container.appendChild(imgRight);
			this.images.push(imgRight);


			var left = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
				'stroke="#fff" transform="rotate(240 14 14)" fill="' + HoverIcons.prototype.arrowFill + '"/>');
			var imgLeft = mxUtils.createImage(left.src);
			imgLeft.style.position = 'absolute';
			imgLeft.style.cursor = 'pointer';
			imgLeft.style.width = '26px';
			imgLeft.style.height = '26px';
			imgLeft.style.left = (x - 14 - 30) + 'px';
			imgLeft.style.top = (y - 14 + 15) + 'px';

			mxEvent.addListener(imgLeft, 'click',
				mxUtils.bind(this, function (evt) {
					this.addChild(cell, 'left');
					this.destroy();
				})
			);

			state.view.graph.container.appendChild(imgLeft);
			this.images.push(imgLeft);


			var front = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
				'stroke="#fff" transform="rotate(120 14 14)" fill="' + HoverIcons.prototype.arrowFill + '"/>');
			var imgFront = mxUtils.createImage(front.src);
			imgFront.style.position = 'absolute';
			imgFront.style.cursor = 'pointer';
			imgFront.style.width = '26px';
			imgFront.style.height = '26px';
			imgFront.style.left = (x - 14 + 20) + 'px';
			imgFront.style.top = (y - 14 + 20) + 'px';

			mxEvent.addListener(imgFront, 'click',
				mxUtils.bind(this, function (evt) {
					this.addChild(cell, 'front');
					this.destroy();
				})
			);

			state.view.graph.container.appendChild(imgFront);
			this.images.push(imgFront);


			var back = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
				'stroke="#fff" transform="rotate(300 14 14)" fill="' + HoverIcons.prototype.arrowFill + '"/>');
			var imgBack = mxUtils.createImage(back.src);
			imgBack.style.position = 'absolute';
			imgBack.style.cursor = 'pointer';
			imgBack.style.width = '26px';
			imgBack.style.height = '26px';
			imgBack.style.left = (x - 14 - 20) + 'px';
			imgBack.style.top = (y - 14 - 20) + 'px';

			mxEvent.addListener(imgBack, 'click',
				mxUtils.bind(this, function (evt) {
					this.addChild(cell, 'back');
					this.destroy();
				})
			);

			state.view.graph.container.appendChild(imgBack);
			this.images.push(imgBack);



		}


	};

	mxIsometric.prototype.destroy = function () {
		if (this.images != null) {
			for (var i = 0; i < this.images.length; i++) {
				var img = this.images[i];
				img.parentNode.removeChild(img);
			}
		}

		this.images = null;
	};

	mxIsometric.prototype.addChild = function (cell, direction) {
		var currentCell = cell;
		graph.model.beginUpdate();
		try {
			if (graph.model.isEdge(cell)) {
				var x = currentCell.geometry.targetPoint.x;
				var y = currentCell.geometry.targetPoint.y;

				var newCell = new mxCell('', new mxGeometry(0, 0, 80, 40), 'endArrow=none;html=1;');

				if (direction == 'down') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x, y + 80), false);
				}
				else if (direction == 'up') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x, y - 80), false);
				}
				else if (direction == 'right') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x + 80, y - 40), false);
				}
				else if (direction == 'left') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x - 80, y + 40), false);
				}
				else if (direction == 'front') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x + 80, y + 40), false);
				}
				else if (direction == 'back') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x - 80, y - 40), false);
				}
				else {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x + 80, y + 40), false);
				}

				newCell.geometry.relative = true;
				newCell.edge = true;

				graph.addCell(newCell);

				graph.setSelectionCells([newCell]);
			}


		}
		finally {
			graph.model.endUpdate();
		}
	};


	// Defines the tolerance before removing the icons
	var iconTolerance = 20;
	var currentState = null;
	var currentIconSet = null;

	// Shows icons if the mouse is over a cell
	graph.addMouseListener(
		{
			mouseDown: function (sender, me) {
				
			},
			mouseMove: function (sender, me) {
				if(graph.isMouseDown){
					if (currentIconSet != null) {
						currentIconSet.destroy();
						currentIconSet = null;
					}
				}
			},
			mouseUp: function (sender, me) { },
			dragEnter: function (evt, state) {
				if (currentIconSet == null) {
					currentIconSet = new mxIsometric(state.cell);
				}
			},
			dragLeave: function (evt, state) {
				if (currentIconSet != null) {
					currentIconSet.destroy();
					currentIconSet = null;
				}
			}
		});

	graph.selectionModel.addListener(mxEvent.CHANGE, function (evt) {
		if (currentIconSet != null) {
			currentIconSet.destroy();
			currentIconSet = null;
		}

		if (graph.getSelectionCount() > 0) {
			var cell = graph.getSelectionCell();
			if (graph.model.isEdge(cell)) {

				window.setTimeout(function () {
					if (currentIconSet == null) {
						currentIconSet = new mxIsometric(cell);
					}	
				}, 0);
				
			}
		}

	});








	// Sidebar is null in lightbox
	if (ui.sidebar != null) {
		// Adds custom sidebar entry
		ui.sidebar.addPalette('isometric', 'Isometric', true, function (content) {
			content.appendChild(ui.sidebar.createEdgeTemplateEntry('endArrow=none;html=1;dashed=0;', 80, 40, '1,1m', 'Line', null, 'isometric')(content));
		});

		// Collapses default sidebar entry and inserts this before
		var c = ui.sidebar.container;
		var general = c.getElementsByTagName('a')[0];
		general.click();
		c.insertBefore(c.lastChild.previousSibling, general);
		c.insertBefore(c.lastChild, general);


	}
});