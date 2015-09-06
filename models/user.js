/**
 * Created by Ivan on 06.09.2015.
 */
User = function (login, full_name, birthday, sex, email) {
    this.id = ++counterID,
        this.login = login,
        this.full_name = full_name,
        this.birthday = birthday,
        this.sex = sex,
        this.email = email,
        this.status = 'user',
        //метод зміна імені
        this.changeFull_name = function (newFull_name) {
            this.full_name = newFull_name;
            return 'New Full_name Saved: ' + this.full_name;
        },
        //метод зміна дати народження
        this.changeBirthday = function (newBirthday) {
            this.birthday = newBirthday;
            return 'New Birthday Saved: ' + this.birthday;
        },
        //метод зміна електронної адреси
        this.changeEmail = function (newEmail) {
            this.email = newEmail;
            return 'New Email Saved: ' + this.email;
        };

};

exports.User = User;