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
var GetProgressRequest = /** @class */ (function () {
    function GetProgressRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.uploadToken = null;
    }
    GetProgressRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetProgressRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProgressRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetProgressRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetProgressRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProgressRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetProgressRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetProgressRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetProgressRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetProgressRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    GetProgressRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    GetProgressRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    GetProgressRequest.fromDict = function (data) {
        return new GetProgressRequest()
            .withNamespaceName(data["namespaceName"])
            .withUploadToken(data["uploadToken"]);
    };
    GetProgressRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return GetProgressRequest;
}());
exports.default = GetProgressRequest;
//# sourceMappingURL=GetProgressRequest.js.map