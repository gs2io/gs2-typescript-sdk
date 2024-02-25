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
var GetSeasonModelMasterRequest = /** @class */ (function () {
    function GetSeasonModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
    }
    GetSeasonModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSeasonModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSeasonModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSeasonModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    GetSeasonModelMasterRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetSeasonModelMasterRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetSeasonModelMasterRequest.fromDict = function (data) {
        return new GetSeasonModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"]);
    };
    GetSeasonModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
        };
    };
    return GetSeasonModelMasterRequest;
}());
exports.default = GetSeasonModelMasterRequest;
//# sourceMappingURL=GetSeasonModelMasterRequest.js.map