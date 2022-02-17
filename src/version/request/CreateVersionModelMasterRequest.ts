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

export class CreateVersionModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private warningVersion: Gs2Version.Version|null = null;
    private errorVersion: Gs2Version.Version|null = null;
    private scope: string|null = null;
    private currentVersion: Gs2Version.Version|null = null;
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

    public static fromDict(data: {[key: string]: any}): CreateVersionModelMasterRequest {
        return new CreateVersionModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withWarningVersion(Gs2Version.Version.fromDict(data["warningVersion"]))
            .withErrorVersion(Gs2Version.Version.fromDict(data["errorVersion"]))
            .withScope(data["scope"])
            .withCurrentVersion(Gs2Version.Version.fromDict(data["currentVersion"]))
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
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