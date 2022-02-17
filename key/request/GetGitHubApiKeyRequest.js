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
var GetGitHubApiKeyRequest = /** @class */ (function () {
    function GetGitHubApiKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.apiKeyName = null;
    }
    GetGitHubApiKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGitHubApiKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGitHubApiKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGitHubApiKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.getApiKeyName = function () {
        return this.apiKeyName;
    };
    GetGitHubApiKeyRequest.prototype.setApiKeyName = function (apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    };
    GetGitHubApiKeyRequest.prototype.withApiKeyName = function (apiKeyName) {
        this.apiKeyName = apiKeyName;
        return this;
    };
    GetGitHubApiKeyRequest.fromDict = function (data) {
        return new GetGitHubApiKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withApiKeyName(data["apiKeyName"]);
    };
    GetGitHubApiKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "apiKeyName": this.getApiKeyName(),
        };
    };
    return GetGitHubApiKeyRequest;
}());
export default GetGitHubApiKeyRequest;
//# sourceMappingURL=GetGitHubApiKeyRequest.js.map