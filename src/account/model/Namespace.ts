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
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:account:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private changePasswordIfTakeOver: boolean|null = null;
    private createAccountScript: ScriptSetting|null = null;
    private authenticationScript: ScriptSetting|null = null;
    private createTakeOverScript: ScriptSetting|null = null;
    private doTakeOverScript: ScriptSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
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
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '');
    }

    public getNamespaceId(): string|null {
        return this.namespaceId;
    }

    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }

    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
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

    public getChangePasswordIfTakeOver(): boolean|null {
        return this.changePasswordIfTakeOver;
    }

    public setChangePasswordIfTakeOver(changePasswordIfTakeOver: boolean|null) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    }

    public withChangePasswordIfTakeOver(changePasswordIfTakeOver: boolean|null): this {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    }

    public getCreateAccountScript(): ScriptSetting|null {
        return this.createAccountScript;
    }

    public setCreateAccountScript(createAccountScript: ScriptSetting|null) {
        this.createAccountScript = createAccountScript;
        return this;
    }

    public withCreateAccountScript(createAccountScript: ScriptSetting|null): this {
        this.createAccountScript = createAccountScript;
        return this;
    }

    public getAuthenticationScript(): ScriptSetting|null {
        return this.authenticationScript;
    }

    public setAuthenticationScript(authenticationScript: ScriptSetting|null) {
        this.authenticationScript = authenticationScript;
        return this;
    }

    public withAuthenticationScript(authenticationScript: ScriptSetting|null): this {
        this.authenticationScript = authenticationScript;
        return this;
    }

    public getCreateTakeOverScript(): ScriptSetting|null {
        return this.createTakeOverScript;
    }

    public setCreateTakeOverScript(createTakeOverScript: ScriptSetting|null) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    }

    public withCreateTakeOverScript(createTakeOverScript: ScriptSetting|null): this {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    }

    public getDoTakeOverScript(): ScriptSetting|null {
        return this.doTakeOverScript;
    }

    public setDoTakeOverScript(doTakeOverScript: ScriptSetting|null) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    }

    public withDoTakeOverScript(doTakeOverScript: ScriptSetting|null): this {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    }

    public getLogSetting(): LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: LogSetting|null): this {
        this.logSetting = logSetting;
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withCreateAccountScript(ScriptSetting.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(ScriptSetting.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(ScriptSetting.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(ScriptSetting.fromDict(data["doTakeOverScript"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "createAccountScript": this.getCreateAccountScript()?.toDict(),
            "authenticationScript": this.getAuthenticationScript()?.toDict(),
            "createTakeOverScript": this.getCreateTakeOverScript()?.toDict(),
            "doTakeOverScript": this.getDoTakeOverScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
