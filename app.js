const input = document.querySelector("#inputSearch");
const btn = document.querySelector("#mainButton");
const list = document.querySelector("#resultsList");

btn.addEventListener('click', () => {
  const val = input.value;

  calcFunc(val);
});

const templates = {
  "cars": {
    val: 5,
    icon: `<i class="fas fa-car"></i>`
  },
  "Boeing 747's": {
    val: 538,
    icon: `<i class="fas fa-plane"></i>`
  },
  "City Busses": {
    val: 42,
    icon: `<i class="fas fa-bus"></i>`
  },
  "School Busses": {
    val: 54,
    icon: `<i class="fas fa-bus-alt"></i>`
  },
  "Submarines": {
    val: 100,
    icon: `<i class="fas fa-question"></i>`
  }
}

const calcFunc = (num) => {
  removeChildNodes();

  for ( const k in templates ) {
    createLiAndCalc(num, k, templates);
  }
} 

const createLiAndCalc = (num, k, templates) => {
  const li = document.createElement('LI');
  let calc = (num / templates[k].val).toFixed(2);
  let icon = templates[k].icon;
  let output = document.createTextNode(`~${calc} ${k}`);

  li.insertAdjacentHTML('afterbegin', icon);
  li.append(output);

  return list.appendChild(li);
}

const removeChildNodes = () => {
  while ( list.hasChildNodes() ) {
    list.removeChild(list.firstChild);
  }
}