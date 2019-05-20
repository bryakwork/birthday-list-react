import * as React from "react";
import {IBirthdayRecord} from "../model";
import Card from "react-bootstrap/Card";
import {ReactNode} from "react";
import {observer} from "mobx-react-lite";

export interface BirthdayRecordProps {
    record: IBirthdayRecord;
    onRecordSelect: (id: string) => void;
}

export function unixTimeToDate(date: number): ReactNode {
    const dateObject: Date = new Date(date);
    return (<span>{`${dateObject.getDate()} ${dateObject.getMonth() + 1} ${dateObject.getFullYear()}`}</span>)
}

const BirthdayRecordRender: React.FC<BirthdayRecordProps> = (props) => {
    const {id, firstName, lastName, birthday} = props.record;
    const nextAge = Math.ceil((Date.now() - birthday) / 31622400000); // seconds in year
    return <Card style={{width: '19rem', cursor: 'pointer'}}
                 onDoubleClick={() => {
                     props.onRecordSelect(id)
                 }}>
        <Card.Body>
            <Card.Title>
                {`${firstName} ${lastName}`}
            </Card.Title>
            <Card.Subtitle>
                {unixTimeToDate(birthday)}
                <br/>
                {`Going to be ${nextAge} years old`}
            </Card.Subtitle>
        </Card.Body>
    </Card>;
};
const BirthdayRecordView: React.FC<BirthdayRecordProps> = observer(BirthdayRecordRender);
export default BirthdayRecordView;
