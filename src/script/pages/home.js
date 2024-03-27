import notes from "../data/notes.js";

const home = () => {
  const listNote = document.querySelector(".note-list");
  const inputSeacrh = document.getElementById(".search");
  console.log(inputSeacrh);

  // console.log("hello home");
  // console.log(listNote);

  const showNote = () => {
    const result = notes.getAll();
    // console.log(result);
    displayNote(result);
  };

  const displayNote = (getNotes) => {
    const notesItem = getNotes.map((note) => {
      return `
        <div class="note-item" id="note-${note.id}">
              <div class="note-header">
                <h1 class="note-item-title">${note.title}</h1>
                <p class="note-item-date">${note.createdAt}</p>

                <p class="note-item-body">
                  ${note.body}
                </p>
              </div>
            </div>
        `;
    });
    listNote.innerHTML = notesItem.join("");
  };

  showNote();
};

export default home;
