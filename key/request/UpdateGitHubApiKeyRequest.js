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
var UpdateGitHubApiKeyRequest = /** @class */ (function () {
    function UpdateGitHubApiKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.apiKeyName = null;
        this.description = null;
        this.apiKey = null;
        this.encryptionKeyName = null;
    }
    UpdateGitHubApiKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGitHubApiKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGitHubApiKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGitHubApiKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.getApiKeyName = function () {
        return this.apiKeyName;
    };
    UpdateGitHubApiKeyRequest.prototype.setApiKeyName = function (apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withApiKeyName = function (apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateGitHubApiKeyRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.getApiKey = function () {
        return this.apiKey;
    };
    UpdateGitHubApiKeyRequest.prototype.setApiKey = function (apiKey) {
        this.apiKey = apiKey;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withApiKey = function (apiKey) {
        this.apiKey = apiKey;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.getEncryptionKeyName = function () {
        return this.encryptionKeyName;
    };
    UpdateGitHubApiKeyRequest.prototype.setEncryptionKeyName = function (encryptionKeyName) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    };
    UpdateGitHubApiKeyRequest.prototype.withEncryptionKeyName = function (encryptionKeyName) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    };
    UpdateGitHubApiKeyRequest.fromDict = function (data) {
        return new UpdateGitHubApiKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withApiKeyName(data["apiKeyName"])
            .withDescription(data["description"])
            .withApiKey(data["apiKey"])
            .withEncryptionKeyName(data["encryptionKeyName"]);
    };
    UpdateGitHubApiKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "apiKeyName": this.getApiKeyName(),
            "description": this.getDescription(),
            "apiKey": this.getApiKey(),
            "encryptionKeyName": this.getEncryptionKeyName(),
        };
    };
    return UpdateGitHubApiKeyRequest;
}());
export default UpdateGitHubApiKeyRequest;
//# sourceMappingURL=UpdateGitHubApiKeyRequest.js.map