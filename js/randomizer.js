let NB_elementos = document.getElementsByClassName("randomizer")
const NB_randomizer_list_extra =  [">", "s", "z"]
const NB_randomizer_list_top = ["X", ";", ":", "=", "?", "|", "!", "B", "8"]
const NB_randomizer_list_bottom = ["D", "}", "]", ")", "/", "P", "s", "3", "v", ">"]
const NB_randomizer_list_special = ["'~`", ";-;", ":3c", "UWU", "OWO", "^q^", "^3^", "T.T", "XXDD", "'v'"]

// Source - https://stackoverflow.com/a/24137301
// Posted by Dino Reic, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-04, License - CC BY-SA 4.0

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
setInterval(() => {
    for (let element of NB_elementos) {
        setTimeout(function(){
            // console.log("1")
            if (Math.random() < 0.1) {
            // console.log("11")
                element.textContent = NB_randomizer_list_special.random()
            } else {
                // console.log("12")
                if (Math.random() < 0.1) {
                    // console.log("121")
                    let temp = NB_randomizer_list_top.random()
                    let temp_2 = NB_randomizer_list_bottom.random()
                    element.textContent = NB_randomizer_list_extra.random() + temp + temp + temp_2 + temp_2
                } else {
                    // console.log("122")
                    let temp = NB_randomizer_list_top.random()
                    let temp_2 = NB_randomizer_list_bottom.random()
                    element.textContent = temp+temp+temp_2+temp_2
                    // console.log("DONE")
                }
            }
        }, Math.random() * 10000)
    };
}, 10000);
for (let element of NB_elementos) {
            // console.log("1")
            if (Math.random() < 0.1) {
            // console.log("11")
                element.textContent = NB_randomizer_list_special.random()
            } else {
                // console.log("12")
                if (Math.random() < 0.1) {
                    // console.log("121")
                    let temp = NB_randomizer_list_top.random()
                    let temp_2 = NB_randomizer_list_bottom.random()
                    element.textContent = NB_randomizer_list_extra.random() + temp + temp + temp_2 + temp_2
                } else {
                    // console.log("122")
                    let temp = NB_randomizer_list_top.random()
                    let temp_2 = NB_randomizer_list_bottom.random()
                    element.textContent = temp+temp+temp_2+temp_2
                    // console.log("DONE")
                }
            }
    };