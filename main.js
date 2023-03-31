const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confrmpassword = document.querySelector('#confrmpassword');
const form = document.querySelector('#form');

const showError = (input, massege) => {
  let parentElement = input.parentElement;
  parentElement.classList = 'form-contorl error ';
  const small = parentElement.querySelector('small');
  const succesicon = parentElement.querySelectorAll('i')[0];
  const erroricon = parentElement.querySelectorAll('i')[1];

  succesicon.style.visibility = 'hidden';
  erroricon.style.visibility = 'visible';
  small.innertext = massege;
};

const showsuccess = (input) => {
  let parentElement = input.parentElement;
  parentElement.classList = 'form-contorl success ';

  const succesicon = parentElement.querySelectorAll('i')[0];
  const erroricon = parentElement.querySelectorAll('i')[1];

  succesicon.style.visibility = 'visible';
  erroricon.style.visibility = 'hidden';
};
const checkemail = (email) => {
  const rag = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (rag.test(email.value)) {
    showsuccess.apply(email);
  } else {
    showError(email, 'inviled email');
  }
};
// const checkepasswordlength = (input, min, max) => {
//   if (input.value.length < min) {
//     showError(input, `your password atleast ${min}character`);
//   } else if (input.value.length > max) {
//     showError(input, `password maximum  charcteris ${max}`);
//   } else {
//     showsuccess.input(input);
//   }
// };

const checkempty = (elements) => {
  elements.forEach((elem) => {
    if (elem.value === '') {
      showError(elem, 'input required');
    } else {
      showsuccess(elem);
    }
  });
};
form.addEventListener('submit', (eve) => {
  eve.preventDefault();
  checkempty([username, password, email, confrmpassword]);

  checkemail(email);

  checkepasswordlength(password, 6, 10);
});
