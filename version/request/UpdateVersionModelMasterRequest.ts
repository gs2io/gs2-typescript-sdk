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

import * as Gs2Version from '../model'

export default class UpdateVersionModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private versionName: string|null = null;
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
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getVersionName(): string|null {
        return this.versionName;
    }
    public setVersionName(versionName: string|null) {
        this.versionName = versionName;
        return this;
    }
    public withVersionName(versionName: string|null): this {
        this.versionName = versionName;
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

    public static fromDict(data: {[key: string]: any}): UpdateVersionModelMasterRequest {
        return new UpdateVersionModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
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
            ) : [])
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
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
            ) : [],
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
        };
    }
}