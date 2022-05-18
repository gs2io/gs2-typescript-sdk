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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:distributor:{namespaceName}:model:{distributorName}";

export default class DistributorModel implements IModel {
    private distributorModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private inboxNamespaceId: string|null = null;
    private whiteListTargetIds: string[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{distributorName}', '.*')
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
            .replace('{distributorName}', '.*')
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
            .replace('{distributorName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDistributorName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{distributorName}', '(.*)')
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
        if (this.getDistributorName(grn) == null || this.getDistributorName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        distributorName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{distributorName}', distributorName ?? '');
    }

    public getDistributorModelId(): string|null {
        return this.distributorModelId;
    }

    public setDistributorModelId(distributorModelId: string|null) {
        this.distributorModelId = distributorModelId;
        return this;
    }

    public withDistributorModelId(distributorModelId: string|null): this {
        this.distributorModelId = distributorModelId;
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

    public getInboxNamespaceId(): string|null {
        return this.inboxNamespaceId;
    }

    public setInboxNamespaceId(inboxNamespaceId: string|null) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    }

    public withInboxNamespaceId(inboxNamespaceId: string|null): this {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    }

    public getWhiteListTargetIds(): string[]|null {
        return this.whiteListTargetIds;
    }

    public setWhiteListTargetIds(whiteListTargetIds: string[]|null) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    }

    public withWhiteListTargetIds(whiteListTargetIds: string[]|null): this {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DistributorModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DistributorModel()
            .withDistributorModelId(data["distributorModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withWhiteListTargetIds(data.whiteListTargetIds ?
                data.whiteListTargetIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "distributorModelId": this.getDistributorModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "whiteListTargetIds": this.getWhiteListTargetIds() ?
                this.getWhiteListTargetIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
        };
    }
}
