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

import * as Gs2Project from '../../project/model'
import TwoFactorAuthenticationSetting from './TwoFactorAuthenticationSetting';
const grnFormat: string = "grn:gs2:::gs2:account:{accountName}";

export default class Account implements IModel {
    private accountId: string|null = null;
    private name: string|null = null;
    private email: string|null = null;
    private fullName: string|null = null;
    private companyName: string|null = null;
    private enableTwoFactorAuthentication: string|null = null;
    private twoFactorAuthenticationSetting: Gs2Project.TwoFactorAuthenticationSetting|null = null;
    private status: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getAccountName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getAccountName(grn) == null || this.getAccountName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        accountName: string|null,
    ): string|null {
        return grnFormat
            .replace('{accountName}', accountName ?? '');
    }
    public getAccountId(): string|null {
        return this.accountId;
    }
    public setAccountId(accountId: string|null) {
        this.accountId = accountId;
        return this;
    }
    public withAccountId(accountId: string|null): this {
        this.accountId = accountId;
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
    public getEmail(): string|null {
        return this.email;
    }
    public setEmail(email: string|null) {
        this.email = email;
        return this;
    }
    public withEmail(email: string|null): this {
        this.email = email;
        return this;
    }
    public getFullName(): string|null {
        return this.fullName;
    }
    public setFullName(fullName: string|null) {
        this.fullName = fullName;
        return this;
    }
    public withFullName(fullName: string|null): this {
        this.fullName = fullName;
        return this;
    }
    public getCompanyName(): string|null {
        return this.companyName;
    }
    public setCompanyName(companyName: string|null) {
        this.companyName = companyName;
        return this;
    }
    public withCompanyName(companyName: string|null): this {
        this.companyName = companyName;
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
    public getTwoFactorAuthenticationSetting(): Gs2Project.TwoFactorAuthenticationSetting|null {
        return this.twoFactorAuthenticationSetting;
    }
    public setTwoFactorAuthenticationSetting(twoFactorAuthenticationSetting: Gs2Project.TwoFactorAuthenticationSetting|null) {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    }
    public withTwoFactorAuthenticationSetting(twoFactorAuthenticationSetting: Gs2Project.TwoFactorAuthenticationSetting|null): this {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
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

    public static fromDict(data: {[key: string]: any}): Account|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Account()
            .withAccountId(data["accountId"])
            .withName(data["name"])
            .withEmail(data["email"])
            .withFullName(data["fullName"])
            .withCompanyName(data["companyName"])
            .withEnableTwoFactorAuthentication(data["enableTwoFactorAuthentication"])
            .withTwoFactorAuthenticationSetting(Gs2Project.TwoFactorAuthenticationSetting.fromDict(data["twoFactorAuthenticationSetting"]))
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accountId": this.getAccountId(),
            "name": this.getName(),
            "email": this.getEmail(),
            "fullName": this.getFullName(),
            "companyName": this.getCompanyName(),
            "enableTwoFactorAuthentication": this.getEnableTwoFactorAuthentication(),
            "twoFactorAuthenticationSetting": this.getTwoFactorAuthenticationSetting()?.toDict(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
