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
var DecryptRequest = /** @class */ (function () {
    function DecryptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.keyName = null;
        this.data = null;
    }
    DecryptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecryptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecryptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecryptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecryptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecryptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecryptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecryptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecryptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecryptRequest.prototype.getKeyName = function () {
        return this.keyName;
    };
    DecryptRequest.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    DecryptRequest.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    DecryptRequest.prototype.getData = function () {
        return this.data;
    };
    DecryptRequest.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    DecryptRequest.prototype.withData = function (data) {
        this.data = data;
        return this;
    };
    DecryptRequest.fromDict = function (data) {
        return new DecryptRequest()
            .withNamespaceName(data["namespaceName"])
            .withKeyName(data["keyName"])
            .withData(data["data"]);
    };
    DecryptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "keyName": this.getKeyName(),
            "data": this.getData(),
        };
    };
    return DecryptRequest;
}());
export default DecryptRequest;
//# sourceMappingURL=DecryptRequest.js.map