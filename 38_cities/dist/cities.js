"use strict";
function describe_city(city, country = 'Default Country.') {
    console.log(` ${city} is in ${country}`);
}
describe_city(`karachi`, 'Pakistan');
describe_city(`Tokyo`, 'Japan');
describe_city(`Paris`);
