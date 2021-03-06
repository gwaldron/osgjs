osg.DrawArray = function (mode, first, count) 
{
    this.mode = mode;
    this.first = first;
    this.count = count;
};
osg.DrawArray.prototype = {
    draw: function(state) {
        gl.drawArrays(this.mode, this.first, this.count);
    },
    getMode: function() { return this.mode; },
    getCount: function() { return this.count; },
    getFirst: function() { return this.first; }
};
osg.DrawArray.create = function(mode, first, count) {
    var d = new osg.DrawArray(mode, first, count);
    return d;
};

osg.DrawArrays = osg.DrawArray;


osg.DrawElements = function (mode, indices) {
    this.mode = gl.POINTS;
    if (mode !== undefined) {
        this.mode = mode;
    }

    this.count = 0;
    this.offset = 0;
    this.indices = indices;
    if (indices !== undefined) {
        this.count = indices.elements.length;
    }
};

osg.DrawElements.prototype = {
    getMode: function() { return this.mode; },
    draw: function(state) {
        state.setIndexArray(this.indices);
        gl.drawElements(this.mode, this.count, gl.UNSIGNED_SHORT, this.offset );
    },
    getIndices: function() { return this.indices; },
    setFirst: function(val) { this.offset = val; },
    getFirst: function() { return this.offset;},
    setCount: function(val) { this.count = val;},
    getCount: function() { return this.count; }

};

osg.DrawElements.create = function(mode, indices) {
    var d = new osg.DrawElements(mode, indices);
    return d;
};
