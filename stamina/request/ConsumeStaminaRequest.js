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
var ConsumeStaminaRequest = /** @class */ (function () {
    function ConsumeStaminaRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.accessToken = null;
        this.consumeValue = null;
    }
    ConsumeStaminaRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeStaminaRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeStaminaRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeStaminaRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeStaminaRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeStaminaRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeStaminaRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeStaminaRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeStaminaRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeStaminaRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    ConsumeStaminaRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    ConsumeStaminaRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    ConsumeStaminaRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ConsumeStaminaRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeStaminaRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeStaminaRequest.prototype.getConsumeValue = function () {
        return this.consumeValue;
    };
    ConsumeStaminaRequest.prototype.setConsumeValue = function (consumeValue) {
        this.consumeValue = consumeValue;
        return this;
    };
    ConsumeStaminaRequest.prototype.withConsumeValue = function (consumeValue) {
        this.consumeValue = consumeValue;
        return this;
    };
    ConsumeStaminaRequest.fromDict = function (data) {
        return new ConsumeStaminaRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"])
            .withConsumeValue(data["consumeValue"]);
    };
    ConsumeStaminaRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
            "consumeValue": this.getConsumeValue(),
        };
    };
    return ConsumeStaminaRequest;
}());
exports.default = ConsumeStaminaRequest;
//# sourceMappingURL=ConsumeStaminaRequest.js.map