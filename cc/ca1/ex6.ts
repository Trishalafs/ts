interface Readable{
    read():void;
}

interface Writeable{
    write():void;
}

class Book implements Readable,Writeable{
    read(){
        console.log("The is book is read to read");
    }
    write(){
        console.log("The book is read to be written");
    }
}

const book=new Book();

book.read();
book.write();