import React, {useState} from 'react';
import SearchBar from "./components/SearchBar";
import BirthdayList from "./components/BirthdayList";
import ExpandedRecordDisplay from "./components/ExpandedRecordDisplay";
import {observer} from "mobx-react-lite";

export interface AppProps {
    store: any; //FIXME find types for mobx-state-tree store
}

const App: React.FC<AppProps> = observer((props) => {
    const [selectedItemId, setSelectedItemId] = useState('');
    const [searchValue, setSearchValue] = useState('');

    return <div>
        {selectedItemId !== ''
            ?
            <ExpandedRecordDisplay
                record={props.store.getRecordById(selectedItemId)}
                onCancelViewing={() => {
                    setSelectedItemId('')
                }}
                onRemoveItem={(id: string) => {
                    props.store.removeRecord(id);
                    setSelectedItemId('')
                }}
            />
            :
            <div>
                <SearchBar onSearch={(value) => {
                    setSearchValue(value);
                }} onCancelSearch={() => {
                    setSearchValue('');
                }}/>
                <BirthdayList
                    onRecordSelect={(value) => {
                        setSelectedItemId(value);
                    }}
                    birthdays={searchValue === ''
                        ? props.store.sortedRecords
                        : props.store.sortedRecordsWithName(searchValue)
                    }/>
            </div>
        }
    </div>
});


export default App;
