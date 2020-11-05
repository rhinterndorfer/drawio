/**
 * Plumber plugin
 */
Draw.loadPlugin(function (ui) {

	var graph = ui.editor.graph;

	function mxIsometric(cell) {
		this.images = [];
		var currentCell = cell;

		if (graph.model.isEdge(currentCell)) {
			var state = graph.getView().getState(currentCell);
			var pts = state.absolutePoints;
			var fill = '#29b6f2';
			// endpoint
			x = pts[1].x;
			y = pts[1].y;

			// calculate direction
			x0 = pts[0].x;
			y0 = pts[0].y;

			var direction = 'unknown';
			if (y0 < y && x0 == x) {
				direction = 'down';
			}
			else if (y0 > y && x0 == x) {
				direction = 'up';
			}
			else if (y0 < y && x0 < x) {
				direction = 'front';
			}
			else if (y0 < y && x0 > x) {
				direction = 'left';
			}
			else if (y0 > y && x0 < x) {
				direction = 'right';
			}
			else if (y0 > y && x0 > x) {
				direction = 'back';
			}


			var rotation = Graph.createSvgImage(16, 16, '<path stroke="' + fill +
				'" fill="' + fill +
				'" d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/>',
				24, 24);
			var imgRotation = mxUtils.createImage(rotation.src);
			imgRotation.style.position = 'absolute';
			imgRotation.style.cursor = 'pointer';
			imgRotation.style.width = '26px';
			imgRotation.style.height = '26px';
			imgRotation.style.left = (x + 15) + 'px';
			imgRotation.style.top = (y - 60) + 'px';

			state.view.graph.container.appendChild(imgRotation);
			this.images.push(imgRotation);

			mxEvent.addListener(imgRotation, 'click',
				mxUtils.bind(this, function (evt) {
					this.rotateCell(cell);
					this.destroy();
				})
			);



			if (direction != 'down') {
				var up = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
					'stroke="#fff" transform="rotate(0 14 14)" fill="' + fill + '"/>');
				var imgUp = mxUtils.createImage(up.src);
				imgUp.style.position = 'absolute';
				imgUp.style.cursor = 'pointer';
				imgUp.style.width = '26px';
				imgUp.style.height = '26px';
				imgUp.style.left = (x - 14 + 6) + 'px';
				imgUp.style.top = (y - 14 - 30) + 'px';

				mxEvent.addListener(imgUp, 'click',
					mxUtils.bind(this, function (evt) {
						this.addChild(cell, 'up');
						this.destroy();
					})
				);

				graph.container.appendChild(imgUp);
				this.images.push(imgUp);
			}

			if (direction != 'up') {
				var down = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
					'stroke="#fff" transform="rotate(180 14 14)" fill="' + fill + '"/>');
				var imgDown = mxUtils.createImage(down.src);
				imgDown.style.position = 'absolute';
				imgDown.style.cursor = 'pointer';
				imgDown.style.width = '26px';
				imgDown.style.height = '26px';
				imgDown.style.left = (x - 14 - 3) + 'px';
				imgDown.style.top = (y - 14 + 30) + 'px';

				mxEvent.addListener(imgDown, 'click',
					mxUtils.bind(this, function (evt) {
						this.addChild(cell, 'down');
						this.destroy();
					})
				);

				state.view.graph.container.appendChild(imgDown);
				this.images.push(imgDown);
			}

			if (direction != 'left') {
				var right = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
					'stroke="#fff" transform="rotate(60 14 14)" fill="' + fill + '"/>');
				var imgRight = mxUtils.createImage(right.src);
				imgRight.style.position = 'absolute';
				imgRight.style.cursor = 'pointer';
				imgRight.style.width = '26px';
				imgRight.style.height = '26px';
				imgRight.style.left = (x - 14 + 27) + 'px';
				imgRight.style.top = (y - 14 - 9) + 'px';

				mxEvent.addListener(imgRight, 'click',
					mxUtils.bind(this, function (evt) {
						this.addChild(cell, 'right');
						this.destroy();
					})
				);

				state.view.graph.container.appendChild(imgRight);
				this.images.push(imgRight);
			}

			if (direction != 'right') {
				var left = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
					'stroke="#fff" transform="rotate(240 14 14)" fill="' + fill + '"/>');
				var imgLeft = mxUtils.createImage(left.src);
				imgLeft.style.position = 'absolute';
				imgLeft.style.cursor = 'pointer';
				imgLeft.style.width = '26px';
				imgLeft.style.height = '26px';
				imgLeft.style.left = (x - 14 - 27) + 'px';
				imgLeft.style.top = (y - 14 + 12) + 'px';

				mxEvent.addListener(imgLeft, 'click',
					mxUtils.bind(this, function (evt) {
						this.addChild(cell, 'left');
						this.destroy();
					})
				);

				state.view.graph.container.appendChild(imgLeft);
				this.images.push(imgLeft);
			}

			if (direction != 'back') {
				var front = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
					'stroke="#fff" transform="rotate(120 14 14)" fill="' + fill + '"/>');
				var imgFront = mxUtils.createImage(front.src);
				imgFront.style.position = 'absolute';
				imgFront.style.cursor = 'pointer';
				imgFront.style.width = '26px';
				imgFront.style.height = '26px';
				imgFront.style.left = (x - 14 + 22) + 'px';
				imgFront.style.top = (y - 14 + 20) + 'px';

				mxEvent.addListener(imgFront, 'click',
					mxUtils.bind(this, function (evt) {
						this.addChild(cell, 'front');
						this.destroy();
					})
				);

				state.view.graph.container.appendChild(imgFront);
				this.images.push(imgFront);
			}

			if (direction != 'front') {
				var back = Graph.createSvgImage(28, 28, '<path d="m 6 26 L 12 26 L 12 12 L 18 12 L 9 1 L 1 12 L 6 12 z" ' +
					'stroke="#fff" transform="rotate(300 14 14)" fill="' + fill + '"/>');
				var imgBack = mxUtils.createImage(back.src);
				imgBack.style.position = 'absolute';
				imgBack.style.cursor = 'pointer';
				imgBack.style.width = '26px';
				imgBack.style.height = '26px';
				imgBack.style.left = (x - 14 - 22) + 'px';
				imgBack.style.top = (y - 14 - 18) + 'px';

				mxEvent.addListener(imgBack, 'click',
					mxUtils.bind(this, function (evt) {
						this.addChild(cell, 'back');
						this.destroy();
					})
				);

				state.view.graph.container.appendChild(imgBack);
				this.images.push(imgBack);
			}
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

	mxIsometric.prototype.rotateCell = function (cell) {
		graph.turnShapes([cell], false);
		graph.setSelectionCells([cell]);
	}

	mxIsometric.prototype.addChild = function (cell, direction) {
		var currentCell = cell;
		graph.model.beginUpdate();
		try {
			if (graph.model.isEdge(cell)) {
				var x = currentCell.geometry.targetPoint.x;
				var y = currentCell.geometry.targetPoint.y;

				var newCell = new mxCell('', new mxGeometry(0, 0, 60, 50), 'endArrow=none;html=1;dashed=0;bendable=0;');

				if (direction == 'down') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x, y + 60), false);
				}
				else if (direction == 'up') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x, y - 60), false);
				}
				else if (direction == 'right') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x + 50, y - 30), false);
				}
				else if (direction == 'left') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x - 50, y + 30), false);
				}
				else if (direction == 'front') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x + 50, y + 30), false);
				}
				else if (direction == 'back') {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x - 50, y - 30), false);
				}
				else {
					newCell.geometry.setTerminalPoint(new mxPoint(x, y), true);
					newCell.geometry.setTerminalPoint(new mxPoint(x + 50, y + 30), false);
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
				if (graph.isMouseDown) {
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



	if (ui.sidebar != null) {

		// Adds custom sidebar entry
		ui.sidebar.addPalette('plumber', 'Installateur', true, function (content) {
			var defaultWidth = 40;
			var defaultHeight = 20;
			// Schalldämpfer
			content.appendChild(ui.sidebar.createVertexTemplateEntry('connectable=0;verticalLabelPosition=bottom;align=top;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid.fittings.silencer;',
				defaultWidth, defaultWidth, null, 'Schalldaempfer', null, 'plumber schall')(content));

			content.appendChild(ui.sidebar.createVertexTemplateEntry('connectable=0;verticalLabelPosition=bottom;align=top;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=ball;',
				defaultWidth, defaultHeight, null, 'Absperrhahn', null, 'plumber ventil absperr hahn')(content));

			content.appendChild(ui.sidebar.createVertexTemplateEntry('connectable=0;verticalLabelPosition=bottom;align=top;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.plumber.valves.valve;',
				defaultWidth, defaultWidth, null, 'Absperrventil', null, 'plumber ventil absperr ')(content));
			
			content.appendChild(ui.sidebar.createVertexTemplateEntry('connectable=0;verticalLabelPosition=bottom;align=top;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.plumber.valves.valveaddon;',
				defaultWidth, defaultWidth, null, 'Absperrventil Erweiterung', null, 'plumber ventil absperr ')(content));

			content.appendChild(ui.sidebar.createVertexTemplateEntry('connectable=0;verticalLabelPosition=bottom;align=top;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.plumber.valves.threewayvalve;',
				defaultWidth, defaultWidth, null, 'Dreiwegeventil', null, 'plumber ventil drei 3 ')(content));

			content.appendChild(ui.sidebar.createVertexTemplateEntry('connectable=0;verticalLabelPosition=bottom;align=top;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.plumber.misc.mount;',
				defaultWidth / 2, defaultWidth / 2, null, 'Befestigung', null, 'plumber befestigung ')(content));



		});

		// Collapses default sidebar entry and inserts this before
		var c = ui.sidebar.container;
		var general = c.getElementsByTagName('a')[0];
		general.click();
		c.insertBefore(c.lastChild.previousSibling, general);
		c.insertBefore(c.lastChild, general);

		// Adds custom sidebar entry
		ui.sidebar.addPalette('isometric', 'Isometric', true, function (content) {
			content.appendChild(ui.sidebar.createEdgeTemplateEntry('endArrow=none;html=1;dashed=0;bendable=0;', 50, 30, null, 'Line', null, 'isometric')(content));
			content.appendChild(ui.sidebar.createEdgeTemplateEntry('endArrow=none;html=1;dashed=0;bendable=0;', 50, -30, null, 'Line', null, 'isometric')(content));
			content.appendChild(ui.sidebar.createEdgeTemplateEntry('endArrow=none;html=1;dashed=0;bendable=0;', 0, 60, null, 'Line', null, 'isometric')(content));
		});

		// Collapses default sidebar entry and inserts this before
		var c = ui.sidebar.container;
		var general = c.getElementsByTagName('a')[0];
		general.click();
		c.insertBefore(c.lastChild.previousSibling, general);
		c.insertBefore(c.lastChild, general);


	}
});


/**
 * Turns the given cells and returns the changed cells.
 */
Graph.prototype.turnShapes = function(cells, backwards)
{
	var model = this.getModel();
	var select = [];
	
	model.beginUpdate();
	try
	{
		for (var i = 0; i < cells.length; i++)
		{
			var cell = cells[i];
			
			if (model.isEdge(cell))
			{
				var src = model.getTerminal(cell, true);
				var trg = model.getTerminal(cell, false);
				
				model.setTerminal(cell, trg, true);
				model.setTerminal(cell, src, false);
				
				var geo = model.getGeometry(cell);
				
				if (geo != null)
				{
					geo = geo.clone();
					
					if (geo.points != null)
					{
						geo.points.reverse();
					}
					
					var sp = geo.getTerminalPoint(true);
					var tp = geo.getTerminalPoint(false)
					
					geo.setTerminalPoint(sp, false);
					geo.setTerminalPoint(tp, true);
					model.setGeometry(cell, geo);
					
					// Inverts constraints
					var edgeState = this.view.getState(cell);
					var sourceState = this.view.getState(src);
					var targetState = this.view.getState(trg);
					
					if (edgeState != null)
					{
						var sc = (sourceState != null) ? this.getConnectionConstraint(edgeState, sourceState, true) : null;
						var tc = (targetState != null) ? this.getConnectionConstraint(edgeState, targetState, false) : null;
						
						this.setConnectionConstraint(cell, src, true, tc);
						this.setConnectionConstraint(cell, trg, false, sc);
					}

					select.push(cell);
				}
			}
			else if (model.isVertex(cell))
			{
				var geo = this.getCellGeometry(cell);
	
				if (geo != null)
				{
					// Reads the current rotation and advances by defined steps (+isometric)
					var state = this.view.getState(cell);
					
					if (state != null)
					{
						var degrees = [0,30.96,90,149.04,180,210.96,270,329.04];
						var rotation = mxUtils.getValue(state.style, mxConstants.STYLE_ROTATION,
							0);
						this.setCellStyles(mxConstants.STYLE_ROTATION,
							degrees[mxUtils.mod(mxUtils.indexOf(degrees, rotation) +
								((backwards) ? -1 : 1), degrees.length)], [cell]);
					}

					select.push(cell);
				}
			}
		}
	}
	finally
	{
		model.endUpdate();
	}
	
	return select;
};