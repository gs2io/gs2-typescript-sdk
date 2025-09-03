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

import * as Gs2AdReward from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2AdReward.TransactionSetting|null = null;
    private admob: Gs2AdReward.AdMob|null = null;
    private unityAd: Gs2AdReward.UnityAd|null = null;
    private appLovinMaxes: Gs2AdReward.AppLovinMax[]|null = null;
    private acquirePointScript: Gs2AdReward.ScriptSetting|null = null;
    private consumePointScript: Gs2AdReward.ScriptSetting|null = null;
    private changePointNotification: Gs2AdReward.NotificationSetting|null = null;
    private logSetting: Gs2AdReward.LogSetting|null = null;

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
    public getTransactionSetting(): Gs2AdReward.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2AdReward.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2AdReward.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getAdmob(): Gs2AdReward.AdMob|null {
        return this.admob;
    }
    public setAdmob(admob: Gs2AdReward.AdMob|null) {
        this.admob = admob;
        return this;
    }
    public withAdmob(admob: Gs2AdReward.AdMob|null): this {
        this.admob = admob;
        return this;
    }
    public getUnityAd(): Gs2AdReward.UnityAd|null {
        return this.unityAd;
    }
    public setUnityAd(unityAd: Gs2AdReward.UnityAd|null) {
        this.unityAd = unityAd;
        return this;
    }
    public withUnityAd(unityAd: Gs2AdReward.UnityAd|null): this {
        this.unityAd = unityAd;
        return this;
    }
    public getAppLovinMaxes(): Gs2AdReward.AppLovinMax[]|null {
        return this.appLovinMaxes;
    }
    public setAppLovinMaxes(appLovinMaxes: Gs2AdReward.AppLovinMax[]|null) {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    }
    public withAppLovinMaxes(appLovinMaxes: Gs2AdReward.AppLovinMax[]|null): this {
        this.appLovinMaxes = appLovinMaxes;
        return this;
    }
    public getAcquirePointScript(): Gs2AdReward.ScriptSetting|null {
        return this.acquirePointScript;
    }
    public setAcquirePointScript(acquirePointScript: Gs2AdReward.ScriptSetting|null) {
        this.acquirePointScript = acquirePointScript;
        return this;
    }
    public withAcquirePointScript(acquirePointScript: Gs2AdReward.ScriptSetting|null): this {
        this.acquirePointScript = acquirePointScript;
        return this;
    }
    public getConsumePointScript(): Gs2AdReward.ScriptSetting|null {
        return this.consumePointScript;
    }
    public setConsumePointScript(consumePointScript: Gs2AdReward.ScriptSetting|null) {
        this.consumePointScript = consumePointScript;
        return this;
    }
    public withConsumePointScript(consumePointScript: Gs2AdReward.ScriptSetting|null): this {
        this.consumePointScript = consumePointScript;
        return this;
    }
    public getChangePointNotification(): Gs2AdReward.NotificationSetting|null {
        return this.changePointNotification;
    }
    public setChangePointNotification(changePointNotification: Gs2AdReward.NotificationSetting|null) {
        this.changePointNotification = changePointNotification;
        return this;
    }
    public withChangePointNotification(changePointNotification: Gs2AdReward.NotificationSetting|null): this {
        this.changePointNotification = changePointNotification;
        return this;
    }
    public getLogSetting(): Gs2AdReward.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2AdReward.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2AdReward.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2AdReward.TransactionSetting.fromDict(data["transactionSetting"]))
            .withAdmob(Gs2AdReward.AdMob.fromDict(data["admob"]))
            .withUnityAd(Gs2AdReward.UnityAd.fromDict(data["unityAd"]))
            .withAppLovinMaxes(data.appLovinMaxes ?
                data.appLovinMaxes.map((item: {[key: string]: any}) => {
                    return Gs2AdReward.AppLovinMax.fromDict(item);
                }
            ) : null)
            .withAcquirePointScript(Gs2AdReward.ScriptSetting.fromDict(data["acquirePointScript"]))
            .withConsumePointScript(Gs2AdReward.ScriptSetting.fromDict(data["consumePointScript"]))
            .withChangePointNotification(Gs2AdReward.NotificationSetting.fromDict(data["changePointNotification"]))
            .withLogSetting(Gs2AdReward.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "admob": this.getAdmob()?.toDict(),
            "unityAd": this.getUnityAd()?.toDict(),
            "appLovinMaxes": this.getAppLovinMaxes() ?
                this.getAppLovinMaxes()!.map((item: Gs2AdReward.AppLovinMax) => {
                    return item.toDict();
                }
            ) : null,
            "acquirePointScript": this.getAcquirePointScript()?.toDict(),
            "consumePointScript": this.getConsumePointScript()?.toDict(),
            "changePointNotification": this.getChangePointNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}