/**
 * $Id: mxIsometric.js,v 1.0 2020/09/19 21:50:00 rhinterndorfer $
 */

//**********************************************************************************************************************************************************
//Isometric Line LR
//**********************************************************************************************************************************************************
/**
* Extends mxShape.
*/
function mxShapeIsometricArrowLR(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
* Extends mxShape.
*/
mxUtils.extend(mxShapeIsometricArrowLR, mxShape);

mxShapeIsometricArrowLR.prototype.cst = {
		ARROW_NE : 'mxgraph.isometric.arrowIsometricLR'
};

/**
* Function: paintVertexShape
* 
* Paints the vertex shape.
*/
mxShapeIsometricArrowLR.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);

	c.begin();
	c.moveTo(w, 0);
	c.lineTo(0, h);
	c.close();
	c.fillAndStroke();
};

mxCellRenderer.registerShape(mxShapeIsometricArrowLR.prototype.cst.ARROW_NE, mxShapeIsometricArrowLR);


//**********************************************************************************************************************************************************
//Isometric Line HV
//**********************************************************************************************************************************************************
/**
* Extends mxShape.
*/
function mxShapeIsometricArrowHV(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
* Extends mxShape.
*/
mxUtils.extend(mxShapeIsometricArrowHV, mxShape);

mxShapeIsometricArrowHV.prototype.cst = {
		ARROW_NE : 'mxgraph.isometric.arrowIsometricHV'
};

/**
* Function: paintVertexShape
* 
* Paints the vertex shape.
*/
mxShapeIsometricArrowHV.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);

	c.begin();
	c.moveTo(0, 0);
	c.lineTo(w, h);
	c.close();
	c.fillAndStroke();
};

mxCellRenderer.registerShape(mxShapeIsometricArrowHV.prototype.cst.ARROW_NE, mxShapeIsometricArrowHV);


//**********************************************************************************************************************************************************
//Isometric Line OU
//**********************************************************************************************************************************************************
/**
* Extends mxShape.
*/
function mxShapeIsometricArrowOU(bounds, fill, stroke, strokewidth)
{
	mxShape.call(this);
	this.bounds = bounds;
	this.fill = fill;
	this.stroke = stroke;
	this.strokewidth = (strokewidth != null) ? strokewidth : 1;
};

/**
* Extends mxShape.
*/
mxUtils.extend(mxShapeIsometricArrowOU, mxShape);

mxShapeIsometricArrowOU.prototype.cst = {
		ARROW_NE : 'mxgraph.isometric.arrowIsometricOU'
};

/**
* Function: paintVertexShape
* 
* Paints the vertex shape.
*/
mxShapeIsometricArrowOU.prototype.paintVertexShape = function(c, x, y, w, h)
{
	c.translate(x, y);

	c.begin();
	c.moveTo(w/2, 0);
	c.lineTo(w/2, h);
	c.close();
	c.fillAndStroke();
};

mxCellRenderer.registerShape(mxShapeIsometricArrowOU.prototype.cst.ARROW_NE, mxShapeIsometricArrowOU);

