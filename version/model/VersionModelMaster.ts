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

import * as Gs2Version from '../../version/model'
import Version from './Version';
import ScheduleVersion from './ScheduleVersion';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}";

export default class VersionModelMaster implements IModel {
    private versionModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private scope: string|null = null;
    private type: string|null = null;
    private currentVersion: Gs2Version.Version|null = null;
    private warningVersion: Gs2Version.Version|null = null;
    private errorVersion: Gs2Version.Version|null = null;
    private scheduleVersions: Gs2Version.ScheduleVersion[]|null = null;
    private needSignature: boolean|null = null;
    private signatureKeyId: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{versionName}', '.*')
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
            .replace('{versionName}', '.*')
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
            .replace('{versionName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getVersionName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{versionName}', '(.*)')
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
        if (this.getVersionName(grn) == null || this.getVersionName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        versionName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{versionName}', versionName ?? '');
    }
    public getVersionModelId(): string|null {
        return this.versionModelId;
    }
    public setVersionModelId(versionModelId: string|null) {
        this.versionModelId = versionModelId;
        return this;
    }
    public withVersionModelId(versionModelId: string|null): this {
        this.versionModelId = versionModelId;
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
    public getScope(): string|null {
        return this.scope;
    }
    public setScope(scope: string|null) {
        this.scope = scope;
        return this;
    }
    public withScope(scope: string|null): this {
        this.scope = scope;
        return this;
    }
    public getType(): string|null {
        return this.type;
    }
    public setType(type: string|null) {
        this.type = type;
        return this;
    }
    public withType(type: string|null): this {
        this.type = type;
        return this;
    }
    public getCurrentVersion(): Gs2Version.Version|null {
        return this.currentVersion;
    }
    public setCurrentVersion(currentVersion: Gs2Version.Version|null) {
        this.currentVersion = currentVersion;
        return this;
    }
    public withCurrentVersion(currentVersion: Gs2Version.Version|null): this {
        this.currentVersion = currentVersion;
        return this;
    }
    public getWarningVersion(): Gs2Version.Version|null {
        return this.warningVersion;
    }
    public setWarningVersion(warningVersion: Gs2Version.Version|null) {
        this.warningVersion = warningVersion;
        return this;
    }
    public withWarningVersion(warningVersion: Gs2Version.Version|null): this {
        this.warningVersion = warningVersion;
        return this;
    }
    public getErrorVersion(): Gs2Version.Version|null {
        return this.errorVersion;
    }
    public setErrorVersion(errorVersion: Gs2Version.Version|null) {
        this.errorVersion = errorVersion;
        return this;
    }
    public withErrorVersion(errorVersion: Gs2Version.Version|null): this {
        this.errorVersion = errorVersion;
        return this;
    }
    public getScheduleVersions(): Gs2Version.ScheduleVersion[]|null {
        return this.scheduleVersions;
    }
    public setScheduleVersions(scheduleVersions: Gs2Version.ScheduleVersion[]|null) {
        this.scheduleVersions = scheduleVersions;
        return this;
    }
    public withScheduleVersions(scheduleVersions: Gs2Version.ScheduleVersion[]|null): this {
        this.scheduleVersions = scheduleVersions;
        return this;
    }
    public getNeedSignature(): boolean|null {
        return this.needSignature;
    }
    public setNeedSignature(needSignature: boolean|null) {
        this.needSignature = needSignature;
        return this;
    }
    public withNeedSignature(needSignature: boolean|null): this {
        this.needSignature = needSignature;
        return this;
    }
    public getSignatureKeyId(): string|null {
        return this.signatureKeyId;
    }
    public setSignatureKeyId(signatureKeyId: string|null) {
        this.signatureKeyId = signatureKeyId;
        return this;
    }
    public withSignatureKeyId(signatureKeyId: string|null): this {
        this.signatureKeyId = signatureKeyId;
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

    public static fromDict(data: {[key: string]: any}): VersionModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new VersionModelMaster()
            .withVersionModelId(data["versionModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScope(data["scope"])
            .withType(data["type"])
            .withCurrentVersion(Gs2Version.Version.fromDict(data["currentVersion"]))
            .withWarningVersion(Gs2Version.Version.fromDict(data["warningVersion"]))
            .withErrorVersion(Gs2Version.Version.fromDict(data["errorVersion"]))
            .withScheduleVersions(data.scheduleVersions ?
                data.scheduleVersions.map((item: {[key: string]: any}) => {
                    return Gs2Version.ScheduleVersion.fromDict(item);
                }
            ) : null)
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "versionModelId": this.getVersionModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scope": this.getScope(),
            "type": this.getType(),
            "currentVersion": this.getCurrentVersion()?.toDict(),
            "warningVersion": this.getWarningVersion()?.toDict(),
            "errorVersion": this.getErrorVersion()?.toDict(),
            "scheduleVersions": this.getScheduleVersions() ?
                this.getScheduleVersions()!.map((item: Gs2Version.ScheduleVersion) => {
                    return item.toDict();
                }
            ) : null,
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
