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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Showcase from '../model'

export class UpdateShowcaseMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private showcaseName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private displayItems: Gs2Showcase.DisplayItemMaster[]|null = null;
    private salesPeriodEventId: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }

    public getShowcaseName(): string|null {
        return this.showcaseName;
    }

    public setShowcaseName(showcaseName: string|null) {
        this.showcaseName = showcaseName;
        return this;
    }

    public withShowcaseName(showcaseName: string|null): this {
        this.showcaseName = showcaseName;
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

    public getDisplayItems(): Gs2Showcase.DisplayItemMaster[]|null {
        return this.displayItems;
    }

    public setDisplayItems(displayItems: Gs2Showcase.DisplayItemMaster[]|null) {
        this.displayItems = displayItems;
        return this;
    }

    public withDisplayItems(displayItems: Gs2Showcase.DisplayItemMaster[]|null): this {
        this.displayItems = displayItems;
        return this;
    }

    public getSalesPeriodEventId(): string|null {
        return this.salesPeriodEventId;
    }

    public setSalesPeriodEventId(salesPeriodEventId: string|null) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    }

    public withSalesPeriodEventId(salesPeriodEventId: string|null): this {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateShowcaseMasterRequest {
        return new UpdateShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDisplayItems(data.displayItems ?
                data.displayItems.map((item: {[key: string]: any}) => {
                    return Gs2Showcase.DisplayItemMaster.fromDict(item);
                }
            ) : [])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems()!.map((item: Gs2Showcase.DisplayItemMaster) => {
                    return item.toDict();
                }
            ) : [],
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    }
}