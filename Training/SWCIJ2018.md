# Soph's CIJ Summer 2018 tutorial/materials

## Contents
* [Before you start](#before-you-start) including data dictionary
* [Further reading on visual encoding](#more-info-about-encoding)
* [Thanks](#thanks)

### Before you start
For this small project, we are going to be visualising gender pay gap data collected by the government using the [javascript library Highcharts](https://www.highcharts.com/ "Highcharts"). You can find the most up-to-date gender pay gap data [on the gov.uk website](https://gender-pay-gap.service.gov.uk/ "Gender Pay Gap Statistics") but the data is incomplete and a little messy.

For the purposes of this tutorial, I cleaned the data, and you can download it here: [Right-click and save link as, to download the GPG data](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/clean-gpg-data.csv "UK Gender Pay Gap Data")

> **Very Important Note:** If you want to use Highcharts an your organisation (ie for commercial use), you'll need to [pay for a license](http://www.highcharts.com/products/highcharts "Pay for a HighCharts license").

#### Data Dictionary

* The file `clean-gpg-data.csv` contains one row for every company which submitted data to the government regarding their gender pay gap. For the hourly comparison columsn, a minus value means women have higher pay, and a positive value means men have higher pay. The column headings are:
  * **CompanyName:** The name of the company.
  * **Address:** Full address where possible, including postcodes.
  * **CompanyNumber:** The company number as registered at [Companies House](https://www.gov.uk/government/organisations/companies-house "Companies House")
  * **SicCodes:** The Standard Industrial Classification code (for more information, all SIC codes are [listed on Companies House here](https://resources.companieshouse.gov.uk/sic/ "(SIC) Code List")
  * **DiffMeanHourlyPercent:** Mean pay gap between men and women.
  * **DiffMedianHourlyPercent:** Median pay gap between men and women.
  * **DiffMeanBonusPercent:** Mean bonus pay gap between men and women.
  * **DiffMedianBonusPercent:** Median bonus pay gap between men and women.
  * **MaleBonusPercent:** The proportion of men in the organisation receiving a bonus payment.
  * **FemaleBonusPercent:** The proportion of women in the organisation receiving a bonus payment.
  * **MaleLowerQuartile:** The proportion of men with salaries in the lower quartile (paid below the 25th percentile point).
  * **FemaleLowerQuartile:** The proportion of women with salaries in the lower quartile (paid below the 25th percentile point).
  * **MaleLowerMiddleQuartile:** The proportion of men with salaries in the lower middle quartile (paid above the 25th percentile point and at or below the median).
  * **FemaleLowerMiddleQuartile:** The proportion of women with salaries in the lower middle quartile (paid above the 25th percentile point and at or below the median).
  * **MaleUpperMiddleQuartile:** The proportion of men with salaries in the upper middle quartile (paid above the median and at or below the 75th percentile point).
  * **FemaleUpperMiddleQuartile:** The proportion of women with salaries in the upper middle quartile (paid above the median and at or below the 75th percentile point).
  * **MaleTopQuartile:** The proportion of men with salaries in the top quartile of the whole organisation (paid above the 75th percentile point).
  * **FemaleTopQuartile:** The proportion of women with salaries in the top quartile of the whole organisation (paid above the 75th percentile point).
  * **EmployerSize:** The number of employees the company has. These are in buckets, such as 250 to 499 and 500 to 999.
  * **SubmittedAfterDeadline:** A Boolean (TRUE or FALSE) value indicating whether it was submitted after the deadline or before.

### Your first Highchart

Highcharts is a really easy library to use and doesn't need much code. All you need to do is set up a `<div>` container called "container", and pull in the Highcharts library and jquery. The link to the library is `http://code.highcharts.com/highcharts.js` so this .

Here's the set-up code for the `<div>`:
`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Chart</title>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
</head>
<body>
  <div id="container" style="height: 400px;"></div>
  <script src="http://code.highcharts.com/highcharts.js"></script>
  <script type="text/javascript">
    // highcharts code goes here
  </script>
</body>
</html>`


### More info about encoding

If you are interested in reading any further about encoding - what I discussed in the presentation was very brief - O'Reilly has a [great chapter on encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/ch04.html "Designing Data Visualizations: Choose Appropriate Visual Encodings") which includes this really helpful resource:

![Understanding different types of data and encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/httpatomoreillycomsourceoreillyimages898026.png "Understanding different types of data and encoding")


### Thanks
Thank you to [Elliot Bentley](https://twitter.com/elliot_bentley "@Elliot_Bentley on Twitter") for writing the original HighCharts tutorial in 2015.
