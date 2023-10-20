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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Experience from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Experience.TransactionSetting|null = null;
    private rankCapScriptId: string|null = null;
    private changeExperienceScript: Gs2Experience.ScriptSetting|null = null;
    private changeRankScript: Gs2Experience.ScriptSetting|null = null;
    private changeRankCapScript: Gs2Experience.ScriptSetting|null = null;
    private overflowExperienceScript: Gs2Experience.ScriptSetting|null = null;
    private logSetting: Gs2Experience.LogSetting|null = null;

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
    public getOverflowExperienceScript(): Gs2Experience.ScriptSetting|null {
        return this.overflowExperienceScript;
    }
    public setOverflowExperienceScript(overflowExperienceScript: Gs2Experience.ScriptSetting|null) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    }
    public withOverflowExperienceScript(overflowExperienceScript: Gs2Experience.ScriptSetting|null): this {
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

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Experience.TransactionSetting.fromDict(data["transactionSetting"]))
            .withRankCapScriptId(data["rankCapScriptId"])
            .withChangeExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["overflowExperienceScript"]))
            .withLogSetting(Gs2Experience.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "rankCapScriptId": this.getRankCapScriptId(),
            "changeExperienceScript": this.getChangeExperienceScript()?.toDict(),
            "changeRankScript": this.getChangeRankScript()?.toDict(),
            "changeRankCapScript": this.getChangeRankCapScript()?.toDict(),
            "overflowExperienceScript": this.getOverflowExperienceScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}