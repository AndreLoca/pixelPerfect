const checkIsRegular = (typeCheck, check) => {
  const reMail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePassword = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!^&+=]).*$/;

  switch (typeCheck) {
    case "email":
      return reMail.test(check);
    case "password":
      return rePassword.test(check);
    default:
      return undefined;
  }
};

const storageForSend = (obj) => {
  let send = {};
  for (const property in obj) {
    if (obj[property].value !== "") {
      send[property] = obj[property].value;
    }
  }
  sessionStorage.setItem("userParams", JSON.stringify(send));
};

export { checkIsRegular, storageForSend };
