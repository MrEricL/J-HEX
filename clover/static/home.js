var data = {"cat1": 50, "cat2": 30, "cat3": 20, "cat4": 70};

var expend_svg = document.getElementById("expend");

var get_val = function(dict){
    var vals = [];
    for (var key in dict){
	vals.push(dict[key]);
    }
    return vals;
}

data = get_val(data);

var calc_stroke_dasharray = function(val,total, r){
    var circ = 2*Math.PI*r;
    var percent = ((val/total)*circ);
    return percent+' '+circ;
};

var calc_dashoffset = function(data, index, total, r){
    var circ = 2*Math.PI*r;
    var sum = 0;
    for (var i = 0; i < index; i++){
	sum += data[i];
    }
    var offset = ((sum/total)*circ);
    return -offset;
    
};

var get_rand_color = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var get_tot = function(data){
    console.log(data);
    var total = 0;
    for (var i=0; i<data.length; i++) {
	total += data[i];
    }
    return total;
}

var setPie = function (svg_id, data, fill, r, cx, cy, stroke, stroke_width, offset){
    var total = get_tot(data);

    var cont = d3.select(svg_id);
    var circles = cont.selectAll("circle").data(data).enter();
    circles.append("circle")
	.attr("r", r)
	.attr("cx", cx)
	.attr("cy", cy)
	.attr("fill", "transparent")
	.attr("stroke", function(d){return get_rand_color();})
	.attr("stroke-width", stroke_width)
	.attr("stroke-dasharray", function(d){return calc_stroke_dasharray(d,total,r);})
	.attr("stroke-dashoffset", function(d,i){return calc_dashoffset(data, i, total,r);})

}

setPie(expend_svg, data, "lightgrey", 100, 130, 130, "#655", 30, 100*2*Math.PI/4);


