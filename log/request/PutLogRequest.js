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
var PutLogRequest = /** @class */ (function () {
    function PutLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.loggingNamespaceId = null;
        this.logCategory = null;
        this.payload = null;
    }
    PutLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutLogRequest.prototype.getLoggingNamespaceId = function () {
        return this.loggingNamespaceId;
    };
    PutLogRequest.prototype.setLoggingNamespaceId = function (loggingNamespaceId) {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    };
    PutLogRequest.prototype.withLoggingNamespaceId = function (loggingNamespaceId) {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    };
    PutLogRequest.prototype.getLogCategory = function () {
        return this.logCategory;
    };
    PutLogRequest.prototype.setLogCategory = function (logCategory) {
        this.logCategory = logCategory;
        return this;
    };
    PutLogRequest.prototype.withLogCategory = function (logCategory) {
        this.logCategory = logCategory;
        return this;
    };
    PutLogRequest.prototype.getPayload = function () {
        return this.payload;
    };
    PutLogRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    PutLogRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    PutLogRequest.fromDict = function (data) {
        return new PutLogRequest()
            .withLoggingNamespaceId(data["loggingNamespaceId"])
            .withLogCategory(data["logCategory"])
            .withPayload(data["payload"]);
    };
    PutLogRequest.prototype.toDict = function () {
        return {
            "loggingNamespaceId": this.getLoggingNamespaceId(),
            "logCategory": this.getLogCategory(),
            "payload": this.getPayload(),
        };
    };
    return PutLogRequest;
}());
exports.default = PutLogRequest;
//# sourceMappingURL=PutLogRequest.js.map