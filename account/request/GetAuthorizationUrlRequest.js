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
var GetAuthorizationUrlRequest = /** @class */ (function () {
    function GetAuthorizationUrlRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
    }
    GetAuthorizationUrlRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAuthorizationUrlRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAuthorizationUrlRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAuthorizationUrlRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.getType = function () {
        return this.type;
    };
    GetAuthorizationUrlRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetAuthorizationUrlRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetAuthorizationUrlRequest.fromDict = function (data) {
        return new GetAuthorizationUrlRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"]);
    };
    GetAuthorizationUrlRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
        };
    };
    return GetAuthorizationUrlRequest;
}());
exports.default = GetAuthorizationUrlRequest;
//# sourceMappingURL=GetAuthorizationUrlRequest.js.map