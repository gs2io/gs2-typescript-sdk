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
var GetCounterRequest = /** @class */ (function () {
    function GetCounterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.accessToken = null;
        this.counterName = null;
    }
    GetCounterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCounterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCounterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCounterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCounterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCounterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCounterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCounterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCounterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCounterRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    GetCounterRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetCounterRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetCounterRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetCounterRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetCounterRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetCounterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    GetCounterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    GetCounterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    GetCounterRequest.fromDict = function (data) {
        return new GetCounterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withAccessToken(data["accessToken"])
            .withCounterName(data["counterName"]);
    };
    GetCounterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "accessToken": this.getAccessToken(),
            "counterName": this.getCounterName(),
        };
    };
    return GetCounterRequest;
}());
exports.default = GetCounterRequest;
//# sourceMappingURL=GetCounterRequest.js.map