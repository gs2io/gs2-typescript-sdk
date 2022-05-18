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
var tslib_1 = require("tslib");
var Gs2Version = tslib_1.__importStar(require("../model"));
var CheckVersionRequest = /** @class */ (function () {
    function CheckVersionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetVersions = null;
    }
    CheckVersionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CheckVersionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckVersionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckVersionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CheckVersionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckVersionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckVersionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CheckVersionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CheckVersionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CheckVersionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CheckVersionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CheckVersionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CheckVersionRequest.prototype.getTargetVersions = function () {
        return this.targetVersions;
    };
    CheckVersionRequest.prototype.setTargetVersions = function (targetVersions) {
        this.targetVersions = targetVersions;
        return this;
    };
    CheckVersionRequest.prototype.withTargetVersions = function (targetVersions) {
        this.targetVersions = targetVersions;
        return this;
    };
    CheckVersionRequest.fromDict = function (data) {
        return new CheckVersionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetVersions(data.targetVersions ?
            data.targetVersions.map(function (item) {
                return Gs2Version.TargetVersion.fromDict(item);
            }) : []);
    };
    CheckVersionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetVersions": this.getTargetVersions() ?
                this.getTargetVersions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CheckVersionRequest;
}());
exports.default = CheckVersionRequest;
//# sourceMappingURL=CheckVersionRequest.js.map