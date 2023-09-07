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
var SubMoldCapacityByUserIdRequest = /** @class */ (function () {
    function SubMoldCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.capacity = null;
        this.duplicationAvoider = null;
    }
    SubMoldCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubMoldCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubMoldCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubMoldCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SubMoldCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    SubMoldCapacityByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.getCapacity = function () {
        return this.capacity;
    };
    SubMoldCapacityByUserIdRequest.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubMoldCapacityByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubMoldCapacityByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubMoldCapacityByUserIdRequest.fromDict = function (data) {
        return new SubMoldCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withCapacity(data["capacity"]);
    };
    SubMoldCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "capacity": this.getCapacity(),
        };
    };
    return SubMoldCapacityByUserIdRequest;
}());
exports.default = SubMoldCapacityByUserIdRequest;
//# sourceMappingURL=SubMoldCapacityByUserIdRequest.js.map