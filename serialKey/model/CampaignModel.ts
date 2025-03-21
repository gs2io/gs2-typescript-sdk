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

import * as Gs2SerialKey from '../../serialKey/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:serialKey:{namespaceName}:model:campaign:{campaignModelName}";

export default class CampaignModel implements IModel {
    private campaignId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private enableCampaignCode: boolean|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        campaignModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{campaignModelName}', campaignModelName ?? '');
    }
    public getCampaignId(): string|null {
        return this.campaignId;
    }
    public setCampaignId(campaignId: string|null) {
        this.campaignId = campaignId;
        return this;
    }
    public withCampaignId(campaignId: string|null): this {
        this.campaignId = campaignId;
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
    public getEnableCampaignCode(): boolean|null {
        return this.enableCampaignCode;
    }
    public setEnableCampaignCode(enableCampaignCode: boolean|null) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    }
    public withEnableCampaignCode(enableCampaignCode: boolean|null): this {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CampaignModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CampaignModel()
            .withCampaignId(data["campaignId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withEnableCampaignCode(data["enableCampaignCode"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "campaignId": this.getCampaignId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "enableCampaignCode": this.getEnableCampaignCode(),
        };
    }
}
