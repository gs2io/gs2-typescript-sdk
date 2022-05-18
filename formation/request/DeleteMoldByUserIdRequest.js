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
var DeleteMoldByUserIdRequest = /** @class */ (function () {
    function DeleteMoldByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldName = null;
        this.duplicationAvoider = null;
    }
    DeleteMoldByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMoldByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMoldByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMoldByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteMoldByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    DeleteMoldByUserIdRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteMoldByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteMoldByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteMoldByUserIdRequest.fromDict = function (data) {
        return new DeleteMoldByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldName(data["moldName"]);
    };
    DeleteMoldByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldName": this.getMoldName(),
        };
    };
    return DeleteMoldByUserIdRequest;
}());
exports.default = DeleteMoldByUserIdRequest;
//# sourceMappingURL=DeleteMoldByUserIdRequest.js.map