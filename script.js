// Part 1-1
const tilesOne1 = document.querySelectorAll(".tile-p1-1");
const slotsOne1 = document.querySelectorAll(".dropzone-p1-1");
const checkOne1 = document.getElementById("check-p1-1");
const resetOne1 = document.getElementById("reset-p1-1");
const feedbackOne1 = document.getElementById("feedback-p1-1");
const bankOne1 = document.getElementById("tiles-p1-1");
let draggedOne1 = null;

// tile dragstart/end
tilesOne1.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedOne1 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedOne1 = null;
    });
});

// slot dragover/drop
slotsOne1.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

        if(!draggedOne1) return;

        // allow only one tile in slot
        const existingTile = slot.querySelector(".tile-p1-1");

        if(existingTile) {
            bankOne1.appendChild(existingTile);
        };

        slot.appendChild(draggedOne1);
        feedbackOne1.textContent = "";
    });
});

// check answers
checkOne1.addEventListener("click", () => {
    let allCorrect = true;

    slotsOne1.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p1-1");
        
        // must have a tile
        if(!tile) {
            feedbackOne1.textContent = "One or more tiles are missing. Please fill all tile slots.";
            feedbackOne1.style.color = "red";
        };

        // tile must match slot answer
        const tileName = tile.dataset.name;
        
        if(tileName !== slotAnswer) {
            allCorrect = false;
        };

        if(allCorrect) {
            feedbackOne1.textContent = "✅　正解（せいかい）！";
            feedbackOne1.style.color = "green";
        } else {
            feedbackOne1.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. Try again!";
            feedbackOne1.style.color = "red";
        };
    });
});


// reset
resetOne1.addEventListener("click", () => {
        document.querySelectorAll(".dropzone-p1-1 .tile-p1-1").forEach(tile => {
            bankOne1.appendChild(tile);
        });
        feedbackOne1.textContent = "";
    });


// Part 1-2
const tilesOne2 = document.querySelectorAll(".tile-p1-2");
const slotsOne2 = document.querySelectorAll(".dropzone-p1-2");
const checkOne2 = document.getElementById("check-p1-2");
const resetOne2 = document.getElementById("reset-p1-2");
const feedbackOne2 = document.getElementById("feedback-p1-2");
const bankOne2 = document.getElementById("tiles-p1-2");
let draggedOne2 = null;

// tile dragstart/end
tilesOne2.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedOne2 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedOne2 = null;
    });
});

// slot dragover/dragleave/drop
slotsOne2.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

    if(!draggedOne2) return;

    // make sure there is no tile already
    const existingTile = slot.querySelector(".tile-p1-2");
    if(existingTile) {
        bankOne2.appendChild(existingTile);
    };
    slot.appendChild(draggedOne2);
    feedbackOne2.textContent = "";
});
});

// check answers
checkOne2.addEventListener("click", () => {
    let allCorrect = true;

    slotsOne2.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p1-2");

        // must have a tile
        if(!tile) {
            feedbackOne2.textContent = "One or more tiles are missing. Please fill all tile slots.";
            feedbackOne2.style.color = "red";
        }

        // slot answer must match tile name
        const tileName = tile.dataset.name;
        if(tileName !== slotAnswer) {
            allCorrect = false;
        }
        if(allCorrect) {
            feedbackOne2.textContent = "✅　正解（せいかい）！";
            feedbackOne2.style.color = "green";
        } else {
            feedbackOne2.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. Try again!";
            feedbackOne2.style.color = "red";
        };
    });
});

// reset
resetOne2.addEventListener("click", () => {
    document.querySelectorAll(".dropzone-p1-2 .tile-p1-2").forEach(tile => {
        bankOne2.appendChild(tile);
    });
    feedbackOne2.textContent = "";
});

// Part2 Q1
const tilesTwo1 = document.querySelectorAll(".tile-p2");
const slotsTwo1 = document.querySelectorAll(".p2-1");
const checkTwo1 = document.getElementById("check-p2-1");
const resetTwo1 = document.getElementById("reset-p2-1");
const feedbackTwo1 = document.getElementById("feedback-p2-1");
const bankTopic = document.getElementById("topic");
const bankParticle = document.getElementById("particle");
const bankNoun = document.getElementById("noun");
const bankVerb = document.getElementById("verb");
let draggedTwo1 = null;

// tile dragstart/end
tilesTwo1.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedTwo1 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedTwo1 = null;
    });
});

// slot dragover/dragleave/drop
slotsTwo1.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

        // make sure there are no preexisting tiles
        let existingTile = slot.querySelector(".tile-p2");
        if(existingTile) {
            if(existingTile.dataset.type=="topic") {
                bankTopic.appendChild(existingTile);
            } else if(existingTile.dataset.type=="particle") {
                bankParticle.appendChild(existingTile);
            } else if(existingTile.dataset.type=="noun") {
                bankNoun.appendChild(existingTile);
            } else {
                bankVerb.appendChild(existingTile);
            };
        };
        slot.appendChild(draggedTwo1);
        feedbackTwo1.textContent = "";
    })
})

// check answer
checkTwo1.addEventListener("click", () => {
    let allCorrect = true;

    slotsTwo1.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p2");
        
        if(!tile) {
            feedbackTwo1.textContent = "One or more tiles are missing. Please fill all tile slots."
            feedbackTwo1.style.color = "red";
        }

        const tileName = tile.dataset.name;
        if(slotAnswer !== tileName) {
            allCorrect = false;
        }
        if(allCorrect) {
            feedbackTwo1.textContent = "✅　正解（せいかい）！ The woman will go to the university/The woman goes to the university.";
            feedbackTwo1.style.color = "green";
        } else {
            feedbackTwo1.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. The word order should be <Topic + Particle + Object/Destination + Particle + Verb>. See example sentences in Chapter 4 (4.4.5).";
            feedbackTwo1.style.color = "red";
        }
})
})

// reset
resetTwo1.addEventListener("click", () => {
    document.querySelectorAll(".p2-1 .tile-p2").forEach(tile => {
        if(tile.dataset.type=="topic") {
                bankTopic.appendChild(tile);
            } else if(tile.dataset.type=="particle") {
                bankParticle.appendChild(tile);
            } else if(tile.dataset.type=="noun") {
                bankNoun.appendChild(tile);
            } else {
                bankVerb.appendChild(tile);
            };
    });
    feedbackTwo1.textContent = "";
});

// Part2 Q2
const tilesTwo2 = document.querySelectorAll(".tile-p2");
const slotsTwo2 = document.querySelectorAll(".p2-2");
const checkTwo2 = document.getElementById("check-p2-2");
const resetTwo2 = document.getElementById("reset-p2-2");
const feedbackTwo2 = document.getElementById("feedback-p2-2");
let draggedTwo2 = null;

// tile dragstart/end
tilesTwo2.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedTwo2 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedTwo2 = null;
    });
});

// slot dragover/dragleave/drop
slotsTwo2.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

        // make sure there are no preexisting tiles
        let existingTile = slot.querySelector(".tile-p2");
        if(existingTile) {
            if(existingTile.dataset.type=="topic") {
                bankTopic.appendChild(existingTile);
            } else if(existingTile.dataset.type=="particle") {
                bankParticle.appendChild(existingTile);
            } else if(existingTile.dataset.type=="noun") {
                bankNoun.appendChild(existingTile);
            } else {
                bankVerb.appendChild(existingTile);
            };
        };
        slot.appendChild(draggedTwo2);
        feedbackTwo2.textContent = "";
    })
})

// check answer
checkTwo2.addEventListener("click", () => {
    let allCorrect = true;

    slotsTwo2.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p2");
        
        if(!tile) {
            feedbackTwo2.textContent = "One or more tiles are missing. Please fill all tile slots."
            feedbackTwo2.style.color = "red";
        }

        const tileName = tile.dataset.name;
        if(slotAnswer !== tileName) {
            allCorrect = false;
        }
        if(allCorrect) {
            feedbackTwo2.textContent = "✅　正解（せいかい）！ The man will eat lunch/The man eats lunch.";
            feedbackTwo2.style.color = "green";
        } else {
            feedbackTwo2.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. The word order should be <Topic + Particle + Object/Destination + Particle + Verb>. See example sentences in Chapter 4 (4.4.5).";
            feedbackTwo2.style.color = "red";
        }
})
})

// reset
resetTwo2.addEventListener("click", () => {
    document.querySelectorAll(".p2-2 .tile-p2").forEach(tile => {
        if(tile.dataset.type=="topic") {
                bankTopic.appendChild(tile);
            } else if(tile.dataset.type=="particle") {
                bankParticle.appendChild(tile);
            } else if(tile.dataset.type=="noun") {
                bankNoun.appendChild(tile);
            } else {
                bankVerb.appendChild(tile);
            };
    });
    feedbackTwo2.textContent = "";
});

// Part2 Q3
const tilesTwo3 = document.querySelectorAll(".tile-p2");
const slotsTwo3 = document.querySelectorAll(".p2-3");
const checkTwo3 = document.getElementById("check-p2-3");
const resetTwo3 = document.getElementById("reset-p2-3");
const feedbackTwo3 = document.getElementById("feedback-p2-3");
let draggedTwo3 = null;

// tile dragstart/end
tilesTwo3.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedTwo3 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedTwo3 = null;
    });
});

// slot dragover/dragleave/drop
slotsTwo3.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

        // make sure there are no preexisting tiles
        let existingTile = slot.querySelector(".tile-p2");
        if(existingTile) {
            if(existingTile.dataset.type=="topic") {
                bankTopic.appendChild(existingTile);
            } else if(existingTile.dataset.type=="particle") {
                bankParticle.appendChild(existingTile);
            } else if(existingTile.dataset.type=="noun") {
                bankNoun.appendChild(existingTile);
            } else {
                bankVerb.appendChild(existingTile);
            };
        };
        slot.appendChild(draggedTwo3);
        feedbackTwo3.textContent = "";
    })
})

// check answer
checkTwo3.addEventListener("click", () => {
    let allCorrect = true;

    slotsTwo3.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p2");
        
        if(!tile) {
            feedbackTwo3.textContent = "One or more tiles are missing. Please fill all tile slots."
            feedbackTwo3.style.color = "red";
        }

        const tileName = tile.dataset.name;
        if(slotAnswer !== tileName) {
            allCorrect = false;
        }
        if(allCorrect) {
            feedbackTwo3.textContent = "✅　正解（せいかい）！ The woman will drink coffee/The woman drinks coffee.";
            feedbackTwo3.style.color = "green";
        } else {
            feedbackTwo3.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. The word order should be <Topic + Particle + Object/Destination + Particle + Verb>. See example sentences in Chapter 4 (4.4.5).";
            feedbackTwo3.style.color = "red";
        }
})
})

// reset
resetTwo3.addEventListener("click", () => {
    document.querySelectorAll(".p2-3 .tile-p2").forEach(tile => {
        if(tile.dataset.type=="topic") {
                bankTopic.appendChild(tile);
            } else if(tile.dataset.type=="particle") {
                bankParticle.appendChild(tile);
            } else if(tile.dataset.type=="noun") {
                bankNoun.appendChild(tile);
            } else {
                bankVerb.appendChild(tile);
            };
    });
    feedbackTwo3.textContent = "";
});

// Part2 Q4
const tilesTwo4 = document.querySelectorAll(".tile-p2");
const slotsTwo4 = document.querySelectorAll(".p2-4");
const checkTwo4 = document.getElementById("check-p2-4");
const resetTwo4 = document.getElementById("reset-p2-4");
const feedbackTwo4 = document.getElementById("feedback-p2-4");
let draggedTwo4 = null;

// tile dragstart/end
tilesTwo4.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedTwo4 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedTwo4 = null;
    });
});

// slot dragover/dragleave/drop
slotsTwo4.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

        // make sure there are no preexisting tiles
        let existingTile = slot.querySelector(".tile-p2");
        if(existingTile) {
            if(existingTile.dataset.type=="topic") {
                bankTopic.appendChild(existingTile);
            } else if(existingTile.dataset.type=="particle") {
                bankParticle.appendChild(existingTile);
            } else if(existingTile.dataset.type=="noun") {
                bankNoun.appendChild(existingTile);
            } else {
                bankVerb.appendChild(existingTile);
            };
        };
        slot.appendChild(draggedTwo4);
        feedbackTwo4.textContent = "";
    })
})

// check answer
checkTwo4.addEventListener("click", () => {
    let allCorrect = true;

    slotsTwo4.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p2");
        
        if(!tile) {
            feedbackTwo4.textContent = "One or more tiles are missing. Please fill all tile slots."
            feedbackTwo4.style.color = "red";
        }

        const tileName = tile.dataset.name;
        if(slotAnswer !== tileName) {
            allCorrect = false;
        }
        if(allCorrect) {
            feedbackTwo4.textContent = "✅　正解（せいかい）！ The man will buy dinner/The man buys dinner.";
            feedbackTwo4.style.color = "green";
        } else {
            feedbackTwo4.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. The word order should be <Topic + Particle + Object/Destination + Particle + Verb>. See example sentences in Chapter 4 (4.4.5).";
            feedbackTwo4.style.color = "red";
        }
})
})

// reset
resetTwo4.addEventListener("click", () => {
    document.querySelectorAll(".p2-4 .tile-p2").forEach(tile => {
        if(tile.dataset.type=="topic") {
                bankTopic.appendChild(tile);
            } else if(tile.dataset.type=="particle") {
                bankParticle.appendChild(tile);
            } else if(tile.dataset.type=="noun") {
                bankNoun.appendChild(tile);
            } else {
                bankVerb.appendChild(tile);
            };
    });
    feedbackTwo4.textContent = "";
});

// Part2 Q5
const tilesTwo5 = document.querySelectorAll(".tile-p2");
const slotsTwo5 = document.querySelectorAll(".p2-5");
const checkTwo5 = document.getElementById("check-p2-5");
const resetTwo5 = document.getElementById("reset-p2-5");
const feedbackTwo5 = document.getElementById("feedback-p2-5");
let draggedTwo5 = null;

// tile dragstart/end
tilesTwo5.forEach(tile => {
    tile.addEventListener("dragstart", () => {
        draggedTwo5 = tile;
        tile.classList.add("dragging");
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        draggedTwo5 = null;
    });
});

// slot dragover/dragleave/drop
slotsTwo5.forEach(slot => {
    slot.addEventListener("dragover", (e) => {
        e.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");

        // make sure there are no preexisting tiles
        let existingTile = slot.querySelector(".tile-p2");
        if(existingTile) {
            if(existingTile.dataset.type=="topic") {
                bankTopic.appendChild(existingTile);
            } else if(existingTile.dataset.type=="particle") {
                bankParticle.appendChild(existingTile);
            } else if(existingTile.dataset.type=="noun") {
                bankNoun.appendChild(existingTile);
            } else {
                bankVerb.appendChild(existingTile);
            };
        };
        slot.appendChild(draggedTwo5);
        feedbackTwo5.textContent = "";
    })
})

// check answer
checkTwo5.addEventListener("click", () => {
    let allCorrect = true;

    slotsTwo5.forEach(slot => {
        const slotAnswer = slot.dataset.answer;
        const tile = slot.querySelector(".tile-p2");
        
        if(!tile) {
            feedbackTwo5.textContent = "One or more tiles are missing. Please fill all tile slots."
            feedbackTwo5.style.color = "red";
        }

        const tileName = tile.dataset.name;
        if(slotAnswer !== tileName) {
            allCorrect = false;
        }
        if(allCorrect) {
            feedbackTwo5.textContent = "✅　正解（せいかい）！ The man will go home/The man goes home.";
            feedbackTwo5.style.color = "green";
        } else {
            feedbackTwo5.textContent = "❌　不正解（ふせいかい）！ One or more tiles are incorrect. The word order should be <Topic + Particle + Object/Destination + Particle + Verb>. See example sentences in Chapter 4 (4.4.5).";
            feedbackTwo5.style.color = "red";
        }
})
})

// reset
resetTwo5.addEventListener("click", () => {
    document.querySelectorAll(".p2-5 .tile-p2").forEach(tile => {
        if(tile.dataset.type=="topic") {
                bankTopic.appendChild(tile);
            } else if(tile.dataset.type=="particle") {
                bankParticle.appendChild(tile);
            } else if(tile.dataset.type=="noun") {
                bankNoun.appendChild(tile);
            } else {
                bankVerb.appendChild(tile);
            };
    });
    feedbackTwo5.textContent = "";
});


// audio
const audioMap = {
    q1: new Audio("audio/school.mp3"),
    q2: new Audio("audio/lunch.mp3"),
    q3: new Audio("audio/coffee.mp3"),
    q4: new Audio("audio/dinner.mp3"),
    q5: new Audio("audio/home.mp3"),
};

document.querySelectorAll(".audio").forEach(button => {
    button.style.cursor = "pointer";
    button.addEventListener("click", () => {
        const audioKey = button.dataset.audio;
        if(audioMap[audioKey]) {
            audioMap[audioKey].currentTime = 0;
            audioMap[audioKey].play();
        };
    });
});