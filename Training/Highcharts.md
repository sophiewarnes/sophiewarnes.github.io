# Soph's CIJ Summer 2018 tutorial/materials

## Contents
* [Before you start](#before-you-start) including data dictionary
* [Your first Highchart](#your-first-highchart)
* [A much more useful chart](#a-much-more-useful-chart)
* [Using data from a CSV file](#using-data-from-a-csv-file)
* [Making it look pretty (styling!)](#making-it-look-pretty)
* [Further reading on visual encoding](#more-info-about-encoding)
* [Further reading](#further-reading)

### Before you start
For this small project, we are going to be visualising gender pay gap data collected by the government using the [javascript library Highcharts](https://www.highcharts.com/ "Highcharts"). You can find the most up-to-date gender pay gap data [on the gov.uk website](https://gender-pay-gap.service.gov.uk/ "Gender Pay Gap Statistics") but the data is incomplete and a little messy.

For the purposes of this tutorial, I cleaned the data, and uploaded it to my GitHub account so you can access it directly. We are going to (try and) replicate this awesome chart [from the FT](https://ig.ft.com/gender-pay-gap-UK/ "FT Gender Pay Gap"):
![FT Chart](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/FTChart.png "FT Gender Pay Gap Chart")

> **Very Important Note:** If you want to use Highcharts an your organisation (ie for commercial use), you'll need to [pay for a license](http://www.highcharts.com/products/highcharts "Pay for a HighCharts license").

### Your first Highchart

Highcharts is a really easy library to use and doesn't need much code. All you need to do is set up a `<div>` container called "container", and pull in the Highcharts library and jquery. The direct reference to the library is `http://code.highcharts.com/highcharts.js` so we include that as part of the page in `<script>` tags.

Create a new text document and open it in your favourite text editor. Here's the starting bit of code for Highcharts, so copy that in:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Chart</title>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
</head>
<body>
  <div id="container" style="height: 400px; width: 500px;"></div>
  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script type="text/javascript">
    // highcharts code goes here
  </script>
</body>
</html>
```

Save it as a HTML page (for instance "highcharttutorial.html"). Then, paste this in between the second `<script>` tags:
```javascript
 $('#container').highcharts({
  series: [{
    data: [190, 3334, 1792, 1578, 325, 42, 142]
  }]
});
```
 
Save it again and open it in a browser. It should look like this:

![Basic Highchart chart 1](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/first-chart.PNG "Basic Highcharts chart")

This is fine but it's a line chart (which won't work for our data), it has no title,  no categories, there's a Highcharts logo on it, and the axes aren't labelled. It's a bit useless for what we want to make.

### A much more useful chart

We need to add a few more different settings so we can make it look a bit better:

```javascript
  $('#container').highcharts({
  chart: {
    type: 'column'
  },
  credits: {
    enabled: false // removes Highcharts.com logo at the bottom
  },
  title: {
  text: 'Organisations reporting their GPG, by number of employees'
  },
  xAxis: {
    categories: ['< 250', '250-499', '500-999', '1,000-4,999', '5,000-19,999', '20,000+', 'Not provided'],
    title: {
    text:'Number of employees in organisation'
    }
  },
  yAxis: {
    title: null // disables title on y axis
  },
  legend: {
    enabled: false // disables legend
  },
  series: [{
    data: [190, 3334, 1792, 1578, 325, 42, 142]
  }]
});
```

> <strong>New to HTML?</strong> The forward slashes you see `//` in the code snippet are a comment, which tells the browser to ignore whatever comes after it. It's really useful for leaving notes for yourself so you can remember what does what.

It's hard to remember exactly what the configuration options are, so Highchart developers created the [Highcharts API reference documentation](http://api.highcharts.com/highcharts) which explains more about the different things you can do with a chart built in Highcharts.

Now we've changed the title of the X axis, gotten rid of the annoying Highcharts logo and the legend, here's what that should look like:

![Highcharts column chart with X axis title](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/second-chart.PNG "Highcharts column chart with X axis title")

### Using data from a CSV file
Highcharts is able to take data from a CSV file as well, and this is what we want to do to make our fake FT gender pay gap chart. Whereas before we always entered in the data manually, this time we need to tell it where to get the data from.

Firstly, we need to make sure that we have the Highcharts Data module, because without this vital piece of code, nothing will work! This is how we include the data module:

```html
<script src="https://code.highcharts.com/modules/data.js"></script>
```
Make sure you add that after the code which points to Highcharts, and before the rest of the script, otherwise it won't work.

Next, take out the 'series' section in the chart generation section, and replace it with this:
```javascript
data: {
    enablePolling: false,
    csvURL: 'https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/paygapdata.csv'
  },
```

In this, `enablePolling` is set to `false` - if it is set to true, it will keep refreshing the chart (useful for live data) but we want the chart to be static because we aren't reading data from an API.

We can set the container to be a bit bigger as well, which will help:
```html
<div id="container" style="height: 600px; width: 1000px;"></div>
```

That should all now look something like this:
![Chart generated from CSV file](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/third-chart.png "Chart generated from CSV file")

### Making it look pretty
Now we get onto the fun of styling up the chart so it works how we want it to.


#### More info about encoding

If you are interested in reading any further about encoding - what I discussed in the presentation was very brief - O'Reilly has a [great chapter on encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/ch04.html "Designing Data Visualizations: Choose Appropriate Visual Encodings") which includes this really helpful resource:

![Understanding different types of data and encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/httpatomoreillycomsourceoreillyimages898026.png "Understanding different types of data and encoding")
