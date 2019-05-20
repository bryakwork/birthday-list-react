import React, {useState} from "react";
import RecordEditor from "./RecordEditor";
import RecordDataViewer from "./RecordDataViewer";

export interface RecordViewerProps {
    record: any;
    onCancelViewing: () => void;
    onRemoveItem: (id: string) => void;
}

const ExpandedRecordDisplay: React.FC<RecordViewerProps> = (props) => {
    const [isEditing, setEditing] = useState(false);
    return <div> {isEditing
        ? <RecordEditor
            record={props.record}
            onFinishEditing={() => {
                setEditing(false)
            }}
        />
        : <RecordDataViewer
            record={props.record}
            onCancelViewing={props.onCancelViewing}
            onRemoveItem={props.onRemoveItem}
            onStartEditing={() => {
                setEditing(true)
            }}
        />}
    </div>
};
export default ExpandedRecordDisplay;
