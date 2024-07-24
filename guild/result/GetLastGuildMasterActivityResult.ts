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
import * as Gs2Guild from '../model'

export default class GetLastGuildMasterActivityResult implements IResult {
    private item: Gs2Guild.LastGuildMasterActivity|null = null;
    private guild: Gs2Guild.Guild|null = null;

    public getItem(): Gs2Guild.LastGuildMasterActivity|null {
        return this.item;
    }

    public setItem(item: Gs2Guild.LastGuildMasterActivity|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Guild.LastGuildMasterActivity|null): this {
        this.item = item;
        return this;
    }

    public getGuild(): Gs2Guild.Guild|null {
        return this.guild;
    }

    public setGuild(guild: Gs2Guild.Guild|null) {
        this.guild = guild;
        return this;
    }

    public withGuild(guild: Gs2Guild.Guild|null): this {
        this.guild = guild;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetLastGuildMasterActivityResult {
        return new GetLastGuildMasterActivityResult()
            .withItem(Gs2Guild.LastGuildMasterActivity.fromDict(data["item"]))
            .withGuild(Gs2Guild.Guild.fromDict(data["guild"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "guild": this.getGuild()?.toDict(),
        };
    }
}
