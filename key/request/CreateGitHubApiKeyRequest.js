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
var CreateGitHubApiKeyRequest = /** @class */ (function () {
    function CreateGitHubApiKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.apiKey = null;
        this.encryptionKeyName = null;
    }
    CreateGitHubApiKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGitHubApiKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGitHubApiKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGitHubApiKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.getName = function () {
        return this.name;
    };
    CreateGitHubApiKeyRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateGitHubApiKeyRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.getApiKey = function () {
        return this.apiKey;
    };
    CreateGitHubApiKeyRequest.prototype.setApiKey = function (apiKey) {
        this.apiKey = apiKey;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withApiKey = function (apiKey) {
        this.apiKey = apiKey;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.getEncryptionKeyName = function () {
        return this.encryptionKeyName;
    };
    CreateGitHubApiKeyRequest.prototype.setEncryptionKeyName = function (encryptionKeyName) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    };
    CreateGitHubApiKeyRequest.prototype.withEncryptionKeyName = function (encryptionKeyName) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    };
    CreateGitHubApiKeyRequest.fromDict = function (data) {
        return new CreateGitHubApiKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withApiKey(data["apiKey"])
            .withEncryptionKeyName(data["encryptionKeyName"]);
    };
    CreateGitHubApiKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "apiKey": this.getApiKey(),
            "encryptionKeyName": this.getEncryptionKeyName(),
        };
    };
    return CreateGitHubApiKeyRequest;
}());
export default CreateGitHubApiKeyRequest;
//# sourceMappingURL=CreateGitHubApiKeyRequest.js.map