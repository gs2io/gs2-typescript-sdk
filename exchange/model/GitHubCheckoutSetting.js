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
var GitHubCheckoutSetting = /** @class */ (function () {
    function GitHubCheckoutSetting() {
        this.apiKeyId = null;
        this.repositoryName = null;
        this.sourcePath = null;
        this.referenceType = null;
        this.commitHash = null;
        this.branchName = null;
        this.tagName = null;
    }
    GitHubCheckoutSetting.prototype.getApiKeyId = function () {
        return this.apiKeyId;
    };
    GitHubCheckoutSetting.prototype.setApiKeyId = function (apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    };
    GitHubCheckoutSetting.prototype.withApiKeyId = function (apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    };
    GitHubCheckoutSetting.prototype.getRepositoryName = function () {
        return this.repositoryName;
    };
    GitHubCheckoutSetting.prototype.setRepositoryName = function (repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    };
    GitHubCheckoutSetting.prototype.withRepositoryName = function (repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    };
    GitHubCheckoutSetting.prototype.getSourcePath = function () {
        return this.sourcePath;
    };
    GitHubCheckoutSetting.prototype.setSourcePath = function (sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    };
    GitHubCheckoutSetting.prototype.withSourcePath = function (sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    };
    GitHubCheckoutSetting.prototype.getReferenceType = function () {
        return this.referenceType;
    };
    GitHubCheckoutSetting.prototype.setReferenceType = function (referenceType) {
        this.referenceType = referenceType;
        return this;
    };
    GitHubCheckoutSetting.prototype.withReferenceType = function (referenceType) {
        this.referenceType = referenceType;
        return this;
    };
    GitHubCheckoutSetting.prototype.getCommitHash = function () {
        return this.commitHash;
    };
    GitHubCheckoutSetting.prototype.setCommitHash = function (commitHash) {
        this.commitHash = commitHash;
        return this;
    };
    GitHubCheckoutSetting.prototype.withCommitHash = function (commitHash) {
        this.commitHash = commitHash;
        return this;
    };
    GitHubCheckoutSetting.prototype.getBranchName = function () {
        return this.branchName;
    };
    GitHubCheckoutSetting.prototype.setBranchName = function (branchName) {
        this.branchName = branchName;
        return this;
    };
    GitHubCheckoutSetting.prototype.withBranchName = function (branchName) {
        this.branchName = branchName;
        return this;
    };
    GitHubCheckoutSetting.prototype.getTagName = function () {
        return this.tagName;
    };
    GitHubCheckoutSetting.prototype.setTagName = function (tagName) {
        this.tagName = tagName;
        return this;
    };
    GitHubCheckoutSetting.prototype.withTagName = function (tagName) {
        this.tagName = tagName;
        return this;
    };
    GitHubCheckoutSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GitHubCheckoutSetting()
            .withApiKeyId(data["apiKeyId"])
            .withRepositoryName(data["repositoryName"])
            .withSourcePath(data["sourcePath"])
            .withReferenceType(data["referenceType"])
            .withCommitHash(data["commitHash"])
            .withBranchName(data["branchName"])
            .withTagName(data["tagName"]);
    };
    GitHubCheckoutSetting.prototype.toDict = function () {
        return {
            "apiKeyId": this.getApiKeyId(),
            "repositoryName": this.getRepositoryName(),
            "sourcePath": this.getSourcePath(),
            "referenceType": this.getReferenceType(),
            "commitHash": this.getCommitHash(),
            "branchName": this.getBranchName(),
            "tagName": this.getTagName(),
        };
    };
    return GitHubCheckoutSetting;
}());
export default GitHubCheckoutSetting;
//# sourceMappingURL=GitHubCheckoutSetting.js.map