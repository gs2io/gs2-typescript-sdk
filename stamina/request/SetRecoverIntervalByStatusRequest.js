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
var SetRecoverIntervalByStatusRequest = /** @class */ (function () {
    function SetRecoverIntervalByStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.accessToken = null;
        this.keyId = null;
        this.signedStatusBody = null;
        this.signedStatusSignature = null;
    }
    SetRecoverIntervalByStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRecoverIntervalByStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRecoverIntervalByStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetRecoverIntervalByStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    SetRecoverIntervalByStatusRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetRecoverIntervalByStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetRecoverIntervalByStatusRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getSignedStatusBody = function () {
        return this.signedStatusBody;
    };
    SetRecoverIntervalByStatusRequest.prototype.setSignedStatusBody = function (signedStatusBody) {
        this.signedStatusBody = signedStatusBody;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withSignedStatusBody = function (signedStatusBody) {
        this.signedStatusBody = signedStatusBody;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.getSignedStatusSignature = function () {
        return this.signedStatusSignature;
    };
    SetRecoverIntervalByStatusRequest.prototype.setSignedStatusSignature = function (signedStatusSignature) {
        this.signedStatusSignature = signedStatusSignature;
        return this;
    };
    SetRecoverIntervalByStatusRequest.prototype.withSignedStatusSignature = function (signedStatusSignature) {
        this.signedStatusSignature = signedStatusSignature;
        return this;
    };
    SetRecoverIntervalByStatusRequest.fromDict = function (data) {
        return new SetRecoverIntervalByStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"])
            .withKeyId(data["keyId"])
            .withSignedStatusBody(data["signedStatusBody"])
            .withSignedStatusSignature(data["signedStatusSignature"]);
    };
    SetRecoverIntervalByStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
            "keyId": this.getKeyId(),
            "signedStatusBody": this.getSignedStatusBody(),
            "signedStatusSignature": this.getSignedStatusSignature(),
        };
    };
    return SetRecoverIntervalByStatusRequest;
}());
export default SetRecoverIntervalByStatusRequest;
//# sourceMappingURL=SetRecoverIntervalByStatusRequest.js.map