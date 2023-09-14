const addbtn = document.querySelector("#addNote");
const main = document.querySelector(".main");


addbtn.addEventListener("click", ()=>{
    addNote();
})
const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="fas fa-trash trash"></i>
        <i class="fas fa-save save"></i>
    </div>
    <textarea name="test" id="text" >${text}</textarea>
    `;
    // =========adding delte note query================
    
    note.querySelector(".trash").addEventListener("click",()=>{
        note.remove();
        saveNotes();
    })
    // =========save note query================
    
    note.querySelector(".save").addEventListener("click",()=>{
        saveNotes();
    })

    main.appendChild(note);
    saveNotes();
}
const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((notedata)=>{
        data.push(notedata.value)
    })
    if(data.length === 0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}

// ==============function for show localStorage data=======

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes == null){
            addNote()
        }else{
            lsnotes.forEach((data)=>{
                addNote(data);
            })
        }
    }
)()
