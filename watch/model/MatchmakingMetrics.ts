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
import MatchmakingNamespace from './MatchmakingNamespace';

export default class MatchmakingMetrics implements IModel {
    private namespaces: MatchmakingNamespace[]|null = null;
    public getNamespaces(): MatchmakingNamespace[]|null {
        return this.namespaces;
    }
    public setNamespaces(namespaces: MatchmakingNamespace[]|null) {
        this.namespaces = namespaces;
        return this;
    }
    public withNamespaces(namespaces: MatchmakingNamespace[]|null): this {
        this.namespaces = namespaces;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingMetrics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingMetrics()
            .withNamespaces(data.namespaces ?
                data.namespaces.map((item: {[key: string]: any}) => {
                    return MatchmakingNamespace.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces()!.map((item: MatchmakingNamespace) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
