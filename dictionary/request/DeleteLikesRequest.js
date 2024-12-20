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
var DeleteLikesRequest = /** @class */ (function () {
    function DeleteLikesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.entryModelNames = null;
        this.duplicationAvoider = null;
    }
    DeleteLikesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteLikesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLikesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteLikesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteLikesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLikesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteLikesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteLikesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLikesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteLikesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteLikesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteLikesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteLikesRequest.prototype.getEntryModelNames = function () {
        return this.entryModelNames;
    };
    DeleteLikesRequest.prototype.setEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    DeleteLikesRequest.prototype.withEntryModelNames = function (entryModelNames) {
        this.entryModelNames = entryModelNames;
        return this;
    };
    DeleteLikesRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteLikesRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteLikesRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteLikesRequest.fromDict = function (data) {
        return new DeleteLikesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEntryModelNames(data.entryModelNames ?
            data.entryModelNames.map(function (item) {
                return item;
            }) : null);
    };
    DeleteLikesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "entryModelNames": this.getEntryModelNames() ?
                this.getEntryModelNames().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return DeleteLikesRequest;
}());
exports.default = DeleteLikesRequest;
//# sourceMappingURL=DeleteLikesRequest.js.map