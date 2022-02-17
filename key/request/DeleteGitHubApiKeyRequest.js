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
var DeleteGitHubApiKeyRequest = /** @class */ (function () {
    function DeleteGitHubApiKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.apiKeyName = null;
    }
    DeleteGitHubApiKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteGitHubApiKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteGitHubApiKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteGitHubApiKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.getApiKeyName = function () {
        return this.apiKeyName;
    };
    DeleteGitHubApiKeyRequest.prototype.setApiKeyName = function (apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    };
    DeleteGitHubApiKeyRequest.prototype.withApiKeyName = function (apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    };
    DeleteGitHubApiKeyRequest.fromDict = function (data) {
        return new DeleteGitHubApiKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withApiKeyName(data["apiKeyName"]);
    };
    DeleteGitHubApiKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "apiKeyName": this.getApiKeyName(),
        };
    };
    return DeleteGitHubApiKeyRequest;
}());
export default DeleteGitHubApiKeyRequest;
//# sourceMappingURL=DeleteGitHubApiKeyRequest.js.map