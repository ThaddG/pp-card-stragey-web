const randomPassword = (length: number): string => {
  const alphanumSpecialChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+<>?[]{}';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumSpecialChars.length);
    password += alphanumSpecialChars[randomIndex];
  }

  return password;
};

export default randomPassword;
