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
var CheckVersionByUserIdRequest = /** @class */ (function () {
    function CheckVersionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetVersions = null;
        this.duplicationAvoider = null;
    }
    CheckVersionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CheckVersionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CheckVersionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CheckVersionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CheckVersionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.getTargetVersions = function () {
        return this.targetVersions;
    };
    CheckVersionByUserIdRequest.prototype.setTargetVersions = function (targetVersions) {
        this.targetVersions = targetVersions;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.withTargetVersions = function (targetVersions) {
        this.targetVersions = targetVersions;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CheckVersionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CheckVersionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CheckVersionByUserIdRequest.fromDict = function (data) {
        return new CheckVersionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetVersions(data.targetVersions ?
            data.targetVersions.map(function (item) {
                return Gs2Version.TargetVersion.fromDict(item);
            }) : []);
    };
    CheckVersionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetVersions": this.getTargetVersions() ?
                this.getTargetVersions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CheckVersionByUserIdRequest;
}());
exports.default = CheckVersionByUserIdRequest;
//# sourceMappingURL=CheckVersionByUserIdRequest.js.map