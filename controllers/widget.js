var vArgs = arguments[0] || {};
var screenWidth = Ti.Platform.displayCaps.platformWidth;
var lastValue = 0;
var step = 1;

init(vArgs);

function init(args) {
  $.SliderTitle.text = args.title || "";
  $.Slider.min = $.SliderFrom.text = args.min || 0;
  $.Slider.max = $.SliderTo.text = args.max || 1;
  lastValue = $.SliderValue.value = $.Slider.value = args.value || 1;
  step = parseInt(args.step || 1);
  $.Slider.enabled = args.enabled || true;
  if (args.sliderTint) {
    setSliderTintColor(args.sliderTint);
  }
}

function getValue() {
  return $.SliSlider.value;
}

function setSliderTintColor(tintColor) {
  $.Slider.tintColor = tintColor;
}

function onChange(e) {
  getFinalValue(e);
  e.value = lastValue
  $.SliderValue.value = e.value;
  $.trigger('change', e);
}

function textValueChanged(e) {
  getFinalValue(e);
  $.Slider.value = lastValue;
  $.SliderValue.value = lastValue;
}

function getFinalValue(e) {
  lastValue = Math.round(Math.round(e.value) / step) * step;
  return lastValue;
}

function setTitleStyle(style) {
  for (var key in style) {
    $.SliderTitle[key] = style[key];
  }
}

function setTextFieldStyle(style) {
  for (var key in style) {
    $.SliderValue[key] = style[key];
  }
}

$.getValue = getValue;
$.setSliderTintColor = setSliderTintColor;
$.setTitleStyle = setTitleStyle;
$.setTextFieldStyle = setTextFieldStyle;