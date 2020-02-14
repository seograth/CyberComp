import * as SQlite from 'expo-sqlite';

const redb = SQlite.openDatabase("redb");

function armorTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists armor (id integer primary key not null, name text, headValue integer, bodyValue integer, notes text, foreign key(id) references stat(id));`
        );
    });
}

function weaponTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists weapon (id integer primary key not null, name text, weapDMG text, notes text, foreign key(id) references stat(id));`
        );
    });
}

function itemTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists item (id integer primary key not null, name text, description text, notes text, foreign key(id) references stat(id));`
        );
    });
}

function skillTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists skill (id integer primary key not null, perception integer, tracking integer, education integer, 
                localExpert integer, interface integer, marksmanship integer, driving integer, evasion integer, athletics integer, 
                stealth integer, brawling integer, meleeWeapon integer, basicTech integer, cyberTech integer, firstAid integer, bribery integer, 
                interrogation integer, persuasion integer, concetration integer, conversation integer, humanPerception integer, 
                playInstrument integer, foreign key(id) references stat(id));`
        );
    });
}

function statTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists stat (id integer primary key not null, name text, class text, int integer, ref integer, 
                dex integer, tech integer, cool integer, will integer, luck integer, move integer, body integer, emp integer);`
        );
    });
}

export function statInsert(char) {
    redb.transaction(tx => {
        tx.executeSql(
            `insert into stat (name, class, int, ref, dex, tech, cool, will, luck , move, body, emp) values (${char.name}, 
                ${char.class}, ${char.int}, ${char.ref}, ${char.dex}, ${char.tech}, ${char.cool}, ${char.will}, ${char.luck}, ${char.move}, ${char.body}, 
                ${char.emp})`
        );
    })
}

function charTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists char (id integer primary key not null, startingHp integer, woundedHp integer, deathSave integer, foreign key(id) references stat(id));`
        );
    });
}

export function initDB() {
    statTable();
    skillTable();
    charTable();
    armorTable();
    weaponTable();
    itemTable();
}
