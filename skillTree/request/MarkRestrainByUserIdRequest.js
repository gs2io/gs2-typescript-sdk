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
var MarkRestrainByUserIdRequest = /** @class */ (function () {
    function MarkRestrainByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.nodeModelNames = null;
        this.duplicationAvoider = null;
    }
    MarkRestrainByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkRestrainByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkRestrainByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MarkRestrainByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    MarkRestrainByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.getNodeModelNames = function () {
        return this.nodeModelNames;
    };
    MarkRestrainByUserIdRequest.prototype.setNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.withNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MarkRestrainByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkRestrainByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkRestrainByUserIdRequest.fromDict = function (data) {
        return new MarkRestrainByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withNodeModelNames(data.nodeModelNames ?
            data.nodeModelNames.map(function (item) {
                return item;
            }) : []);
    };
    MarkRestrainByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "nodeModelNames": this.getNodeModelNames() ?
                this.getNodeModelNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return MarkRestrainByUserIdRequest;
}());
exports.default = MarkRestrainByUserIdRequest;
//# sourceMappingURL=MarkRestrainByUserIdRequest.js.map