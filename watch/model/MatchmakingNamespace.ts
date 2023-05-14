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
import MatchmakingDurationSeconds from './MatchmakingDurationSeconds';
import MatchmakingStatistics from './MatchmakingStatistics';
import MatchmakingRole from './MatchmakingRole';

export default class MatchmakingNamespace implements IModel {
    private namespaceName: string|null = null;
    private statistics: MatchmakingStatistics|null = null;
    private role: MatchmakingRole[]|null = null;
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
    public getStatistics(): MatchmakingStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MatchmakingStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MatchmakingStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getRole(): MatchmakingRole[]|null {
        return this.role;
    }
    public setRole(role: MatchmakingRole[]|null) {
        this.role = role;
        return this;
    }
    public withRole(role: MatchmakingRole[]|null): this {
        this.role = role;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespace()
            .withNamespaceName(data["namespaceName"])
            .withStatistics(MatchmakingStatistics.fromDict(data["statistics"]))
            .withRole(data.role ?
                data.role.map((item: {[key: string]: any}) => {
                    return MatchmakingRole.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "statistics": this.getStatistics()?.toDict(),
            "role": this.getRole() ?
                this.getRole()!.map((item: MatchmakingRole) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
