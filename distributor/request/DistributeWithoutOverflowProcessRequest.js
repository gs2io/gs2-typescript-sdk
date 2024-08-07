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
var DistributeWithoutOverflowProcessRequest = /** @class */ (function () {
    function DistributeWithoutOverflowProcessRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.distributeResource = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DistributeWithoutOverflowProcessRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DistributeWithoutOverflowProcessRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DistributeWithoutOverflowProcessRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DistributeWithoutOverflowProcessRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.getDistributeResource = function () {
        return this.distributeResource;
    };
    DistributeWithoutOverflowProcessRequest.prototype.setDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.withDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DistributeWithoutOverflowProcessRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DistributeWithoutOverflowProcessRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DistributeWithoutOverflowProcessRequest.fromDict = function (data) {
        return new DistributeWithoutOverflowProcessRequest()
            .withUserId(data["userId"])
            .withDistributeResource(Gs2Distributor.DistributeResource.fromDict(data["distributeResource"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DistributeWithoutOverflowProcessRequest.prototype.toDict = function () {
        var _a;
        return {
            "userId": this.getUserId(),
            "distributeResource": (_a = this.getDistributeResource()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DistributeWithoutOverflowProcessRequest;
}());
exports.default = DistributeWithoutOverflowProcessRequest;
//# sourceMappingURL=DistributeWithoutOverflowProcessRequest.js.map