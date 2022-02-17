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
var GetCurrentMissionMasterRequest = /** @class */ (function () {
    function GetCurrentMissionMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentMissionMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentMissionMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentMissionMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentMissionMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentMissionMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentMissionMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentMissionMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentMissionMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentMissionMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentMissionMasterRequest.fromDict = function (data) {
        return new GetCurrentMissionMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentMissionMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentMissionMasterRequest;
}());
export default GetCurrentMissionMasterRequest;
//# sourceMappingURL=GetCurrentMissionMasterRequest.js.map