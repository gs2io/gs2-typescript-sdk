/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
var BillingActivity = /** @class */ (function () {
    function BillingActivity() {
        this.billingActivityId = null;
        this.year = null;
        this.month = null;
        this.service = null;
        this.activityType = null;
        this.value = null;
    }
    BillingActivity.prototype.getBillingActivityId = function () {
        return this.billingActivityId;
    };
    BillingActivity.prototype.setBillingActivityId = function (billingActivityId) {
        this.billingActivityId = billingActivityId;
        return this;
    };
    BillingActivity.prototype.withBillingActivityId = function (billingActivityId) {
        this.billingActivityId = billingActivityId;
        return this;
    };
    BillingActivity.prototype.getYear = function () {
        return this.year;
    };
    BillingActivity.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    BillingActivity.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    BillingActivity.prototype.getMonth = function () {
        return this.month;
    };
    BillingActivity.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    BillingActivity.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    BillingActivity.prototype.getService = function () {
        return this.service;
    };
    BillingActivity.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    BillingActivity.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    BillingActivity.prototype.getActivityType = function () {
        return this.activityType;
    };
    BillingActivity.prototype.setActivityType = function (activityType) {
        this.activityType = activityType;
        return this;
    };
    BillingActivity.prototype.withActivityType = function (activityType) {
        this.activityType = activityType;
        return this;
    };
    BillingActivity.prototype.getValue = function () {
        return this.value;
    };
    BillingActivity.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    BillingActivity.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    BillingActivity.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BillingActivity()
            .withBillingActivityId(data["billingActivityId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withService(data["service"])
            .withActivityType(data["activityType"])
            .withValue(data["value"]);
    };
    BillingActivity.prototype.toDict = function () {
        return {
            "billingActivityId": this.getBillingActivityId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "service": this.getService(),
            "activityType": this.getActivityType(),
            "value": this.getValue(),
        };
    };
    return BillingActivity;
}());
export { BillingActivity };
//# sourceMappingURL=BillingActivity.js.map