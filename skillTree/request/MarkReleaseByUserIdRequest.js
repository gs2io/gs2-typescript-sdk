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
var MarkReleaseByUserIdRequest = /** @class */ (function () {
    function MarkReleaseByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyId = null;
        this.nodeModelNames = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    MarkReleaseByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkReleaseByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkReleaseByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MarkReleaseByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    MarkReleaseByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    MarkReleaseByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getNodeModelNames = function () {
        return this.nodeModelNames;
    };
    MarkReleaseByUserIdRequest.prototype.setNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    MarkReleaseByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MarkReleaseByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkReleaseByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkReleaseByUserIdRequest.fromDict = function (data) {
        return new MarkReleaseByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withNodeModelNames(data.nodeModelNames ?
            data.nodeModelNames.map(function (item) {
                return item;
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    MarkReleaseByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "nodeModelNames": this.getNodeModelNames() ?
                this.getNodeModelNames().map(function (item) {
                    return item;
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return MarkReleaseByUserIdRequest;
}());
exports.default = MarkReleaseByUserIdRequest;
//# sourceMappingURL=MarkReleaseByUserIdRequest.js.map