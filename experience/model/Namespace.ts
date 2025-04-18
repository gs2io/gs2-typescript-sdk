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

import * as Gs2Experience from '../../experience/model'
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:experience:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Experience.TransactionSetting|null = null;
    private rankCapScriptId: string|null = null;
    private changeExperienceScript: Gs2Experience.ScriptSetting|null = null;
    private changeRankScript: Gs2Experience.ScriptSetting|null = null;
    private changeRankCapScript: Gs2Experience.ScriptSetting|null = null;
    private overflowExperienceScript: string|null = null;
    private logSetting: Gs2Experience.LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

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
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
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
    public getTransactionSetting(): Gs2Experience.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Experience.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Experience.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getRankCapScriptId(): string|null {
        return this.rankCapScriptId;
    }
    public setRankCapScriptId(rankCapScriptId: string|null) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    }
    public withRankCapScriptId(rankCapScriptId: string|null): this {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    }
    public getChangeExperienceScript(): Gs2Experience.ScriptSetting|null {
        return this.changeExperienceScript;
    }
    public setChangeExperienceScript(changeExperienceScript: Gs2Experience.ScriptSetting|null) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    }
    public withChangeExperienceScript(changeExperienceScript: Gs2Experience.ScriptSetting|null): this {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    }
    public getChangeRankScript(): Gs2Experience.ScriptSetting|null {
        return this.changeRankScript;
    }
    public setChangeRankScript(changeRankScript: Gs2Experience.ScriptSetting|null) {
        this.changeRankScript = changeRankScript;
        return this;
    }
    public withChangeRankScript(changeRankScript: Gs2Experience.ScriptSetting|null): this {
        this.changeRankScript = changeRankScript;
        return this;
    }
    public getChangeRankCapScript(): Gs2Experience.ScriptSetting|null {
        return this.changeRankCapScript;
    }
    public setChangeRankCapScript(changeRankCapScript: Gs2Experience.ScriptSetting|null) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    }
    public withChangeRankCapScript(changeRankCapScript: Gs2Experience.ScriptSetting|null): this {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    }
    public getOverflowExperienceScript(): string|null {
        return this.overflowExperienceScript;
    }
    public setOverflowExperienceScript(overflowExperienceScript: string|null) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    }
    public withOverflowExperienceScript(overflowExperienceScript: string|null): this {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    }
    public getLogSetting(): Gs2Experience.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Experience.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Experience.LogSetting|null): this {
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Experience.TransactionSetting.fromDict(data["transactionSetting"]))
            .withRankCapScriptId(data["rankCapScriptId"])
            .withChangeExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(data["overflowExperienceScript"])
            .withLogSetting(Gs2Experience.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "rankCapScriptId": this.getRankCapScriptId(),
            "changeExperienceScript": this.getChangeExperienceScript()?.toDict(),
            "changeRankScript": this.getChangeRankScript()?.toDict(),
            "changeRankCapScript": this.getChangeRankCapScript()?.toDict(),
            "overflowExperienceScript": this.getOverflowExperienceScript(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
