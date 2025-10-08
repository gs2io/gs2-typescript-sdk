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
var GetGradeModelRequest = /** @class */ (function () {
    function GetGradeModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gradeName = null;
    }
    GetGradeModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGradeModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGradeModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGradeModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGradeModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGradeModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGradeModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGradeModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGradeModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGradeModelRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    GetGradeModelRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    GetGradeModelRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    GetGradeModelRequest.fromDict = function (data) {
        return new GetGradeModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withGradeName(data["gradeName"]);
    };
    GetGradeModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gradeName": this.getGradeName(),
        };
    };
    return GetGradeModelRequest;
}());
exports.default = GetGradeModelRequest;
//# sourceMappingURL=GetGradeModelRequest.js.map