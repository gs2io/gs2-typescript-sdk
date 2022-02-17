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
var GetStatusWithSignatureByUserIdRequest = /** @class */ (function () {
    function GetStatusWithSignatureByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.keyId = null;
    }
    GetStatusWithSignatureByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetStatusWithSignatureByUserIdRequest.fromDict = function (data) {
        return new GetStatusWithSignatureByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withKeyId(data["keyId"]);
    };
    GetStatusWithSignatureByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "keyId": this.getKeyId(),
        };
    };
    return GetStatusWithSignatureByUserIdRequest;
}());
export default GetStatusWithSignatureByUserIdRequest;
//# sourceMappingURL=GetStatusWithSignatureByUserIdRequest.js.map