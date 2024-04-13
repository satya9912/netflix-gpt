export const checkValidate = (email, password, name) => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const validName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

    if(!validEmail) return "Email is not valid";
    if(!validPassword) return "Password is not valid";
    if(!validName) return "Name is not valid";

    return null;
}
