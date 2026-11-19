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
var VerifyStatusRequest = /** @class */ (function () {
    function VerifyStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.propertyId = null;
        this.nodeModelName = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyStatusRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    VerifyStatusRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyStatusRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    VerifyStatusRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    VerifyStatusRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    VerifyStatusRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    VerifyStatusRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStatusRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStatusRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStatusRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStatusRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStatusRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStatusRequest.fromDict = function (data) {
        return new VerifyStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyId(data["propertyId"])
            .withNodeModelName(data["nodeModelName"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyId": this.getPropertyId(),
            "nodeModelName": this.getNodeModelName(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyStatusRequest;
}());
exports.default = VerifyStatusRequest;
//# sourceMappingURL=VerifyStatusRequest.js.map