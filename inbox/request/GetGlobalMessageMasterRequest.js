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
var GetGlobalMessageMasterRequest = /** @class */ (function () {
    function GetGlobalMessageMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.globalMessageName = null;
    }
    GetGlobalMessageMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalMessageMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalMessageMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalMessageMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.getGlobalMessageName = function () {
        return this.globalMessageName;
    };
    GetGlobalMessageMasterRequest.prototype.setGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    GetGlobalMessageMasterRequest.prototype.withGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    GetGlobalMessageMasterRequest.fromDict = function (data) {
        return new GetGlobalMessageMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGlobalMessageName(data["globalMessageName"]);
    };
    GetGlobalMessageMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "globalMessageName": this.getGlobalMessageName(),
        };
    };
    return GetGlobalMessageMasterRequest;
}());
export default GetGlobalMessageMasterRequest;
//# sourceMappingURL=GetGlobalMessageMasterRequest.js.map