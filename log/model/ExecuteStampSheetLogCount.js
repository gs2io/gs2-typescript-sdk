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
var ExecuteStampSheetLogCount = /** @class */ (function () {
    function ExecuteStampSheetLogCount() {
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.count = null;
    }
    ExecuteStampSheetLogCount.prototype.getService = function () {
        return this.service;
    };
    ExecuteStampSheetLogCount.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.getMethod = function () {
        return this.method;
    };
    ExecuteStampSheetLogCount.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.getUserId = function () {
        return this.userId;
    };
    ExecuteStampSheetLogCount.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.getAction = function () {
        return this.action;
    };
    ExecuteStampSheetLogCount.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.getCount = function () {
        return this.count;
    };
    ExecuteStampSheetLogCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExecuteStampSheetLogCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExecuteStampSheetLogCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExecuteStampSheetLogCount()
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withCount(data["count"]);
    };
    ExecuteStampSheetLogCount.prototype.toDict = function () {
        return {
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "count": this.getCount(),
        };
    };
    return ExecuteStampSheetLogCount;
}());
exports.default = ExecuteStampSheetLogCount;
//# sourceMappingURL=ExecuteStampSheetLogCount.js.map