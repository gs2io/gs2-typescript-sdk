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
var GetGradeModelMasterRequest = /** @class */ (function () {
    function GetGradeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gradeName = null;
    }
    GetGradeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGradeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGradeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGradeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGradeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGradeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGradeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGradeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGradeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGradeModelMasterRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    GetGradeModelMasterRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    GetGradeModelMasterRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    GetGradeModelMasterRequest.fromDict = function (data) {
        return new GetGradeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGradeName(data["gradeName"]);
    };
    GetGradeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gradeName": this.getGradeName(),
        };
    };
    return GetGradeModelMasterRequest;
}());
exports.default = GetGradeModelMasterRequest;
//# sourceMappingURL=GetGradeModelMasterRequest.js.map