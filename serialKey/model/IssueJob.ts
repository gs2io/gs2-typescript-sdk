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

import IModel from '../../core/interface/IModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:serialKey:{namespaceName}:model:campaign:{campaignModelName}:issue:job:{issueJobName}";

export default class IssueJob implements IModel {
    private issueJobId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private issuedCount: number|null = null;
    private issueRequestCount: number|null = null;
    private status: string|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCampaignModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '(.*)')
            .replace('{issueJobName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getIssueJobName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
            .replace('{issueJobName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
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
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        campaignModelName: string|null,
        issueJobName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{campaignModelName}', campaignModelName ?? '')
            .replace('{issueJobName}', issueJobName ?? '');
    }
    public getIssueJobId(): string|null {
        return this.issueJobId;
    }
    public setIssueJobId(issueJobId: string|null) {
        this.issueJobId = issueJobId;
        return this;
    }
    public withIssueJobId(issueJobId: string|null): this {
        this.issueJobId = issueJobId;
        return this;
    }
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getIssuedCount(): number|null {
        return this.issuedCount;
    }
    public setIssuedCount(issuedCount: number|null) {
        this.issuedCount = issuedCount;
        return this;
    }
    public withIssuedCount(issuedCount: number|null): this {
        this.issuedCount = issuedCount;
        return this;
    }
    public getIssueRequestCount(): number|null {
        return this.issueRequestCount;
    }
    public setIssueRequestCount(issueRequestCount: number|null) {
        this.issueRequestCount = issueRequestCount;
        return this;
    }
    public withIssueRequestCount(issueRequestCount: number|null): this {
        this.issueRequestCount = issueRequestCount;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): IssueJob|null {
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
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "issueJobId": this.getIssueJobId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "issuedCount": this.getIssuedCount(),
            "issueRequestCount": this.getIssueRequestCount(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
