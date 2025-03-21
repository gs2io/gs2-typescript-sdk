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

import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model'

export default class SetByStampSheetResult implements IResult {
    private item: Gs2Mission.Counter|null = null;
    private old: Gs2Mission.Counter|null = null;
    private changedCompletes: Gs2Mission.Complete[]|null = null;

    public getItem(): Gs2Mission.Counter|null {
        return this.item;
    }

    public setItem(item: Gs2Mission.Counter|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Mission.Counter|null): this {
        this.item = item;
        return this;
    }

    public getOld(): Gs2Mission.Counter|null {
        return this.old;
    }

    public setOld(old: Gs2Mission.Counter|null) {
        this.old = old;
        return this;
    }

    public withOld(old: Gs2Mission.Counter|null): this {
        this.old = old;
        return this;
    }

    public getChangedCompletes(): Gs2Mission.Complete[]|null {
        return this.changedCompletes;
    }

    public setChangedCompletes(changedCompletes: Gs2Mission.Complete[]|null) {
        this.changedCompletes = changedCompletes;
        return this;
    }

    public withChangedCompletes(changedCompletes: Gs2Mission.Complete[]|null): this {
        this.changedCompletes = changedCompletes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SetByStampSheetResult {
        return new SetByStampSheetResult()
            .withItem(Gs2Mission.Counter.fromDict(data["item"]))
            .withOld(Gs2Mission.Counter.fromDict(data["old"]))
            .withChangedCompletes(data.changedCompletes ?
                data.changedCompletes.map((item: {[key: string]: any}) => {
                    return Gs2Mission.Complete.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "old": this.getOld()?.toDict(),
            "changedCompletes": this.getChangedCompletes() ?
                this.getChangedCompletes()!.map((item: Gs2Mission.Complete) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
