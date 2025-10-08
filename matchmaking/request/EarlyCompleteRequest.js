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
var EarlyCompleteRequest = /** @class */ (function () {
    function EarlyCompleteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    EarlyCompleteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EarlyCompleteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EarlyCompleteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EarlyCompleteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EarlyCompleteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EarlyCompleteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EarlyCompleteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EarlyCompleteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EarlyCompleteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EarlyCompleteRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    EarlyCompleteRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    EarlyCompleteRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    EarlyCompleteRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    EarlyCompleteRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EarlyCompleteRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EarlyCompleteRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EarlyCompleteRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EarlyCompleteRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EarlyCompleteRequest.fromDict = function (data) {
        return new EarlyCompleteRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withAccessToken(data["accessToken"]);
    };
    EarlyCompleteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return EarlyCompleteRequest;
}());
exports.default = EarlyCompleteRequest;
//# sourceMappingURL=EarlyCompleteRequest.js.map