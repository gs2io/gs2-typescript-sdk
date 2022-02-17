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
var AccessLog = /** @class */ (function () {
    function AccessLog() {
        this.timestamp = null;
        this.requestId = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.request = null;
        this.result = null;
    }
    AccessLog.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    AccessLog.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    AccessLog.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    AccessLog.prototype.getRequestId = function () {
        return this.requestId;
    };
    AccessLog.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AccessLog.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AccessLog.prototype.getService = function () {
        return this.service;
    };
    AccessLog.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    AccessLog.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    AccessLog.prototype.getMethod = function () {
        return this.method;
    };
    AccessLog.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    AccessLog.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    AccessLog.prototype.getUserId = function () {
        return this.userId;
    };
    AccessLog.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessLog.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessLog.prototype.getRequest = function () {
        return this.request;
    };
    AccessLog.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    AccessLog.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    AccessLog.prototype.getResult = function () {
        return this.result;
    };
    AccessLog.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    AccessLog.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    AccessLog.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccessLog()
            .withTimestamp(data["timestamp"])
            .withRequestId(data["requestId"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withRequest(data["request"])
            .withResult(data["result"]);
    };
    AccessLog.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "requestId": this.getRequestId(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "request": this.getRequest(),
            "result": this.getResult(),
        };
    };
    return AccessLog;
}());
export default AccessLog;
//# sourceMappingURL=AccessLog.js.map