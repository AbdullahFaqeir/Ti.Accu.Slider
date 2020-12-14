[![gitTio](http://gitt.io/badge.svg)](http://gitt.io/component/ti.accu.slider)

# Ti.Accu.Slider

Appcelerator Titanium widget for advanced slider which supports steps.

# Preview

![screenshot](https://user-images.githubusercontent.com/1428547/102104391-d05f6180-3e36-11eb-89cd-b063ac066463.png)


# Installation 
you can install the widget directly by downloading a zip file from this repo. or you can download it usign [gitTio](http://gitt.io) package manager using the following command

```sh
$ gittio install ti.accu.slider
```

# Usage & Implementation

You can easily use the widget with the following way.

```xml
<Widget id="Slider" src="ti.accu.slider" title="Loan Amount" sliderTint="red" min="10" max="250" step="5" width="Ti.UI.FILL" value="70" onChange="valueChanged"/>
```

OR

```js

var Slider = Alloy.createWidget('ti.accu.slider',{
  title:"Loan Amount",
  sliderTint:"red", // OS(iOS, Android) default
  min:10, //default 0
  max:250, //default 1
  step:5, //default 1
  value:50
}).getView();

Slider.on("change",valueChanged);

$.anyView.add(Slider);

```

# Methods Available

```js

function valueChanged(e){
  console.log(e.value);
}

$.Slider.setSliderTintColor('green');

$.Slider.setTitleStyle({
  color: 'blue'
});// all styles available for Label 

$.Slider.setTextFieldStyle({
  borderColor: 'black',
  borderWidth: 1,
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});// all styles available for TextField

var value = $.Slider.getValue();

```

# Contribution 
Pull request are welcome to add any new features to the widget.

License
----

Apache License, Version 2.0

# Author 
 - Abdullah Al-Faqeir (abdullah@accusolutions.net) AccuSolutions LLC 2020

