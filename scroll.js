const listNode = document.querySelector("#listWrapper");
const btnNode = document.querySelector("#myBtn");
const apiURL = "https://jsonplaceholder.typicode.com/posts";

const counterObj = {
  counter: 0,
};

const fetchFn = (url) => fetch(url).then((res) => res.json());

const dataCB = (data) => {
  if (data.id > counterObj.counter) return;
  listNode.innerHTML += printFn(data);
};

const printFn = (data) => {
  return `<div class="tarjetClass">
                <p>${data.title}</p>
            </div>`;
};

btnNode.addEventListener("click", () => {
  counterObj.counter += 10;
  fetchFn(apiURL).then((data) => {
    data.map(dataCB);
    return data;
  });

  listNode.scrollTop = listNode.scrollHeight;
});
