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
var DeleteCounterRequest = /** @class */ (function () {
    function DeleteCounterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.counterName = null;
        this.duplicationAvoider = null;
    }
    DeleteCounterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCounterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCounterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCounterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCounterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCounterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCounterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCounterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCounterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCounterRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteCounterRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteCounterRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteCounterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    DeleteCounterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DeleteCounterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DeleteCounterRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteCounterRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCounterRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCounterRequest.fromDict = function (data) {
        return new DeleteCounterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCounterName(data["counterName"]);
    };
    DeleteCounterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "counterName": this.getCounterName(),
        };
    };
    return DeleteCounterRequest;
}());
exports.default = DeleteCounterRequest;
//# sourceMappingURL=DeleteCounterRequest.js.map