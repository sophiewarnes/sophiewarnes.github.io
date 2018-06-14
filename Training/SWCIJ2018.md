# Soph's CIJ Summer 2018 tutorial/materials

## Contents
* [Resources](#resources) including data dictionary
* [Further reading on visual encoding](#more-info-about-encoding)

[testing link](https://raw.githubusercontent.com/sophiewarnes/sophiewarnes.github.io/master/Training/Files/clean-gpg-data.csv)

### Resources needed for this tutorial
For this small project, we are going to be visualising gender pay gap data as collected by the government. You can find the most up-to-date gender pay gap data [on the gov.uk website](https://gender-pay-gap.service.gov.uk/ "Gender Pay Gap Statistics") but the data was quite messy.

For the purposes of what we want to do today, I've cleaned up the data, which you can download: [Download the GPG data](./Files/clean-gpg-data.csv "UK Gender Pay Gap Data")

#### Data Dictionary

* The file `clean-gpg-data.csv` contains one row for every company which submitted data to the government regarding their gender pay gap. The column headings are:
  * **CompanyName:** The name of the company.
  * **Address:** Full address where possible, including postcodes.
  * **CompanyNumber:** The company number as registered at [Companies House](https://www.gov.uk/government/organisations/companies-house "Companies House")
  * **SicCodes:** The Standard Industrial Classification code (for more information, all SIC codes are [listed on Companies House here](https://resources.companieshouse.gov.uk/sic/ "(SIC) Code List")
  * **DiffMeanHourlyPercent:**
  * **DiffMedianHourlyPercent:**
  * **DiffMeanBonusPercent:**
  * **DiffMedianBonusPercent:**
  * **MaleBonusPercent:**
  * **FemaleBonusPercent:**
  * **MaleLowerQuartile:**
  * **FemaleLowerQuartile:**
  * **MaleLowerMiddleQuartile:**
  * **FemaleLowerMiddleQuartile:**
  * **MaleUpperMiddleQuartile:**
  * **FemaleUpperMiddleQuartile:**
  * **MaleTopQuartile:**
  * **FemaleTopQuartile:**
  * **EmployerSize:** The number of employees the company has. 
  * **SubmittedAfterDeadline:** A Boolean (TRUE or FALSE) value indicating whether it was submitted after the deadline or before.






### More info about encoding

If you are interested in reading any further about encoding - what I discussed in the presentation was very brief - O'Reilly has a [great chapter on encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/ch04.html "Designing Data Visualizations: Choose Appropriate Visual Encodings") which includes this really helpful resource:
![Understanding different types of data and encoding](https://www.oreilly.com/library/view/designing-data-visualizations/9781449314774/httpatomoreillycomsourceoreillyimages898026.png "Understanding different types of data and encoding")



