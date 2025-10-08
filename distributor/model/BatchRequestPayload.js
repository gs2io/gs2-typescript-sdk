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
var BatchRequestPayload = /** @class */ (function () {
    function BatchRequestPayload() {
        this.requestId = null;
        this.service = null;
        this.methodName = null;
        this.parameter = null;
    }
    BatchRequestPayload.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchRequestPayload.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchRequestPayload.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchRequestPayload.prototype.getService = function () {
        return this.service;
    };
    BatchRequestPayload.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    BatchRequestPayload.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    BatchRequestPayload.prototype.getMethodName = function () {
        return this.methodName;
    };
    BatchRequestPayload.prototype.setMethodName = function (methodName) {
        this.methodName = methodName;
        return this;
    };
    BatchRequestPayload.prototype.withMethodName = function (methodName) {
        this.methodName = methodName;
        return this;
    };
    BatchRequestPayload.prototype.getParameter = function () {
        return this.parameter;
    };
    BatchRequestPayload.prototype.setParameter = function (parameter) {
        this.parameter = parameter;
        return this;
    };
    BatchRequestPayload.prototype.withParameter = function (parameter) {
        this.parameter = parameter;
        return this;
    };
    BatchRequestPayload.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BatchRequestPayload()
            .withRequestId(data["requestId"])
            .withService(data["service"])
            .withMethodName(data["methodName"])
            .withParameter(data["parameter"]);
    };
    BatchRequestPayload.prototype.toDict = function () {
        return {
            "requestId": this.getRequestId(),
            "service": this.getService(),
            "methodName": this.getMethodName(),
            "parameter": this.getParameter(),
        };
    };
    return BatchRequestPayload;
}());
exports.default = BatchRequestPayload;
//# sourceMappingURL=BatchRequestPayload.js.map