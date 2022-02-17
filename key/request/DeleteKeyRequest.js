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
var DeleteKeyRequest = /** @class */ (function () {
    function DeleteKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.keyName = null;
    }
    DeleteKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteKeyRequest.prototype.getKeyName = function () {
        return this.keyName;
    };
    DeleteKeyRequest.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    DeleteKeyRequest.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    DeleteKeyRequest.fromDict = function (data) {
        return new DeleteKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withKeyName(data["keyName"]);
    };
    DeleteKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "keyName": this.getKeyName(),
        };
    };
    return DeleteKeyRequest;
}());
export default DeleteKeyRequest;
//# sourceMappingURL=DeleteKeyRequest.js.map