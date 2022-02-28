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
import Version from './Version';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}";

export default class VersionModel implements IModel {
    private versionModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private warningVersion: Version|null = null;
    private errorVersion: Version|null = null;
    private scope: string|null = null;
    private currentVersion: Version|null = null;
    private needSignature: boolean|null = null;
    private signatureKeyId: string|null = null;

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
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getVersionName(grn) == null) {
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
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (versionName == null || versionName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region!)
            .replace('{ownerId}', ownerId!)
            .replace('{namespaceName}', namespaceName!)
            .replace('{versionName}', versionName!);
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

    public getWarningVersion(): Version|null {
        return this.warningVersion;
    }

    public setWarningVersion(warningVersion: Version|null) {
        this.warningVersion = warningVersion;
        return this;
    }

    public withWarningVersion(warningVersion: Version|null): this {
        this.warningVersion = warningVersion;
        return this;
    }

    public getErrorVersion(): Version|null {
        return this.errorVersion;
    }

    public setErrorVersion(errorVersion: Version|null) {
        this.errorVersion = errorVersion;
        return this;
    }

    public withErrorVersion(errorVersion: Version|null): this {
        this.errorVersion = errorVersion;
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

    public getCurrentVersion(): Version|null {
        return this.currentVersion;
    }

    public setCurrentVersion(currentVersion: Version|null) {
        this.currentVersion = currentVersion;
        return this;
    }

    public withCurrentVersion(currentVersion: Version|null): this {
        this.currentVersion = currentVersion;
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

    public static fromDict(data: {[key: string]: any}): VersionModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new VersionModel()
            .withVersionModelId(data["versionModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withWarningVersion(Version.fromDict(data["warningVersion"]))
            .withErrorVersion(Version.fromDict(data["errorVersion"]))
            .withScope(data["scope"])
            .withCurrentVersion(Version.fromDict(data["currentVersion"]))
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "versionModelId": this.getVersionModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "warningVersion": this.getWarningVersion()?.toDict(),
            "errorVersion": this.getErrorVersion()?.toDict(),
            "scope": this.getScope(),
            "currentVersion": this.getCurrentVersion()?.toDict(),
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
        };
    }
}
