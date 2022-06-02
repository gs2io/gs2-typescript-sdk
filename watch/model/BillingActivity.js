"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}";
var BillingActivity = /** @class */ (function () {
    function BillingActivity() {
        this.billingActivityId = null;
        this.year = null;
        this.month = null;
        this.service = null;
        this.activityType = null;
        this.value = null;
    }
    BillingActivity.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingActivity.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingActivity.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingActivity.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{service}', '.*')
            .replace('{activityType}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingActivity.getService = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '(.*)')
            .replace('{activityType}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingActivity.getActivityType = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{service}', '.*')
            .replace('{activityType}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingActivity.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getService(grn) == null || this.getService(grn) === '') {
            return false;
        }
        if (this.getActivityType(grn) == null || this.getActivityType(grn) === '') {
            return false;
        }
        return true;
    };
    BillingActivity.createGrn = function (region, ownerId, year, month, service, activityType) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{service}', service !== null && service !== void 0 ? service : '')
            .replace('{activityType}', activityType !== null && activityType !== void 0 ? activityType : '');
    };
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
exports.default = BillingActivity;
//# sourceMappingURL=BillingActivity.js.map