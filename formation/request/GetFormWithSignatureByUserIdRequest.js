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
var GetFormWithSignatureByUserIdRequest = /** @class */ (function () {
    function GetFormWithSignatureByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.index = null;
        this.keyId = null;
        this.timeOffsetToken = null;
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
    GetFormWithSignatureByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
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
    GetFormWithSignatureByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetFormWithSignatureByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetFormWithSignatureByUserIdRequest.fromDict = function (data) {
        return new GetFormWithSignatureByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withKeyId(data["keyId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetFormWithSignatureByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "keyId": this.getKeyId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetFormWithSignatureByUserIdRequest;
}());
exports.default = GetFormWithSignatureByUserIdRequest;
//# sourceMappingURL=GetFormWithSignatureByUserIdRequest.js.map