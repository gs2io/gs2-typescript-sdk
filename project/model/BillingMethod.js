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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:billingMethod:{billingMethodName}";
var BillingMethod = /** @class */ (function () {
    function BillingMethod() {
        this.billingMethodId = null;
        this.accountName = null;
        this.name = null;
        this.description = null;
        this.methodType = null;
        this.cardSignatureName = null;
        this.cardBrand = null;
        this.cardLast4 = null;
        this.partnerId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    BillingMethod.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{billingMethodName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingMethod.getBillingMethodName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{billingMethodName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BillingMethod.isValid = function (grn) {
        if (this.getAccountName(grn) == null) {
            return false;
        }
        if (this.getBillingMethodName(grn) == null) {
            return false;
        }
        return true;
    };
    BillingMethod.createGrn = function (accountName, billingMethodName) {
        if (accountName == null || accountName === '') {
            return null;
        }
        if (billingMethodName == null || billingMethodName === '') {
            return null;
        }
        return grnFormat
            .replace('{accountName}', accountName)
            .replace('{billingMethodName}', billingMethodName);
    };
    BillingMethod.prototype.getBillingMethodId = function () {
        return this.billingMethodId;
    };
    BillingMethod.prototype.setBillingMethodId = function (billingMethodId) {
        this.billingMethodId = billingMethodId;
        return this;
    };
    BillingMethod.prototype.withBillingMethodId = function (billingMethodId) {
        this.billingMethodId = billingMethodId;
        return this;
    };
    BillingMethod.prototype.getAccountName = function () {
        return this.accountName;
    };
    BillingMethod.prototype.setAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    BillingMethod.prototype.withAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    BillingMethod.prototype.getName = function () {
        return this.name;
    };
    BillingMethod.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BillingMethod.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BillingMethod.prototype.getDescription = function () {
        return this.description;
    };
    BillingMethod.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    BillingMethod.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    BillingMethod.prototype.getMethodType = function () {
        return this.methodType;
    };
    BillingMethod.prototype.setMethodType = function (methodType) {
        this.methodType = methodType;
        return this;
    };
    BillingMethod.prototype.withMethodType = function (methodType) {
        this.methodType = methodType;
        return this;
    };
    BillingMethod.prototype.getCardSignatureName = function () {
        return this.cardSignatureName;
    };
    BillingMethod.prototype.setCardSignatureName = function (cardSignatureName) {
        this.cardSignatureName = cardSignatureName;
        return this;
    };
    BillingMethod.prototype.withCardSignatureName = function (cardSignatureName) {
        this.cardSignatureName = cardSignatureName;
        return this;
    };
    BillingMethod.prototype.getCardBrand = function () {
        return this.cardBrand;
    };
    BillingMethod.prototype.setCardBrand = function (cardBrand) {
        this.cardBrand = cardBrand;
        return this;
    };
    BillingMethod.prototype.withCardBrand = function (cardBrand) {
        this.cardBrand = cardBrand;
        return this;
    };
    BillingMethod.prototype.getCardLast4 = function () {
        return this.cardLast4;
    };
    BillingMethod.prototype.setCardLast4 = function (cardLast4) {
        this.cardLast4 = cardLast4;
        return this;
    };
    BillingMethod.prototype.withCardLast4 = function (cardLast4) {
        this.cardLast4 = cardLast4;
        return this;
    };
    BillingMethod.prototype.getPartnerId = function () {
        return this.partnerId;
    };
    BillingMethod.prototype.setPartnerId = function (partnerId) {
        this.partnerId = partnerId;
        return this;
    };
    BillingMethod.prototype.withPartnerId = function (partnerId) {
        this.partnerId = partnerId;
        return this;
    };
    BillingMethod.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BillingMethod.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BillingMethod.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BillingMethod.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BillingMethod.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BillingMethod.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BillingMethod.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BillingMethod()
            .withBillingMethodId(data["billingMethodId"])
            .withAccountName(data["accountName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMethodType(data["methodType"])
            .withCardSignatureName(data["cardSignatureName"])
            .withCardBrand(data["cardBrand"])
            .withCardLast4(data["cardLast4"])
            .withPartnerId(data["partnerId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    BillingMethod.prototype.toDict = function () {
        return {
            "billingMethodId": this.getBillingMethodId(),
            "accountName": this.getAccountName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "methodType": this.getMethodType(),
            "cardSignatureName": this.getCardSignatureName(),
            "cardBrand": this.getCardBrand(),
            "cardLast4": this.getCardLast4(),
            "partnerId": this.getPartnerId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return BillingMethod;
}());
exports.default = BillingMethod;
//# sourceMappingURL=BillingMethod.js.map