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
var OpenMessageRequest = /** @class */ (function () {
    function OpenMessageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.messageName = null;
    }
    OpenMessageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    OpenMessageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OpenMessageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OpenMessageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    OpenMessageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OpenMessageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OpenMessageRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    OpenMessageRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    OpenMessageRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    OpenMessageRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    OpenMessageRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    OpenMessageRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    OpenMessageRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    OpenMessageRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    OpenMessageRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    OpenMessageRequest.fromDict = function (data) {
        return new OpenMessageRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMessageName(data["messageName"]);
    };
    OpenMessageRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "messageName": this.getMessageName(),
        };
    };
    return OpenMessageRequest;
}());
export default OpenMessageRequest;
//# sourceMappingURL=OpenMessageRequest.js.map