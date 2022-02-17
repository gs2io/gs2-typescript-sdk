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
var GetExperienceModelRequest = /** @class */ (function () {
    function GetExperienceModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.experienceName = null;
    }
    GetExperienceModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetExperienceModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExperienceModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExperienceModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetExperienceModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExperienceModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExperienceModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetExperienceModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExperienceModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExperienceModelRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    GetExperienceModelRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetExperienceModelRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    GetExperienceModelRequest.fromDict = function (data) {
        return new GetExperienceModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"]);
    };
    GetExperienceModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
        };
    };
    return GetExperienceModelRequest;
}());
export default GetExperienceModelRequest;
//# sourceMappingURL=GetExperienceModelRequest.js.map