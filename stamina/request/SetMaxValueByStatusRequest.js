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
var SetMaxValueByStatusRequest = /** @class */ (function () {
    function SetMaxValueByStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.accessToken = null;
        this.keyId = null;
        this.signedStatusBody = null;
        this.signedStatusSignature = null;
    }
    SetMaxValueByStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaxValueByStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaxValueByStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetMaxValueByStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    SetMaxValueByStatusRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetMaxValueByStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetMaxValueByStatusRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getSignedStatusBody = function () {
        return this.signedStatusBody;
    };
    SetMaxValueByStatusRequest.prototype.setSignedStatusBody = function (signedStatusBody) {
        this.signedStatusBody = signedStatusBody;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withSignedStatusBody = function (signedStatusBody) {
        this.signedStatusBody = signedStatusBody;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.getSignedStatusSignature = function () {
        return this.signedStatusSignature;
    };
    SetMaxValueByStatusRequest.prototype.setSignedStatusSignature = function (signedStatusSignature) {
        this.signedStatusSignature = signedStatusSignature;
        return this;
    };
    SetMaxValueByStatusRequest.prototype.withSignedStatusSignature = function (signedStatusSignature) {
        this.signedStatusSignature = signedStatusSignature;
        return this;
    };
    SetMaxValueByStatusRequest.fromDict = function (data) {
        return new SetMaxValueByStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"])
            .withKeyId(data["keyId"])
            .withSignedStatusBody(data["signedStatusBody"])
            .withSignedStatusSignature(data["signedStatusSignature"]);
    };
    SetMaxValueByStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
            "keyId": this.getKeyId(),
            "signedStatusBody": this.getSignedStatusBody(),
            "signedStatusSignature": this.getSignedStatusSignature(),
        };
    };
    return SetMaxValueByStatusRequest;
}());
export default SetMaxValueByStatusRequest;
//# sourceMappingURL=SetMaxValueByStatusRequest.js.map