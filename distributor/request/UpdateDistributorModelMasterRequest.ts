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

import * as Gs2Distributor from '../model'

export default class UpdateDistributorModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private distributorName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private inboxNamespaceId: string|null = null;
    private whiteListTargetIds: string[]|null = null;

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
    public getDistributorName(): string|null {
        return this.distributorName;
    }
    public setDistributorName(distributorName: string|null) {
        this.distributorName = distributorName;
        return this;
    }
    public withDistributorName(distributorName: string|null): this {
        this.distributorName = distributorName;
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
    public getInboxNamespaceId(): string|null {
        return this.inboxNamespaceId;
    }
    public setInboxNamespaceId(inboxNamespaceId: string|null) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    }
    public withInboxNamespaceId(inboxNamespaceId: string|null): this {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    }
    public getWhiteListTargetIds(): string[]|null {
        return this.whiteListTargetIds;
    }
    public setWhiteListTargetIds(whiteListTargetIds: string[]|null) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    }
    public withWhiteListTargetIds(whiteListTargetIds: string[]|null): this {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateDistributorModelMasterRequest {
        return new UpdateDistributorModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withWhiteListTargetIds(data.whiteListTargetIds ?
                data.whiteListTargetIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "whiteListTargetIds": this.getWhiteListTargetIds() ?
                this.getWhiteListTargetIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
        };
    }
}