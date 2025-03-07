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

import * as Gs2Money2 from '../../money2/model'
import AppleAppStoreSubscriptionContent from './AppleAppStoreSubscriptionContent';
import GooglePlaySubscriptionContent from './GooglePlaySubscriptionContent';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:model:subscription:content:{contentName}";

export default class StoreSubscriptionContentModel implements IModel {
    private storeSubscriptionContentModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private scheduleNamespaceId: string|null = null;
    private triggerName: string|null = null;
    private triggerExtendMode: string|null = null;
    private rollupHour: number|null = null;
    private reallocateSpanDays: number|null = null;
    private appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent|null = null;
    private googlePlay: Gs2Money2.GooglePlaySubscriptionContent|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '.*')
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
            .replace('{contentName}', '.*')
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
            .replace('{contentName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getContentName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentName}', '(.*)')
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
        if (this.getContentName(grn) == null || this.getContentName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        contentName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{contentName}', contentName ?? '');
    }
    public getStoreSubscriptionContentModelId(): string|null {
        return this.storeSubscriptionContentModelId;
    }
    public setStoreSubscriptionContentModelId(storeSubscriptionContentModelId: string|null) {
        this.storeSubscriptionContentModelId = storeSubscriptionContentModelId;
        return this;
    }
    public withStoreSubscriptionContentModelId(storeSubscriptionContentModelId: string|null): this {
        this.storeSubscriptionContentModelId = storeSubscriptionContentModelId;
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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getScheduleNamespaceId(): string|null {
        return this.scheduleNamespaceId;
    }
    public setScheduleNamespaceId(scheduleNamespaceId: string|null) {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    }
    public withScheduleNamespaceId(scheduleNamespaceId: string|null): this {
        this.scheduleNamespaceId = scheduleNamespaceId;
        return this;
    }
    public getTriggerName(): string|null {
        return this.triggerName;
    }
    public setTriggerName(triggerName: string|null) {
        this.triggerName = triggerName;
        return this;
    }
    public withTriggerName(triggerName: string|null): this {
        this.triggerName = triggerName;
        return this;
    }
    public getTriggerExtendMode(): string|null {
        return this.triggerExtendMode;
    }
    public setTriggerExtendMode(triggerExtendMode: string|null) {
        this.triggerExtendMode = triggerExtendMode;
        return this;
    }
    public withTriggerExtendMode(triggerExtendMode: string|null): this {
        this.triggerExtendMode = triggerExtendMode;
        return this;
    }
    public getRollupHour(): number|null {
        return this.rollupHour;
    }
    public setRollupHour(rollupHour: number|null) {
        this.rollupHour = rollupHour;
        return this;
    }
    public withRollupHour(rollupHour: number|null): this {
        this.rollupHour = rollupHour;
        return this;
    }
    public getReallocateSpanDays(): number|null {
        return this.reallocateSpanDays;
    }
    public setReallocateSpanDays(reallocateSpanDays: number|null) {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    }
    public withReallocateSpanDays(reallocateSpanDays: number|null): this {
        this.reallocateSpanDays = reallocateSpanDays;
        return this;
    }
    public getAppleAppStore(): Gs2Money2.AppleAppStoreSubscriptionContent|null {
        return this.appleAppStore;
    }
    public setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent|null) {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent|null): this {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public getGooglePlay(): Gs2Money2.GooglePlaySubscriptionContent|null {
        return this.googlePlay;
    }
    public setGooglePlay(googlePlay: Gs2Money2.GooglePlaySubscriptionContent|null) {
        this.googlePlay = googlePlay;
        return this;
    }
    public withGooglePlay(googlePlay: Gs2Money2.GooglePlaySubscriptionContent|null): this {
        this.googlePlay = googlePlay;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): StoreSubscriptionContentModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StoreSubscriptionContentModel()
            .withStoreSubscriptionContentModelId(data["storeSubscriptionContentModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScheduleNamespaceId(data["scheduleNamespaceId"])
            .withTriggerName(data["triggerName"])
            .withTriggerExtendMode(data["triggerExtendMode"])
            .withRollupHour(data["rollupHour"])
            .withReallocateSpanDays(data["reallocateSpanDays"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreSubscriptionContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySubscriptionContent.fromDict(data["googlePlay"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "storeSubscriptionContentModelId": this.getStoreSubscriptionContentModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scheduleNamespaceId": this.getScheduleNamespaceId(),
            "triggerName": this.getTriggerName(),
            "triggerExtendMode": this.getTriggerExtendMode(),
            "rollupHour": this.getRollupHour(),
            "reallocateSpanDays": this.getReallocateSpanDays(),
            "appleAppStore": this.getAppleAppStore()?.toDict(),
            "googlePlay": this.getGooglePlay()?.toDict(),
        };
    }
}
