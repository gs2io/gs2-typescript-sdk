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
var GetMoldModelRequest = /** @class */ (function () {
    function GetMoldModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldName = null;
    }
    GetMoldModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMoldModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMoldModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMoldModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldModelRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    GetMoldModelRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetMoldModelRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetMoldModelRequest.fromDict = function (data) {
        return new GetMoldModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldName(data["moldName"]);
    };
    GetMoldModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldName": this.getMoldName(),
        };
    };
    return GetMoldModelRequest;
}());
export default GetMoldModelRequest;
//# sourceMappingURL=GetMoldModelRequest.js.map