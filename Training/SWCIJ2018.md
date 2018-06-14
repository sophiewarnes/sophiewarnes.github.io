# Soph's CIJ Summer 2018 tutorial/materials

## Contents
* [Before you start](#before-you-start) including data dictionary
* [Further reading on visual encoding](#more-info-about-encoding)
* [Further reading](#further-reading)
* [Thanks](#thanks)

### Before you start
For this small project, we are going to be visualising gender pay gap data collected by the government using the [javascript library Highcharts](https://www.highcharts.com/ "Highcharts"). You can find the most up-to-date gender pay gap data [on the gov.uk website](https://gender-pay-gap.service.gov.uk/ "Gender Pay Gap Statistics") but the data is incomplete and a little messy.

For the purposes of this tutorial, I cleaned the data, and you can download it here: [Right-click and save link as, to download the GPG data](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/clean-gpg-data.csv "UK Gender Pay Gap Data")

> **Very Important Note:** If you want to use Highcharts an your organisation (ie for commercial use), you'll need to [pay for a license](http://www.highcharts.com/products/highcharts "Pay for a HighCharts license").

<details> 
 <Summary><strong>Data Dictionary</strong> - click for details about the data</Summary>

The file `clean-gpg-data.csv` contains one row for every company which submitted data to the government regarding their gender pay gap. For the hourly comparison columns, a minus value means women have higher pay, and a positive value means men have higher pay. The column headings are:
<ul>
<li> <strong>CompanyName:</strong> The name of the company.</li>
<li> <strong>Address:</strong> Full address where possible, including postcodes.</li>
<li> <strong>CompanyNumber:</strong> The company number as registered at [Companies House](https://www.>gov.uk/government/organisations/companies-house "Companies House").</li>
<li> <strong>SicCodes:</strong> The Standard Industrial Classification code (for more information, all SIC codes are [listed on Companies House here](https://resources.companieshouse.gov.uk/sic/ "(SIC) Code List").</li>
<li> <strong>DiffMeanHourlyPercent:</strong> Mean pay gap between men and women.</li>
<li> <strong>DiffMedianHourlyPercent:</strong> Median pay gap between men and women.</li>
<li> <strong>DiffMeanBonusPercent:</strong> Mean bonus pay gap between men and women.</li>
<li> <strong>DiffMedianBonusPercent:</strong> Median bonus pay gap between men and women.</li>
<li> <strong>MaleBonusPercent:</strong> The proportion of men in the organisation receiving a bonus payment.</li>
<li> <strong>FemaleBonusPercent:</strong> The proportion of women in the organisation receiving a bonus payment.</li>
<li> <strong>MaleLowerQuartile:</strong> The proportion of men with salaries in the lower quartile (paid below the 25th percentile point).</li>
<li> <strong>FemaleLowerQuartile:</strong> The proportion of women with salaries in the lower quartile (paid below the 25th percentile point).</li>
<li> <strong>MaleLowerMiddleQuartile:</strong> The proportion of men with salaries in the lower middle quartile (paid above the 25th percentile point and at or below the median).</li>
<li> <strong>FemaleLowerMiddleQuartile:</strong> The proportion of women with salaries in the lower middle quartile (paid above the 25th percentile point and at or below the median).</li>
<li> <strong>MaleUpperMiddleQuartile:</strong> The proportion of men with salaries in the upper middle quartile (paid above the median and at or below the 75th percentile point).</li>
<li> <strong>FemaleUpperMiddleQuartile:</strong> The proportion of women with salaries in the upper middle quartile (paid above the median and at or below the 75th percentile point).</li>
<li> <strong>MaleTopQuartile:</strong> The proportion of men with salaries in the top quartile of the whole organisation (paid above the 75th percentile point).</li>
<li> <strong>FemaleTopQuartile:</strong> The proportion of women with salaries in the top quartile of the whole organisation (paid above the 75th percentile point).</li>
<li> <strong>EmployerSize:</strong> The number of employees the company has. These are in buckets, such as 250 to 499 and 500 to 999.</li>
<li> <strong>SubmittedAfterDeadline:</strong> A Boolean (TRUE or FALSE) value indicating whether it was submitted after the deadline or before.</li>
</ul>
</details>

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

If you are completely new to HTML, the // in the code snippet are a comment, which tells the browser to ignore whatever comes after it. It's really useful for leaving notes for yourself!

It's hard to remember exactly what the configuration options are, so there is some very handy [Highcharts API reference documentation](http://api.highcharts.com/highcharts) you can use.

Now we've changed the title of the X axis, gotten rid of the annoying Highcharts logo and the legend, here's what that looks like:

![Highcharts column chart with X axis title](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/second-chart.PNG "Highcharts column chart with X axis title")

### Further reading

#### More info about encoding

If you are interested in reading any further about encoding - what I discussed in the presentation was very brief - O'Reilly has a [great chapter on encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/ch04.html "Designing Data Visualizations: Choose Appropriate Visual Encodings") which includes this really helpful resource:

![Understanding different types of data and encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/httpatomoreillycomsourceoreillyimages898026.png "Understanding different types of data and encoding")


### Thanks
Thank you to [Elliot Bentley](https://twitter.com/elliot_bentley "@Elliot_Bentley on Twitter") for writing the original HighCharts tutorial in 2015.
