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
var DeleteExperienceModelMasterRequest = /** @class */ (function () {
    function DeleteExperienceModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.experienceName = null;
    }
    DeleteExperienceModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteExperienceModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteExperienceModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteExperienceModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    DeleteExperienceModelMasterRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    DeleteExperienceModelMasterRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    DeleteExperienceModelMasterRequest.fromDict = function (data) {
        return new DeleteExperienceModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"]);
    };
    DeleteExperienceModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
        };
    };
    return DeleteExperienceModelMasterRequest;
}());
export default DeleteExperienceModelMasterRequest;
//# sourceMappingURL=DeleteExperienceModelMasterRequest.js.map