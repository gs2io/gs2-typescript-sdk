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
var PingRequest = /** @class */ (function () {
    function PingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    PingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PingRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    PingRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    PingRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    PingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PingRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PingRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PingRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PingRequest.fromDict = function (data) {
        return new PingRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withAccessToken(data["accessToken"]);
    };
    PingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return PingRequest;
}());
exports.default = PingRequest;
//# sourceMappingURL=PingRequest.js.map