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
var UpdateKeyRequest = /** @class */ (function () {
    function UpdateKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.keyName = null;
        this.description = null;
    }
    UpdateKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateKeyRequest.prototype.getKeyName = function () {
        return this.keyName;
    };
    UpdateKeyRequest.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    UpdateKeyRequest.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    UpdateKeyRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateKeyRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateKeyRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateKeyRequest.fromDict = function (data) {
        return new UpdateKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withKeyName(data["keyName"])
            .withDescription(data["description"]);
    };
    UpdateKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "keyName": this.getKeyName(),
            "description": this.getDescription(),
        };
    };
    return UpdateKeyRequest;
}());
export default UpdateKeyRequest;
//# sourceMappingURL=UpdateKeyRequest.js.map