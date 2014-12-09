
//var foo8 = require('./js/promise/d3/wait8.js');



function waitPromise(param) {
    return new Promise(function(resolve, reject) {

        if(1) {
            var svg = d3.select("#a11")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([0, 40]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 400]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {
                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return 10;
                        })
                        .style('fill', function (d) {
                            return d.color;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise2(param) {
    return new Promise(function(resolve, reject) {

        if(1) {
            var svg = d3.select("#a12")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([0, 40]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 400]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return 10;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise3(param) {
    return new Promise(function(resolve, reject) {

        console.log("waitPromise3");

        if(1) {
            var svg = d3.select("#a13")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([0, 40]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 400]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return d.time*10;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise4(param) {
    return new Promise(function(resolve, reject) {

        console.log("waitPromise3");

        if(1) {
            var svg = d3.select("#a14")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([0, 40]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 400]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return d.time*10;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });

                    circle1.append("text")
                        .attr("x", function (d) {
                            return x(d.km);
                        })
                        .attr("y", function (d) {
                            return y(d.height) - 0;
                        })
                        //.attr("dy", "1.25em")
                        .attr("font-size","24px")
                        .style('opacity', 1.0)
                        .attr("text-anchor", "middle")
                        .style('fill', 'white')
                        .attr("pointer-events", "none")
                        .attr("class", "tooltip_label")
                        .text(function (d) {
                            return d.site;
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise5(param) {
    return new Promise(function(resolve, reject) {

        console.log("waitPromise3");

        if(1) {
            var svg = d3.select("#a15")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([4, 18]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 80]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return d.time*10*2;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });

                    circle1.append("text")
                        .attr("x", function (d) {
                            return x(d.km);
                        })
                        .attr("y", function (d) {
                            return y(d.height) - 0;
                        })
                        //.attr("dy", "1.25em")
                        .attr("font-size","24px")
                        .style('opacity', 1.0)
                        .attr("text-anchor", "middle")
                        .style('fill', 'white')
                        .attr("pointer-events", "none")
                        .attr("class", "tooltip_label")
                        .text(function (d) {
                            return d.site;
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise6(param) {
    return new Promise(function(resolve, reject) {

        if(1) {
            var svg = d3.select("#a16")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([0, 40]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 400]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return 10;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });

                    circle1.append("text")
                        .attr("x", function (d) {
                            return x(d.km);
                        })
                        .attr("y", function (d) {
                            return y(d.height) - 0;
                        })
                        //.attr("dy", "1.25em")
                        .attr("font-size","24px")
                        .style('opacity', 1.0)
                        .attr("text-anchor", "middle")
                        .style('fill', 'white')
                        .attr("pointer-events", "none")
                        .attr("class", "tooltip_label")
                        .text(function (d) {
                            return d.site;
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise7(param) {
    return new Promise(function(resolve, reject) {

        if(1) {
            var svg = d3.select("#a17")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([4, 18]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 200]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return 10;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });

                    circle1.append("text")
                        .attr("x", function (d) {
                            return x(d.km);
                        })
                        .attr("y", function (d) {
                            return y(d.height) - 0;
                        })
                        //.attr("dy", "1.25em")
                        .attr("font-size","24px")
                        .style('opacity', 1.0)
                        .attr("text-anchor", "middle")
                        .style('fill', 'white')
                        .attr("pointer-events", "none")
                        .attr("class", "tooltip_label")
                        .text(function (d) {
                            return d.site;
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise8(param) {
    return new Promise(function(resolve, reject) {

        if(1) {
            var svg = d3.select("#a18")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([4, 18]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 200]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return d.time*20;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });

                    circle1.append("text")
                        .attr("x", function (d) {
                            return x(d.km);
                        })
                        .attr("y", function (d) {
                            return y(d.height) - 0;
                        })
                        //.attr("dy", "1.25em")
                        .attr("font-size","24px")
                        .style('opacity', 1.0)
                        .attr("text-anchor", "middle")
                        .style('fill', 'white')
                        .attr("pointer-events", "none")
                        .attr("class", "tooltip_label")
                        .text(function (d) {
                            return d.site;
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}

function waitPromise9(param) {
    return new Promise(function(resolve, reject) {

        if(1) {
            var svg = d3.select("#b1")
                .attr("width", 1000)
                .attr("height", 600);


            var x = d3.scale.linear().domain([4, 18]).range([150, 800]);
            var y = d3.scale.linear().domain([0, 200]).range([500, 50]);
            label_x = 'Data1 類股';
            label_y = 'Data1 漲幅'; //Y-Label

            console.log(x.ticks(2)[1]);


            margin = 50;
            max_domoin_X = 10;
            max_domoin_Y = 10;


            //xlabel=['0','1','2','3','4'];
            ylabel = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var axis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(10);
            //.tickFormat(function(d) { return xlabel[d+0] });

            var xa = svg.append('g')
                .attr('transform', "translate(0, +" + (500) + ")")
                .attr("class", "xaxis")
                .call(axis);

            xa.selectAll("line.x")
                .data(x.ticks(max_domoin_X * 1))
                .enter().append("line")
                .attr("class", "x")
                .attr("x1", x)
                .attr("x2", x)
                .attr("y1", -450)
                .attr("y2", 0)
                .style("stroke", "#000");


            var yaxis = d3.svg.axis()
                .orient('left')
                .ticks(10)
                //.tickFormat(function(d) { return ylabel[d+0] })
                .scale(y);

            var ya = svg.append('g')
                .attr('transform', 'translate(' + 150 + ', 0)')
                .attr("class", "yaxis")
                .call(yaxis);

            ya.selectAll("line.y")
                .data(y.ticks(max_domoin_Y * 1))
                .enter().append("line")
                .attr("class", "y")
                .attr("x1", 0)
                .attr("x2", 650)
                .attr("y1", y)
                .attr("y2", y)
                .style("stroke", "#000");

            svg.append("text")
                .attr("class", "x axis label")
                //.attr("text-anchor", "end")
                .attr("x", (1000) * 0.5 + 0)
                .attr("y", 600 - 20)
                .attr("text-anchor", "middle")
                .text("總騎乘距離(km)");

            svg.append("text")
                .attr("class", "y axis label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 0)
                .attr("x", 0 - (600 / 2))
                .attr("dy", "1em")
                .text("高低落差(m)");


            d3.csv('./csv/data.csv', function (data1) {


                if (1) {

                    var circle1 = svg.selectAll("g.circle1")
                        .data(data1)
                        .enter()
                        .append("g")
                        .attr("class", "circle1");

                    //Add a dot
                    circle1.append("circle")
                        .data(data1)
                        .attr("r", function (d) {
                            return d.time*20;
                        })
                        .style('fill', function (d) {
                            a3 = Math.floor(Math.random() * 306) + 1;
                            a1 = tinycolor("hsv("+a3+", 100%, 100%)");
                            a2 = a1.toHexString();
                            return a2;
                        })
                        .style('fill-opacity', 0.5)
                        .style("stroke", function (d) {
                            return d.color;
                        })
                        .attr("cx", function (d) {
                            console.log(d.time);
                            return x(d.km);
                        })
                        .attr("cy", function (d) {
                            return y(d.height);
                        });

                    circle1.append("text")
                        .attr("x", function (d) {
                            return x(d.km);
                        })
                        .attr("y", function (d) {
                            return y(d.height) - 0;
                        })
                        //.attr("dy", "1.25em")
                        .attr("font-size","24px")
                        .style('opacity', 1.0)
                        .attr("text-anchor", "middle")
                        .style('fill', 'white')
                        .attr("pointer-events", "none")
                        .attr("class", "tooltip_label")
                        .text(function (d) {
                            return d.site;
                        });


                } // add the circle1 and text
                resolve(param);
            });


        }
        //resolve(param);

        /*
         setTimeout(function() {
         resolve(param);
         }, 2000 + (Math.random() - 0.5) * 1000);
         */
    });
}






waitPromise('如果你愿意').then(function(response) {
    console.log(response);
    return waitPromise2('一层')
})
    .then(function(response) {
        console.log(response);
        return waitPromise3('一层')
    })
    .then(function(response) {
        console.log(response);
        return waitPromise4('一层')
    })
.then(function(response) {
        console.log(response);
        return waitPromise5('一层')
    })
.then(function(response) {
        console.log(response);
        return waitPromise6('一层')
    })
.then(function(response) {
        console.log(response);
        return waitPromise7('一层')
    })
.then(function(response) {
        console.log(response);
        return waitPromise8('一层')
    })
.then(function(response) {
        console.log(response);
        return waitPromise9('一层')
    });





