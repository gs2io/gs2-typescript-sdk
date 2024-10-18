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
var FreezeMasterDataRequest = /** @class */ (function () {
    function FreezeMasterDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    FreezeMasterDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FreezeMasterDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FreezeMasterDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FreezeMasterDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FreezeMasterDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FreezeMasterDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FreezeMasterDataRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FreezeMasterDataRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FreezeMasterDataRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FreezeMasterDataRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    FreezeMasterDataRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FreezeMasterDataRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FreezeMasterDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    FreezeMasterDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FreezeMasterDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FreezeMasterDataRequest.fromDict = function (data) {
        return new FreezeMasterDataRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    FreezeMasterDataRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return FreezeMasterDataRequest;
}());
exports.default = FreezeMasterDataRequest;
//# sourceMappingURL=FreezeMasterDataRequest.js.map