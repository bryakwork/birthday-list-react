import {observer} from "mobx-react-lite";
import React from "react";
import Button from "react-bootstrap/Button";

export interface RecordDataViewerProps {
    onCancelViewing: () => void;
    onStartEditing: () => void;
    onRemoveItem: (id: string) => void;
    record: any;
}

const RecordDataViewerRenderer: React.FC<RecordDataViewerProps> = (props) => {
    const {firstName, lastName, birthday} = props.record;
    const parsedDate = new Date(birthday).toISOString().slice(0,-14);
    return (
        <div>
            <div>
                <input className={'form-control'} style={{width:'19rem'}} type={'text'} value={firstName} disabled/>
                <input className={'form-control'} style={{width:'19rem'}} type={'text'} value={lastName} disabled/>
                <input className={'form-control'} style={{width:'19rem'}} type={'date'} value={parsedDate} disabled/>
            </div>
            <Button size={'sm'} variant={"outline-primary"} onClick={props.onCancelViewing}>
                Back
            </Button>
            <Button size={'sm'} variant={"outline-primary"} onClick={props.onStartEditing}>
                Edit
            </Button>
            <Button size={'sm'} variant={"outline-danger"} onClick={() => {
                props.onRemoveItem(props.record.id)
            }}>
                Remove
            </Button>
        </div>
    );
};

const RecordDataViewer = observer(RecordDataViewerRenderer);
export default RecordDataViewer;
