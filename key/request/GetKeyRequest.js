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
var GetKeyRequest = /** @class */ (function () {
    function GetKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.keyName = null;
    }
    GetKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetKeyRequest.prototype.getKeyName = function () {
        return this.keyName;
    };
    GetKeyRequest.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    GetKeyRequest.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    GetKeyRequest.fromDict = function (data) {
        return new GetKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withKeyName(data["keyName"]);
    };
    GetKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "keyName": this.getKeyName(),
        };
    };
    return GetKeyRequest;
}());
export default GetKeyRequest;
//# sourceMappingURL=GetKeyRequest.js.map