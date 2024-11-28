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

import * as Gs2SkillTree from '../../skillTree/model'
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:skillTree:{namespaceName}:model:{nodeModelName}";

export default class NodeModel implements IModel {
    private nodeModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private releaseVerifyActions: Gs2SkillTree.VerifyAction[]|null = null;
    private releaseConsumeActions: Gs2SkillTree.ConsumeAction[]|null = null;
    private returnAcquireActions: Gs2SkillTree.AcquireAction[]|null = null;
    private restrainReturnRate: number|null = null;
    private premiseNodeNames: string[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{nodeModelName}', '.*')
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
            .replace('{nodeModelName}', '.*')
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
            .replace('{nodeModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNodeModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{nodeModelName}', '(.*)')
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
        if (this.getNodeModelName(grn) == null || this.getNodeModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        nodeModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{nodeModelName}', nodeModelName ?? '');
    }
    public getNodeModelId(): string|null {
        return this.nodeModelId;
    }
    public setNodeModelId(nodeModelId: string|null) {
        this.nodeModelId = nodeModelId;
        return this;
    }
    public withNodeModelId(nodeModelId: string|null): this {
        this.nodeModelId = nodeModelId;
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
    public getReleaseVerifyActions(): Gs2SkillTree.VerifyAction[]|null {
        return this.releaseVerifyActions;
    }
    public setReleaseVerifyActions(releaseVerifyActions: Gs2SkillTree.VerifyAction[]|null) {
        this.releaseVerifyActions = releaseVerifyActions;
        return this;
    }
    public withReleaseVerifyActions(releaseVerifyActions: Gs2SkillTree.VerifyAction[]|null): this {
        this.releaseVerifyActions = releaseVerifyActions;
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
    public getReturnAcquireActions(): Gs2SkillTree.AcquireAction[]|null {
        return this.returnAcquireActions;
    }
    public setReturnAcquireActions(returnAcquireActions: Gs2SkillTree.AcquireAction[]|null) {
        this.returnAcquireActions = returnAcquireActions;
        return this;
    }
    public withReturnAcquireActions(returnAcquireActions: Gs2SkillTree.AcquireAction[]|null): this {
        this.returnAcquireActions = returnAcquireActions;
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

    public static fromDict(data: {[key: string]: any}): NodeModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new NodeModel()
            .withNodeModelId(data["nodeModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReleaseVerifyActions(data.releaseVerifyActions ?
                data.releaseVerifyActions.map((item: {[key: string]: any}) => {
                    return Gs2SkillTree.VerifyAction.fromDict(item);
                }
            ) : null)
            .withReleaseConsumeActions(data.releaseConsumeActions ?
                data.releaseConsumeActions.map((item: {[key: string]: any}) => {
                    return Gs2SkillTree.ConsumeAction.fromDict(item);
                }
            ) : null)
            .withReturnAcquireActions(data.returnAcquireActions ?
                data.returnAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2SkillTree.AcquireAction.fromDict(item);
                }
            ) : null)
            .withRestrainReturnRate(data["restrainReturnRate"])
            .withPremiseNodeNames(data.premiseNodeNames ?
                data.premiseNodeNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "nodeModelId": this.getNodeModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "releaseVerifyActions": this.getReleaseVerifyActions() ?
                this.getReleaseVerifyActions()!.map((item: Gs2SkillTree.VerifyAction) => {
                    return item.toDict();
                }
            ) : null,
            "releaseConsumeActions": this.getReleaseConsumeActions() ?
                this.getReleaseConsumeActions()!.map((item: Gs2SkillTree.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
            "returnAcquireActions": this.getReturnAcquireActions() ?
                this.getReturnAcquireActions()!.map((item: Gs2SkillTree.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "restrainReturnRate": this.getRestrainReturnRate(),
            "premiseNodeNames": this.getPremiseNodeNames() ?
                this.getPremiseNodeNames()!.map((item: string) => {
                    return item;
                }
            ) : null,
        };
    }
}
