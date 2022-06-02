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
var DeleteProgressRequest = /** @class */ (function () {
    function DeleteProgressRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rateName = null;
        this.progressName = null;
    }
    DeleteProgressRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteProgressRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteProgressRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteProgressRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteProgressRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteProgressRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteProgressRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteProgressRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteProgressRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteProgressRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteProgressRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteProgressRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteProgressRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DeleteProgressRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DeleteProgressRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DeleteProgressRequest.prototype.getProgressName = function () {
        return this.progressName;
    };
    DeleteProgressRequest.prototype.setProgressName = function (progressName) {
        this.progressName = progressName;
        return this;
    };
    DeleteProgressRequest.prototype.withProgressName = function (progressName) {
        this.progressName = progressName;
        return this;
    };
    DeleteProgressRequest.fromDict = function (data) {
        return new DeleteProgressRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRateName(data["rateName"])
            .withProgressName(data["progressName"]);
    };
    DeleteProgressRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rateName": this.getRateName(),
            "progressName": this.getProgressName(),
        };
    };
    return DeleteProgressRequest;
}());
exports.default = DeleteProgressRequest;
//# sourceMappingURL=DeleteProgressRequest.js.map