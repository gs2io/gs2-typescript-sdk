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
var ExecuteStampTaskLog = /** @class */ (function () {
    function ExecuteStampTaskLog() {
        this.timestamp = null;
        this.taskId = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.args = null;
    }
    ExecuteStampTaskLog.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    ExecuteStampTaskLog.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    ExecuteStampTaskLog.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    ExecuteStampTaskLog.prototype.getTaskId = function () {
        return this.taskId;
    };
    ExecuteStampTaskLog.prototype.setTaskId = function (taskId) {
        this.taskId = taskId;
        return this;
    };
    ExecuteStampTaskLog.prototype.withTaskId = function (taskId) {
        this.taskId = taskId;
        return this;
    };
    ExecuteStampTaskLog.prototype.getService = function () {
        return this.service;
    };
    ExecuteStampTaskLog.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampTaskLog.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampTaskLog.prototype.getMethod = function () {
        return this.method;
    };
    ExecuteStampTaskLog.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampTaskLog.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampTaskLog.prototype.getUserId = function () {
        return this.userId;
    };
    ExecuteStampTaskLog.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampTaskLog.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampTaskLog.prototype.getAction = function () {
        return this.action;
    };
    ExecuteStampTaskLog.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampTaskLog.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampTaskLog.prototype.getArgs = function () {
        return this.args;
    };
    ExecuteStampTaskLog.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    ExecuteStampTaskLog.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    ExecuteStampTaskLog.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExecuteStampTaskLog()
            .withTimestamp(data["timestamp"])
            .withTaskId(data["taskId"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withArgs(data["args"]);
    };
    ExecuteStampTaskLog.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "taskId": this.getTaskId(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "args": this.getArgs(),
        };
    };
    return ExecuteStampTaskLog;
}());
export default ExecuteStampTaskLog;
//# sourceMappingURL=ExecuteStampTaskLog.js.map