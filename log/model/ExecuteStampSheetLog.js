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
var ExecuteStampSheetLog = /** @class */ (function () {
    function ExecuteStampSheetLog() {
        this.timestamp = null;
        this.transactionId = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.args = null;
    }
    ExecuteStampSheetLog.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    ExecuteStampSheetLog.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    ExecuteStampSheetLog.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    ExecuteStampSheetLog.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ExecuteStampSheetLog.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ExecuteStampSheetLog.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ExecuteStampSheetLog.prototype.getService = function () {
        return this.service;
    };
    ExecuteStampSheetLog.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampSheetLog.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampSheetLog.prototype.getMethod = function () {
        return this.method;
    };
    ExecuteStampSheetLog.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampSheetLog.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampSheetLog.prototype.getUserId = function () {
        return this.userId;
    };
    ExecuteStampSheetLog.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampSheetLog.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampSheetLog.prototype.getAction = function () {
        return this.action;
    };
    ExecuteStampSheetLog.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampSheetLog.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampSheetLog.prototype.getArgs = function () {
        return this.args;
    };
    ExecuteStampSheetLog.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    ExecuteStampSheetLog.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    ExecuteStampSheetLog.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExecuteStampSheetLog()
            .withTimestamp(data["timestamp"])
            .withTransactionId(data["transactionId"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withArgs(data["args"]);
    };
    ExecuteStampSheetLog.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "transactionId": this.getTransactionId(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "args": this.getArgs(),
        };
    };
    return ExecuteStampSheetLog;
}());
exports.default = ExecuteStampSheetLog;
//# sourceMappingURL=ExecuteStampSheetLog.js.map