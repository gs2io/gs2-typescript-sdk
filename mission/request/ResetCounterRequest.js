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
var tslib_1 = require("tslib");
var Gs2Mission = tslib_1.__importStar(require("../model"));
var ResetCounterRequest = /** @class */ (function () {
    function ResetCounterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.counterName = null;
        this.scopes = null;
        this.duplicationAvoider = null;
    }
    ResetCounterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ResetCounterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetCounterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetCounterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ResetCounterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetCounterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetCounterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ResetCounterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetCounterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetCounterRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ResetCounterRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ResetCounterRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ResetCounterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    ResetCounterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    ResetCounterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    ResetCounterRequest.prototype.getScopes = function () {
        return this.scopes;
    };
    ResetCounterRequest.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ResetCounterRequest.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ResetCounterRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ResetCounterRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetCounterRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetCounterRequest.fromDict = function (data) {
        return new ResetCounterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCounterName(data["counterName"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return Gs2Mission.ScopedValue.fromDict(item);
            }) : null);
    };
    ResetCounterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "counterName": this.getCounterName(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ResetCounterRequest;
}());
exports.default = ResetCounterRequest;
//# sourceMappingURL=ResetCounterRequest.js.map