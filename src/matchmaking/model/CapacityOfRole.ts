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

import IModel from '@/gs2/core/interface/IModel';
import { Attribute } from './Attribute';
import { Player } from './Player';

export class CapacityOfRole implements IModel {
    private roleName: string|null = null;
    private roleAliases: string[]|null = null;
    private capacity: number|null = null;
    private participants: Player[]|null = null;

    public getRoleName(): string|null {
        return this.roleName;
    }

    public setRoleName(roleName: string|null) {
        this.roleName = roleName;
        return this;
    }

    public withRoleName(roleName: string|null): this {
        this.roleName = roleName;
        return this;
    }

    public getRoleAliases(): string[]|null {
        return this.roleAliases;
    }

    public setRoleAliases(roleAliases: string[]|null) {
        this.roleAliases = roleAliases;
        return this;
    }

    public withRoleAliases(roleAliases: string[]|null): this {
        this.roleAliases = roleAliases;
        return this;
    }

    public getCapacity(): number|null {
        return this.capacity;
    }

    public setCapacity(capacity: number|null) {
        this.capacity = capacity;
        return this;
    }

    public withCapacity(capacity: number|null): this {
        this.capacity = capacity;
        return this;
    }

    public getParticipants(): Player[]|null {
        return this.participants;
    }

    public setParticipants(participants: Player[]|null) {
        this.participants = participants;
        return this;
    }

    public withParticipants(participants: Player[]|null): this {
        this.participants = participants;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CapacityOfRole|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CapacityOfRole()
            .withRoleName(data["roleName"])
            .withRoleAliases(data.roleAliases ?
                data.roleAliases.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCapacity(data["capacity"])
            .withParticipants(data.participants ?
                data.participants.map((item: {[key: string]: any}) => {
                    return Player.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "roleName": this.getRoleName(),
            "roleAliases": this.getRoleAliases() ?
                this.getRoleAliases()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "capacity": this.getCapacity(),
            "participants": this.getParticipants() ?
                this.getParticipants()!.map((item: Player) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
