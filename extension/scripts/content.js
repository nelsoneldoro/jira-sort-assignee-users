const showMoreAssigneesBtnId = "assignee-show-more";
const assigneesDropdownSelector = ".guavb6-1.cJoruE";
const assigneeSelector = ".guavb6-2.jPYWbI";

const sortByTextContent = (a, b) => a.textContent.localeCompare(b.textContent);

const onSearch = (sortedAssignees) => (e) => {
  const filter = e.target.value.toLowerCase();
  sortedAssignees.forEach((e) => {
    if (e.textContent.toLowerCase().includes(filter)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
};

document.addEventListener("click", function (e) {
  if (e.target.id == showMoreAssigneesBtnId) {
    const assigneesDropdown = document.querySelector(assigneesDropdownSelector);

    if (assigneesDropdown) {
      const assignees = document.querySelectorAll(assigneeSelector);

      const sortedAssignees = Array.from(assignees).sort(sortByTextContent);
      sortedAssignees.forEach((e) => assigneesDropdown.appendChild(e));

      const input = document.createElement("input");
      input.setAttribute("placeholder", "Filter users");
      input.setAttribute("class", "css-1eh73bc em6wsuj7");
      input.addEventListener("input", onSearch(sortedAssignees));

      assigneesDropdown.prepend(input);
      setTimeout(() => input.focus(), 100);
    }
  }
});
