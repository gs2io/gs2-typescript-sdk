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
var ExecuteStampTaskLogCount = /** @class */ (function () {
    function ExecuteStampTaskLogCount() {
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.count = null;
    }
    ExecuteStampTaskLogCount.prototype.getService = function () {
        return this.service;
    };
    ExecuteStampTaskLogCount.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.getMethod = function () {
        return this.method;
    };
    ExecuteStampTaskLogCount.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.getUserId = function () {
        return this.userId;
    };
    ExecuteStampTaskLogCount.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.getAction = function () {
        return this.action;
    };
    ExecuteStampTaskLogCount.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.getCount = function () {
        return this.count;
    };
    ExecuteStampTaskLogCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExecuteStampTaskLogCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExecuteStampTaskLogCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExecuteStampTaskLogCount()
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withCount(data["count"]);
    };
    ExecuteStampTaskLogCount.prototype.toDict = function () {
        return {
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "count": this.getCount(),
        };
    };
    return ExecuteStampTaskLogCount;
}());
exports.default = ExecuteStampTaskLogCount;
//# sourceMappingURL=ExecuteStampTaskLogCount.js.map