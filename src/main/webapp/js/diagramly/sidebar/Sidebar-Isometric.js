(function()
{
	// Adds isometric shapes
	Sidebar.prototype.addIsometricPalette = function()
	{
		var w = 100;
		var h = 100;
		var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=middle;html=1;' + mxConstants.STYLE_VERTICAL_ALIGN + '=middle;' + mxConstants.STYLE_STROKEWIDTH + '=2;align=center;outlineConnect=0;dashed=0;outlineConnect=0;fillColor=#000000;aspect=fixed;movableLabel=0;rotatable=0;shape=mxgraph.isometric.';
		var s_notfixed = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=middle;html=1;' + mxConstants.STYLE_VERTICAL_ALIGN + '=middle;' + mxConstants.STYLE_STROKEWIDTH + '=2;align=center;outlineConnect=0;dashed=0;outlineConnect=0;fillColor=#000000;movableLabel=0;rotatable=0;shape=mxgraph.isometric.';
		var gn = 'mxgraph.isometric';
		var dt = 'isometric';
		this.setCurrentSearchEntryLibrary('isometric');

		this.addPaletteFunctions('isometric', 'Isometric', false,
		[
			this.addEntry('isometric line LR', function()
					{
						var geometry = new mxGeometry(0, 0, 160, 80);

						var offset = new mxPoint(0, -20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricLR;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line LR');
					}),	
			this.addEntry('isometric line LR', function()
					{
						var geometry = new mxGeometry(0, 0, 160, 80);

						var offset = new mxPoint(0, 20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricLR;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line LR');
					}),	
			this.addEntry('isometric line HV', function()
					{
						var geometry = new mxGeometry(0, 0, 160, 80);

						var offset = new mxPoint(0, 20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricHV;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line HV');
					}),	
			this.addEntry('isometric line HV', function()
					{
						var geometry = new mxGeometry(0, 0, 160, 80);

						var offset = new mxPoint(0, -20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricHV;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line HV');
					}),	
			this.addEntry('isometric line OU', function()
					{
						var geometry = new mxGeometry(0, 0, 80, 160);

						//geometry.setTerminalPoint(mxPoint(-80, 0), true);
						var offset = new mxPoint(25, 0);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s_notfixed + 'arrowIsometricOU;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line OU');
					}),
			this.addEntry('isometric line OU', function()
					{
						var geometry = new mxGeometry(0, 0, 80, 160);

						//geometry.setTerminalPoint(mxPoint(-80, 0), true);
						var offset = new mxPoint(-25, 0);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s_notfixed + 'arrowIsometricOU;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line OU');
					}),	


			this.addEntry('isometric line LR small', function()
					{
						var geometry = new mxGeometry(0, 0, 80, 40);

						var offset = new mxPoint(0, -20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricLR;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line LR');
					}),	
			this.addEntry('isometric line LR small', function()
					{
						var geometry = new mxGeometry(0, 0, 80, 40);

						var offset = new mxPoint(0, 20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricLR;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line LR');
					}),	
			this.addEntry('isometric line HV small', function()
					{
						var geometry = new mxGeometry(0, 0, 80, 40);

						var offset = new mxPoint(0, 20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricHV;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line HV');
					}),	
			this.addEntry('isometric line HV small', function()
					{
						var geometry = new mxGeometry(0, 0, 80, 40);

						var offset = new mxPoint(0, -20);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s + 'arrowIsometricHV;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line HV');
					}),	
			this.addEntry('isometric line OU small', function()
					{
						var geometry = new mxGeometry(0, 0, 40, 80);

						//geometry.setTerminalPoint(mxPoint(-80, 0), true);
						var offset = new mxPoint(25, 0);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s_notfixed + 'arrowIsometricOU;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line OU');
					}),
			this.addEntry('isometric line OU small', function()
					{
						var geometry = new mxGeometry(0, 0, 40, 80);

						//geometry.setTerminalPoint(mxPoint(-80, 0), true);
						var offset = new mxPoint(-25, 0);
						geometry.offset = offset;

						var line = new mxCell('1,1 m\n\u00d8 110', geometry, s_notfixed + 'arrowIsometricOU;');
						line.vertex = true;
		
						return sb.createVertexTemplateFromCells([line], line.geometry.width, line.geometry.height, 'Isometric Line OU');
					}),	
		]);
		
		this.setCurrentSearchEntryLibrary();
	};
})();
