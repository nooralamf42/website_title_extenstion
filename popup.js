document.addEventListener("DOMContentLoaded", function () {
  const getTitleBtn = document.getElementById("getTitleBtn");
  const copyTitleBtn = document.getElementById("copyBtn");
  const titleDisplayParent = document.getElementById("titleDisplayParent");
  const titleDisplay = document.getElementById("titleDisplay");

  getTitleBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      titleDisplay.textContent = currentTab.title;
      titleDisplayParent.classList.remove("hidden");
      getTitleBtn.classList.add("hidden");
    });
  });

  copyTitleBtn.addEventListener("click", function () {
    const title = titleDisplay.textContent;
    navigator.clipboard
      .writeText(title)
      .then(() => {
        copyTitleBtn.textContent = "Copied";
        copyTitleBtn.classList.add("copied");
      })
      .catch((err) => console.error("Could not copy text: ", err));
  });
});
