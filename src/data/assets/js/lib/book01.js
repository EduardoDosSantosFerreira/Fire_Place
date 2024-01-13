const flipBook = (elBook) => {
    elBook.style.setProperty("--c", 0); // Set current page
    elBook.querySelectorAll(".page").forEach((page, idx) => {
      page.style.setProperty("--i", idx);
      page.addEventListener("click", (evt) => {
        const curr = evt.target.closest(".back") ? idx : idx + 1;
        elBook.style.setProperty("--c", curr);
      });
    });
  };
  
  document.querySelectorAll(".book").forEach(flipBook);