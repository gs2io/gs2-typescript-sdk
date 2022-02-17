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

export class Box implements IModel {
    private boxId: string|null = null;
    private prizeTableName: string|null = null;
    private userId: string|null = null;
    private drawnIndexes: number[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getBoxId(): string|null {
        return this.boxId;
    }

    public setBoxId(boxId: string|null) {
        this.boxId = boxId;
        return this;
    }

    public withBoxId(boxId: string|null): this {
        this.boxId = boxId;
        return this;
    }

    public getPrizeTableName(): string|null {
        return this.prizeTableName;
    }

    public setPrizeTableName(prizeTableName: string|null) {
        this.prizeTableName = prizeTableName;
        return this;
    }

    public withPrizeTableName(prizeTableName: string|null): this {
        this.prizeTableName = prizeTableName;
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

    public getDrawnIndexes(): number[]|null {
        return this.drawnIndexes;
    }

    public setDrawnIndexes(drawnIndexes: number[]|null) {
        this.drawnIndexes = drawnIndexes;
        return this;
    }

    public withDrawnIndexes(drawnIndexes: number[]|null): this {
        this.drawnIndexes = drawnIndexes;
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

    public static fromDict(data: {[key: string]: any}): Box|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Box()
            .withBoxId(data["boxId"])
            .withPrizeTableName(data["prizeTableName"])
            .withUserId(data["userId"])
            .withDrawnIndexes(data.drawnIndexes ?
                data.drawnIndexes.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "boxId": this.getBoxId(),
            "prizeTableName": this.getPrizeTableName(),
            "userId": this.getUserId(),
            "drawnIndexes": this.getDrawnIndexes() ?
                this.getDrawnIndexes()!.map((item: number) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
