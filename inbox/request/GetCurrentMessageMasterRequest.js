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
var GetCurrentMessageMasterRequest = /** @class */ (function () {
    function GetCurrentMessageMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentMessageMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentMessageMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentMessageMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentMessageMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentMessageMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentMessageMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentMessageMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentMessageMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentMessageMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentMessageMasterRequest.fromDict = function (data) {
        return new GetCurrentMessageMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentMessageMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentMessageMasterRequest;
}());
export default GetCurrentMessageMasterRequest;
//# sourceMappingURL=GetCurrentMessageMasterRequest.js.map