function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const input = document.querySelector("#search");
const results = document.querySelector("#results");

async function fetchUsers(query) {
  if (!query) {
    results.innerHTML = "";
    return;
  }

  console.log("API CALL:", query);

  const data = ["Akshat", "Aman", "Ankit", "Aryan", "Abhishek"];

  const filtered = data.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase()),
  );

  results.innerHTML = filtered.map((name) => `<li> ${name}</li>`).join("");
}

const debouncedSearch = debounce(fetchUsers, 500);

input.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
