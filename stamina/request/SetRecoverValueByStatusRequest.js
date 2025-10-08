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
var SetRecoverValueByStatusRequest = /** @class */ (function () {
    function SetRecoverValueByStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.accessToken = null;
        this.keyId = null;
        this.signedStatusBody = null;
        this.signedStatusSignature = null;
        this.duplicationAvoider = null;
    }
    SetRecoverValueByStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRecoverValueByStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRecoverValueByStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetRecoverValueByStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    SetRecoverValueByStatusRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetRecoverValueByStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetRecoverValueByStatusRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getSignedStatusBody = function () {
        return this.signedStatusBody;
    };
    SetRecoverValueByStatusRequest.prototype.setSignedStatusBody = function (signedStatusBody) {
        this.signedStatusBody = signedStatusBody;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withSignedStatusBody = function (signedStatusBody) {
        this.signedStatusBody = signedStatusBody;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getSignedStatusSignature = function () {
        return this.signedStatusSignature;
    };
    SetRecoverValueByStatusRequest.prototype.setSignedStatusSignature = function (signedStatusSignature) {
        this.signedStatusSignature = signedStatusSignature;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withSignedStatusSignature = function (signedStatusSignature) {
        this.signedStatusSignature = signedStatusSignature;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetRecoverValueByStatusRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRecoverValueByStatusRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRecoverValueByStatusRequest.fromDict = function (data) {
        return new SetRecoverValueByStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"])
            .withKeyId(data["keyId"])
            .withSignedStatusBody(data["signedStatusBody"])
            .withSignedStatusSignature(data["signedStatusSignature"]);
    };
    SetRecoverValueByStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
            "keyId": this.getKeyId(),
            "signedStatusBody": this.getSignedStatusBody(),
            "signedStatusSignature": this.getSignedStatusSignature(),
        };
    };
    return SetRecoverValueByStatusRequest;
}());
exports.default = SetRecoverValueByStatusRequest;
//# sourceMappingURL=SetRecoverValueByStatusRequest.js.map