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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:billing:{year}:{month}";
var Billing = /** @class */ (function () {
    function Billing() {
        this.billingId = null;
        this.projectName = null;
        this.year = null;
        this.month = null;
        this.region = null;
        this.service = null;
        this.activityType = null;
        this.unit = null;
        this.unitName = null;
        this.price = null;
        this.currency = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Billing.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Billing.getProjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Billing.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Billing.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Billing.isValid = function (grn) {
        if (this.getAccountName(grn) == null) {
            return false;
        }
        if (this.getProjectName(grn) == null) {
            return false;
        }
        if (this.getYear(grn) == null) {
            return false;
        }
        if (this.getMonth(grn) == null) {
            return false;
        }
        return true;
    };
    Billing.createGrn = function (accountName, projectName, year, month) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '')
            .replace('{projectName}', projectName !== null && projectName !== void 0 ? projectName : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '');
    };
    Billing.prototype.getBillingId = function () {
        return this.billingId;
    };
    Billing.prototype.setBillingId = function (billingId) {
        this.billingId = billingId;
        return this;
    };
    Billing.prototype.withBillingId = function (billingId) {
        this.billingId = billingId;
        return this;
    };
    Billing.prototype.getProjectName = function () {
        return this.projectName;
    };
    Billing.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    Billing.prototype.withProjectName = function (projectName) {
        this.projectName = projectName;
        return this;
    };
    Billing.prototype.getYear = function () {
        return this.year;
    };
    Billing.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    Billing.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    Billing.prototype.getMonth = function () {
        return this.month;
    };
    Billing.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    Billing.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    Billing.prototype.getRegion = function () {
        return this.region;
    };
    Billing.prototype.setRegion = function (region) {
        this.region = region;
        return this;
    };
    Billing.prototype.withRegion = function (region) {
        this.region = region;
        return this;
    };
    Billing.prototype.getService = function () {
        return this.service;
    };
    Billing.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    Billing.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    Billing.prototype.getActivityType = function () {
        return this.activityType;
    };
    Billing.prototype.setActivityType = function (activityType) {
        this.activityType = activityType;
        return this;
    };
    Billing.prototype.withActivityType = function (activityType) {
        this.activityType = activityType;
        return this;
    };
    Billing.prototype.getUnit = function () {
        return this.unit;
    };
    Billing.prototype.setUnit = function (unit) {
        this.unit = unit;
        return this;
    };
    Billing.prototype.withUnit = function (unit) {
        this.unit = unit;
        return this;
    };
    Billing.prototype.getUnitName = function () {
        return this.unitName;
    };
    Billing.prototype.setUnitName = function (unitName) {
        this.unitName = unitName;
        return this;
    };
    Billing.prototype.withUnitName = function (unitName) {
        this.unitName = unitName;
        return this;
    };
    Billing.prototype.getPrice = function () {
        return this.price;
    };
    Billing.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    Billing.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    Billing.prototype.getCurrency = function () {
        return this.currency;
    };
    Billing.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    Billing.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    Billing.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Billing.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Billing.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Billing.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Billing.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Billing.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Billing.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Billing()
            .withBillingId(data["billingId"])
            .withProjectName(data["projectName"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withRegion(data["region"])
            .withService(data["service"])
            .withActivityType(data["activityType"])
            .withUnit(data["unit"])
            .withUnitName(data["unitName"])
            .withPrice(data["price"])
            .withCurrency(data["currency"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Billing.prototype.toDict = function () {
        return {
            "billingId": this.getBillingId(),
            "projectName": this.getProjectName(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "region": this.getRegion(),
            "service": this.getService(),
            "activityType": this.getActivityType(),
            "unit": this.getUnit(),
            "unitName": this.getUnitName(),
            "price": this.getPrice(),
            "currency": this.getCurrency(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Billing;
}());
exports.default = Billing;
//# sourceMappingURL=Billing.js.map