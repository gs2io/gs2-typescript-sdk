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
var DecreaseCounterRequest = /** @class */ (function () {
    function DecreaseCounterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
        this.accessToken = null;
        this.value = null;
        this.duplicationAvoider = null;
    }
    DecreaseCounterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseCounterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseCounterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseCounterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseCounterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseCounterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseCounterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseCounterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseCounterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseCounterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    DecreaseCounterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DecreaseCounterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DecreaseCounterRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DecreaseCounterRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseCounterRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseCounterRequest.prototype.getValue = function () {
        return this.value;
    };
    DecreaseCounterRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    DecreaseCounterRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    DecreaseCounterRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseCounterRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseCounterRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseCounterRequest.fromDict = function (data) {
        return new DecreaseCounterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"])
            .withAccessToken(data["accessToken"])
            .withValue(data["value"]);
    };
    DecreaseCounterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
            "accessToken": this.getAccessToken(),
            "value": this.getValue(),
        };
    };
    return DecreaseCounterRequest;
}());
exports.default = DecreaseCounterRequest;
//# sourceMappingURL=DecreaseCounterRequest.js.map