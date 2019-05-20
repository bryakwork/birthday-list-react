import * as React from "react";
import {ChangeEvent, useState} from "react";
import Button from "react-bootstrap/Button";


export interface SearchBarProps {
    onSearch: (name: string) => void;
    onCancelSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [value, setValue] = useState('');
    return <div>
        <input type={'text'} value={value} onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        }}/>
        <Button size={'sm'} variant={"outline-primary"} onClick={()=>{props.onSearch(value)}}>Search</Button>
        <Button size={'sm'} variant={"outline-danger"} onClick={()=>{props.onCancelSearch()}}>Cancel</Button>
    </div>
};
export default SearchBar;
