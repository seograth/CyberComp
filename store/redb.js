import * as SQlite from 'expo-sqlite';

const redb = SQlite.openDatabase("redb");

function armorTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists armor (id integer primary key not null, name text, headValue integer, bodyValue integer, notes text);`
        );
    });
}

function weaponTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists weapon (id integer primary key not null, name text, weapDMG text, notes text);`
        );
    });
}

function itemTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists item (id integer primary key not null, name text, description text, notes text);`
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
                playInstrument integer);`
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

function charTable() {
    redb.transaction(tx => {
        tx.executeSql(
            `create table if not exists char (id integer primary key not null, startingHp integer, woundedHp integer, deathSave integer);`
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
