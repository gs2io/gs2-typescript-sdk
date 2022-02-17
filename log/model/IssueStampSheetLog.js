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
var IssueStampSheetLog = /** @class */ (function () {
    function IssueStampSheetLog() {
        this.timestamp = null;
        this.transactionId = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.args = null;
        this.tasks = null;
    }
    IssueStampSheetLog.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    IssueStampSheetLog.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    IssueStampSheetLog.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    IssueStampSheetLog.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    IssueStampSheetLog.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    IssueStampSheetLog.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    IssueStampSheetLog.prototype.getService = function () {
        return this.service;
    };
    IssueStampSheetLog.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    IssueStampSheetLog.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    IssueStampSheetLog.prototype.getMethod = function () {
        return this.method;
    };
    IssueStampSheetLog.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    IssueStampSheetLog.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    IssueStampSheetLog.prototype.getUserId = function () {
        return this.userId;
    };
    IssueStampSheetLog.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueStampSheetLog.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueStampSheetLog.prototype.getAction = function () {
        return this.action;
    };
    IssueStampSheetLog.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    IssueStampSheetLog.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    IssueStampSheetLog.prototype.getArgs = function () {
        return this.args;
    };
    IssueStampSheetLog.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    IssueStampSheetLog.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    IssueStampSheetLog.prototype.getTasks = function () {
        return this.tasks;
    };
    IssueStampSheetLog.prototype.setTasks = function (tasks) {
        this.tasks = tasks;
        return this;
    };
    IssueStampSheetLog.prototype.withTasks = function (tasks) {
        this.tasks = tasks;
        return this;
    };
    IssueStampSheetLog.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IssueStampSheetLog()
            .withTimestamp(data["timestamp"])
            .withTransactionId(data["transactionId"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withArgs(data["args"])
            .withTasks(data.tasks ?
            data.tasks.map(function (item) {
                return item;
            }) : []);
    };
    IssueStampSheetLog.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "transactionId": this.getTransactionId(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "args": this.getArgs(),
            "tasks": this.getTasks() ?
                this.getTasks().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return IssueStampSheetLog;
}());
exports.default = IssueStampSheetLog;
//# sourceMappingURL=IssueStampSheetLog.js.map