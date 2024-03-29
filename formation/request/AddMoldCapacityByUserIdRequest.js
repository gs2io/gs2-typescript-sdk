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
var AddMoldCapacityByUserIdRequest = /** @class */ (function () {
    function AddMoldCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.capacity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AddMoldCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddMoldCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddMoldCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddMoldCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddMoldCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    AddMoldCapacityByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getCapacity = function () {
        return this.capacity;
    };
    AddMoldCapacityByUserIdRequest.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AddMoldCapacityByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddMoldCapacityByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddMoldCapacityByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddMoldCapacityByUserIdRequest.fromDict = function (data) {
        return new AddMoldCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withCapacity(data["capacity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AddMoldCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "capacity": this.getCapacity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AddMoldCapacityByUserIdRequest;
}());
exports.default = AddMoldCapacityByUserIdRequest;
//# sourceMappingURL=AddMoldCapacityByUserIdRequest.js.map