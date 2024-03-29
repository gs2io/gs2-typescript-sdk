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
var SetMoldCapacityByUserIdRequest = /** @class */ (function () {
    function SetMoldCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.capacity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetMoldCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMoldCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMoldCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetMoldCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetMoldCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    SetMoldCapacityByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getCapacity = function () {
        return this.capacity;
    };
    SetMoldCapacityByUserIdRequest.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetMoldCapacityByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetMoldCapacityByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMoldCapacityByUserIdRequest.fromDict = function (data) {
        return new SetMoldCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withCapacity(data["capacity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetMoldCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "capacity": this.getCapacity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetMoldCapacityByUserIdRequest;
}());
exports.default = SetMoldCapacityByUserIdRequest;
//# sourceMappingURL=SetMoldCapacityByUserIdRequest.js.map