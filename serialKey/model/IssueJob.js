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
var grnFormat = "grn:gs2:{region}:{ownerId}:serialKey:{namespaceName}:master:campaign:{campaignModelName}:issue:job:{issueJobName}";
var IssueJob = /** @class */ (function () {
    function IssueJob() {
        this.issueJobId = null;
        this.name = null;
        this.metadata = null;
        this.issuedCount = null;
        this.issueRequestCount = null;
        this.status = null;
        this.createdAt = null;
    }
    IssueJob.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IssueJob.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IssueJob.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IssueJob.getCampaignModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '(.*)')
            .replace('{issueJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IssueJob.getIssueJobName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IssueJob.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCampaignModelName(grn) == null || this.getCampaignModelName(grn) === '') {
            return false;
        }
        if (this.getIssueJobName(grn) == null || this.getIssueJobName(grn) === '') {
            return false;
        }
        return true;
    };
    IssueJob.createGrn = function (region, ownerId, namespaceName, campaignModelName, issueJobName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{campaignModelName}', campaignModelName !== null && campaignModelName !== void 0 ? campaignModelName : '')
            .replace('{issueJobName}', issueJobName !== null && issueJobName !== void 0 ? issueJobName : '');
    };
    IssueJob.prototype.getIssueJobId = function () {
        return this.issueJobId;
    };
    IssueJob.prototype.setIssueJobId = function (issueJobId) {
        this.issueJobId = issueJobId;
        return this;
    };
    IssueJob.prototype.withIssueJobId = function (issueJobId) {
        this.issueJobId = issueJobId;
        return this;
    };
    IssueJob.prototype.getName = function () {
        return this.name;
    };
    IssueJob.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    IssueJob.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    IssueJob.prototype.getMetadata = function () {
        return this.metadata;
    };
    IssueJob.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IssueJob.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IssueJob.prototype.getIssuedCount = function () {
        return this.issuedCount;
    };
    IssueJob.prototype.setIssuedCount = function (issuedCount) {
        this.issuedCount = issuedCount;
        return this;
    };
    IssueJob.prototype.withIssuedCount = function (issuedCount) {
        this.issuedCount = issuedCount;
        return this;
    };
    IssueJob.prototype.getIssueRequestCount = function () {
        return this.issueRequestCount;
    };
    IssueJob.prototype.setIssueRequestCount = function (issueRequestCount) {
        this.issueRequestCount = issueRequestCount;
        return this;
    };
    IssueJob.prototype.withIssueRequestCount = function (issueRequestCount) {
        this.issueRequestCount = issueRequestCount;
        return this;
    };
    IssueJob.prototype.getStatus = function () {
        return this.status;
    };
    IssueJob.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    IssueJob.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    IssueJob.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    IssueJob.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    IssueJob.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    IssueJob.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IssueJob()
            .withIssueJobId(data["issueJobId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withIssuedCount(data["issuedCount"])
            .withIssueRequestCount(data["issueRequestCount"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"]);
    };
    IssueJob.prototype.toDict = function () {
        return {
            "issueJobId": this.getIssueJobId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "issuedCount": this.getIssuedCount(),
            "issueRequestCount": this.getIssueRequestCount(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return IssueJob;
}());
exports.default = IssueJob;
//# sourceMappingURL=IssueJob.js.map