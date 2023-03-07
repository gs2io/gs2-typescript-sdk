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
var grnFormat = "grn:gs2:{region}:{ownerId}:news:{namespaceName}:progress:{uploadToken}";
var Progress = /** @class */ (function () {
    function Progress() {
        this.progressId = null;
        this.uploadToken = null;
        this.generated = null;
        this.patternCount = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Progress.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{uploadToken}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{uploadToken}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{uploadToken}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.getUploadToken = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{uploadToken}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUploadToken(grn) == null || this.getUploadToken(grn) === '') {
            return false;
        }
        return true;
    };
    Progress.createGrn = function (region, ownerId, namespaceName, uploadToken) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{uploadToken}', uploadToken !== null && uploadToken !== void 0 ? uploadToken : '');
    };
    Progress.prototype.getProgressId = function () {
        return this.progressId;
    };
    Progress.prototype.setProgressId = function (progressId) {
        this.progressId = progressId;
        return this;
    };
    Progress.prototype.withProgressId = function (progressId) {
        this.progressId = progressId;
        return this;
    };
    Progress.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    Progress.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    Progress.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    Progress.prototype.getGenerated = function () {
        return this.generated;
    };
    Progress.prototype.setGenerated = function (generated) {
        this.generated = generated;
        return this;
    };
    Progress.prototype.withGenerated = function (generated) {
        this.generated = generated;
        return this;
    };
    Progress.prototype.getPatternCount = function () {
        return this.patternCount;
    };
    Progress.prototype.setPatternCount = function (patternCount) {
        this.patternCount = patternCount;
        return this;
    };
    Progress.prototype.withPatternCount = function (patternCount) {
        this.patternCount = patternCount;
        return this;
    };
    Progress.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Progress.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Progress.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Progress.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Progress.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Progress.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Progress.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Progress()
            .withProgressId(data["progressId"])
            .withUploadToken(data["uploadToken"])
            .withGenerated(data["generated"])
            .withPatternCount(data["patternCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Progress.prototype.toDict = function () {
        return {
            "progressId": this.getProgressId(),
            "uploadToken": this.getUploadToken(),
            "generated": this.getGenerated(),
            "patternCount": this.getPatternCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Progress;
}());
exports.default = Progress;
//# sourceMappingURL=Progress.js.map