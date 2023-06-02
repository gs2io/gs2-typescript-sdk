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

export default class MissionMissionGroupModelStatistics implements IModel {
    private receive: number|null = null;
    public getReceive(): number|null {
        return this.receive;
    }
    public setReceive(receive: number|null) {
        this.receive = receive;
        return this;
    }
    public withReceive(receive: number|null): this {
        this.receive = receive;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MissionMissionGroupModelStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionGroupModelStatistics()
            .withReceive(data["receive"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "receive": this.getReceive(),
        };
    }
}
