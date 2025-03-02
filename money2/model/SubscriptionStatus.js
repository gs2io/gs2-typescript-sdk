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
var tslib_1 = require("tslib");
var Gs2Money2 = tslib_1.__importStar(require("../../money2/model"));
var grnFormat = "";
var SubscriptionStatus = /** @class */ (function () {
    function SubscriptionStatus() {
        this.userId = null;
        this.contentName = null;
        this.status = null;
        this.expiresAt = null;
        this.detail = null;
    }
    SubscriptionStatus.isValid = function (grn) {
        return true;
    };
    SubscriptionStatus.createGrn = function () {
        return grnFormat;
    };
    SubscriptionStatus.prototype.getUserId = function () {
        return this.userId;
    };
    SubscriptionStatus.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscriptionStatus.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscriptionStatus.prototype.getContentName = function () {
        return this.contentName;
    };
    SubscriptionStatus.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    SubscriptionStatus.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    SubscriptionStatus.prototype.getStatus = function () {
        return this.status;
    };
    SubscriptionStatus.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    SubscriptionStatus.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    SubscriptionStatus.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    SubscriptionStatus.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    SubscriptionStatus.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    SubscriptionStatus.prototype.getDetail = function () {
        return this.detail;
    };
    SubscriptionStatus.prototype.setDetail = function (detail) {
        this.detail = detail;
        return this;
    };
    SubscriptionStatus.prototype.withDetail = function (detail) {
        this.detail = detail;
        return this;
    };
    SubscriptionStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscriptionStatus()
            .withUserId(data["userId"])
            .withContentName(data["contentName"])
            .withStatus(data["status"])
            .withExpiresAt(data["expiresAt"])
            .withDetail(data.detail ?
            data.detail.map(function (item) {
                return Gs2Money2.SubscribeTransaction.fromDict(item);
            }) : null);
    };
    SubscriptionStatus.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "contentName": this.getContentName(),
            "status": this.getStatus(),
            "expiresAt": this.getExpiresAt(),
            "detail": this.getDetail() ?
                this.getDetail().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SubscriptionStatus;
}());
exports.default = SubscriptionStatus;
//# sourceMappingURL=SubscriptionStatus.js.map