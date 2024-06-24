import notes from "../data/notes.js";

const home = () => {
  const listNote = document.querySelector(".note-list");
  const inputSearch = document.getElementById("search");
  console.log(inputSearch);

  const showNote = () => {
    const result = notes.getAll();
    displayNote(result);
    // addData();
  };

  const displayNote = (getNotes) => {
    const notesItem = getNotes.map((note) => {
      const formattedDate = formatDate(note.createdAt); // Mengubah format tanggal
      return `
        <div class="note-item" id="note-${note.id}">
          <div class="note-header">
            <h1 class="note-item-title">${note.title}</h1>
            <p class="note-item-date">${formattedDate}</p> <!-- Menampilkan tanggal dengan format yang telah diubah -->
            <p class="note-item-body">${note.body}</p>
          </div>
        </div>
      `;
    });
    listNote.innerHTML = notesItem.join("");
  };

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const addData = () => {
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const ObjectNote = {
      id: new Date().getTime().toString(),
      title: title,
      body: body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    const data = notes.getAll();
    // console.log(data);
    data.unshift(ObjectNote);
    // console.log(data);
    displayNote(data);
  };

  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addData();

    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
  });

  showNote();
};

export default home;
