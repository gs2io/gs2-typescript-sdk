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
var GetFormWithSignatureByUserIdRequest = /** @class */ (function () {
    function GetFormWithSignatureByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldName = null;
        this.index = null;
        this.keyId = null;
    }
    GetFormWithSignatureByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.getIndex = function () {
        return this.index;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.fromDict = function (data) {
        return new GetFormWithSignatureByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"])
            .withKeyId(data["keyId"]);
    };
    GetFormWithSignatureByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
            "keyId": this.getKeyId(),
        };
    };
    return GetFormWithSignatureByUserIdRequest;
}());
export default GetFormWithSignatureByUserIdRequest;
//# sourceMappingURL=GetFormWithSignatureByUserIdRequest.js.map