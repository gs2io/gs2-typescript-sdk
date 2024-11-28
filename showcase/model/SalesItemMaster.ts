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

import * as Gs2Showcase from '../../showcase/model'
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}";

export default class SalesItemMaster implements IModel {
    private salesItemId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private verifyActions: Gs2Showcase.VerifyAction[]|null = null;
    private consumeActions: Gs2Showcase.ConsumeAction[]|null = null;
    private acquireActions: Gs2Showcase.AcquireAction[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{salesItemName}', '.*')
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
            .replace('{salesItemName}', '.*')
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
            .replace('{salesItemName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSalesItemName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{salesItemName}', '(.*)')
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
        if (this.getSalesItemName(grn) == null || this.getSalesItemName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        salesItemName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{salesItemName}', salesItemName ?? '');
    }
    public getSalesItemId(): string|null {
        return this.salesItemId;
    }
    public setSalesItemId(salesItemId: string|null) {
        this.salesItemId = salesItemId;
        return this;
    }
    public withSalesItemId(salesItemId: string|null): this {
        this.salesItemId = salesItemId;
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
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
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
    public getVerifyActions(): Gs2Showcase.VerifyAction[]|null {
        return this.verifyActions;
    }
    public setVerifyActions(verifyActions: Gs2Showcase.VerifyAction[]|null) {
        this.verifyActions = verifyActions;
        return this;
    }
    public withVerifyActions(verifyActions: Gs2Showcase.VerifyAction[]|null): this {
        this.verifyActions = verifyActions;
        return this;
    }
    public getConsumeActions(): Gs2Showcase.ConsumeAction[]|null {
        return this.consumeActions;
    }
    public setConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }
    public withConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }
    public getAcquireActions(): Gs2Showcase.AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: Gs2Showcase.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: Gs2Showcase.AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
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

    public static fromDict(data: {[key: string]: any}): SalesItemMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItemMaster()
            .withSalesItemId(data["salesItemId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withVerifyActions(data.verifyActions ?
                data.verifyActions.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.VerifyAction.fromDict(item);
                }
            ) : null)
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.ConsumeAction.fromDict(item);
                }
            ) : null)
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.AcquireAction.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "salesItemId": this.getSalesItemId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions()!.map((item: Gs2Showcase.VerifyAction) => {
                    return item.toDict();
                }
            ) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: Gs2Showcase.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Showcase.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
