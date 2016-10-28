// Global variables
var category = "";
var page = " ";



var values = { // m for model
    // m: 0, // Already pulled from smartsparrow. How to I set random inputs?
    // L: 0,
    // b: 0,
    // I_G: 0,
    // I_o: 0,
    // O_x_1: 0,
    // O_y_1: 0,
    // O_1: 0,
    // w_1: 0,
    // alpha_1: 0,
    // w_2: 0,
    // alpha_2: 0,
    // V_2: 0,
    // O_x_2: 0,
    // O_y_2: 0,
    // O_2: 0,
    Bt: 0,
    Hw: 0,
    Bb: 0,
    tt: 0,
    tw: 0,
    tb: 0,

    A1: 0,
    A2: 0,
    A3: 0,
    A_total: 0,
    y1: 0,
    y2: 0,
    y3: 0,
    Ay1: 0,
    Ay2: 0,
    Ay3: 0,
    Ay_total: 0,

    xbar: 0,
    ybar: 0,

    Ixo1: 0,
    Ixo2: 0,
    Ixo3: 0,
    Add1: 0,
    Add2: 0,
    Add3: 0,
    Ixc1: 0,
    Ixc2: 0,
    Ixc3: 0,

    Iyc1: 0,
    Iyc2: 0,
    Iyc3: 0,

    Ix: 0,
    Iy: 0,
    Jc: 0,
    rx: 0,
    ry: 0,


};

var valuesRounded = {
    // m: 0, // all these should be 0 for some reason. I guess it doesn't matter?
    // L: 0,
    // b: 0,
    // I_G: 0,
    // I_o: 0,
    // O_x_1: 0,
    // O_y_1: 0,
    // O_1: 0,
    // w_1: 0,
    // alpha_1: 0,
    // w_2: 0,
    // alpha_2: 0,
    // V_2: 0,
    // O_x_2: 0,
    // O_y_2: 0,
    // O_2: 0,
    Bt: 0,
    Hw: 0,
    Bb: 0,
    tt: 0,
    tw: 0,
    tb: 0,

    A1: 0,
    A2: 0,
    A3: 0,
    A_total: 0,
    y1: 0,
    y2: 0,
    y3: 0,
    Ay1: 0,
    Ay2: 0,
    Ay3: 0,
    Ay_total: 0,

    xbar: 0,
    ybar: 0,

    Ixo1: 0,
    Ixo2: 0,
    Ixo3: 0,
    Add1: 0,
    Add2: 0,
    Add3: 0,
    Ixc1: 0,
    Ixc2: 0,
    Ixc3: 0,

    Iyc1: 0,
    Iyc2: 0,
    Iyc3: 0,

    Ix: 0,
    Iy: 0,
    Jc: 0,
    rx: 0,
    ry: 0,
};

var names = { //choose how to write variable string.
    // m: "m",
    // L: "L",
    // b: "b",
    // I_G: "I<sub>G</sub>",
    // I_o: "I<sub>o</sub>",
    // O_x_1: "O<sub>x</sub>",
    // O_y_1: "O<sub>y</sub>",
    // O_1: "O",
    // w_1: "&#969",
    // alpha_1: "&#945",
    // w_2: "&#969",
    // alpha_2: "&#945",
    // V_2: "V<sub>A</sub>",
    // O_x_2: "O<sub>x</sub>",
    // O_y_2: "O<sub>y</sub>",
    // O_2: "O",
    Bt: "B<sub>ft</sub>",
    Hw: "H<sub>w</sub>",
    Bb: "B<sub>fb</sub>",
    tt: "t<sub>ft</sub>",
    tw: "t<sub>w</sub>",
    tb: "t<sub>fb</sub>",

    A1: "A<sub>1</sub>",
    A2: "A<sub>2</sub>",
    A3: "A<sub>3</sub>",
    A_total: "A<sub>total</sub>",
    y1: "y<sub>1</sub>",
    y2: "y<sub>2</sub>",
    y3: "y<sub>3</sub>",
    Ay1: "A<sub>1</sub>y<sub>1</sub>",
    Ay2: "A<sub>2</sub>y<sub>2</sub>",
    Ay3: "A<sub>3</sub>y<sub>3</sub>",
    Ay_total: "Ay<sub>total</sub>",

    xbar: "x&#772",
    ybar: "y&#772",

    Ixo1: "I<sub>xo1</sub>",
    Ixo2: "I<sub>xo2</sub>",
    Ixo3: "I<sub>xo3</sub>",
    Add1: "A<sub>1</sub>d<sup>2</sup>",
    Add2: "A<sub>2</sub>d<sup>2</sup>",
    Add3: "A<sub>3</sub>d<sup>2</sup>",
    Ixc1: "I<sub>xc1</sub>",
    Ixc2: "I<sub>xc2</sub>",
    Ixc3: "I<sub>xc3</sub>",

    Iyc1: "I<sub>yc1</sub>",
    Iyc2: "I<sub>yc2</sub>",
    Iyc3: "I<sub>yc3</sub>",

    Ix: "I<sub>x</sub>",
    Iy: "I<sub>y</sub>",
    Jc: "J<sub>c</sub>",
    rx: "r<sub>x</sub>",
    ry: "r<sub>y</sub>",
};

var units = { //write the units
    // m: "kg",
    // L: "m",
    // b: "m",
    // I_G: "kgm<sup>2</sup>",
    // I_o: "kgm<sup>2</sup>",
    // O_x_1: "N",
    // O_y_1: "N",
    // O_1: "N",
    // w_1: "rad s<sup>-1</sup>",
    // alpha_1: "rad s<sup>-2</sup>",
    // w_2: "rad s<sup>-1</sup>",
    // alpha_2: "rad s<sup>-2</sup>",
    // V_2: "m/s",
    // O_x_2: "N",
    // O_y_2: "N",
    // O_2: "N",
    Bt: "mm",
    Hw: "mm",
    Bb: "mm",
    tt: "mm",
    tw: "mm",
    tb: "mm",

    A1: "mm<sup>2</sup>",
    A2: "mm<sup>2</sup>",
    A3: "mm<sup>2</sup>",
    A_total: "mm<sup>2</sup>",
    y1: "mm",
    y2: "mm",
    y3: "mm",
    Ay1: "mm<sup>2</sup>",
    Ay2: "mm<sup>2</sup>",
    Ay3: "mm<sup>2</sup>",
    Ay_total: "mm<sup>2</sup>",

    xbar: "mm",
    ybar: "mm",

    Ixo1: "mm<sup>4</sup>",
    Ixo2: "mm<sup>4</sup>",
    Ixo3: "mm<sup>4</sup>",
    Add1: "mm<sup>4</sup>",
    Add2: "mm<sup>4</sup>",
    Add3: "mm<sup>4</sup>",
    Ixc1: "mm<sup>4</sup>",
    Ixc2: "mm<sup>4</sup>",
    Ixc3: "mm<sup>4</sup>",

    Iyc1: "mm<sup>4</sup>",
    Iyc2: "mm<sup>4</sup>",
    Iyc3: "mm<sup>4</sup>",

    Ix: "mm<sup>4</sup>",
    Iy: "mm<sup>4</sup>",
    Jc: "mm<sup>4</sup>",
    rx: "mm<sup>4</sup>",
    ry: "mm<sup>4</sup>",
};


// Get values from SS
var model = new pipit.CapiAdapter.CapiModel({

    // m: " ", 
    // L: " ",
    // b: " ",
    // I_G: " ",
    // I_o: " ",
    // O_x_1: " ",
    // O_y_1: " ",
    // O_1: " ",
    // w_1: " ",
    // alpha_1: " ",
    // w_2: " ",
    // alpha_2: " ",
    // V_2: " ",
    // O_x_2: " ",
    // O_y_2: " ",
    // O_2: " ",

    Bt: 0,
    Hw: 0,
    Bb: 0,
    tt: 0,
    tw: 0,
    tb: 0,

    A1: 0,
    A2: 0,
    A3: 0,
    A_total: 0,
    y1: 0,
    y2: 0,
    y3: 0,
    Ay1: 0,
    Ay2: 0,
    Ay3: 0,
    Ay_total: 0,

    xbar: 0,
    ybar: 0,

    Ixo1: 0,
    Ixo2: 0,
    Ixo3: 0,
    Add1: 0,
    Add2: 0,
    Add3: 0,
    Ixc1: 0,
    Ixc2: 0,
    Ixc3: 0,

    Iyc1: 0,
    Iyc2: 0,
    Iyc3: 0,

    Ix: 0,
    Iy: 0,
    Jc: 0,
    rx: 0,
    ry: 0,

    page: "10",
});
// I think this exposes the values to Smart Sparrow. :D
pipit.CapiAdapter.expose('Bt', model);
pipit.CapiAdapter.expose('Hw', model);
pipit.CapiAdapter.expose('Bb', model);
pipit.CapiAdapter.expose('tt', model);
pipit.CapiAdapter.expose('tw', model);
pipit.CapiAdapter.expose('tb', model);
pipit.CapiAdapter.expose('A1', model);
pipit.CapiAdapter.expose('A2', model);
pipit.CapiAdapter.expose('A3', model);
pipit.CapiAdapter.expose('A_total', model);
pipit.CapiAdapter.expose('y1', model);
pipit.CapiAdapter.expose('y2', model);
pipit.CapiAdapter.expose('y3', model);
pipit.CapiAdapter.expose('Ay1', model);
pipit.CapiAdapter.expose('Ay2', model);
pipit.CapiAdapter.expose('Ay3', model);
pipit.CapiAdapter.expose('Ay_total', model);
pipit.CapiAdapter.expose('xbar', model);
pipit.CapiAdapter.expose('ybar', model);
pipit.CapiAdapter.expose('Ixo1', model);
pipit.CapiAdapter.expose('Ixo2', model);
pipit.CapiAdapter.expose('Ixo3', model);
pipit.CapiAdapter.expose('Add1', model);
pipit.CapiAdapter.expose('Add2', model);
pipit.CapiAdapter.expose('Add3', model);
pipit.CapiAdapter.expose('Ixc1', model);
pipit.CapiAdapter.expose('Ixc2', model);
pipit.CapiAdapter.expose('Ixc3', model);
pipit.CapiAdapter.expose('Iyc1', model);
pipit.CapiAdapter.expose('Iyc2', model);
pipit.CapiAdapter.expose('Iyc3', model);
pipit.CapiAdapter.expose('Ix', model);
pipit.CapiAdapter.expose('Iy', model);
pipit.CapiAdapter.expose('Jc', model);
pipit.CapiAdapter.expose('rx', model);
pipit.CapiAdapter.expose('ry', model);

pipit.CapiAdapter.expose('page', model);


//this gets the values from Smart Sparrow. So does that mean I need to put inputs into Smart Sparrow variable tab? Either way, I'm sure these are just the inputs
//I think I can place M R theta_deg in variables. Then make pages # in iniitial state. Then i'm done??!
pipit.Controller.notifyOnReady();

model.on("change:Bt", function() {
    draw();
});
model.on("change:Hw", function() {
    draw();
});
model.on("change:Bb", function() {
    draw();
});
model.on("change:tt", function() {
    draw();
});
model.on("change:tw", function() {
    draw();
});
model.on("change:tb", function() {
    draw();
});
model.on("change:page", function() {
     draw();
});

// This is JQuery right? 
$("#selectBox").change(function() {
    draw();
});

//this is the generic function which does all the magic. It gets the values from SS then calculates them then figures out which catagory its in (how does it know what question #? from getvaleusformSS function!!) then displays the values
function draw() {
    getValuesFromSS();
    calculateVariables();

    category = $("#selectBox option:selected").val();
    sendValuesToSS();
    displayValues();
}

//there is no need to send the input values back to smart sparrow. so only send the values that have been calculated.
function sendValuesToSS() {
    model.set("A1", values.A1);
    model.set("A2", values.A2);
    model.set("A3", values.A3);
    model.set("A_total", values.A_total);
    model.set("y1", values.y1);
    model.set("y2", values.y2);
    model.set("y3", values.y3);
    model.set("Ay1", values.Ay1);
    model.set("Ay2", values.Ay2);
    model.set("Ay3", values.Ay3);
    model.set("Ay_total", values.Ay_total);
    model.set("xbar", values.xbar);
    model.set("ybar", values.ybar);
    model.set("Ixo1", values.Ixo1);
    model.set("Ixo2", values.Ixo2);
    model.set("Ixo3", values.Ixo3);
    model.set("Add1", values.Add1);
    model.set("Add2", values.Add2);
    model.set("Add3", values.Add3);
    model.set("Ixc1", values.Ixc1);
    model.set("Ixc2", values.Ixc2);
    model.set("Ixc3", values.Ixc3);
    model.set("Iyc1", values.Iyc1);
    model.set("Iyc2", values.Iyc2);
    model.set("Iyc3", values.Iyc3);
    model.set("Ix", values.Ix);
    model.set("Iy", values.Iy);
    model.set("Jc", values.Jc);
    model.set("rx", values.rx);
    model.set("ry", values.ry);

}
// what is the purpose of the num == 4 ? Is this to make it fit to the table somehow?
function displayValues() {
    var show = getShowVariables();
    var s = "<table class=right><tr><td>";
    var num = 1;

    $.each(show, function(i, e) {
        var name = names[e]; // objects can reference members by object.property or by object['property'], allowing you to use variables
        var value = valuesRounded[e];
        var unit = units[e];

        s += name + " = " + value + " " + unit + "<br>";

        if (num == 4) {
            s += "</td><td>";
            num = 0
        }
        num++;

    });

    s += "</td></tr></table>";

    $("#right")[0].innerHTML = s;
}







//THIS IS A HUGE PROBLEM!! I DON'T WANT TO GET THE VALUES FROM ANOTHER SIM (TMIN, TMAX) SHOULD I JUST PLACE THEM IN VARIABLES (LOOK BELOW)








// Here i'm getting all the inputs from Smart Sparrow. This is the start of the draw function. Only put in inputs because other variables won't be there
function getValuesFromSS() {
    values.Bt = model.get('Bt');
    values.Hw = model.get('Hw');
    page = model.get('page');
    values.Bb = model.get('Bb');
    values.tt = model.get('tt');
    values.tw = model.get('tw');
    values.tb = model.get('tb');
}
//ones the inputs are pulled from Smart Sparrow then they're calculated (all part of the draw function). Make sure I start from elementary formulas and work done.
function calculateVariables() { 
    values.Ay = (1/5)*(5*values.F1+3*values.F2+1*values.F3);
 
    values.A1 = values.Bt * values.tt;
    values.A2 = values.Hw * values.tw;
    values.A3 = values.Bb * values.tb;
    values.y1 = values.tb + values.Hw + 0.5 * values.tt;
    values.y2 = values.tb + 0.5*values.Hw;
    values.y3 = 0.5*values.tb;
    values.Ay1 = values.A1 * values.y1;
    values.Ay2 = values.A2 * values.y2;
    values.Ay3 = values.A3 * values.y3;
    values.A_total = values.A1 + values.A2 + values.A3;
    values.Ay_total = values.A1 * values.y1 + values.A2 * values.y2 + values.A3 * values.y3;

    values.xbar = 0;
    values.ybar = values.Ay_total / values.A_total;

    values.Ixo1 = (1/12) * values.Bt * values.tt * values.tt * values.tt;
    values.Ixo2 = (1/12) * values.tw * values.Hw * values.Hw * values.Hw;
    values.Ixo3 = (1/12) * values.Bb * values.tb * values.tb * values.tb;
    values.Add1 = values.A1 * (values.y1 - values.ybar) * (values.y1 - values.ybar);
    values.Add2 = values.A2 * (values.y2 - values.ybar) * (values.y2 - values.ybar);
    values.Add3 = values.A3 * (values.y3 - values.ybar) * (values.y3 - values.ybar);
    values.Ixc1 = values.Ixo1 + values.Add1;
    values.Ixc2 = values.Ixo2 + values.Add2;
    values.Ixc3 = values.Ixo3 + values.Add3;

    values.Iyc1 = (1/12) * values.tt * values.Bt * values.Bt * values.Bt;
    values.Iyc2 = (1/12) * values.Hw * values.tw * values.tw * values.tw;
    values.Iyc3 = (1/12) * values.tb * values.Bb * values.Bb * values.Bb;

    values.Ix = values.Ixc1 + values.Ixc2 + values.Ixc3; 
    values.Iy = values.Iyc1 + values.Iyc2 + values.Iyc3;
    values.Jc = values.Ix + values.Iy;
    values.rx = Math.sqrt(values.Ix / values.A_total);
    values.ry = Math.sqrt(values.Iy / values.A_total);


    // Round values into valuesRounded
    $.each(values, function(i, e) {
        valuesRounded[i] = round(values[i]);
    })
}
// case 1 = catagory 1. Is the order determiend by the order in the HTML code?
// page 3 = 30. Page 3 from start of SS tutorial? Start at page 0 or page 1? Why is crank shaft velocity page 1??!
// For case 1, pages 3,4,5,6,7,8 and 9 are all taken care of by the one return line. right?
// what is the max number of variables per category??
// what happens if I have less than 5 categories? How do I specify 3 categories for example?
function getShowVariables() {
    switch (category) {
        case "1": // Category 1
            switch (page) {
                case "10": 
                case "20": 
                case "30": 
                case "40": 
                case "50":
                case "60":
                case "70": 
                case "80": 
                case "90":
                case "100":
                case "110": 
                    return ["Bt", "Hw", "Bb", "tt", "tw", "tb"];
                    break;
            }
            break;

        case "2": // Category 2
            switch (page) {
                case "10":
                case "20":
                case "30":
                    return [];
                    break;
                case "40":
                    return ["ybar"];
                    break;
                case "50":
                case "60":
                case "70": 
                case "80": 
                case "90":
                case "100":
                case "110":
                    return ["xbar", "ybar"];
                    break;
            }
            break;

        case "3":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70": 
                    return [];
                    break;
                case "80": 
                case "90":
                    return ["Ix"];
                    break; 
                case "100":
                case "110":
                    return ["Ix", "Iy"];
                    break; 
            }
            break;

        case "4":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70": 
                case "80": 
                case "90":
                case "100":
                    return [];
                    break;
                case "110":
                    return ["Jc"];
                    break;
            }
            break;

        // case "5":
        //     switch (page) {
        //         case "10":
        //         case "20":
        //         case "30":
        //         case "40":
        //         case "50":
        //             return [];
        //             break;
        //         case "60":
        //             return ["JH", "JI"];
        //             break;

        //     }
        //     break;
    }
    return []; // empty
}
/*
function getShowVariables() {
    switch (category) {
        case "1": // Category 1
            switch (page) {
                case "10": //Crank Shaft Angular Velocity page
                case "20": //Input Power page
                    return ["tMax", "tMin", "tAvg"];
                    break;

                case "30": //Theta_1 and theta_2 page
                case "40": // and so on
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["tMax", "tMin", "tAvg", "P"];
                    break;
            }
            break;

        case "2": // Category 2
            switch (page) {
                case "10":
                    return [];
                    break;

                case "20":
                case "30":
                    return ["w_1_rad"];
                    break;

                case "40":
                    return ["w_1_rad", "theta_1", "theta_2"];
                    break;

                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["w_1_rad", "theta_1", "theta_2", "delta_E"];
                    break;
            }
            break;

        case "3":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["d_1", "d_2"];
                    break;
            }
            break;

        case "4":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                case "50":
                case "60":
                case "70":
                case "80":
                case "90":
                    return ["w_2_RPM"];
                    break;
            }
            break;

        case "5":
            switch (page) {
                case "10":
                case "20":
                case "30":
                case "40":
                    return [];
                    break;

                case "50":
                    return ["w_1_RPM", "wMin", "wMax"];
                    break;

                case "60":
                    return ["w_1_RPM", "wMin", "wMax", "C"];
                    break;

                case "70":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "i_reqd"];
                    break;

                case "80":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "rho", "i_reqd", "i_fw"];
                    break;

                case "90":
                    return ["w_1_RPM", "wMin", "wMax", "C", "percent", "rho", "i_reqd", "i_fw", "dI", "dO"];
                    break;
            }
            break;

    }
    return []; // empty
}
*/



// Debugging
// $.each(model.attributes, function(i, e) {
//     console.log(i + " : " + e);
// });


function round(input) {
    // if it is an integer number, return it
    if (parseInt(input) == parseFloat(input)) {
        return input;
    }

    // if the input is NaN or not available or 0, dont round
    if (isNaN(input) == true || input == " " || input == 0) {
        return input;
    }

    // if (input > 0) {
    //     var position = 0;
    //     var i = input;
    //     while (i < 1000) { // show 3 sig figs
    //         i *= 10;
    //         position++;
    //     }
    //     input = Math.round(i) / Math.pow(10, position);
    //     return input;
    // }


    var i = Math.abs(input);
    var sigfig = 3
    var mag = Math.floor(Math.log10(i));
    input = input * Math.pow(10, sigfig - mag);
    input = Math.round(input)
    input = input / Math.pow(10, sigfig - mag);

        return input;
  

}