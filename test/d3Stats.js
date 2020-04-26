/* The D3 3-step process
Step 1: Setup the graph style.
Step 2: Access the JSON data.
Step3 : Call the update().
*/

/* The D3 Update Pattern - a key D3 concept

const update = (data) => {
    // 1. Update scales (domains) if they rely on our data
    y.domain([0,d3.max(data, d => d.orders)]);

    // 2. Join updated data to elements
    const rects = graph.selectAll("rect").data(data;

    // 3. Remove unwanted, if any, shapes using the exit selection
    rects.exit().remove();
    
    // 4. Update current shapes in the DOM
    rects.attr(...etc);

    // 5. Append the enter selection to the DOM
    rects.enter().append("rect").attr(...etc);
};
 */

// Select the SVG element <div class="canvas"> to append SVG
d3Stats();

function d3Stats() {
    const svg = d3.select(".canvas")
        .append("svg")
        .attr("width", 200)
        .attr("height", 200);
    // Create margins and dimensions for our graph, for axis information
    const margin = { top: 5, right: 5, bottom: 30, left: 40 };
    const graphWidth = 200 - margin.left - margin.right;
    const graphHeight = 200 - margin.top - margin.bottom;
    const graph = svg.append("g")
        .attr("width", graphWidth)
        .attr("height", graphHeight)
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    // Create x- and y-axis groups and provide elements
    const xAxisGroup = graph.append("g")
        .attr("transform", `translate(0, ${graphHeight})`); // Reverse axis from top to bottom
    const yAxisGroup = graph.append("g");
    // Scales
    // Domain: input value range --> Range: scale value range
    const y = d3.scaleLinear()
        .range([graphHeight, 0]);
    // Map Object to an Array of items (in this case names)
    // .domain(data.map(item => item.name)) -->
    // ["veg soup", "veg curry", "veg pasta", "veg surprise"]
    const x = d3.scaleBand()
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2);
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(3)
        .tickFormat(d => d + " K");

    xAxisGroup.selectAll("text")
        .attr("transform", "rotate(-40)")
        .attr("text-anchor", "end")
        .attr("fill", "rgb(61, 148, 246)");

    const t = d3.transition().duration(5000);


    /* === D3 Update Function === === === === === === === === === === === */
    const update = (data) => {
        // D3 Update Step 1: Update scales (domains) if they rely on our data
        y.domain([0, d3.max(data, d => d.orders)]);
        x.domain(data.map(item => item.name));
        // D3 Update Step 2: Join the updated data array (JSON) to rects
        const rects = graph.selectAll("rect")
            .data(data);
        // D3 Update Step 3: Remove the exit  selection
        rects.exit().remove();
        // D3 Update Step 4: Add attrs to rects already in the DOM (innerHTML)
        rects.attr("width", x.bandwidth)
            .attr("fill", "rgb(61, 148, 246)")
            .attr("x", d => x(d.name))
            .transition(t)
            .attr("height", d => graphHeight - y(d.orders))
            .attr("y", d => y(d.orders));
        // D3 Update Step 5: Append the enter selection to the DOM (outerHTML and innerHTML)
        rects.enter()
            .append("rect")
            .attr("width", 0)
            .attr("height", d => 0)
            .attr("fill", "rgb(61, 148, 246)")
            .attr("x", (d) => x(d.name))
            .attr("y", d => graphHeight)
            .transition(t)
            .attrTween("width", widthTween)
            .attr("height", d => graphHeight - y(d.orders))
            .attr("y", d => y(d.orders));
        // Call axes
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
    };
    // Get data from Firestore (previously a local JSON file) when a change  occurs, this onSnapshot() is triggered.
    let dataArray = [];
    // Firestore change listener triggers a dataArray[] update (added, modified, removed).
    db.collection("dishes").onSnapshot(response => {
        //console.log(response.docChanges());
        // Cycling through every change that occurs in the database.
        response.docChanges().forEach(change => {
            //console.log(change.doc.data());
            // Create a doc object based on the changes in the database, getting the data and document id.
            const doc = { ...change.doc.data(), id: change.doc.id };
            //console.log(doc);
            // Check change type using a switch statement.
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
    });
    // Tweens: timer to update attributes over time.
    const widthTween = (d) => {
        // Define interpolation. d3.interpolate returns a function we call 'i' (a value from 0 to 1)
        let i = d3.interpolate(0, x.bandwidth());
        // Return function with time ticker 't'
        return function (t) {
            // Return the value from pasign the ticker into the interpolation
            return i(t);
        };
    };
}
