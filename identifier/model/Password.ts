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
import TwoFactorAuthenticationSetting from './TwoFactorAuthenticationSetting';
const grnFormat: string = "grn:gs2::{ownerId}:identifier:user:{userName}";

export default class Password implements IModel {
    private passwordId: string|null = null;
    private userId: string|null = null;
    private userName: string|null = null;
    private enableTwoFactorAuthentication: string|null = null;
    private twoFactorAuthenticationSetting: TwoFactorAuthenticationSetting|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

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
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getUserName(grn) == null || this.getUserName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        ownerId: string|null,
        userName: string|null,
    ): string|null {
        return grnFormat
            .replace('{ownerId}', ownerId ?? '')
            .replace('{userName}', userName ?? '');
    }
    public getPasswordId(): string|null {
        return this.passwordId;
    }
    public setPasswordId(passwordId: string|null) {
        this.passwordId = passwordId;
        return this;
    }
    public withPasswordId(passwordId: string|null): this {
        this.passwordId = passwordId;
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
    public getEnableTwoFactorAuthentication(): string|null {
        return this.enableTwoFactorAuthentication;
    }
    public setEnableTwoFactorAuthentication(enableTwoFactorAuthentication: string|null) {
        this.enableTwoFactorAuthentication = enableTwoFactorAuthentication;
        return this;
    }
    public withEnableTwoFactorAuthentication(enableTwoFactorAuthentication: string|null): this {
        this.enableTwoFactorAuthentication = enableTwoFactorAuthentication;
        return this;
    }
    public getTwoFactorAuthenticationSetting(): TwoFactorAuthenticationSetting|null {
        return this.twoFactorAuthenticationSetting;
    }
    public setTwoFactorAuthenticationSetting(twoFactorAuthenticationSetting: TwoFactorAuthenticationSetting|null) {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    }
    public withTwoFactorAuthenticationSetting(twoFactorAuthenticationSetting: TwoFactorAuthenticationSetting|null): this {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
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

    public static fromDict(data: {[key: string]: any}): Password|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Password()
            .withPasswordId(data["passwordId"])
            .withUserId(data["userId"])
            .withUserName(data["userName"])
            .withEnableTwoFactorAuthentication(data["enableTwoFactorAuthentication"])
            .withTwoFactorAuthenticationSetting(TwoFactorAuthenticationSetting.fromDict(data["twoFactorAuthenticationSetting"]))
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "passwordId": this.getPasswordId(),
            "userId": this.getUserId(),
            "userName": this.getUserName(),
            "enableTwoFactorAuthentication": this.getEnableTwoFactorAuthentication(),
            "twoFactorAuthenticationSetting": this.getTwoFactorAuthenticationSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
