"use strict"; 

class Person {
    constructor(firstNames,lastName,nickName,yearOfBirth) {
        this._firstNames = firstNames;
        this._lastName = lastName;
        this._nickName = nickName;
        this._yearOfBirth = yearOfBirth;
        console.log("new Person created", this);
    }

    //_firstNames;
    get firstNames() {
        return this._firstNames;
    }
    set firstNames(value) {
        this._firstNames = value;
    }

    //_lastName;
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    //_nickName;
    get nickName() {
        return this._nickName;
    }
    set nickName(value) {
        this._nickName = value;
    }

    //_yearOfBirth;
    get yearOfBirth() {
        return this._yearOfBirth;
    }
    set yearOfBirth(value) {
        this._yearOfBirth = value;
    }

}

var person = new Person("Hessu", "Hopo", "hese","1.5.1945");

console.log(person.nickName);

class Urheilija extends Person {
    constructor (firstNames,lastName,nickName,yearOfBirth, omaPaino, omaLaji, omaSaavutus, omaKuva) {
    super (firstNames,lastName,nickName,yearOfBirth);
    this._omaPaino = omaPaino;
    this._omaLaji = omaLaji;
    this._omaSaavutus = omaSaavutus;
    this._omaKuva = omaKuva;
    console.log("new Person created", this);

    }
    

    //_firstNames;
    get omaPaino() {
        return this._omaPaino;
    }
    set omaPaino(value) {
        this._omaPaino = value;
    }

    get omaLaji() {
        return this._omaLaji;
    }
    set omaLaji(value) {
        this._omaLaji = value;
    }

    get omaSaavutus() {
        return this._omaSaavutus;
    }
    set omaSaavutus(value) {
        this._omaSaavutus = value;
    }
    get omaKuva() {
        return this._omaKuva;
    }
    set omaKuva(value) {
        this._omaKuva = value;
    }
    

}

var urheilija = new Urheilija ("Mikki", "Hiiri", "mike","6.8.1985", "60kg" , "jalkapallo", "hattutemppu" , "wwww.mikkipalloilija.fi");
