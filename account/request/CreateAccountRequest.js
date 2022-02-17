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
var CreateAccountRequest = /** @class */ (function () {
    function CreateAccountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    CreateAccountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateAccountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAccountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAccountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateAccountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAccountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAccountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateAccountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateAccountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateAccountRequest.fromDict = function (data) {
        return new CreateAccountRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    CreateAccountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return CreateAccountRequest;
}());
export default CreateAccountRequest;
//# sourceMappingURL=CreateAccountRequest.js.map