import * as React from "react";
import {IBirthdayRecord} from "../model";
import {observer} from "mobx-react-lite";
import BirthdayRecordView from "./BirthdayRecord";

export interface BirthdayListProps {
    birthdays: IBirthdayRecord[];

    onRecordSelect(id: string): void;
}

const BirthdayListRender: React.FC<BirthdayListProps> = (props) => {
    return <div>
        {props.birthdays.map((record,index) => <BirthdayRecordView onRecordSelect={props.onRecordSelect} record={record} key={index}/>)}
    </div>
};
const BirthdayList: React.FC<BirthdayListProps> = observer(BirthdayListRender);
export default BirthdayList;
