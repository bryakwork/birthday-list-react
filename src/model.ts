import {types} from "mobx-state-tree";
import * as _ from 'lodash';
import {values} from "mobx";


export interface IBirthdayRecord {
    id: string;
    firstName: string;
    lastName: string;
    birthday: number; // UNIX Timestamp
}

export const BirthdayRecord = types.model({
    id: types.string,
    firstName: types.string,
    lastName: types.string,
    birthday: types.number, // UNIX Timestamp
}).actions(self => ({
    setFirstName(newName: string) {
        self.firstName = newName
    },
    setLastName(newName: string) {
        self.lastName = newName
    },
    setBirthday(newBirthday: number) {
        self.birthday = newBirthday
    },
}));

function sortRecordsByClosestBirthday(records: IBirthdayRecord[]) {
    return _.sortBy(records, (record: IBirthdayRecord) => {
        const birthdayDate = new Date(record.birthday);
        const dateNow = new Date();
        birthdayDate.setFullYear(dateNow.getFullYear());
        const result = Math.floor((birthdayDate.getTime() - dateNow.getTime()) /(1000 * 60 * 60 * 24));
        console.log(result, birthdayDate);
        return result < 0 ? result * -1000 : result; // FIXME Find better solution
    })
}

const BirthdayStore = types
    .model("BirthdayStore", {
        records: types.map(BirthdayRecord),
    })
    .views(self => {
        return {
            get sortedRecords(): IBirthdayRecord[] {
                const recordsArray = [...self.records.values()];
                return sortRecordsByClosestBirthday(recordsArray);

            },
            sortedRecordsWithName(name: string): IBirthdayRecord[] {
                return values(self.records).filter(record => record.firstName.toLowerCase().includes(name.toLowerCase())
                    || record.lastName.toLowerCase().includes(name.toLowerCase()))
            },
            getRecordById(id: string) {
                return values(self.records).find(item => item.id === id)
            }
        }
    })
    .actions(self => {
        return {
            addRecord(record: IBirthdayRecord) {
                self.records.set(_.uniqueId(), record);
            },
            removeRecord(id: string) {
                self.records.delete(id);
            }
        }
    });
export default BirthdayStore;
