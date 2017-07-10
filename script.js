svg_canvas = {};
svg_canvas.svg_objects = [];

svg_canvas.clear = function(){
    $('svg').html('');
}

svg_canvas.render = function(){
    var html_st
    this.svg_objects.forEach(function(object,index){
        html_st = svg_get_html(object)
    })
     console.log(html_st);
    $('svg').html(html_st)


}

svg_get_html = function(object){
    var html_st
    html_st = '<'+object.type+' id="svg_'+object.id+'"';
    html_st += ' x1="'+object.x1+'" y1="'+object.y1+'"';
    html_st += ' x2="'+object.x2+'" y2="'+object.y2+'"';
    html_st += ' stroke-width="1" stroke="#000" />'
    return html_st
}

$(document).ready(function(){
    var svg_objects = svg_canvas.svg_objects;
    
    
    //var line_test = '<line id="svg_1" y2="230" x2="258" y1="112" x1="100"  stroke-width="1" stroke="#000" />'
    
    var line = {
        id: '1',
        type: 'line',
        x1: 100,
        y1: 110,
        x2: 250,
        y2: 230,
        width: 1
    }
    
    
    svg_objects.push(line);
    

    
    /*
    $('svg').svg({onLoad: drawIntro});
    
    function drawIntro(svg) { 
    svg.circle(75, 75, 50, {fill: 'none', stroke: 'red', strokeWidth: 3}); 
    var g = svg.group({stroke: 'black', strokeWidth: 2}); 
    svg.line(g, 15, 75, 135, 75); 
    svg.line(g, 75, 15, 75, 135); 
    }
    */
})