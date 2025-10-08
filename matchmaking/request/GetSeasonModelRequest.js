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
var GetSeasonModelRequest = /** @class */ (function () {
    function GetSeasonModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
    }
    GetSeasonModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSeasonModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSeasonModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSeasonModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSeasonModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSeasonModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSeasonModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSeasonModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSeasonModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSeasonModelRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    GetSeasonModelRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetSeasonModelRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetSeasonModelRequest.fromDict = function (data) {
        return new GetSeasonModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"]);
    };
    GetSeasonModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
        };
    };
    return GetSeasonModelRequest;
}());
exports.default = GetSeasonModelRequest;
//# sourceMappingURL=GetSeasonModelRequest.js.map