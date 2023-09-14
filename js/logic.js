const addbtn = document.querySelector("#addNote");
const main = document.querySelector(".main");


addbtn.addEventListener("click", ()=>{
    addNote();
})
const addNote = () =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="fas fa-trash"></i>
        <i class="fas fa-save"></i>
    </div>
    <textarea name="test" id="text"></textarea>
    `;
    main.appendChild(note)
}