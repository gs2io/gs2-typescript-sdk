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
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var DistributeRequest = /** @class */ (function () {
    function DistributeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.distributorName = null;
        this.userId = null;
        this.distributeResource = null;
        this.timeOffsetToken = null;
    }
    DistributeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DistributeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DistributeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DistributeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DistributeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DistributeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DistributeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DistributeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DistributeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DistributeRequest.prototype.getDistributorName = function () {
        return this.distributorName;
    };
    DistributeRequest.prototype.setDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    DistributeRequest.prototype.withDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    DistributeRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DistributeRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DistributeRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DistributeRequest.prototype.getDistributeResource = function () {
        return this.distributeResource;
    };
    DistributeRequest.prototype.setDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeRequest.prototype.withDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DistributeRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DistributeRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DistributeRequest.fromDict = function (data) {
        return new DistributeRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"])
            .withUserId(data["userId"])
            .withDistributeResource(Gs2Distributor.DistributeResource.fromDict(data["distributeResource"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DistributeRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
            "userId": this.getUserId(),
            "distributeResource": (_a = this.getDistributeResource()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DistributeRequest;
}());
exports.default = DistributeRequest;
//# sourceMappingURL=DistributeRequest.js.map