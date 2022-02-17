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
var GetStatusWithSignatureRequest = /** @class */ (function () {
    function GetStatusWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.experienceName = null;
        this.propertyId = null;
        this.keyId = null;
    }
    GetStatusWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStatusWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStatusWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStatusWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetStatusWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    GetStatusWithSignatureRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetStatusWithSignatureRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetStatusWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetStatusWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetStatusWithSignatureRequest.fromDict = function (data) {
        return new GetStatusWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withKeyId(data["keyId"]);
    };
    GetStatusWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "keyId": this.getKeyId(),
        };
    };
    return GetStatusWithSignatureRequest;
}());
export default GetStatusWithSignatureRequest;
//# sourceMappingURL=GetStatusWithSignatureRequest.js.map