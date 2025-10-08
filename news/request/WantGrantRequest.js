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
var WantGrantRequest = /** @class */ (function () {
    function WantGrantRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
    }
    WantGrantRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WantGrantRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WantGrantRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WantGrantRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WantGrantRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WantGrantRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WantGrantRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WantGrantRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WantGrantRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WantGrantRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    WantGrantRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    WantGrantRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    WantGrantRequest.fromDict = function (data) {
        return new WantGrantRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    WantGrantRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return WantGrantRequest;
}());
exports.default = WantGrantRequest;
//# sourceMappingURL=WantGrantRequest.js.map