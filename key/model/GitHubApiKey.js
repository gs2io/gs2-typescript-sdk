"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var grnFormat = "grn:gs2:{region}:{ownerId}:key:{namespaceName}:github:{apiKeyName}";
var GitHubApiKey = /** @class */ (function () {
    function GitHubApiKey() {
        this.apiKeyId = null;
        this.name = null;
        this.description = null;
        this.encryptionKeyName = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    GitHubApiKey.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{apiKeyName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GitHubApiKey.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{apiKeyName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GitHubApiKey.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{apiKeyName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GitHubApiKey.getApiKeyName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{apiKeyName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GitHubApiKey.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getApiKeyName(grn) == null || this.getApiKeyName(grn) === '') {
            return false;
        }
        return true;
    };
    GitHubApiKey.createGrn = function (region, ownerId, namespaceName, apiKeyName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{apiKeyName}', apiKeyName !== null && apiKeyName !== void 0 ? apiKeyName : '');
    };
    GitHubApiKey.prototype.getApiKeyId = function () {
        return this.apiKeyId;
    };
    GitHubApiKey.prototype.setApiKeyId = function (apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    };
    GitHubApiKey.prototype.withApiKeyId = function (apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    };
    GitHubApiKey.prototype.getName = function () {
        return this.name;
    };
    GitHubApiKey.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GitHubApiKey.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GitHubApiKey.prototype.getDescription = function () {
        return this.description;
    };
    GitHubApiKey.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    GitHubApiKey.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    GitHubApiKey.prototype.getEncryptionKeyName = function () {
        return this.encryptionKeyName;
    };
    GitHubApiKey.prototype.setEncryptionKeyName = function (encryptionKeyName) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    };
    GitHubApiKey.prototype.withEncryptionKeyName = function (encryptionKeyName) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    };
    GitHubApiKey.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GitHubApiKey.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GitHubApiKey.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GitHubApiKey.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    GitHubApiKey.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GitHubApiKey.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GitHubApiKey.prototype.getRevision = function () {
        return this.revision;
    };
    GitHubApiKey.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GitHubApiKey.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GitHubApiKey.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GitHubApiKey()
            .withApiKeyId(data["apiKeyId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withEncryptionKeyName(data["encryptionKeyName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    GitHubApiKey.prototype.toDict = function () {
        return {
            "apiKeyId": this.getApiKeyId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "encryptionKeyName": this.getEncryptionKeyName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return GitHubApiKey;
}());
exports.default = GitHubApiKey;
//# sourceMappingURL=GitHubApiKey.js.map