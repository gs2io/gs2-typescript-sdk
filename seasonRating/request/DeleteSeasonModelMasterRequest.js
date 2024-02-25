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
var DeleteSeasonModelMasterRequest = /** @class */ (function () {
    function DeleteSeasonModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
    }
    DeleteSeasonModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteSeasonModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteSeasonModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteSeasonModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DeleteSeasonModelMasterRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DeleteSeasonModelMasterRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DeleteSeasonModelMasterRequest.fromDict = function (data) {
        return new DeleteSeasonModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"]);
    };
    DeleteSeasonModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
        };
    };
    return DeleteSeasonModelMasterRequest;
}());
exports.default = DeleteSeasonModelMasterRequest;
//# sourceMappingURL=DeleteSeasonModelMasterRequest.js.map