const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("New notes added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }

  saveNotes(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse(`Note ${title} removed`));
  } else {
    console.log(chalk.red.inverse(`Note ${title} not found`));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(chalk.blue.inverse("Your notes: "));
    notes.forEach((note) => {
      console.log("- ", chalk.blue(note.title));
    });
  } else {
    console.log(chalk.red.inverse("You don't currently have any notes"));
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.blue.inverse("- ", noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};


const saveNotes = (notes) => {
  debugger;
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
