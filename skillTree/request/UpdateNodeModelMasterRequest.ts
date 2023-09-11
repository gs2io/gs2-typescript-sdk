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

import * as Gs2SkillTree from '../model'

export default class UpdateNodeModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private nodeModelName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private releaseConsumeActions: Gs2SkillTree.ConsumeAction[]|null = null;
    private restrainReturnRate: number|null = null;
    private premiseNodeNames: string[]|null = null;

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
    public getNodeModelName(): string|null {
        return this.nodeModelName;
    }
    public setNodeModelName(nodeModelName: string|null) {
        this.nodeModelName = nodeModelName;
        return this;
    }
    public withNodeModelName(nodeModelName: string|null): this {
        this.nodeModelName = nodeModelName;
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
    public getReleaseConsumeActions(): Gs2SkillTree.ConsumeAction[]|null {
        return this.releaseConsumeActions;
    }
    public setReleaseConsumeActions(releaseConsumeActions: Gs2SkillTree.ConsumeAction[]|null) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    }
    public withReleaseConsumeActions(releaseConsumeActions: Gs2SkillTree.ConsumeAction[]|null): this {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    }
    public getRestrainReturnRate(): number|null {
        return this.restrainReturnRate;
    }
    public setRestrainReturnRate(restrainReturnRate: number|null) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    }
    public withRestrainReturnRate(restrainReturnRate: number|null): this {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    }
    public getPremiseNodeNames(): string[]|null {
        return this.premiseNodeNames;
    }
    public setPremiseNodeNames(premiseNodeNames: string[]|null) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    }
    public withPremiseNodeNames(premiseNodeNames: string[]|null): this {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateNodeModelMasterRequest {
        return new UpdateNodeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withNodeModelName(data["nodeModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withReleaseConsumeActions(data.releaseConsumeActions ?
                data.releaseConsumeActions.map((item: {[key: string]: any}) => {
                    return Gs2SkillTree.ConsumeAction.fromDict(item);
                }
            ) : [])
            .withRestrainReturnRate(data["restrainReturnRate"])
            .withPremiseNodeNames(data.premiseNodeNames ?
                data.premiseNodeNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "nodeModelName": this.getNodeModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "releaseConsumeActions": this.getReleaseConsumeActions() ?
                this.getReleaseConsumeActions()!.map((item: Gs2SkillTree.ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "restrainReturnRate": this.getRestrainReturnRate(),
            "premiseNodeNames": this.getPremiseNodeNames() ?
                this.getPremiseNodeNames()!.map((item: string) => {
                    return item;
                }
            ) : [],
        };
    }
}