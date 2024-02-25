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
var AccessLogWithTelemetry = /** @class */ (function () {
    function AccessLogWithTelemetry() {
        this.timestamp = null;
        this.sourceRequestId = null;
        this.requestId = null;
        this.duration = null;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.request = null;
        this.result = null;
        this.status = null;
    }
    AccessLogWithTelemetry.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    AccessLogWithTelemetry.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    AccessLogWithTelemetry.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    AccessLogWithTelemetry.prototype.getSourceRequestId = function () {
        return this.sourceRequestId;
    };
    AccessLogWithTelemetry.prototype.setSourceRequestId = function (sourceRequestId) {
        this.sourceRequestId = sourceRequestId;
        return this;
    };
    AccessLogWithTelemetry.prototype.withSourceRequestId = function (sourceRequestId) {
        this.sourceRequestId = sourceRequestId;
        return this;
    };
    AccessLogWithTelemetry.prototype.getRequestId = function () {
        return this.requestId;
    };
    AccessLogWithTelemetry.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AccessLogWithTelemetry.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AccessLogWithTelemetry.prototype.getDuration = function () {
        return this.duration;
    };
    AccessLogWithTelemetry.prototype.setDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    AccessLogWithTelemetry.prototype.withDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    AccessLogWithTelemetry.prototype.getService = function () {
        return this.service;
    };
    AccessLogWithTelemetry.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    AccessLogWithTelemetry.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    AccessLogWithTelemetry.prototype.getMethod = function () {
        return this.method;
    };
    AccessLogWithTelemetry.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    AccessLogWithTelemetry.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    AccessLogWithTelemetry.prototype.getUserId = function () {
        return this.userId;
    };
    AccessLogWithTelemetry.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessLogWithTelemetry.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessLogWithTelemetry.prototype.getRequest = function () {
        return this.request;
    };
    AccessLogWithTelemetry.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    AccessLogWithTelemetry.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    AccessLogWithTelemetry.prototype.getResult = function () {
        return this.result;
    };
    AccessLogWithTelemetry.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    AccessLogWithTelemetry.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    AccessLogWithTelemetry.prototype.getStatus = function () {
        return this.status;
    };
    AccessLogWithTelemetry.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    AccessLogWithTelemetry.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    AccessLogWithTelemetry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccessLogWithTelemetry()
            .withTimestamp(data["timestamp"])
            .withSourceRequestId(data["sourceRequestId"])
            .withRequestId(data["requestId"])
            .withDuration(data["duration"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withRequest(data["request"])
            .withResult(data["result"])
            .withStatus(data["status"]);
    };
    AccessLogWithTelemetry.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "sourceRequestId": this.getSourceRequestId(),
            "requestId": this.getRequestId(),
            "duration": this.getDuration(),
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "request": this.getRequest(),
            "result": this.getResult(),
            "status": this.getStatus(),
        };
    };
    return AccessLogWithTelemetry;
}());
exports.default = AccessLogWithTelemetry;
//# sourceMappingURL=AccessLogWithTelemetry.js.map