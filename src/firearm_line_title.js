var svg = d3.select(".firearm_line_title")
    .append("svg")
    .attr('width', 1200)
    .attr('height', 30)
    .attr('transform','translate(180,0)')

    svg.append('text')
    .attr('x', 150)
    .attr('y', 20)
    .text('< Firearm Related Crime VS Unrelated Crime Arrest Rate >')
    .style('font-size', '19px')
    .attr("font-family", "sans-serif")
    .attr("fill", "black")