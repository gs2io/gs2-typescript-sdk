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
var GetGatheringRequest = /** @class */ (function () {
    function GetGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
    }
    GetGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGatheringRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    GetGatheringRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    GetGatheringRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    GetGatheringRequest.fromDict = function (data) {
        return new GetGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"]);
    };
    GetGatheringRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
        };
    };
    return GetGatheringRequest;
}());
exports.default = GetGatheringRequest;
//# sourceMappingURL=GetGatheringRequest.js.map