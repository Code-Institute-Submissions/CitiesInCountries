const d3Stats = (city, width, height, tickFormat, fillColour) => {
    const svg = d3.select(".canvas")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    const margin = { top: 5, right: 5, bottom: 40, left: 40 };
    const graphWidth = 200 - margin.left - margin.right;
    const graphHeight = 200 - margin.top - margin.bottom;
    const graph = svg.append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    const xAxisGroup = graph.append("g")
        .attr("transform", `translate(0, ${graphHeight})`);
    const yAxisGroup = graph.append("g");
    const y = d3.scaleLinear()
        .range([graphHeight, 0]);
    const x = d3.scaleBand()
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2);
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(d => d + ` ${tickFormat}`);

    const t = d3.transition().duration(3000);

    const update = (data) => {

        y.domain([0, d3.max(data, d => d.population)]);
        x.domain(data.map(item => item.name));

        const rects = graph.selectAll("rect")
            .data(data);

        rects.exit().remove();

        rects.attr("width", x.bandwidth)
            .attr("fill", fillColour)
            .attr("x", d => x(d.name))
            .transition(t)
            .attr("height", d => graphHeight - y(d.population))
            .attr("y", d => y(d.population));

        rects.enter()
            .append("rect")
            .attr("width", 0)
            .attr("height", d => 0)
            .attr("fill", fillColour)
            .attr("x", (d) => x(d.name))
            .attr("y", d => graphHeight)
            .transition(t)
            .attrTween("width", widthTween)
            .attr("height", d => graphHeight - y(d.population))
            .attr("y", d => y(d.population));
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
    };

    let dataArray = [];
    db.collection(city).onSnapshot(response => {
        response.docChanges().forEach(change => {
            const doc = { ...change.doc.data(), id: change.doc.id };

            switch (change.type) {
                case "added":
                    dataArray.push(doc);
                    break;
                case "modified":
                    const index = dataArray.findIndex(item => item.id == doc.id);
                    dataArray[index] = doc;
                    break;
                case "removed":
                    dataArray = dataArray.filter(item => item.id !== doc.id);
                    break;
                default:
                    break;
            }
        });
        update(dataArray);

        xAxisGroup.selectAll("text")
            .attr("transform", "rotate(-20)")
            .attr("text-anchor", "end")
            .attr("fill", fillColour);

    });

    const widthTween = (d) => {
        let i = d3.interpolate(0, x.bandwidth());
        return function (t) {
            return i(t);
        };
    };
}