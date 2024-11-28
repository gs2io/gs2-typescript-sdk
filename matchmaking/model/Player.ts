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

import * as Gs2Matchmaking from '../../matchmaking/model'
import Attribute from './Attribute';

export default class Player implements IModel {
    private userId: string|null = null;
    private attributes: Gs2Matchmaking.Attribute[]|null = null;
    private roleName: string|null = null;
    private denyUserIds: string[]|null = null;
    private createdAt: number|null = null;
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getAttributes(): Gs2Matchmaking.Attribute[]|null {
        return this.attributes;
    }
    public setAttributes(attributes: Gs2Matchmaking.Attribute[]|null) {
        this.attributes = attributes;
        return this;
    }
    public withAttributes(attributes: Gs2Matchmaking.Attribute[]|null): this {
        this.attributes = attributes;
        return this;
    }
    public getRoleName(): string|null {
        return this.roleName;
    }
    public setRoleName(roleName: string|null) {
        this.roleName = roleName;
        return this;
    }
    public withRoleName(roleName: string|null): this {
        this.roleName = roleName;
        return this;
    }
    public getDenyUserIds(): string[]|null {
        return this.denyUserIds;
    }
    public setDenyUserIds(denyUserIds: string[]|null) {
        this.denyUserIds = denyUserIds;
        return this;
    }
    public withDenyUserIds(denyUserIds: string[]|null): this {
        this.denyUserIds = denyUserIds;
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

    public static fromDict(data: {[key: string]: any}): Player|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Player()
            .withUserId(data["userId"])
            .withAttributes(data.attributes ?
                data.attributes.map((item: {[key: string]: any}) => {
                    return Gs2Matchmaking.Attribute.fromDict(item);
                }
            ) : null)
            .withRoleName(data["roleName"])
            .withDenyUserIds(data.denyUserIds ?
                data.denyUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "attributes": this.getAttributes() ?
                this.getAttributes()!.map((item: Gs2Matchmaking.Attribute) => {
                    return item.toDict();
                }
            ) : null,
            "roleName": this.getRoleName(),
            "denyUserIds": this.getDenyUserIds() ?
                this.getDenyUserIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
        };
    }
}
