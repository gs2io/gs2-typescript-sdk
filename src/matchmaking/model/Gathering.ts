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

import IModel from '@/gs2/core/interface/IModel';
import { AttributeRange } from './AttributeRange';
import { Attribute } from './Attribute';
import { Player } from './Player';
import { CapacityOfRole } from './CapacityOfRole';

export class Gathering implements IModel {
    private gatheringId: string|null = null;
    private name: string|null = null;
    private attributeRanges: AttributeRange[]|null = null;
    private capacityOfRoles: CapacityOfRole[]|null = null;
    private allowUserIds: string[]|null = null;
    private metadata: string|null = null;
    private expiresAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getGatheringId(): string|null {
        return this.gatheringId;
    }

    public setGatheringId(gatheringId: string|null) {
        this.gatheringId = gatheringId;
        return this;
    }

    public withGatheringId(gatheringId: string|null): this {
        this.gatheringId = gatheringId;
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

    public getAttributeRanges(): AttributeRange[]|null {
        return this.attributeRanges;
    }

    public setAttributeRanges(attributeRanges: AttributeRange[]|null) {
        this.attributeRanges = attributeRanges;
        return this;
    }

    public withAttributeRanges(attributeRanges: AttributeRange[]|null): this {
        this.attributeRanges = attributeRanges;
        return this;
    }

    public getCapacityOfRoles(): CapacityOfRole[]|null {
        return this.capacityOfRoles;
    }

    public setCapacityOfRoles(capacityOfRoles: CapacityOfRole[]|null) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    }

    public withCapacityOfRoles(capacityOfRoles: CapacityOfRole[]|null): this {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    }

    public getAllowUserIds(): string[]|null {
        return this.allowUserIds;
    }

    public setAllowUserIds(allowUserIds: string[]|null) {
        this.allowUserIds = allowUserIds;
        return this;
    }

    public withAllowUserIds(allowUserIds: string[]|null): this {
        this.allowUserIds = allowUserIds;
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

    public getExpiresAt(): number|null {
        return this.expiresAt;
    }

    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }

    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
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

    public static fromDict(data: {[key: string]: any}): Gathering|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Gathering()
            .withGatheringId(data["gatheringId"])
            .withName(data["name"])
            .withAttributeRanges(data.attributeRanges ?
                data.attributeRanges.map((item: {[key: string]: any}) => {
                    return AttributeRange.fromDict(item);
                }
            ) : [])
            .withCapacityOfRoles(data.capacityOfRoles ?
                data.capacityOfRoles.map((item: {[key: string]: any}) => {
                    return CapacityOfRole.fromDict(item);
                }
            ) : [])
            .withAllowUserIds(data.allowUserIds ?
                data.allowUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withMetadata(data["metadata"])
            .withExpiresAt(data["expiresAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "gatheringId": this.getGatheringId(),
            "name": this.getName(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges()!.map((item: AttributeRange) => {
                    return item.toDict();
                }
            ) : [],
            "capacityOfRoles": this.getCapacityOfRoles() ?
                this.getCapacityOfRoles()!.map((item: CapacityOfRole) => {
                    return item.toDict();
                }
            ) : [],
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "metadata": this.getMetadata(),
            "expiresAt": this.getExpiresAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
