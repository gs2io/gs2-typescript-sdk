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
import AppleAppStoreContent from './AppleAppStoreContent';
import GooglePlayContent from './GooglePlayContent';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:master:content:{contentName}";

export default class StoreContentModelMaster implements IModel {
    private storeContentModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private appleAppStore: Gs2Money2.AppleAppStoreContent|null = null;
    private googlePlay: Gs2Money2.GooglePlayContent|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

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
    public getStoreContentModelId(): string|null {
        return this.storeContentModelId;
    }
    public setStoreContentModelId(storeContentModelId: string|null) {
        this.storeContentModelId = storeContentModelId;
        return this;
    }
    public withStoreContentModelId(storeContentModelId: string|null): this {
        this.storeContentModelId = storeContentModelId;
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
    public getAppleAppStore(): Gs2Money2.AppleAppStoreContent|null {
        return this.appleAppStore;
    }
    public setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreContent|null) {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreContent|null): this {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public getGooglePlay(): Gs2Money2.GooglePlayContent|null {
        return this.googlePlay;
    }
    public setGooglePlay(googlePlay: Gs2Money2.GooglePlayContent|null) {
        this.googlePlay = googlePlay;
        return this;
    }
    public withGooglePlay(googlePlay: Gs2Money2.GooglePlayContent|null): this {
        this.googlePlay = googlePlay;
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

    public static fromDict(data: {[key: string]: any}): StoreContentModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StoreContentModelMaster()
            .withStoreContentModelId(data["storeContentModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlayContent.fromDict(data["googlePlay"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "storeContentModelId": this.getStoreContentModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "appleAppStore": this.getAppleAppStore()?.toDict(),
            "googlePlay": this.getGooglePlay()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
