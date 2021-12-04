let textarea = document.getElementById('textarea');
    textarea.addEventListener("input", () => {

        let str = textarea.value;
        // console.log(str);
        // console.log(str.length);
        str = str.trim();
        str = str.replace(/\s+/g, " ");
        let length = str.length;
        // console.log(str.length);
        let spaces = str.match(/ /g);
        // console.log(spaces.length);
        let space_length = 0;
        if (spaces == null) {
            space_length = 0;
        }
        else {
            space_length = spaces.length;
        }
        console.log("no. of letters are:" + (length - space_length));
        console.log("no. of words are:" + (space_length + 1));



        let analysis = document.getElementById("analysis");
        analysis.innerText = `no. of letters are ${length - space_length} and ${space_length + 1} words`;
        let preview = document.getElementById("preview");
        preview.innerText = str;
        let upper = document.getElementById("upper");
        upper.addEventListener("click", () => {
            str = str.toUpperCase();
            textarea.value = str;
            preview.innerText = str;

        })
        let lower = document.getElementById("lower");
        lower.addEventListener("click", () => {
            str = str.toLowerCase();
            textarea.value = str;
            preview.innerText = str;

        })
    })

    let checkbox=document.getElementById("checkbox");

    checkbox.addEventListener("click",()=>{
        document.body.classList.toggle("dark");
    })
  
    // let light=document.addEventListener("click",()=>{
    //     document.body.classList.toggle('dark');
    // })
   