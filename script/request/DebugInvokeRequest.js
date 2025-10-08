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
var Gs2Script = tslib_1.__importStar(require("../model"));
var DebugInvokeRequest = /** @class */ (function () {
    function DebugInvokeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.script = null;
        this.args = null;
        this.userId = null;
        this.randomStatus = null;
        this.disableStringNumberToNumber = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DebugInvokeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DebugInvokeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DebugInvokeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DebugInvokeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DebugInvokeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DebugInvokeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DebugInvokeRequest.prototype.getScript = function () {
        return this.script;
    };
    DebugInvokeRequest.prototype.setScript = function (script) {
        this.script = script;
        return this;
    };
    DebugInvokeRequest.prototype.withScript = function (script) {
        this.script = script;
        return this;
    };
    DebugInvokeRequest.prototype.getArgs = function () {
        return this.args;
    };
    DebugInvokeRequest.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    DebugInvokeRequest.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    DebugInvokeRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DebugInvokeRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DebugInvokeRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DebugInvokeRequest.prototype.getRandomStatus = function () {
        return this.randomStatus;
    };
    DebugInvokeRequest.prototype.setRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    DebugInvokeRequest.prototype.withRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    DebugInvokeRequest.prototype.getDisableStringNumberToNumber = function () {
        return this.disableStringNumberToNumber;
    };
    DebugInvokeRequest.prototype.setDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    DebugInvokeRequest.prototype.withDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    DebugInvokeRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DebugInvokeRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DebugInvokeRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DebugInvokeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DebugInvokeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DebugInvokeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DebugInvokeRequest.fromDict = function (data) {
        return new DebugInvokeRequest()
            .withScript(data["script"])
            .withArgs(data["args"])
            .withUserId(data["userId"])
            .withRandomStatus(Gs2Script.RandomStatus.fromDict(data["randomStatus"]))
            .withDisableStringNumberToNumber(data["disableStringNumberToNumber"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DebugInvokeRequest.prototype.toDict = function () {
        var _a;
        return {
            "script": this.getScript(),
            "args": this.getArgs(),
            "userId": this.getUserId(),
            "randomStatus": (_a = this.getRandomStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "disableStringNumberToNumber": this.getDisableStringNumberToNumber(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DebugInvokeRequest;
}());
exports.default = DebugInvokeRequest;
//# sourceMappingURL=DebugInvokeRequest.js.map