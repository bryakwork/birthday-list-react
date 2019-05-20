import {observer} from "mobx-react-lite";
import * as React from "react";
import Button from "react-bootstrap/Button";

export interface RecordEditorProps {
    record: any;
    onFinishEditing: ()=>void;
}

const RecordEditorRenderer: React.FC<RecordEditorProps> = (props)=> {
    const {firstName, lastName, birthday} = props.record;
    const parsedDate = new Date(birthday).toISOString().slice(0,-14);
    return <div>
        <input className={'form-control'} style={{width:'19rem'}} type={'text'} value={firstName} onChange={event =>  props.record.setFirstName(event.target.value)}/>
        <input className={'form-control'} type={'text'} style={{width:'19rem'}} value={lastName} onChange={event =>  props.record.setLastName(event.target.value)}/>
        <input className={'form-control'} type={'date'} style={{width:'19rem'}} value={parsedDate} onChange={event =>  props.record.setBirthday(new Date(event.target.value).getTime())}/>
        <Button size={'sm'} variant={"outline-primary"}  onClick={props.onFinishEditing}>OK</Button>
    </div>
};

const RecordEditor = observer(RecordEditorRenderer);
export default RecordEditor;
