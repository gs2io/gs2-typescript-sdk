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
const grnFormat: string = "grn:gs2::{ownerId}:identifier:user:{userName}";

export default class Password implements IModel {
    private userId: string|null = null;
    private userName: string|null = null;
    private createdAt: number|null = null;

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{ownerId}', '(.*)')
            .replace('{userName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{ownerId}', '.*')
            .replace('{userName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getUserName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        ownerId: string|null,
        userName: string|null,
    ): string|null {
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (userName == null || userName === '') {
            return null;
        }
        return grnFormat
            .replace('{ownerId}', ownerId!)
            .replace('{userName}', userName!);
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

    public getUserName(): string|null {
        return this.userName;
    }

    public setUserName(userName: string|null) {
        this.userName = userName;
        return this;
    }

    public withUserName(userName: string|null): this {
        this.userName = userName;
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

    public static fromDict(data: {[key: string]: any}): Password|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Password()
            .withUserId(data["userId"])
            .withUserName(data["userName"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "userName": this.getUserName(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
