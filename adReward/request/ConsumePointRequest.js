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
var ConsumePointRequest = /** @class */ (function () {
    function ConsumePointRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.point = null;
        this.duplicationAvoider = null;
    }
    ConsumePointRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumePointRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumePointRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumePointRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumePointRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumePointRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumePointRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumePointRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumePointRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumePointRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ConsumePointRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumePointRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumePointRequest.prototype.getPoint = function () {
        return this.point;
    };
    ConsumePointRequest.prototype.setPoint = function (point) {
        this.point = point;
        return this;
    };
    ConsumePointRequest.prototype.withPoint = function (point) {
        this.point = point;
        return this;
    };
    ConsumePointRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumePointRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumePointRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumePointRequest.fromDict = function (data) {
        return new ConsumePointRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPoint(data["point"]);
    };
    ConsumePointRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "point": this.getPoint(),
        };
    };
    return ConsumePointRequest;
}());
exports.default = ConsumePointRequest;
//# sourceMappingURL=ConsumePointRequest.js.map