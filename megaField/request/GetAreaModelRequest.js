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
var GetAreaModelRequest = /** @class */ (function () {
    function GetAreaModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
    }
    GetAreaModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAreaModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAreaModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAreaModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAreaModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAreaModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAreaModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAreaModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAreaModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAreaModelRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    GetAreaModelRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetAreaModelRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    GetAreaModelRequest.fromDict = function (data) {
        return new GetAreaModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"]);
    };
    GetAreaModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
        };
    };
    return GetAreaModelRequest;
}());
exports.default = GetAreaModelRequest;
//# sourceMappingURL=GetAreaModelRequest.js.map