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
var GetVersionModelRequest = /** @class */ (function () {
    function GetVersionModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
    }
    GetVersionModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetVersionModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetVersionModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetVersionModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetVersionModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetVersionModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetVersionModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetVersionModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetVersionModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetVersionModelRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    GetVersionModelRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetVersionModelRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetVersionModelRequest.fromDict = function (data) {
        return new GetVersionModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"]);
    };
    GetVersionModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
        };
    };
    return GetVersionModelRequest;
}());
export default GetVersionModelRequest;
//# sourceMappingURL=GetVersionModelRequest.js.map