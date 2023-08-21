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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:serialKey:{namespaceName}:serialKey:{serialKeyCode}";

export default class SerialKey implements IModel {
    private serialKeyId: string|null = null;
    private campaignModelName: string|null = null;
    private code: string|null = null;
    private metadata: string|null = null;
    private status: string|null = null;
    private usedUserId: string|null = null;
    private createdAt: number|null = null;
    private usedAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{serialKeyCode}', '.*')
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
            .replace('{serialKeyCode}', '.*')
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
            .replace('{serialKeyCode}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSerialKeyCode(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{serialKeyCode}', '(.*)')
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
        if (this.getSerialKeyCode(grn) == null || this.getSerialKeyCode(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        serialKeyCode: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{serialKeyCode}', serialKeyCode ?? '');
    }
    public getSerialKeyId(): string|null {
        return this.serialKeyId;
    }
    public setSerialKeyId(serialKeyId: string|null) {
        this.serialKeyId = serialKeyId;
        return this;
    }
    public withSerialKeyId(serialKeyId: string|null): this {
        this.serialKeyId = serialKeyId;
        return this;
    }
    public getCampaignModelName(): string|null {
        return this.campaignModelName;
    }
    public setCampaignModelName(campaignModelName: string|null) {
        this.campaignModelName = campaignModelName;
        return this;
    }
    public withCampaignModelName(campaignModelName: string|null): this {
        this.campaignModelName = campaignModelName;
        return this;
    }
    public getCode(): string|null {
        return this.code;
    }
    public setCode(code: string|null) {
        this.code = code;
        return this;
    }
    public withCode(code: string|null): this {
        this.code = code;
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
    public getUsedUserId(): string|null {
        return this.usedUserId;
    }
    public setUsedUserId(usedUserId: string|null) {
        this.usedUserId = usedUserId;
        return this;
    }
    public withUsedUserId(usedUserId: string|null): this {
        this.usedUserId = usedUserId;
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
    public getUsedAt(): number|null {
        return this.usedAt;
    }
    public setUsedAt(usedAt: number|null) {
        this.usedAt = usedAt;
        return this;
    }
    public withUsedAt(usedAt: number|null): this {
        this.usedAt = usedAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
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

    public static fromDict(data: {[key: string]: any}): SerialKey|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SerialKey()
            .withSerialKeyId(data["serialKeyId"])
            .withCampaignModelName(data["campaignModelName"])
            .withCode(data["code"])
            .withMetadata(data["metadata"])
            .withStatus(data["status"])
            .withUsedUserId(data["usedUserId"])
            .withCreatedAt(data["createdAt"])
            .withUsedAt(data["usedAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "serialKeyId": this.getSerialKeyId(),
            "campaignModelName": this.getCampaignModelName(),
            "code": this.getCode(),
            "metadata": this.getMetadata(),
            "status": this.getStatus(),
            "usedUserId": this.getUsedUserId(),
            "createdAt": this.getCreatedAt(),
            "usedAt": this.getUsedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
