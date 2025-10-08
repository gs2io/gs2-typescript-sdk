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
var DeleteGradeModelMasterRequest = /** @class */ (function () {
    function DeleteGradeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gradeName = null;
    }
    DeleteGradeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteGradeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteGradeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteGradeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    DeleteGradeModelMasterRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    DeleteGradeModelMasterRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    DeleteGradeModelMasterRequest.fromDict = function (data) {
        return new DeleteGradeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGradeName(data["gradeName"]);
    };
    DeleteGradeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gradeName": this.getGradeName(),
        };
    };
    return DeleteGradeModelMasterRequest;
}());
exports.default = DeleteGradeModelMasterRequest;
//# sourceMappingURL=DeleteGradeModelMasterRequest.js.map