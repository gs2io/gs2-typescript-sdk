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
var GetExperienceModelMasterRequest = /** @class */ (function () {
    function GetExperienceModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.experienceName = null;
    }
    GetExperienceModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetExperienceModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetExperienceModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetExperienceModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    GetExperienceModelMasterRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetExperienceModelMasterRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetExperienceModelMasterRequest.fromDict = function (data) {
        return new GetExperienceModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"]);
    };
    GetExperienceModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
        };
    };
    return GetExperienceModelMasterRequest;
}());
exports.default = GetExperienceModelMasterRequest;
//# sourceMappingURL=GetExperienceModelMasterRequest.js.map