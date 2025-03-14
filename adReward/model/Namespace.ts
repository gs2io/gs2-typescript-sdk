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

import * as Gs2AdReward from '../../adReward/model'
import AdMob from './AdMob';
import UnityAd from './UnityAd';
import AppLovinMax from './AppLovinMax';
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:adReward:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private admob: Gs2AdReward.AdMob|null = null;
    private unityAd: Gs2AdReward.UnityAd|null = null;
    private appLovinMaxes: Gs2AdReward.AppLovinMax[]|null = null;
    private acquirePointScript: Gs2AdReward.ScriptSetting|null = null;
    private consumePointScript: Gs2AdReward.ScriptSetting|null = null;
    private changePointNotification: Gs2AdReward.NotificationSetting|null = null;
    private logSetting: Gs2AdReward.LogSetting|null = null;
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
            .withLogSetting(Gs2AdReward.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
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
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
