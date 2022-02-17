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
var GetCurrentVersionMasterRequest = /** @class */ (function () {
    function GetCurrentVersionMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentVersionMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentVersionMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentVersionMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentVersionMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentVersionMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentVersionMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentVersionMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentVersionMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentVersionMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentVersionMasterRequest.fromDict = function (data) {
        return new GetCurrentVersionMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentVersionMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentVersionMasterRequest;
}());
export default GetCurrentVersionMasterRequest;
//# sourceMappingURL=GetCurrentVersionMasterRequest.js.map