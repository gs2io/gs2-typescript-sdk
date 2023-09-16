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
var ConsumePointByUserIdRequest = /** @class */ (function () {
    function ConsumePointByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.point = null;
        this.duplicationAvoider = null;
    }
    ConsumePointByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumePointByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumePointByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumePointByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ConsumePointByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.getPoint = function () {
        return this.point;
    };
    ConsumePointByUserIdRequest.prototype.setPoint = function (point) {
        this.point = point;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.withPoint = function (point) {
        this.point = point;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumePointByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumePointByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumePointByUserIdRequest.fromDict = function (data) {
        return new ConsumePointByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPoint(data["point"]);
    };
    ConsumePointByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "point": this.getPoint(),
        };
    };
    return ConsumePointByUserIdRequest;
}());
exports.default = ConsumePointByUserIdRequest;
//# sourceMappingURL=ConsumePointByUserIdRequest.js.map