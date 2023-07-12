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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:loginReward:{namespaceName}:user:{userId}:status:{bonusModelName}";

export default class ReceiveStatus implements IModel {
    private receiveStatusId: string|null = null;
    private bonusModelName: string|null = null;
    private userId: string|null = null;
    private receivedSteps: boolean[]|null = null;
    private lastReceivedAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{bonusModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getBonusModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '(.*)')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getBonusModelName(grn) == null || this.getBonusModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        bonusModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{bonusModelName}', bonusModelName ?? '');
    }
    public getReceiveStatusId(): string|null {
        return this.receiveStatusId;
    }
    public setReceiveStatusId(receiveStatusId: string|null) {
        this.receiveStatusId = receiveStatusId;
        return this;
    }
    public withReceiveStatusId(receiveStatusId: string|null): this {
        this.receiveStatusId = receiveStatusId;
        return this;
    }
    public getBonusModelName(): string|null {
        return this.bonusModelName;
    }
    public setBonusModelName(bonusModelName: string|null) {
        this.bonusModelName = bonusModelName;
        return this;
    }
    public withBonusModelName(bonusModelName: string|null): this {
        this.bonusModelName = bonusModelName;
        return this;
    }
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
    public getReceivedSteps(): boolean[]|null {
        return this.receivedSteps;
    }
    public setReceivedSteps(receivedSteps: boolean[]|null) {
        this.receivedSteps = receivedSteps;
        return this;
    }
    public withReceivedSteps(receivedSteps: boolean[]|null): this {
        this.receivedSteps = receivedSteps;
        return this;
    }
    public getLastReceivedAt(): number|null {
        return this.lastReceivedAt;
    }
    public setLastReceivedAt(lastReceivedAt: number|null) {
        this.lastReceivedAt = lastReceivedAt;
        return this;
    }
    public withLastReceivedAt(lastReceivedAt: number|null): this {
        this.lastReceivedAt = lastReceivedAt;
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

    public static fromDict(data: {[key: string]: any}): ReceiveStatus|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReceiveStatus()
            .withReceiveStatusId(data["receiveStatusId"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"])
            .withReceivedSteps(data.receivedSteps ?
                data.receivedSteps.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withLastReceivedAt(data["lastReceivedAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "receiveStatusId": this.getReceiveStatusId(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
            "receivedSteps": this.getReceivedSteps() ?
                this.getReceivedSteps()!.map((item: boolean) => {
                    return item;
                }
            ) : [],
            "lastReceivedAt": this.getLastReceivedAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
